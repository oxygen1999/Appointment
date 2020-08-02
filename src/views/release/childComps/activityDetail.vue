<!--
 * @Author: angula
 * @Date: 2020-07-30 18:04:48
 * @LastEditTime: 2020-08-02 16:58:23
 * @FilePath: \working\vue-cli3 demo\src\views\release\childComps\activityDetail.vue
-->
<template>
  <div>
    <!-- <van-cell-group>
      <van-field
        v-model="value"
        label="活动详情"
        placeholder="请完善>"
        input-align="right"
      />
    </van-cell-group>-->
    <HeadTop head-title="活动详情" go-back="true"></HeadTop>
    <h2 class="item-news">活动信息</h2>
    <div class="item">
      <van-field
        class="item-van"
        v-model="message_new"
        rows="2"
        autosize
        type="textarea"
        maxlength="150"
        placeholder="请填写活动亮点，便于分享或推荐活动，不超过150字"
        show-word-limit
      />
    </div>
    <h2 class="item-news">活动内容</h2>
    <div class="item">
      <van-field
        class="item-content"
        size="large"
        v-model="message_content"
        rows="2"
        input-align="left"
        autosize
        type="textarea"
        placeholder="请填写活动详情介绍，不得出现微信号以及手机号"
      />
    </div>
    <div class="item-button">
      <span @click="check" class="check">确定</span>
    </div>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "activityDetail",
  data() {
    return {
      // text: "请完善>",
      value: "",
      message_new: "",
      message_content: ""
    };
  },
  methods: {
    check() {
      // console.log("over");
      console.log(this.message_new);
      console.log(this.message_content);
      // 对内容进行过滤，不允许出现手机号和微信号，qq号
      // 正则表达式
      let reg = new RegExp(
        "(微信|QQ|qq|weixin|1[0-9]{10}|[a-zA-Z0-9-_]{6,16}|[0-9]{6,11})+",
        "g"
      );
      if (this.message_new == "") {
        Toast("活动信息不得为空");
      } else if (this.message_content == "") {
        Toast("活动内容不得为空");
      } else if (reg.test(this.message_content)) {
        Toast("不允许出现手机号，微信号，qq号等隐私");
      } else {
        this.$router.go(-1);
      }
    }
  },
  props: {},
  components: {
    HeadTop
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
/* .item {
  padding-left: 1px;
  padding-right: 1px;
} */
.item-news {
  /* display: block;
  text-align: initial; */
  font-size: 18px;
  height: 40px;
  margin-left: 3px;
  margin-top: 16px;
}
.item-van {
  /* height: 150px; */
  min-height: 150px;
  max-height: 200px;
}
.item-content {
  min-height: 250px;
  max-height: 300px;
}
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
