<template>
  <div class="m-action-wrapper">
    我是动作电影
    <button @click="back">上一步</button>
    <div id="showSomething" ref="showSomething">addEventListener</div>
  </div>
</template>

<script>
export default {
  created () {
    // console.log(this.$route.params)
  },
  computed: {
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
