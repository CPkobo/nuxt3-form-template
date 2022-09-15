const coops: DoubleString[] = [
    {
        ja: '関西経済連合会',
        zh: '关西经济联合会'
    },
    {
        ja: '中国国際貿易促進委員会',
        zh: '中国国际贸易促进委员会'
    },
    {
        ja: '日中経済貿易センター',
        zh: '日中经济贸易中心'
    },
    {
        ja: '西日本中国企業連合会',
        zh: '西日本中国企业联合会'
    },
    {
        ja: '上海市経済団体連合会',
        zh: '上海市经济团体联合会'
    },
    {
        ja: '中国日本商会',
        zh: '中国日本商会'
    },
    {
        ja: '大阪商工会議所',
        zh: '大阪商工会议所'
    },
    {
        ja: '関西中華總商会',
        zh: '关西中华总商会'
    },
    {
        ja: '大阪経済記者クラブ',
        zh: '大阪经济记者俱乐部'
    },
    {
        ja: 'その他（以下にご記入ください）',
        zh: '其他（请填入下一栏）'
    },
]

const ui: UiText = {
    top: {
        title: {
            ja: '日中国交正常化 50周年記念事業 参加申し込みフォーム',
            zh: '中日邦交正常化 五十周年纪念项目 报名表单'
        }
    },
    form: {
        participant: {
            ja: 'ご参加者',
            zh: '参会人士'
        },
        name: {
            ja: 'お名前 *',
            zh: '芳名 *'
        },
        unit: {
            ja: '所属機関 *',
            zh: '所属单位 *'
        },
        division: {
            ja: '部署',
            zh: '部门'
        },
        title: {
            ja: '役職',
            zh: '职位'
        },
        email: {
            ja: 'E-Mail *',
            zh: '邮箱地址 *'
        },
        tel: {
            ja: '電話番号（ハイフンなし） *',
            zh: '电话号码（无需横杆） *'
        },
        wechat: {
            ja: 'WeChat',
            zh: '微信账号'
        },
        joinAt: {
            ja: 'ご参加方法  ',
            zh: '参会方式 *'
        },
        submit: {
            ja: '送信',
            zh: '提交'
        },
        mustDescription: {
            ja: '* のある項目は入力必須です',
            zh: '带有 * 的项目为必填项'
        },
        addDescription: {
            ja: '複数人を登録するには + をクリックしてください',
            zh: '带有 * 的项目为必填项'
        },
        addTips: {
            ja: '参加者情報を追加する',
            zh: '带有 * 的项目为必填项'
        },
        removeTips: {
            ja: '参加者情報を減らす',
            zh: '带有 * 的项目为必填项'
        },
        removeModalTitle: {
            ja: 'の情報が消去されます。よろしいですか？',
            zh: '的信息会被移除，确定继续吗？'
        },
        coopSelect: {
            ja: 'このイベントは、どちらからの案内でお知りになりましたか',
            zh: '您从哪里得知本活动的信息？'
        }
    },
    coops
}

export const useUi = () => {
    return useState<UiText>('ui', () => ui)
}