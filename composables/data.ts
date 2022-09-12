const data: ParticipantFormData = {
    participants: [
        {
            name: '',
            unit: '',
            title: '',
            email: '',
            tel: '',
            wechat: '',
            joinAt: '大阪'
        }
    ],
    lang: 'ja'
}

export const useData = () => {
    return useState<ParticipantFormData>('data', () => data)
}