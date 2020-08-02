<!--
 * @Author: angula
 * @Date: 2020-07-30 23:48:30
 * @LastEditTime: 2020-08-02 16:28:47
 * @FilePath: \working\vue-cli3 demo\src\views\release\childComps\activityTime.vue
-->
<template>
  <div>
    <!-- 开始时间 -->
    <div>
      <HeadTop head-title="活动时间" go-back="true"></HeadTop>
    </div>
    <div>
      <van-field
        readonly
        clickable
        name="picker"
        :value="value_min"
        label="开始时间"
        placeholder="请选择 >"
        input-align="right"
        @click="showPicker_min = true"
      />
      <van-popup v-model="showPicker_min" position="bottom" :style="{ height: '60%' }">
        <van-datetime-picker
          v-model="currentDate"
          type="datehour"
          title="选择完整时间"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirm_min"
          @cancel="showPicker_min = false"
        />
      </van-popup>
      <!-- 结束时间 -->
      <van-field
        readonly
        clickable
        name="picker"
        :value="value_max"
        label="开始时间"
        placeholder="请选择 >"
        input-align="right"
        @click="showPicker_max = true"
      />
      <van-popup v-model="showPicker_max" position="bottom" :style="{ height: '60%' }">
        <van-datetime-picker
          v-model="currentDate"
          type="datehour"
          title="选择完整时间"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="onConfirm_max"
          @cancel="showPicker_max = false"
        />
      </van-popup>
    </div>
    <!-- <fix ref="fix">
      确 定
      <view @tap="test"></view>
    </fix>-->
    <div class="item-button">
      <span @click="check" class="check">确 定</span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
import HeadTop from "@/components/header/Head";
import fix from "@/components/common/fix";
export default {
  name: "activityTime",
  data() {
    return {
      value_min: "",
      value_max: "",
      showPicker_min: false,
      showPicker_max: false,
      minDate: new Date(2020, 1, 1),
      maxDate: new Date(2021, 12, 31),
      currentDate: new Date()
    };
  },
  methods: {
    onConfirm_min(value_min) {
      this.value_min = value_min;
      this.showPicker_min = false;
    },
    onConfirm_max(value_max) {
      this.value_max = value_max;
      this.showPicker_max = false;
    },
    // test
    test() {
      // console.log("111");
      this.$refs.fix.check();
    },
    check() {
      if (this.value_min == "") {
        Toast("开始时间不得为空");
      } else if (this.value_max == "") {
        Toast("结束时间不得为空");
      } else {
        this.$router.go(-1);
      }
      console.log(this.value_min, this.value_max);
    }
  },
  props: {
    value: String
  },
  components: {
    HeadTop,
    fix
  },
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
  margin-top: 20px;
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
