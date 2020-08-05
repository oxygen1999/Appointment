<template>
  <div>
    <head-top head-title="发布活动" go-back="true"></head-top>
    <div class="main">
      <van-cell title="开始时间" @click="showPicker = true, picker = {title:'开始时间',select: 'a'}">
        <template #default>{{ time.start | date_formatting }}</template>
      </van-cell>
      <van-cell title="结束时间" @click="showPicker = true, picker = {title:'结束时间',select: 'b'}">
        <template #default>{{ time.end | date_formatting }}</template>
      </van-cell>
      <div class="top">
        <van-button :disabled="!value" type="dark" block to="/u/release" @click="issave">确定</van-button>
        <van-cell center title="说明" :label="text" class="top-2" />
      </div>
    </div>

    <!-- 弹出层 -->
    <van-popup v-model="showPicker" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="datetime"
        :title="picker.title"
        :min-date="minDate"
        :max-date="maxDate"
        min-minute="0"
        @cancel="showPicker = false"
        @confirm="isconfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

import HeadTop from "@/components/header/Head";
import { mapState } from "vuex";
import { dateformatting } from "@/plugins/fun.js";

export default {
  components: {
    HeadTop
  },
  data() {
    return {
      text: "说明：1. 开始时间需要大于发布时间两天",
      showPicker: false,
      // 选择器
      picker: {
        title: null,
        select: null
      },
      maxDate: "", //
      minDate: "",
      currentDate: "",
      // 时间
      time: {
        start: null,
        end: null
      },
      // 可否保存？
      value: false
    };
  },
  computed: {
    // 取值
    ...mapState({
      activity_data: state => state.release.activity_data
    })
  },
  watch: {
    // 开始时间监听
    "time.start"() {
      // 结束时间未设置
      if (this.time.end) {
        if (this.time.start < this.time.end) {
          this.value = true;
        } else {
          Toast("请选择合适的开始时间");
          this.time.start = null;
        }
      }
    },
    // 结束时间监听
    "time.end"() {
      // 开始时间已设置
      if (this.time.start) {
        if (this.time.end > this.time.start) {
          this.value = true;
        } else {
          Toast("请选择合适的结束时间");
          this.time.end = null;
        }
      }
    }
  },
  filters: {
    date_formatting(value) {
      if (value == null) {
        return "未设置";
      }
      return dateformatting(value);
    }
  },
  methods: {
    // 确定日期
    isconfirm(value = this.picker.currentDate, select = this.picker.select) {
      this.showPicker = false;
      // value = this.date_formatting(value); // 日期格式化
      if (select == "a") {
        this.time.start = value;
      } else if (select == "b") {
        this.time.end = value;
      }
    },
    // 保存
    issave() {
      this.$store.commit("release/save_time", this.time);
    },
    // 初始化赋值
    data_Initialize() {
      this.time.start = this.activity_data.time.start;
      this.time.end = this.activity_data.time.end;
    }
  },
  mounted() {
    this.data_Initialize();
    // 日期可选初始化
    {
      this.currentDate = new Date();
      let value = this.currentDate;
      let year = value.getFullYear(),
        month = value.getMonth(),
        day = value.getDate();
      this.minDate = new Date(year, month, day + 2); // 最小时间 +2天
      this.maxDate = new Date(year + 1, month, day);
    }
  }
};
</script>

<style>
.main {
  margin-right: 1vh;
  margin-left: 1vh;
  margin-top: 1vh;
}
.top {
  margin-top: 5vh;
}
.top-2 {
  margin-top: 2vh;
}
</style>