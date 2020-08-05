<!--
 * @Author: angula
 * @Date: 2020-07-30 18:04:48
 * @LastEditTime: 2020-08-05 12:23:47
 * @FilePath: \working\Appointment\src\views\release\childComps\activityDetail.vue
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
    <h2 class="item-news">活动亮点</h2>
    <div class="item">
      <van-field
        class="item-van"
        v-model="bright_spot"
        rows="3"
        autosize
        type="textarea"
        maxlength="150"
        :placeholder="text.value_news"
        show-word-limit
      />
    </div>
    <h2 class="item-news">活动内容</h2>
    <div class="item">
      <van-field
        class="item-content"
        size="large"
        v-model="content"
        rows="9"
        input-align="left"
        autosize
        type="textarea"
        :placeholder="text.value_content"
      />
    </div>
    <div class="item-button">
      <span @click="issave" class="check">确定</span>
    </div>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import { mapState } from "vuex";

import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "activityDetail",
  data() {
    return {
      bright_spot: null,
      content: null,
      text: {
        value_news: "请填写几句活动亮点，便于分享和推荐活动。",
        value_content: "填写活动详细介绍，不得出现微信等联系方式"
      }
    };
  },
  methods: {
    issave() {
      // 保存

      // 对内容进行过滤，不允许出现手机号和微信号，qq号
      // 正则表达式
      let reg = new RegExp(
        "(微信|QQ|qq|weixin|1[0-9]{10}|[a-zA-Z0-9-_]{6,16}|[0-9]{6,11})+",
        "g"
      );
      if (this.bright_spot == "") {
        Toast("活动信息不得为空");
      } else if (this.content == "") {
        Toast("活动内容不得为空");
      } else if (reg.test(this.content)) {
        Toast("不允许出现手机号，微信号，qq号等隐私");
      } else {
        //保存
        this.$store.commit("release/save_datail", {
          bright_spot: this.bright_spot,
          content: this.content
        });
        //返回上一级
        this.$router.go(-1);
      }
    },
    data_Initialize() {
      this.bright_spot = this.activity_data.bright_spot;
      this.content = this.activity_data.content;
    }
  },
  props: {},
  components: {
    HeadTop
  },
  watch: {},
  computed: {
    ...mapState({
      activity_data: state => state.release.activity_data
    })
  },
  created() {},
  mounted() {
    this.data_Initialize();
  }
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
