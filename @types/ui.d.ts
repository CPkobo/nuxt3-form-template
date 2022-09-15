declare interface DoubleString {
    ja: string
    zh: string
}

declare interface UiText {
    top: {
        title: DoubleString
    },
    form: {
        participant: DoubleString
        name: DoubleString
        unit: DoubleString
        division: DoubleString
        title: DoubleString
        email: DoubleString
        tel: DoubleString
        wechat: DoubleString
        joinAt: DoubleString
        submit: DoubleString
        mustDescription: DoubleString
        addDescription: DoubleString
        addTips: DoubleString
        removeTips: DoubleString
        removeModalTitle: DoubleString
        coopSelect: DoubleString
    },
    coops: DoubleString[]
}