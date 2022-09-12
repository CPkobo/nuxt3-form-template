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
        title: DoubleString
        email: DoubleString
        tel: DoubleString
        wechat: DoubleString
        joinAt: DoubleString
        submit: DoubleString
    }
}