<!--
 * @Author: angula
 * @Date: 2020-07-31 00:12:31
 * @LastEditTime: 2020-08-02 15:57:53
 * @FilePath: \working\vue-cli3 demo\src\views\release\childComps\activityAddress.vue
-->
<template>
  <keep-alive>
    <div>
      <!-- 顶部 -->
      <HeadTop head-title="活动地址" go-back="true"></HeadTop>
      <!-- 主体 -->
      <div class="item-main">
        <van-cell title="形式">
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">
              线下
              <template #icon="props">
                <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
              </template>
            </van-radio>
            <van-radio name="2">
              线上
              <template #icon="props">
                <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
              </template>
            </van-radio>
          </van-radio-group>
        </van-cell>
        <!-- 城市 -->
        <van-field
          readonly
          name="area"
          :value="value"
          v-if="!isOnline"
          input-align="right"
          label="城市"
          @click="cityShow = true"
          placeholder="待选择>"
        />
        <van-popup v-model="cityShow" position="bottom" :style="{ height: '60%' }">
          <van-area :area-list="areaList" @confirm="onConfirm" @cancel="cityShow = false" />
        </van-popup>
        <!-- 详细地址 -->

        <van-cell-group>
          <van-field
            v-model="value_address"
            v-if="!isOnline"
            label="详细地址"
            input-align="right"
            placeholder="请输入详细地址"
          />
        </van-cell-group>
      </div>
      <!-- 确定按钮 -->
      <div class="item-button">
        <span @click="check" class="check">确定</span>
      </div>
    </div>
  </keep-alive>
</template>

<script>
import HeadTop from "@/components/header/Head";

import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "activityAddress",
  data() {
    return {
      value: "",
      value_address: "",
      showArea: "",
      radio: 1,
      // 是否线上，用于判断是否显示组件
      isOnline: false,
      cityShow: false,
      // 图标
      activeIcon: require("../../../assets/img/releaseImg/activeRound.png"),
      inactiveIcon: require("../../../assets/img/releaseImg/inactiveRound.png"),
      // 城市
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市"
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县"
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区"
        }
      }
    };
  },
  methods: {
    showCityPopup() {
      this.cityShow = true;
    },
    onConfirm(value, index) {
      // console.log({ 当前值: value, 当前索引: index });
      this.value = value.map(item => item.name).join("-");
      this.cityShow = false;
    },
    onCancel(value, index) {
      console.log(value, index);
      this.cityShow = false;
    },
    check() {
      console.log("over");
      console.log(this.value);
      console.log(this.value_address);
      if (!this.isOnline) {
        if (this.value == "") {
          Toast("活动地址不得为空");
        } else if (this.value_address == "") {
          Toast("详细地址不得为空");
        } else {
          this.$router.go(-1);
        }
      } else {
        this.$router.go(-1);
      }
    }
  },
  props: {},
  components: {
    HeadTop
  },
  watch: {
    radio(newValue) {
      if (newValue == "1") {
        this.isOnline = false;
      } else {
        this.isOnline = true;
      }
    }
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style >
.item-line {
  height: 34px;
  background-color: white;
  border-bottom: solid rgba(187, 186, 186, 0.204) 1px;
}
.img-icon {
  height: 20px;
}
.item-main {
  margin-top: 10px;
  padding: 15px 10px;
  text-align: left;
}
.van-cell {
  margin-top: 2px;
}
.van-cell__title {
  flex: 1;
}
.van-cell__value {
  margin-left: 100px;
  /* font-size: 10px; */
  flex: 2;
}
input {
  border: none;
  text-align: right;
  outline: none;
}

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
  height: 20px;
  font-size: 25px;
  font-family: Alibaba PuHuiTi Regular, Alibaba PuHuiTi Regular-Regular;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  line-height: 48px;
  letter-spacing: 3px;
}
</style>
