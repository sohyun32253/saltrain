<template>
  <v-app>
    <Header></Header> <!-- 상단에 헤더 컴포넌트 포함 -->
    <v-main>
      <router-view/> <!-- 라우터에 의해 선택된 컴포넌트가 이곳에 렌더링 -->
    </v-main>
    <Footer></Footer> <!-- 하단에 푸터 컴포넌트 포함 -->
  </v-app>
</template>

<style>
@import url('../src/assets/css/reset.css');
@import url('../src/assets/css/common.css');
</style>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  components: {
      Header,
      Footer
  },
  name: 'App',

  data: () => ({
    // 필요에 따라 데이터 추가
  }),
}
</script>
