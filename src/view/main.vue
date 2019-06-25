<template>
  <div>
    <!-- <h4>首页</h4> -->
    <!-- 头部及点击蒙版 -->
    <van-nav-bar left-text="logo名字" fixed class="left">
      <van-icon name="location" slot="right" color="inherit" @click="showBasics"/>
      <van-icon name="hot" slot="right" color="inherit"/>
    </van-nav-bar>
    <van-popup v-model="showBasic">
      <van-row type="flex" class="san">
        <van-col span="24">
          <van-row type="flex" class="san1">
            <van-col span="24">
              <van-row type="flex" class="san3">
                <van-col span="2" offset="2" class="san4">
                  <p>日行一善</p>
                </van-col>
                <van-col span="2" offset="1">
                  <div class="spn"></div>
                  <span>从身边小事做起</span>
                </van-col>
                <van-col span="7" offset="9">
                  <div class="spn1"></div>
                  <span>2019/02/12</span>
                </van-col>
              </van-row>
            </van-col>
          </van-row>
          <van-row type="flex" class="san2">
            <van-col span="24">
              <van-row type="flex">
                <van-col span="21" offset="2" class="san5">
                  <span>
                    不吃稀有和有益的动物，并劝说
                    身边的人也不吃。
                  </span>
                </van-col>
              </van-row>
              <van-row type="flex">
                <van-col span="22" offset="1" class="san6">
                  <van-button round type="danger" class="btn" @click="yao()">点击完成日行一善</van-button>
                </van-col>
              </van-row>
            </van-col>
          </van-row>
        </van-col>
      </van-row>
      <van-icon name="close" class="icon"/>
    </van-popup>

    <!-- 非固定页面 -->
    <section>
      <!-- 搜索框 -->
      <div>
        <van-search v-model="val" placeholder="搜索你想知道的" shape="round" @search="onSearch"></van-search>
      </div>
      <div>
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" indicator-color="black" :height="190" class="swipe">
          <van-swipe-item v-for="(image, index) in list" :key="index">
            <img :src="image.banner_img_url">
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 组织入住及成为志愿者 -->
      <div>
        <van-row type="flex" justify="space-around">
          <van-col span="10" class="spans">
            <van-row type="flex" justify="space-around">
              <van-col span="24" class="spans1" @click="rz">组织入住</van-col>
              <van-col span="24" class="spans1">
                <span @click="rz">组织入住</span>
              </van-col>
            </van-row>
            <van-row type="flex" justify="space-around">
              <van-col span="24" class="spans2">志愿组织755个</van-col>
            </van-row>
          </van-col>
          <van-col span="10" class="spans">
            <van-row type="flex" justify="space-around">
              <van-col span="24" class="spans1">
                <span @click="zyz">成为志愿者</span>
              </van-col>
            </van-row>
            <van-row type="flex" justify="space-around">
              <van-col span="24" class="spans2">志愿者16353个</van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
      <div class="copy"></div>
      <!-- 八个链接栏 -->
      <div>
        <van-row type="flex" justify="space-around" class="navs">
          <van-col span="6" class="nav" offset="2">
            <van-row type="flex">
              <van-col span="16" class="imgs">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row type="flex">
              <van-col span="24">
                <span @click="fpzk">扶贫助困</span>
              </van-col>
            </van-row>
          </van-col>
          <van-col span="6" class="nav">
            <van-row type="flex">
              <van-col span="16" class="imgs">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row type="flex">
              <van-col span="24">
                <span @click="jlzl">敬老助老</span>
              </van-col>
            </van-row>
          </van-col>
          <van-col span="6" class="nav">
            <van-row type="flex">
              <van-col span="16" class="imgs">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row type="flex">
              <van-col span="24">
                <span @click="gaet">关爱儿童</span>
              </van-col>
            </van-row>
          </van-col>
          <van-col span="6" class="nav">
            <van-row type="flex">
              <van-col span="16" class="imgs">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row type="flex">
              <van-col span="24">
                <span>社区便民</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row type="flex" justify="space-around" class="navs">
          <van-col span="6" class="nav" offset="2">
            <van-row type="flex">
              <van-col span="16" class="imgs">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row type="flex">
              <van-col span="24">
                <span>教育科普</span>
              </van-col>
            </van-row>
          </van-col>
          <van-col span="6" class="nav">
            <van-row type="flex">
              <van-col span="16" class="imgs">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row type="flex">
              <van-col span="24">
                <span>绿色环保</span>
              </van-col>
            </van-row>
          </van-col>
          <van-col span="6" class="nav">
            <van-row type="flex">
              <van-col span="16" class="imgs">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row type="flex">
              <van-col span="24">
                <span>文化活动</span>
              </van-col>
            </van-row>
          </van-col>
          <van-col span="6" class="nav">
            <van-row type="flex">
              <van-col span="16" class="imgs">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row type="flex">
              <van-col span="24">
                <span @click="qbhd">全部活动</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
      <div class="copy"></div>
      <!-- 最新招募 -->
      <div>
        <van-row>
          <van-col span="8" offset="1" style="color:black;font-size:18px;height:26px ">最新招募</van-col>
          <van-col span="5" offset="9" style="color:#333;font-size:12px; ">
            <div @click="con">查看更多></div>
          </van-col>
        </van-row>
        <van-row class="panels" @click="res">
          <van-col span="22" offset="1">
            <div @click="jqbm">
              <van-row type="flex" justify="space-between" class="panel">
                <van-col span="16">
                  <h5>美新路大朋友项目志愿者</h5>
                  <van-row type="flex" justify="space-between" class="panel3">
                    <van-col span="11" class="time">
                      <van-row>
                        <van-col span="4">
                          <van-icon name="location-o"/>
                        </van-col>
                        <van-col span="19" class="ditu">郑州市</van-col>
                      </van-row>
                    </van-col>|
                    <van-col span="11" class="time">
                      <van-row>
                        <van-col span="4">
                          <van-icon name="clock-o"/>
                        </van-col>
                        <van-col span="19" class="ditu">六天前发布</van-col>
                      </van-row>
                    </van-col>
                  </van-row>
                </van-col>
                <van-col span="6" class="panel2">
                  <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
                </van-col>
              </van-row>
            </div>
            <van-row class="panel4">
              <van-col span="24">
                <span>发起方：北京市石景山乐龄老年社会工作服务中心</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row class="panels">
          <van-col span="22" offset="1">
            <van-row type="flex" justify="space-between" class="panel">
              <van-col span="16">
                <h5>美新路大朋友项目志愿者</h5>
                <van-row type="flex" justify="space-between" class="panel3">
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="location-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">郑州市</van-col>
                    </van-row>
                  </van-col>|
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="clock-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">六天前发布</van-col>
                    </van-row>
                  </van-col>
                </van-row>
              </van-col>
              <van-col span="6" class="panel2">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row class="panel4">
              <van-col span="24">
                <span>发起方：北京市石景山乐龄老年社会工作服务中心</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row class="panels">
          <van-col span="22" offset="1">
            <van-row type="flex" justify="space-between" class="panel">
              <van-col span="16">
                <h5>美新路大朋友项目志愿者</h5>
                <van-row type="flex" justify="space-between" class="panel3">
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="location-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">郑州市</van-col>
                    </van-row>
                  </van-col>|
                  <van-col span="11" class="time">
                    <van-row>
                      <van-col span="4">
                        <van-icon name="clock-o"/>
                      </van-col>
                      <van-col span="19" class="ditu">六天前发布</van-col>
                    </van-row>
                  </van-col>
                </van-row>
              </van-col>
              <van-col span="6" class="panel2">
                <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
              </van-col>
            </van-row>
            <van-row class="panel4">
              <van-col span="24">
                <span>发起方：北京市石景山乐龄老年社会工作服务中心</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
      <!-- 公益项目 -->
      <div>
        <van-row style="margin-top:15px">
          <van-col span="8" offset="1" style="color:black;font-size:18px;height:26px ">公益项目</van-col>
          <van-col span="5" offset="9" style="color:#333;font-size:12px; ">
            <div @click="tap">查看更多></div>
          </van-col>
        </van-row>

        <van-row>
          <van-col span="22" offset="1" class="goods">
            <van-row class="good">
              <van-col span="24">
                <div @click="res">
                  <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
                </div>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="24">
                <van-slider
                  v-model="value"
                  active-color="#A9A9A9"
                  bar-height="6px"
                  :min="30"
                  :max="90"
                >
                  <div slot="button" class="custom-button">
                    <van-icon name="gold-coin"/>
                  </div>
                </van-slider>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="22" offset="1">
                <van-row class="good1" type="flex">
                  <van-col span="5">
                    <span>慈善募捐</span>
                  </van-col>|
                  <van-col span="10" offset="1">
                    <span>呵护山里娃的双手</span>
                  </van-col>|
                  <van-col span="7" offset="1">
                    <span>共济公益</span>
                  </van-col>
                </van-row>
                <van-row class="good2" type="flex">
                  <van-col span="24">
                    <span>
                      旨在动员企业、团体、社会组织和公共捐资，在沙漠地区公路两旁建设
                      沙漠锁边林和生态绿洲改善环境和气候。
                    </span>
                  </van-col>
                </van-row>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="22" offset="1" class="goods">
            <van-row class="good">
              <van-col span="24">
                <div @click="res">
                  <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
                </div>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="24">
                <van-slider
                  v-model="value"
                  active-color="#A9A9A9"
                  bar-height="6px"
                  :min="30"
                  :max="90"
                >
                  <div slot="button" class="custom-button">
                    <van-icon name="gold-coin"/>
                  </div>
                </van-slider>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="22" offset="1">
                <van-row class="good1" type="flex">
                  <van-col span="5">
                    <span>慈善募捐</span>
                  </van-col>|
                  <van-col span="10" offset="1">
                    <span>呵护山里娃的双手</span>
                  </van-col>|
                  <van-col span="7" offset="1">
                    <span>共济公益</span>
                  </van-col>
                </van-row>
                <van-row class="good2" type="flex">
                  <van-col span="24">
                    <span>
                      旨在动员企业、团体、社会组织和公共捐资，在沙漠地区公路两旁建设
                      沙漠锁边林和生态绿洲改善环境和气候。
                    </span>
                  </van-col>
                </van-row>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="22" offset="1" class="goods">
            <van-row class="good">
              <van-col span="24">
                <div @click="res">
                  <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
                </div>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="24">
                <van-slider
                  v-model="value"
                  active-color="#A9A9A9"
                  bar-height="6px"
                  :min="30"
                  :max="90"
                >
                  <div slot="button" class="custom-button">
                    <van-icon name="gold-coin"/>
                  </div>
                </van-slider>
              </van-col>
            </van-row>
            <van-row>
              <van-col span="22" offset="1">
                <van-row class="good1" type="flex">
                  <van-col span="5">
                    <span>慈善募捐</span>
                  </van-col>|
                  <van-col span="10" offset="1">
                    <span>呵护山里娃的双手</span>
                  </van-col>|
                  <van-col span="7" offset="1">
                    <span>共济公益</span>
                  </van-col>
                </van-row>
                <van-row class="good2" type="flex">
                  <van-col span="24">
                    <span>
                      旨在动员企业、团体、社会组织和公共捐资，在沙漠地区公路两旁建设
                      沙漠锁边林和生态绿洲改善环境和气候。
                    </span>
                  </van-col>
                </van-row>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "最新招募",
      list: [],
      value: 0,
      val: "",
      showBasic: false
    };
  },
  mounted() {
    this.$emit("get", this.title);
    // this.title.style.font-size='18px';
    var that = this;
    axios({
      url: "http://jx.xuzhixiang.top/ap/api/bannerlist.php",
      params: { uid: 11940 }
    }).then(function(data) {
      // console.log(data.data.data);
      that.list = data.data.data;
    });
  },
  methods: {
    onSearch() {},
    onClickRight() {
      Toast("按钮");
    },
    con() {
      this.$router.push("./zxzms");
    },
    tap() {
      this.$router.push("./gyhds");
    },
    showBasics() {
      this.showBasic = true;
    },
		yao(){
			this.showBasic = false;
		},
    res() {
      this.$router.push("./xmxqs");
    },
    rz() {
      this.$router.push("./rz");
    },
    zyz() {
      this.$router.push("./zyz");
    },
    jlzl() {
      this.$router.push("./jlzl");
    },
    gaet() {
      this.$router.push("./gaet");
    },
    fpzk() {
      this.$router.push("./fpzk");
    },
    qbhd() {
      this.$router.push("./qbhd");
    },
    qbhd() {
      this.$router.push("./qbhd");
    },
    jqbm() {
      this.$router.push("./jqbm");
    }
  }
};
</script>
<style scoped>
.spans {
  margin-top: 26px;
  margin-bottom: 26px;
  height: 60px;
  line-height: 20px;
  border-radius: 4px;
  background-color: rgba(248, 248, 248, 1);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
}
.spans1 {
  font-size: 14px;
  height: 30px;
}
.spans2 {
  font-size: 12px;
  height: 30px;
}
.nav {
  height: 80px;
  font-size: 12px;
}
.imgs {
  height: 40px;
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 1);
}
.navs img {
  width: 100%;
  height: 100%;
}
.swipe img {
  width: 100%;
  height: 100%;
}
.copy {
  height: 10px;
  text-align: center;
  background: #ccc;
  margin-bottom: 20px;
}
section {
  margin-top: 46px;
  margin-bottom: 50px;
}
.panel {
  height: 84px;
}
.panels {
  border-bottom: 1px solid #ccc;
}
.panel .ditu {
  font-size: 12px;
}
.panel p {
  height: 36px;
  line-height: 36px;
  font-size: 13px;
}
.panel2 img {
  width: 74px;
  height: 74px;
  margin-top: 10px;
}
.panel3 {
  font-size: 10px;
  color: rgb(144, 142, 142);
}
.panel4 span {
  font-size: 10px;
  line-height: 36px;
  color: rgb(144, 142, 142);
}
.good img {
  width: 100%;
  height: 130px;
}
.goods {
  overflow: hidden;
  border-radius: 0px 0px 6px 6px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 1px 0px rgba(170, 170, 170, 1);
  border: 1px solid rgba(255, 255, 255, 0);
  height: 225px;
  margin-bottom: 20px;
  color: rgb(80, 78, 78);
  margin-top: 20px;
}
.good1 {
  font-size: 10px;
  line-height: 32px;
}
.good2 {
  font-size: 10px;
}
.san {
  width: 264px;
  height: 384px;
}
.san1 {
  height: 213px;
  background: url("https://img.yzcdn.cn/vant/cat.jpeg") no-repeat center;
}
.san3 {
  line-height: 20px;
}
.san3 p {
  font-size: 18px;
  line-height: 30px;
}
.san3 span {
  font-size: 12px;
}
.san3 .spn {
  height: 30px;
}
.san3 .spn1 {
  height: 180px;
}
.san5 {
  height: 49px;
  margin-top: 20px;
}
.san5 span {
  font-size: 16px;
  height: 20px;
  margin: 10px 0;
}
.san6 {
  text-align: center;
  margin-top: 10px;
}
.san6 .btn {
  background: rgb(238, 236, 236);
  color: black;
  border-color: #fff;
  width: 90%;
}
</style>
