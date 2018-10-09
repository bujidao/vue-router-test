<template>
  <div class="fengjing-wrapper">
    感觉就像是一个解决最后一个公里，可以写在计算属性里面
    <br>
    <div class="price">
      filter过滤
      <input type="text" v-model="price">元
      <br>
      {{ price | currency }}
    </div>
    <hr>
    <div class="meter">
      计算属性
      <input type="text" v-model="length">m
      <br>
      {{ reverseLength | meter('mm')}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      price: 10,
      length: 10
    }
  },
  computed: {
    reverseLength: function () {
      return this.length * 1000 + 'mm'
    }
  }
}
</script>
