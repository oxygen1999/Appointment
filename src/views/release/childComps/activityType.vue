<!--
 * @Author: angula
 * @Date: 2020-07-30 16:53:54
 * @LastEditTime: 2020-08-05 10:50:52
 * @FilePath: \working\Appointment\src\views\release\childComps\activityType.vue
-->
<template>
  <div>
    <van-field
      left-icon="notes-o"
      readonly
      clickable
      name="picker"
      :value="classification.value"
      label="活动类别"
      placeholder="请选择 >"
      input-align="right"
      @click="classification.showPicker = true"
    />
    <van-popup v-model="classification.showPicker" position="bottom" :style="{ height: '60%' }">
      <van-picker
        title="类型选择"
        show-toolbar
        :columns="catagoryListPlus"
        @confirm="onConfirm"
        @cancel="classification.showPicker = false"
        :default-index="0"
      />
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Picker } from "vant";
import { mapState } from "vuex";
export default {
  name: "activityType",
  data() {
    return {
      // value: "",
      original: {
        catagoryList: []
      },
      // categoryList: ["学习", "旅行", "运动", "休闲娱乐", "聚会", "其他"],
      showPicker: false
    };
  },
  methods: {
    onConfirm(value) {
      // this.value = value;
      // this.showPicker = false;
      this.classification.value = value.name;
      this.classification.showPicker = false;
      if (value.id != 0) {
        this.activity_data.classification_id = value.id;
      }
    },
    data_Initialize() {
      var _this = this;
      this.$get(this.$api.active_data_Initialize)
        .then(res => {
          if (res.success === true) {
            // console.log('111')
            _this.original.catagoryList = res.data.catagoryList;
          } else {
            console.log(res.msg);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    ...mapState({
      classification: state => state.release.classification
    }),
    catagoryListPlus: {
      get: function() {
        let value = this.original.catagoryList;
        for (let i = 0; i < value.length; i++) {
          value[i].text = value[i].name;
        }
      }
    }
  },
  mounted() {
    this.data_Initialize();
  }
};
</script>
<style scoped></style>
