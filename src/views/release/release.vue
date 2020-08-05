<!--
 * @Author: angula
 * @Date: 2020-07-29 17:37:39
 * @LastEditTime: 2020-08-05 17:35:25
 * @FilePath: \working\Appointment\src\views\release\release.vue
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
          v-model="title"
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
        :value="this.activity_data.bright_spot && this.activity_data.content ?'已完善':'待完善'"
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
        :value="this.activity_data.amount.min && this.activity_data.amount.max ? '已完善':'待完善'"
        is-link
        to="/u/release/participants"
      />
      <!-- 活动时间 -->
      <van-cell
        icon="clock-o"
        title="活动时间"
        :value="this.activity_data.time.start && this.activity_data.time.end?'已完善':'待完善'"
        is-link
        to="/u/release/activityTime"
      />
      <!-- 活动地址 -->
      <van-cell
        icon="location-o"
        title="活动地址"
        :value="this.activity_data.address.type == 'A' || this.activity_data.address.cityList_id ? '已完善':'待完善'"
        is-link
        to="/u/release/activityAddress"
      />
      <!-- 其他说明 -->
      <van-cell-group>
        <van-field
          v-model="activity_data.value_other"
          label="其他说明"
          left-icon="warning-o"
          input-align="right"
          placeholder="(选填)"
        />
      </van-cell-group>
    </div>
    <a href="#">查看活动审核规则</a>
    <center>
      <van-button @click="release" class="btn" round type="info" color>确认发布</van-button>
    </center>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import activityType from "../release/childComps/activityType";
import activityImage from "../release/childComps/activityImage";

import { mapState } from "vuex";
export default {
  name: "release",
  data() {
    return {
      title: "",
      value_other: "", //其他
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
    cache_value() {
      this.title = this.activity_data.title;
    },
    //发布活动前进行数据格式化
    prepare(value) {
      let img;
      let file = value.fileList;
      // t图片
      for (let i = 0; i < file.length; i++) {
        img += ".." + file[i].content;
      }

      // 赋值
      let data = {
        title: value.title, //标题
        catagoryId: value.classification_id, //分类id
        publishUserId: 1, //
        content: value.content,
        images: img,
        cityId: value.address.cityList_id,
        addressMode: value.address.type,
        address: value.address.cityList_text,
        beginTime: value.time.start,
        endTime: value.time.end,
        leaseJoinNum: value.amount.min,
        mostJoinNum: value.amount.max,
        remark: value.value_other
      };
      return data;
    },

    // 活动发布
    release() {
      let value = this.activity_data;
      value = this.prepare(value);
      console.log(value);
      this.$post(this.$api.active_info_submit, value).then(res => {
        console.log(res);
      });
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
    // 标题
    title(value = this.title) {
      this.$store.commit("release/save_title", value);
    },
    // 其他
    value_other(value = this.value_other) {
      this.$store.commit("release/save_text", value);
    }
  },
  computed: {
    ...mapState({
      activity_data: state => state.release.activity_data,
      classification: state => state.release.classification
    })
  },
  created() {},
  mounted() {
    this.cache_value();
  }
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
