<!--
 * @Author: angula
 * @Date: 2020-07-29 17:37:39
 * @LastEditTime: 2020-08-02 17:36:30
 * @FilePath: \working\vue-cli3 demo\src\views\release\release.vue
-->
<template>
  <div>
    <HeadTop head-title="发布活动" go-back="true"></HeadTop>
    <h2 class="item-news">活动信息</h2>
    <div class="item-up">
      <!-- 活动类型 -->
      <activity-type></activity-type>
      <!-- 活动标题 -->
      <van-form validate-first @failed="onFailed">
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          class="van-ellipsis"
          v-model="value1"
          left-icon="label-o"
          name="pattern"
          label="活动标题"
          placeholder="请输入标题"
          input-align="right"
          :rules="[{ pattern, message: '标题最多不超过20个字' }]"
        />
      </van-form>
      <!-- 活动详情 -->
      <!-- <activity-detail /> -->
      <van-cell
        title="活动详情"
        icon="more-o"
        ref="test"
        :value="value_detail"
        @click="detailClick"
        is-link
        to="/u/release/detail"
      />
      <!-- 上传照片 -->
      <activity-image />
    </div>

    <!-- 分割线 -->
    <!-- <p class="itemCenter"></p> -->
    <!-- 活动设置 -->
    <h2 class="item-setting">活动设置</h2>
    <div class="item-down">
      <!-- 活动人数 -->
      <van-cell
        icon="friends-o"
        title="活动人数"
        @click="numberClick"
        :value="value_participants"
        is-link
        to="/u/release/participants"
      />
      <!-- 活动时间 -->
      <van-cell
        icon="clock-o"
        title="活动时间"
        :value="value_time"
        @click="timeClick"
        is-link
        to="/u/release/activityTime"
      />
      <!-- 活动地址 -->
      <van-cell
        icon="location-o"
        title="活动地址"
        :value="value_address"
        @click="addressClick"
        is-link
        to="/u/release/activityAddress"
      />
      <!-- 其他说明 -->
      <van-cell-group>
        <van-field
          v-model="value_other"
          label="其他说明"
          left-icon="warning-o"
          input-align="right"
          placeholder="(选填)"
        />
      </van-cell-group>
    </div>
    <a href="#">查看活动审核规则</a>
    <center>
      <van-button class="btn" round type="info" color>确认发布</van-button>
    </center>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import activityType from "../release/childComps/activityType";
// import activityDetail from "../release/childComps/activityDetail";
import activityImage from "../release/childComps/activityImage";

export default {
  name: "release",
  data() {
    return {
      value_detail: "待完善",
      value_participants: "待设置",
      value_time: "待设置",
      value_address: "待设置",
      value1: "",
      value_other: "",
      pattern: /^[\u4e00-\u9fa5\w]{1,20}$/
    };
  },
  methods: {
    validator(val) {
      // return /1\d{10}/.test(val);
      return /^[\u4e00-\u9fa5\w]{1,20}$/.test(val);
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    detailClick() {
      this.value_detail = "已完善";
      // console.log(this.value_detail);
    },
    numberClick() {
      this.value_participants = "已设置";
      // console.log(this.value_participants);
    },
    timeClick() {
      // console.log(value_min);
      this.value_time = "已设置";
      // console.log(this.value_time);
    },
    addressClick() {
      this.value_address = "已设置";
    }
  },
  props: {},
  components: {
    HeadTop,
    activityType,
    // activityDetail,
    activityImage
  },
  watch: {
    // this.$refs.test.value = '已设置'
    // message_new: function(val) {
    //   // this.fullName = val + " " + this.lastName;
    //   this.$refs.test.test = "已设置";
    // }
  },
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style>
.item {
  /* border-style: solid dotted dashed double; */
  background-color: white;
}
.item-up,
.item-down {
  padding-left: 9px;
  padding-right: 9px;
}
.itemCenter {
  /* margin: 2px; */
  width: 100%;
  /* font-size: 20px; */
  /* border-top: solid #acc0d8 4px; */
  height: 10px;
  background-color: #dadada;
  color: #393838;
}
.item-setting {
  font-size: 18px;
  height: 30px;
  margin-left: 10px;
}
a {
  display: block;
  text-align: center;
  color: rgb(83, 117, 172);
  margin-top: 5px;
  color: #ffb04f;
}
.btn {
  width: 55%;
  height: 25px;
  background-color: #717171;
  border-color: #717171;
  color: white;
  margin-top: 40px;
}
/* .van-button--default {
  background-color: #4fc08d;
  border-color: #4fc08d;
  color: #fff;
} */
.item-news {
  font-size: 18px;
  height: 30px;
  margin-left: 10px;
}
</style>
