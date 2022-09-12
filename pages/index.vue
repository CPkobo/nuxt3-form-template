<template>
  <main>
    <div class="card">
      <HeroTitle />
      <!-- <h1 class="title">{{ ui.top.title[data.lang] }}</h1> -->
      <div class="select">
        <select v-model="data.lang">
          <option value="ja">日本語</option>
          <option value="zh">中文</option>
        </select>
      </div>
      <JoinForm />
    </div>
  </main>
</template>

<script setup lang="ts">
import HeroTitle from '../components/HeroTitle.vue';
import JoinForm from '../components/JoinForm.vue';

const data = useData()
const ui = useUi()


onMounted(() => {
  const route = useRoute()
  if (route.query) {
    if (route.query.lang) {
      if (route.query.lang === 'zh') {
        data.value.lang = 'zh'
      }
    }
  }
})

</script>

<style>
/* main {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
} */
</style>
