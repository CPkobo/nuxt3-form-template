<template>
  <main class="container" :class="{'is-ja': data.lang==='ja', 'is-zh': data.lang==='zh'}">

    <Head>
      <Title>{{ ui.top.title[data.lang] }}</Title>
      <Meta property="og:title" content="日中国交正常化 50周年記念事業 参加申し込みフォーム" />
      <Meta property="og:description" content="日中国交正常化 50周年記念事業の参加申し込みはこちらから" />
      <Meta property="og:image" content="https...." />
      <Meta property="og:url" content="https://kankeiren-jc50th.netlify.app" />
      <Meta property="og:type" content="website" />
      <Meta property="og:site_name" content="日中国交正常化 50周年記念事業 参加申し込みフォーム" />
    </Head>
    <HeroTitle />
    <div id="lang-selector">
      <div class="select">
        <select v-model="data.lang">
          <option value="ja">日本語</option>
          <option value="zh">中文</option>
        </select>
      </div>
    </div>
    <section class="content section">
      <div class="card">
        <!-- <h1 class="title">{{ ui.top.title[data.lang] }}</h1> -->
        <JoinForm />
      </div>
    </section>
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
  fetch('/api/getCount')
    .then(res => {
      res.json().then(data => {
        const counter = useCounter()
        counter.value.offline = data.Offline
        counter.value.online = data.Online
      })
    })
    .catch(err => {
      console.error(err)
    })
})

</script>

<style>
/* main {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
} */
main.is-ja {}

main.is-zh {
  font-family: Simhei, Heiti
}

div#lang-selector {
  text-align: right;
  margin-top: 10px;
  margin-right: 0;
  margin-left: auto;
}
</style>
