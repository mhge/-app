<template>
  <div>
    <van-row v-for="(item,i) in content" :key="i">
      <div @click="send(item.id)">
        <van-col span="22" class="flex" offset="1">
          <img :src="item.img">
          <div>
            <h4>{{item.title}}</h4>
            <p>{{item.detail}}</p>
          </div>
        </van-col>
      </div>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: ""
    };
  },
  methods: {
    send(id) {
      this.$router.push("/jqbm/" + id);
    }
  },
  mounted() {
    var _this = this;
    this.axios({
      url: "http://101.132.164.103:8080/together/activity.do",
      params: {}
    }).then(function(data) {
      console.log(data);
      _this.content = data.data.info;
    });
  }
};
</script>
<style scoped>
.van-col > img {
  width: 130px;
  height: 70px;
  margin-right: 20px;
}
.flex {
  margin-top: 20px;
  display: flex;
}
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 166px;
}
</style>
