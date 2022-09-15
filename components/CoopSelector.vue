<template>
    <section class="section">
        <div class="control">
            <h3>{{ ui.form.coopSelect[data.lang]}}</h3>
            <ul id="no-labeled">
                <li v-for="coop, cx in ui.coops" :key="'coop-'+cx">
                    <label class="radio">
                        <input type="radio" name="answer" @click="() => coopSelect(coop[data.lang])">{{ coop[data.lang]
                        }}
                    </label>
                    <input type="text" v-if="coop.ja.startsWith('その他') || coop.zh.startsWith('其他')"
                        v-model="data.fromOther">
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const ui = useUi()
const data = useData()
const coopSelect = (coop: string) => {
    data.value.fromWhich = coop
}
</script>

<style scoped>
ul#no-labeled {
    list-style: none;
}
</style>