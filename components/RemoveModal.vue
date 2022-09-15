<template>
    <div class="modal" :class="{'is-active': data.toRemove}">
        <div class="modal-background"></div>
        <div class="modal-card">
            <section class="modal-card-body">
                <h2>{{ ui.form.participant[data.lang] }} {{ data.removing + 1}} {{ ui.form.removeModalTitle[data.lang]}}
                </h2>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="confirmRemove">OK</button>
                <button class="button" @click="() => data.toRemove = false">CANCEL</button>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
const data = useData()
const ui = useUi()
const confirmRemove = () => {
    data.value.participants.splice(data.value.removing, 1)
    data.value.toRemove = false
}
</script>
