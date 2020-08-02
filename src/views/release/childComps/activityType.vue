<!--
 * @Author: angula
 * @Date: 2020-07-30 16:53:54
 * @LastEditTime: 2020-08-01 15:52:27
 * @FilePath: \working\vue-cli3 demo\src\views\release\childComps\activityType.vue
-->
<template>
  <div>
    <van-field
      left-icon="notes-o"
      readonly
      clickable
      name="picker"
      :value="value"
      label="活动类别"
      placeholder="请选择 >"
      input-align="right"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom" :style="{ height: '60%' }">
      <van-picker
        title="类型选择"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Picker } from "vant";

export default {
  name: "activityType",
  data() {
    return {
      value: "",
      columns: ["学习", "旅行", "运动", "休闲娱乐", "聚会", "其他"],
      showPicker: false
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    }
  }
};
</script>
<style scoped></style>
