<template>
    <div class="form-body">
        <SingleParsen v-for="person, index in data.participants" :key="'part-'+index" :index="index" />
        <button class="button is-fullwidth is-info" @click="submitForm">{{ ui.form.submit[data.lang] }}</button>
    </div>
</template>

<script setup lang="ts">
import SingleParsen from './SingleParsen.vue';

const data = useData()
const ui = useUi()

const submitForm = () => {
    console.log('submitted')
}
</script>

<style scoped>
div.form-body {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}
</style>