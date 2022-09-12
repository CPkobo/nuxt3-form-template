<template>
    <article class="message is-danger">
        <div class="message-header">
            <p>Got Error</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <p v-for="mes, mx in message" :key="'err-'+mx" class="is-danger">{{ mes }}</p>
        </div>
    </article>
</template>

<script setup lang="ts">
const message = useMessage()
</script>
