<template>
    <section class="person-section">
        <h2 class="title">{{ ui.form.participant[data.lang] }} {{ index+1 }}</h2>
        <div class="field">
            <label class="label">{{ ui.form.unit[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.unit">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.division[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.division">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.title[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.title">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.name[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.name">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.email[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.email">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.tel[data.lang] }}</label>
            <div class="control">
                <input class="input" type="tel" v-model="person.tel">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.website[data.lang] }}</label>
            <div class="control">
                <input class="input" type="tel" v-model="person.website">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.wechat[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.wechat">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.joinAt[data.lang] }}</label>
            <div class="notification is-danger" v-if="counter.offline >= counter.offlineLimit">
                {{ ui.form.exceedLimit[data.lang] }}
            </div>
            <div class="select">
                <select v-model="person.joinAt">
                    <option v-if="data.lang==='ja'" value="ONLINE" :disabled="counter.online >= counter.onlineLimit">
                        ??????????????????Zoom?????????</option>
                    <option v-if="data.lang==='zh'" value="ONLINE" :disabled="counter.online >= counter.onlineLimit">
                        ???????????????????????????Zoom???</option>
                    <option v-if="data.lang==='ja'" value="??????" :disabled="counter.offline >= counter.offlineLimit">
                        ???????????????????????????????????????????????????????????? 2???
                        ???????????? ??????100???</option>
                    <option v-if="data.lang==='zh'" value="??????" :disabled="counter.offline >= counter.offlineLimit">
                        ?????????????????????????????????????????? 2??? ????????????
                        ??????100???</option>
                </select>
            </div>
        </div>
        <div class="has-text-centered">
            <p v-if="index === 0">{{ ui.form.addDescription[data.lang] }}</p>
        </div>
        <div class="buttons has-addons is-centered">

            <button class="button is-info" @click="addPerson" :title="ui.form.addTips[data.lang]"> + </button>
            <button class="button is-danger" @click="removePerson" :disabled="index === 0"
                :title="ui.form.removeTips[data.lang]"> - </button>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Props {
    index: number
}
const props = defineProps<Props>()
const data = useData()
// const { participants, lang } = data.value
const person = data.value.participants[props.index]
const ui = useUi()
const counter = useCounter()

const addPerson = () => {
    const newPerson: ParticipantData = {
        name: '',
        unit: person.unit,
        division: person.division,
        title: '',
        email: person.email,
        tel: person.tel,
        website: person.website,
        wechat: '',
        // joinAt: person.joinAt === '??????' ? '??????' : person.joinAt === '??????' ? '??????' : '???????????????'
        joinAt: person.joinAt,
    }
    data.value.participants.push(newPerson)
}

const removePerson = () => {
    if (props.index > 0) {
        // data.value.participants.splice(props.index, 1)
        data.value.removing = props.index
        data.value.toRemove = true
    }
}
</script>

<style scoped>
section.person-section {
    border-bottom: solid;
    padding: 1rem;
    margin-bottom: 10px;
}
</style>