<!--
 * @Author: angula
 * @Date: 2020-07-30 18:23:12
 * @LastEditTime: 2020-08-01 15:53:28
 * @FilePath: \working\vue-cli3 demo\src\views\release\childComps\activityImage.vue
-->
<template>
  <div>
    <van-cell-group>
      <van-field left-icon="upgrade" label="添加图片" value="(可选，最多4张)" input-align="right" readonly />
      <van-uploader class="imgback" v-model="fileList" multiple :max-count="4" />
      <!-- <van-field label="文本" value="输入框已禁用" disabled /> -->
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "activityImage",
  data() {
    return {
      fileList: []
    };
  },
  methods: {},
  props: {},
  components: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.imgback {
  background-color: white;
}
</style>
