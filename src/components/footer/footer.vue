<template>
  <div class="footer-wrapper">
    <div>
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是footer啊'
    }
  }
}
</script>

<style scoped>
  .footer-wrapper {
    padding: 10px 50px;
    background: burlywood;
  }
</style>
