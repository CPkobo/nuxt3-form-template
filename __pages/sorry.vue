<template>
  <main class="container" :class="{'is-ja': data.lang==='ja', 'is-zh': data.lang==='zh'}">

    <Head>
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>
    </Head>
    <HeroTitle />
    <section v-if="data.lang === 'ja'" class="content section">
      <h2>申し訳ございません</h2>
      <p>ご登録の途中で大阪会場が定員に達しました。</p>
      <p>お手数ですが、オンラインでの参加をご検討のうえ、再度ご登録をお願いいたします。</p>
    </section>
    <section v-else class="content">
      <h2>抱歉，会场已满！</h2>
      <p>抱歉，在您报名过程中会场参会人士以达到名额上限。</p>
      <p>请您改为在线参会，并再次进行注册。</p>
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
