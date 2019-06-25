<template>
  <div class="bob">
    <div class="lb">
      <div class="top" @click="tz()">
        <div class="tou" @click="tz()">
          <img class="tp1" src>
          <div>
            <p class="xx">
              <span class="xm">何*兴</span>
              <span class="sh" @click.stop="gz()" v-bind:style="{background:bj}">{{srr}}</span>
            </p>
            <p class="dz">湖北省恩施土家族苗族自治州建始县</p>
          </div>
        </div>

        <h2>"生命诚可贵，梦想价更高"</h2>
        <p class="xxqk">
          "我的作业还没有写完。"我听见了17岁孙子虚弱的声音，这是他手术醒来说的第
          一句话。我叫何顺兴，今年65岁，家住湖北省恩施州建始县前三溪村二组...
        </p>
        <div class="tpnr">
          <img src="u=1022109268,3759531978&fm=27&gp=0.png">
          <img src>
          <img src>
        </div>
        <p class="je">
          <span>#社区便民#</span>
          <span>
            <van-icon name="thumb-circle-o"/>522
          </span>
          <span>
            <van-icon name="exchange"/>52
          </span>
          <span>
            <van-icon name="flag-o"/>641
          </span>
          <span>
            <van-icon name="underway-o"/>01-21
          </span>
        </p>
      </div>
    </div>
    <div class="lb">
      <div class="top">
        <div class="tou" @click="tz()">
          <img class="tp1" src>
          <div>
            <p class="xx">
              <span class="xm">何*兴</span>
              <span class="sh" @click.stop="gz()"  v-bind:style="{background:bj}">{{srr}}</span>
            </p>
            <p class="dz">湖北省恩施土家族苗族自治州建始县</p>
          </div>
        </div>

        <h2>"生命诚可贵，梦想价更高"</h2>
        <p class="xxqk">
          "我的作业还没有写完。"我听见了17岁孙子虚弱的声音，这是他手术醒来说的第
          一句话。我叫何顺兴，今年65岁，家住湖北省恩施州建始县前三溪村二组...
        </p>
        <div class="tpnr">
          <img src>
          <img src>
          <img src>
        </div>
        <p class="je">
          <span>#社区便民#</span>
          <span>
            <van-icon name="thumb-circle-o"/>522
          </span>
          <span>
            <van-icon name="exchange"/>52
          </span>
          <span>
            <van-icon name="flag-o"/>641
          </span>
          <span>
            <van-icon name="underway-o"/>01-21
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dtxc",
  data() {
    return {
      srr:'关注',
      sf:true,
      bj:''
    }
  },
  methods: {
    tz() {
      this.$router.push("/xu");
    },
    gz(){
      this.sf=!this.sf
      if(this.sf==true){
        this.srr='关注'
        this.bj=''
      }else{
        this.srr='已关注'
        this.bj='green'
      }

    }
  }
};
</script>
<style scoped>
@import "dt.css";
</style>
