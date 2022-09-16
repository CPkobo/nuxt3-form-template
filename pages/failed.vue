<template>
  <main class="container" :class="{'is-ja': data.lang==='ja', 'is-zh': data.lang==='zh'}">

    <Head>
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>
    </Head>
    <HeroTitle />
    <section v-if="data.lang === 'ja'" class="content section">
      <h2>申し訳ございません</h2>
      <p>ご登録の途中でエラーが発生いたしました。</p>
      <p>お手数ですが、再度ご登録いただくか、<a :href="'mailto:' + email">{{ email }}</a>までご連絡ください。</p>
    </section>
    <section v-else class="content">
      <h2>抱歉，报名注册失败！</h2>
      <p>抱歉在报名注册过程中出现了错误。</p>
      <p>麻烦您重新进行报名，或者请与<a :href="'mailto:' + email">{{ email }}</a>联系。</p>
    </section>
  </main>
</template>

<script setup>
import HeroTitle from '../components/HeroTitle.vue';
const data = useData()

</script>

<style>
/* main {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
} */
</style>
