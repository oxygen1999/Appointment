<!--
 * @Author: angula
 * @Date: 2020-07-30 18:23:12
 * @LastEditTime: 2020-08-05 15:32:02
 * @FilePath: \working\Appointment\src\views\release\childComps\activityImage.vue
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
import { mapState } from "vuex";

export default {
  name: "activityImage",
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    cache_value() {
      this.fileList = this.activity_data.fileList;
    }
  },
  props: {},
  components: {},
  watch: {
    //图片更新
    fileList(value = this.fileList) {
      this.$store.commit("release/save_img", value);
    }
  },
  computed: {
    ...mapState({
      activity_data: state => state.release.activity_data
    })
  },
  created() {},
  mounted() {
    this.cache_value();
  }
};
</script>
<style scoped>
.imgback {
  background-color: white;
}
</style>
