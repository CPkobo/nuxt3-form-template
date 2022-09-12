declare interface ParticipantData {
    name: string
    unit: string
    title: string
    email: string
    tel: string
    wechat?: string
    joinAt: '大阪' | '中国' | 'オンライン'
}

declare interface ParticipantFormData {
    participants: ParticipantData[]
    lang: 'ja' | 'zh'
}