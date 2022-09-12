<template>
    <div class="form-body">
        <SingleParsen v-for="person, index in data.participants" :key="'part-'+index" :index="index" />
        <button class="button is-fullwidth is-info" @click="submitForm">{{ ui.form.submit[data.lang] }}</button>
        <ErrMessage v-if="message.length > 0" />
    </div>
</template>

<script setup lang="ts">
import SingleParsen from './SingleParsen.vue';

const data = useData()
const ui = useUi()
const message = useMessage()

const submitForm = () => {
    console.log('submitted')
    const records = validateAndCreateFields()
    if (records === null) {

    }
    else {
        fetch('/api/setTable', { method: "POST", body: JSON.stringify(records) })
            .then(records => {
                console.log(records)
            })
            .catch((err) => {
                console.log('failed')
                console.log(err)
            })
    }
}

const validateAndCreateFields = (): ParticipantRecordPost[] | null => {
    message.value.length = 0
    const lang = data.value.lang
    const parties = data.value.participants
    const errs: string[] = []
    const mail = new RegExp('^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.')
    const rcds: ParticipantRecordPost[] = []
    parties.forEach((party, index) => {
        if (party.name === '') {
            errs.push(`Name Error at ${index + 1}`)
        }
        if (party.unit === '') {
            errs.push(`Unit Error at ${index + 1}`)
        }
        if (party.email === '') {
            errs.push(`Email Error at ${index + 1}`)
        }
        else {
            if (!(mail.test(party.email))) {
                errs.push(`Email Error at ${index + 1}`)
            }
        }
        rcds.push({
            fields: {
                name: party.name,
                unit: party.unit,
                title: party.title,
                email: party.email,
                tel: party.tel,
                wechat: party.wechat,
                joinAt: party.joinAt,
                lang
            }
        })
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