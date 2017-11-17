var util = require('../../utils/util.js');
var app = getApp();

Page({
  data: {
    task: {
      dep: '',
      sgxm: '',
      sgqy: '',
      workdate: util.getYMD(new Date),
      workduringtime:'8',
      overtime:'0',
      staffname:'',
      workcontent:''
    },
    openId: '',
    userInfo: {},
    creating: false,
    button: {
      txt: '保存'
    },
    modalHidden: true,
    array: ['请选择','舟山', '海通工地', '海新工地', '招商工地', '远舟船舶家俱', '大津重工','振华'],
    index:0
  },
  //所属部门
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
    console.log(e);
    var dep="";
    var index = e.detail.value;
    if(index==0){
      wx.showToast({
        title: '请选择部门',
        icon: 'warn',
        duration: 1000,
        mask: true
      })
    } else if (index == 1){
      dep='ZS';
    } else if (index == 2){
      dep = 'HTGD';
    } else if (index == 3) {
      dep = 'HXGD';
    } else if (index == 4) {
      dep = 'ZSGD';
    } else if (index == 5) {
      dep = 'YZCBJJ';
    } else if (index == 6) {
      dep = 'DJZG';
    } else if (index == 7) {
      dep = 'ZH';
    }
    this.setData({
      'task.dep':dep
    });
    
  },
  // 设置施工项目
  bindKeyInput: function (e) {
    this.setData({
      'task.sgxm': e.detail.value
    });
  },
  sgqyInput: function (e) {
    this.setData({
      'task.sgqy': e.detail.value
    });
  },


  // 设置开始日期
  startDateChange: function (e) {
    this.setData({
      'task.workdate': e.detail.value
    })
  },


  // 隐藏提示弹层
  modalChange: function (e) {
    this.setData({
      modalHidden: true
    })
  },

  // 创建任务
  createTask: function () {
    var that = this;
    var task = this.data.task;
    var openId = this.data.openId;
    var userInfo = this.data.userInfo;

    wx.showToast({
      title: '新建中',
      icon: 'loading',
      duration: 10000
    });

    wx.request({
      url: 'https://www.yzcbjj.com/api/task',
      data: {

        dep: task.dep,
        sgxm: task.sgxm,
        sgqy: task.sgqy,
        workdate: task.workdate,
        workduringtime: task.workduringtime,
        overtime: task.overtime,
        staffname: task.staffname,
        workcontent: task.workcontent,
        
        userInfo: {
          openId: openId,
          nickName: userInfo.nickName,
          avatarUrl: userInfo.avatarUrl

        }
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Content-Type': 'application/json'
      }, // 设置请求的 header
      success: function (res) {
        // success

        wx.hideToast();

        var command = res.data.taskID;

        wx.navigateTo({
          url: '/pages/new/success/success?command=' + command,
          success: function (res) {
            // success
          },
          fail: function () {
            // fail
          },
          complete: function () {
            // complete
          }
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  // 提交、检验
  bindSubmit: function (e) {
    var that = this;
    var task = this.data.task;
    var creating = this.data.creating;

    if (task.name == '' || task.address == '点击选择地点') {
      this.setData({
        modalHidden: false
      });
    } else {
      if (!creating) {
        this.setData({
          'creating': true
        });
        that.createTask();
      }
    }
  },

  onShow: function () {
    // 恢复新建按钮状态
    this.setData({
      'creating': false
    });
  },

  onHide: function () {
  },

  // 初始化设置
  onLoad: function () {
    var that = this;
    var now = new Date();
    var openId = wx.getStorageSync('openId');

    // 初始化打卡时间
    that.setData({
      'task.signTime': util.getHM(now),
      'task.signEarlyTime': util.getHM(new Date(now.getTime() - 1000 * 3600 * 2))
    });

    // 初始化日期
    that.setData({
      'task.startDay': util.getYMD(now),
      'task.endDay': util.getYMD(now)
    });


    // 初始化昵称
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      });

      that.setData({
        openId: openId
      })
    });

  }
})