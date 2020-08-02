<!--
 * @Author: angula
 * @Date: 2020-07-30 18:17:03
 * @LastEditTime: 2020-08-01 13:57:04
 * @FilePath: \working\vue-cli3 demo\src\views\release\childComps\index.vue
--> 
<template>
  <div>
    <van-field
      readonly
      clickable
      name="area"
      :value="value"
      label="地区选择"
      placeholder="点击选择省市区"
      @click="showArea = true"
    />
    <van-popup v-model="showArea" position="bottom">
      <van-area :area-list="areaList" @confirm="onConfirm" @cancel="showArea = false" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      value: "",
      showArea: false,
      areaList: {} // 数据格式见 Area 组件文档
    };
  },
  methods: {
    onConfirm(values) {
      this.value = values.map(item => item.name).join("/");
      this.showArea = false;
    }
  }
};
