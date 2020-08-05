<!--
 * @Author: angula
 * @Date: 2020-07-30 18:23:12
 * @LastEditTime: 2020-08-05 16:16:50
 * @FilePath: \working\Appointment\src\views\release\childComps\activityAddress.vue
-->
<template>
  <div>
    <HeadTop head-title="发布活动" go-back="true"></HeadTop>
    <div class="main">
      <van-cell title="形式">
        <template #default>
          <van-radio-group v-model="address.type" direction="horizontal">
            <van-radio name="1" icon-size="14px">线上</van-radio>
            <van-radio name="2" icon-size="14px">线下</van-radio>
          </van-radio-group>
        </template>
      </van-cell>
      <div v-if="address.type == '2'">
        <van-field
          is-link
          readonly
          clickable
          label="城市"
          :value="address.cityList"
          input-align="right"
          placeholder="请选择"
          @click="showPicker = true"
          left-icon="orders-o"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="cityListPlus"
            @cancel="showPicker = false"
            @confirm="onConfirm"
            :default-index="0"
          />
        </van-popup>
        <van-field
          v-model="address.cityList_text"
          label="详细地址"
          :autofocus="true"
          placeholder="详细"
          input-align="right"
          left-icon="label-o"
          maxlength="32"
        />
      </div>
      <div v-else>
        <!-- 线上 -->
      </div>
      <div class="top">
        <van-button type="dark" block to="/u/release" @click="issave">确定</van-button>
        <van-cell center title="说明" :label="text" class="top-2" />
      </div>
    </div>
  </div>
</template>

<script>
import HeadTop from "@/components/header/Head";
import { mapState } from "vuex";

export default {
  components: {
    HeadTop
  },
  data() {
    return {
      text: "请根据情况自行选择，线上或者线下，若为线下活动，请注意自身安全",
      // 原始未处理的数据 - 分类列表，城市列表
      original: {
        cityList: []
      },
      showPicker: false,
      address: {
        type: "2",
        cityList: "", // 城市
        cityList_id: null, // 城市ID
        cityList_text: "" // 地址详细
      }
    };
  },
  computed: {
    // 赋值
    ...mapState({
      activity_data: state => state.release.activity_data
    }),
    // 活动地址
    cityListPlus: {
      get: function() {
        let value = this.original.cityList;
        for (var i = 0; i < value.length; i++) {
          value[i].text = value[i].name;
        }
        return value;
      }
    }
  },
  methods: {
    // 保存
    issave() {
      let value = this.address;
      if (value.type === "A") {
        value = [];
        value.type = "A";
      }
      this.$store.commit("release/save_address", value);
    },
    // 数据初始化
    data_Initialize() {
      var _this = this;
      this.$get(this.$api.active_data_Initialize)
        .then(function(res) {
          if (res.success === true) {
            _this.original.cityList = res.data.cityList;
          } else {
            console.log(res.msg);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    // 弹出层 - 活动地址 - 确定
    onConfirm(value) {
      this.showPicker = false;
      if (value.id != 0) {
        this.address.cityList_id = value.id;
        this.address.cityList = value.text;
      }
    },
    // 缓存值
    cache_value() {
      this.address.cityList = this.activity_data.address.cityList;
      this.address.cityList_id = this.activity_data.address.cityList_id;
      this.address.cityList_text = this.activity_data.address.cityList_text;
    }
  },
  mounted() {
    this.data_Initialize();
    this.cache_value();
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