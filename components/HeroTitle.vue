<template>
    <section class="hero is-info">
        <div class="hero-body">
            <p class="title">
                {{ ui.top.title[data.lang]}}
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
const data = useData()
const ui = useUi()
</script>