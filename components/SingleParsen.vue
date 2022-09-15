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
            <label class="label">{{ ui.form.wechat[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.wechat">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.joinAt[data.lang] }}</label>
            <div class="select">
                <select v-model="person.joinAt">
                    <option v-if="data.lang==='ja'" value="ONLINE" :disabled="counter.online > counter.onlineLimit">
                        オンライン（Zoom予定）</option>
                    <option v-if="data.lang==='zh'" value="ONLINE" :disabled="counter.online > counter.onlineLimit">
                        线上参加（计划使用Zoom）</option>
                    <option v-if="data.lang==='ja'" value="大阪" :disabled="counter.offline > counter.offlineLimit">
                        本会場での参加（ホテルニューオータニ大阪 2階
                        鳳凰Ⅲ） 定員100名</option>

                    <option v-if="data.lang==='zh'" value="大阪" :disabled="counter.offline > counter.offlineLimit">
                        线下会场参加（大阪新大谷酒店 2楼 凤凰Ⅲ）
                        上限100名</option>

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
        wechat: '',
        // joinAt: person.joinAt === '大阪' ? '大阪' : person.joinAt === '中国' ? '中国' : 'オンライン'
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