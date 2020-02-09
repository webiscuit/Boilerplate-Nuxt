<template>
  <div class="contents">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/layouts/Header'
import Footer from '~/components/layouts/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style type="postcss">
html {
  @media (--sp) {
    font-size: 14px;
  }
}
body {
  min-width: 320px;
  letter-spacing: 0.04em;
  font-family: YakuHanJP, 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
