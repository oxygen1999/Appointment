/*
 * @Author: angula
 * @Date: 2020-08-04 10:54:24
 * @LastEditTime: 2020-08-05 16:31:34
 * @FilePath: \working\Appointment\src\store\module\release.js
 */
import Axios from 'axios'

const state = () => ({
  // 活动分类
  classification: {
    showPicker: false,      //弹出层状态
    value: '请选择'            //分类名称
  },

  // 活动数据
  activity_data: {
    classification_id: null,  //分类id
    title: '',                    //活动标题
    fileList: [],                 //图片
    value_other: '',              //其他
    bright_spot: '',             //活动亮点
    content: '',                 //活动内容

    // 活动人数
    amount: {
      min: '',
      max: ''
    },
    // 图片数据
    imgList: [],

    // 时间
    time: {
      start: null,
      end: null
    },

    // 地址
    address: {
      type: '1', //a线下  b线上 
      cityList: '',           //城市
      cityList_id: null,   //城市id
      cityList_text: ''       //详细地址 
    },
  }
})

const getters = {}
const actions = {}

const mutations = {
  // 保存活动分类
  save_classify(state, payload) {
    state.classification.value = payload.name;
    state.classification.showPicker = payload.showPicker;
    state.activity_data.classification_id = payload.id;
  },

  // 保存标题
  save_title(state, payload) {
    state.activity_data.title = payload;
  },


  // 保存活动详情
  save_datail(state, payload) {
    // console.log('保存活动详情');
    state.activity_data.bright_spot = payload.bright_spot;
    state.activity_data.content = payload.content;
  },
  // 保存图片
  save_img(state, payload) {
    state.activity_data.imgList = payload;
  },
  // 保存人数
  save_amount(state, payload) {
    state.activity_data.amount.min = payload.min;
    state.activity_data.amount.max = payload.max;
  },
  // 其他
  save_text(state, payload) {
    state.other_text = payload.other_text;
  },
  // 保存时间
  save_time(state, payload) {
    state.activity_data.time = payload;
  },
  // 保存地址
  save_address(state, payload) {
    state.activity_data.address = payload;
  },
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}