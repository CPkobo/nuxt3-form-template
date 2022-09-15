declare type UsedLang = 'ja' | 'zh'
declare type Joinables = '大阪' | 'ONLINE'
declare type OrganizersJp =
    '関西経済連合会' |
    '中国国際貿易促進委員会' |
    '日中経済貿易センター' |
    '西日本中国企業連合会' |
    '上海市経済団体連合会' |
    '中国日本商会' |
    '大阪商工会議所' |
    '関西中華總商会' |
    '大阪経済記者クラブ' |
    ''

declare type OrganizersZh =
    '关西经济联合会' |
    '中国国际贸易促进委员会' |
    '日中经济贸易中心' |
    '西日本中国企业联合会' |
    '伤害市经济团体联合会' |
    '中国日本商会' |
    '大阪商工会议所' |
    '关西中华总商会' |
    '大阪经济记者俱乐部' |
    ''

declare interface ParticipantData {
    name: string
    unit: string
    division: string
    title: string
    email: string
    tel: string
    wechat?: string
    joinAt: Joinables
}

declare interface ParticipantFormData {
    participants: ParticipantData[]
    lang: UsedLang
    fromWhich: OrganizersJp | OrganizersZh | string
    fromOther: string
    toRemove: boolean
    removing: number
}

declare interface ParticipantRecord extends ParticipantData {
    lang: UsedLang
    fromWhich: OrganizersJp | OrganizersZh | string
}

declare interface ParticipantRecordPost {
    fields: PrticipantRecord
}

declare interface CounterInfo {
    offline: number
    online: number
}

declare interface CounterState extends CounterInfo {
    offlineLimit: number
    onlineLimit: number
}