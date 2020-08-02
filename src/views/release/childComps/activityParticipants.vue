<!--
 * @Author: angula
 * @Date: 2020-07-30 18:48:39
 * @LastEditTime: 2020-08-02 16:47:34
 * @FilePath: \working\vue-cli3 demo\src\views\release\childComps\activityParticipants.vue
-->
<template>
  <div>
    <HeadTop head-title="活动人数" go-back="true"></HeadTop>
    <!-- <van-cell title="单元格" is-link value="内容" /> -->
    <!-- <van-cell-group>
      <van-field
        v-model="value_min"
        label="最少人数"
        placeholder="请输入"
        input-align="right"
      />
      <van-field
        v-model="value_max"
        label="最多人数"
        placeholder="请输入"
        input-align="right"
      />
    </van-cell-group>-->
    <van-form validate-first @failed="onFailed">
      <van-field
        class="van-ellipsis"
        v-model="value_min"
        name="pattern"
        label="最少人数"
        placeholder="请输入"
        input-align="right"
        :rules="[{ pattern, message: 'please input number' }]"
      />
    </van-form>
    <van-form validate-first @failed="onFailed">
      <van-field
        class="van-ellipsis"
        v-model="value_max"
        name="pattern"
        label="最多人数"
        placeholder="请输入"
        input-align="right"
        :rules="[{ pattern, message: 'please input number' }]"
      />
    </van-form>
    <div class="item-button">
      <span @click="check" class="check">确 定</span>
    </div>

    <!-- 说明 -->
    <div class="item-say">
      <p>说明：</p>
      <p>1.活动到期后，如果最小报名人数不为0，且报名人数小于需要人数，活动将自动取消</p>
      <p>2.如果最小报名人数为0，则最大报名人数输入无效</p>
      <p>3.最大报名人数暂时不能炒股哦500人</p>
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
  name: "activityParticipants",
  data() {
    return {
      value_min: "",
      value_max: "",
      pattern: /^\d+$|^\d+[.]?\d+$/
    };
  },
  methods: {
    validator(val) {
      // return /1\d{10}/.test(val);
      return /^\d+$|^\d+[.]?\d+$/.test(val);
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    check() {
      if (this.value_min == "") {
        Toast("最少人数不能为空");
      } else if (this.value_max == "") {
        Toast("最多人数不得为空");
      } else {
        this.$router.go(-1);
      }
    }
  },
  props: {},
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
.item-say {
  width: 380px;
  height: 233px;
  font-size: 6px;
  font-family: Alibaba PuHuiTi Regular, Alibaba PuHuiTi Regular-Regular;
  font-weight: bold;
  text-align: left;
  color: #acacac;
  line-height: 18px;
  letter-spacing: 3px;
  margin-top: 200px;
  padding: 10px;
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
