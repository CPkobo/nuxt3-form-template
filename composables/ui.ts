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
            ja: 'お名前',
            zh: '芳名'
        },
        unit: {
            ja: '所属機関',
            zh: '所属单位'
        },
        title: {
            ja: '役職',
            zh: '职位'
        },
        email: {
            ja: 'E-Mail',
            zh: '邮箱地址'
        },
        tel: {
            ja: '電話番号',
            zh: '电话号码'
        },
        wechat: {
            ja: 'WeChat',
            zh: '微信账号'
        },
        joinAt: {
            ja: 'ご参加方法',
            zh: '参会方式'
        },
        submit: {
            ja: '送信',
            zh: '提交'
        }
    }
}

export const useUi = () => {
    return useState<UiText>('ui', () => ui)
}