import { createTransport } from 'nodemailer'
import type { SendMailOptions, TransportOptions, Transporter } from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'
import { readBody } from 'h3'
import Mail from 'nodemailer/lib/mailer'

export default defineEventHandler(async (event): Promise<boolean> => {
    const email = 'info@kankeiren-jc50th.com'
    const runtimeConfig = useRuntimeConfig()
    const data = await readBody(event) as ParticipantRecordPost[]
    const prs: Promise<any>[] = []
    return new Promise((resolve, reject) => {
        const options: SMTPTransport.Options = {
            host: 'smtp.elasticemail.com',
            port: 2525,
            auth: {
                user: email,
                pass: runtimeConfig.pw,
            },
        }
        const maildata: Mail.Options = {
            from: email,
            bcc: email,
            subject: '',
            text: ''
        }
        const smtp = createTransport(options)
        data.forEach(datum => {
            prs.push(sendMailPromise(smtp, maildata, datum.fields))
        })
        Promise.all(prs)
            .then(() => resolve(true))
            .catch(err => reject(err))
    })
})

const sendMailPromise = async (smtp: Transporter, data: Mail.Options, record: ParticipantRecord): Promise<true> => {
    return new Promise((resolve, reject) => {
        data.to = record.email
        data.subject = record.lang === 'ja' ? '【関西経済連合会 日中国交正常化50周年記念事業】お申込みいただき有難うございます。' : '感谢报名参加【关西经济联合会 中日邦交正常化50周年纪念活动】！'
        data.text = record.lang === 'ja' ? textbodyJa.replace('{name}', record.name) : textbodyZh.replace('{name}', record.name)
        smtp.sendMail(data, (err, info) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(info)
            }
        })
    })
}

const textbodyJa = `
{name}様

この度は 関西経済連合会 日中国交正常化50周年記念事業
「いのち輝く未来社会に向けた日中企業協力
～2025年大阪・関西万博に向けて～」
にお申込みをいただき、誠に有難うございます。


【概要】関西経済連合会 日中国交正常化50周年記念事業
テーマ：いのち輝く未来社会に向けた日中企業協力
　　　　～2025年大阪・関西万博に向けて～
日　時：2022年10月13日（木）14：00～17：00
形　式：ハイブリッド形式（本会場およびZoomを利用したオンライン）
参加者：日中の企業関係者　本会場100名、オンライン200名を予定
場　所：本会場　ホテルニューオータニ大阪　２階　鳳凰Ⅲ
主　催：（公社）関西経済連合会
共　催：中国国際貿易促進委員会、中国日本友好協会、
　　　　（一社）日中経済貿易センター
後　援：外務省、在大阪中国総領事館、　
　　　　大阪商工会議所、（一社）関西中華總商会
　　　　上海市経済団体連合会、中国日本商会、（一社）西日本中国企業連合会


時期が近づいてまいりましたら、
改めまして具体的なご案内をお送りいたします。

ご不明な点、ご質問等ありましたら、
下記よりお問合せください。


=======================
関西経済連合会
国際部　松尾・菊池
〒530－6691
大阪市北区中之島6-2-27
TEL:06-6441-0104
mail:info@kankeiren-jc50th.com
=======================
`

const textbodyZh = `
{name}先生/女士

感谢您申请参加本次关西经济联合会 中日邦交正常化50周年纪念活动
“日中企业助力构建未来社会 想象明日生活～面向2025大阪·关西世博会～”


【概要】关西经济联合会 中日邦交正常化50周年纪念活动
主  题：“日中企业助力构建未来社会 想象明日生活～面向2025大阪·关西世博会～”
日  期：2022年10月13日（周四） 13:00-16:00（中国时间）
形  式：线上线下混合参会（主会场及使用ZOOM进行线上参会）
参加者：中日企业相关人士 主会场100位、线上200位
地  址：主会场 大阪新大谷酒店 2层 凤凰Ⅲ
主  办：公益社团法人 关西经济联合会
协  办：中国国际贸易促进委员会、中国日本友好协会
        一般社团法人 日中经济贸易中心
援  助：日本外务省、驻大阪总领事馆
        大阪商工会议所、一般社团法人 关西中华总商会
        上海市经济团体联合会、中国日本商会、、一般社团法人西日本中国企业连合会

在活动正式开始之前，
我们会为您发送详细的活动信息。

如有任何问题，
请联系以下机构进行咨询。

=======================
关西经济联合会
国际部　松尾（Ms.）、菊池（Mr.）
邮编530-6691
大阪市北区中之岛6-2-27
TEL:06-6441-0104
mail:info@kankeiren-jc50th.com
=======================
`