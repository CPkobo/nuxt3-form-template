<template>
    <section class="person-section">
        <h2 class="title">{{ ui.form.participant[data.lang] }} {{ index+1 }}</h2>
        <div class="field">
            <label class="label">{{ ui.form.name[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.name">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.unit[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.unit">
            </div>
        </div>
        <div class="field">
            <label class="label">{{ ui.form.title[data.lang] }}</label>
            <div class="control">
                <input class="input" type="text" v-model="person.title">
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
                <input class="input" type="text" v-model="person.tel">
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
                    <option value="大阪">大阪</option>
                    <option value="中国">中国</option>
                    <option value="オンライン">ONLINE</option>
                </select>
            </div>
        </div>
        <div class="buttons has-addons is-centered">
            <button class="button is-info" @click="addPerson"> + </button>
            <button class="button is-danger" @click="removePerson" :disabled="index === 0"> - </button>
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

const addPerson = () => {
    const newPerson: ParticipantData = {
        name: '',
        unit: person.unit,
        title: '',
        email: '',
        tel: person.tel,
        wechat: '',
        // joinAt: person.joinAt === '大阪' ? '大阪' : person.joinAt === '中国' ? '中国' : 'オンライン'
        joinAt: person.joinAt
    }
    data.value.participants.push(newPerson)
}

const removePerson = () => {
    if (props.index > 0) {
        data.value.participants.splice(props.index, 1)
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