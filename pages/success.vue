<template>
  <main class="container" :class="{'is-ja': data.lang==='ja', 'is-zh': data.lang==='zh'}">

    <Head>
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>
    </Head>
    <HeroTitle />
    <section v-if="data.lang === 'ja'" class="content section">
      <h2>お申込みありがとうございます</h2>
      <p>このたびはお申し込みいただきまして、ありがとうございます。</p>
      <p>後ほど、ご登録のメールアドレスに<a :href="'mailto:' + email">{{ email }}</a>より確認のメールが送信されます。</p>
      <p>万一確認メールが届かなかった場合は、お手数ですが迷惑メールをご確認いただくか、上記のメールアドレスまでご連絡ください。</p>
    </section>
    <section v-else class="content">
      <h2>报名注册成功！</h2>
      <p>非常感谢您此次报名。</p>
      <p>稍后系统会向您刚才注册的邮箱地址发送确认邮件。</p>
      <p>发信人地址为：<a :href="'mailto:' + email">{{ email }}</a>，万一未收到，烦请确认是否被归类到骚扰邮件，或联系上述邮箱地址。</p>
    </section>
  </main>
</template>

<script setup>
import HeroTitle from '../components/HeroTitle.vue';
const data = useData()
const email = 'info@kankeiren-jc50th.com'
</script>

<style>

</style>
