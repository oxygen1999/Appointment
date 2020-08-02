<!--
 * @Author: angula
 * @Date: 2020-08-01 16:02:46
 * @LastEditTime: 2020-08-01 18:58:21
 * @FilePath: \working\vue-cli3 demo\src\components\common\fix.vue
--> 
<template>
  <div>
    <div class="item-button">
      <span @click="check" class="check">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "fix",
  data() {
    return {};
  },
  methods: {
    check() {
      console.log("111");
      this.$router.go(-1);
    }
  },
  props: {},
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.item-button {
  width: 160px;
  height: 45px;
  border-radius: 10px;
  background-color: #ffb04f;
  position: absolute;
  margin-top: 100px;
  margin-left: 110px;
}
.check {
  display: block;
  width: 160px;
  height: 25px;
  font-size: 20px;
  font-family: Alibaba PuHuiTi Regular, Alibaba PuHuiTi Regular-Regular;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  line-height: 48px;
  letter-spacing: 3px;
}
</style>