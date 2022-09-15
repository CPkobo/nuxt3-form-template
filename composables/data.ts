const data: ParticipantFormData = {
    participants: [
        {
            name: '',
            unit: '',
            division: '',
            title: '',
            email: '',
            tel: '',
            wechat: '',
            joinAt: 'ONLINE',
        }
    ],
    lang: 'ja',
    fromWhich: '',
    fromOther: '',
    toRemove: false,
    removing: -1
}

export const useData = () => {
    return useState<ParticipantFormData>('data', () => data)
}