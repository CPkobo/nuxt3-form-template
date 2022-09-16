<template>
    <div class="form-body content my-5">
        <p>{{ ui.form.mustDescription[data.lang]}}</p>
        <RemoveModal />
        <SingleParsen v-for="person, index in data.participants" :key="'part-'+index" :index="index" />
        <CoopSelector />
        <ErrMessage v-if="message.length > 0" />
        <button class="button is-fullwidth is-info" :class="{'is-loading': isLoading}" @click="submitForm">{{
        ui.form.submit[data.lang] }}</button>
    </div>
</template>

<script setup lang="ts">
import SingleParsen from './SingleParsen.vue';
import CoopSelector from './CoopSelector.vue';

const data = useData()
const ui = useUi()
const message = useMessage()
const isLoading = ref(false)
const added: CounterInfo = {
    online: 0,
    offline: 0
}

const isMock = false

const submitForm = () => {
    isLoading.value = true
    const records = validateAndCreateFields()
    if (records === null) {
        isLoading.value = false
    }
    else {
        const prs: Promise<any>[] = []
        fetch('/api/getCount')
            .then(res => {
                res.json().then(crtCount => {
                    const counter = useCounter()
                    if (crtCount.Offline >= counter.value.offlineLimit) {
                        const router = useRouter()
                        router.push('/sorry')
                    }
                    else if ((crtCount.Offline + added.offline) >= counter.value.offlineLimit) {
                        const router = useRouter()
                        router.push('/sorry')
                    }
                    else if (isMock) {
                        alert('mock mode')
                        const router = useRouter()
                        router.push('/success')
                    }
                    else {
                        prs.push(fetch('/api/setTable', { method: "POST", body: JSON.stringify(records) }))
                        prs.push(fetch('/api/addCount', { method: "POST", body: JSON.stringify(added) }))
                        prs.push(fetch('/api/sendMail', { method: 'POST', body: JSON.stringify(records) }))
                        Promise.all(prs)
                            .then(() => {
                                isLoading.value = false
                                const router = useRouter()
                                router.push('/success')
                            })
                            .catch(() => {
                                isLoading.value = false
                                const router = useRouter()
                                router.push('/failed')
                            })
                    }
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
}

const validateAndCreateFields = (): ParticipantRecordPost[] | null => {
    message.value.length = 0
    const errs: string[] = []
    const lang = data.value.lang
    if (data.value.fromWhich === '') {
        errs.push(`どこでお知りになったかお選びください / 请勾选您得知信息的来源`)
    }
    const fromWhich =
        data.value.fromWhich.startsWith('その他') || data.value.fromWhich.startsWith('其他') ?
            data.value.fromOther === '' ?
                'その他' : data.value.fromOther :
            data.value.fromWhich
    const parties = data.value.participants

    const mailReg = new RegExp('^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.')
    const telReg = new RegExp('^[0-9]*$')
    const rcds: ParticipantRecordPost[] = []
    parties.forEach((party, index) => {
        if (party.name === '') {
            errs.push(`参加者 ${index + 1} の氏名を入力してください / 请填写参会人士 ${index + 1} 的姓名`)
        }

        if (party.unit === '') {
            errs.push(`参加者 ${index + 1} の所属機関を入力してください / 请填写参会人士 ${index + 1} 的所属单位`)
        }

        if (party.email === '') {
            errs.push(`参加者 ${index + 1} のメールアドレスを入力してください / 请填写参会人士 ${index + 1} 的邮箱地址`)
        }
        else {
            if (!(mailReg.test(party.email))) {
                errs.push(`参加者 ${index + 1} のメールアドレスの形式をご確認ください / 请重新确认参会人士 ${index + 1} 的邮箱地址形式`)
            }
        }

        if (party.tel === '') {
            errs.push(`参加者 ${index + 1} の電話番号を入力してください / 请填写参会人士 ${index + 1} 的电话号码`)
        }
        else {
            party.tel = party.tel.replaceAll('-', '')
            if (!(telReg.test(party.tel))) {
                errs.push(`参加者 ${index + 1} の電話番号は数字で入力してください / 请只用数字填写参会人士 ${index + 1} 的电话号码`)
            }
        }

        rcds.push({
            fields: {
                ...party,
                lang,
                fromWhich
            }
        })
        if (party.joinAt === '大阪') {
            added.offline += 1
        }
        else {
            added.online += 1
        }
    })
    if (errs.length === 0) {
        return rcds
    }
    else {
        message.value = errs
        return null
    }
}
</script>

<style scoped>
div.form-body {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}
</style>