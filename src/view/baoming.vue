<template>
  <div class="head">
    <van-cell-group>
      <van-field/>
      <van-field v-model="username" label="真实姓名" placeholder="请输入真实的姓名"/>
      <van-field v-model="sfz" label="身份证" placeholder="请输入真实的身份证"/>
      <van-field v-model="age" label="年龄" placeholder="请输入真实的年龄"/>
      <van-field v-model="sex" label="性别" placeholder="请输入性别"/>
      <p class="width"></p>
      <van-field v-model="mm" label="政治面貌" placeholder="请输入政治面貌"/>
      <van-field v-model="hy" label="所属行业" placeholder="请输入所属行业"/>
      <van-field v-model="work" label="工作单位" placeholder="请输入工作单位"/>
      <p class="width">个人简介(选填)</p>
    </van-cell-group>
    <van-row>
      <van-col span="20" offset="2">
        <div contenteditable="true">请简要描述你本人的主要情况，如:家庭、教育等</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: "提交",
      title: "志愿者认证",
      username: "",
      sfz: "",
      age: "",
      sex: "",
      mm: "",
      hy: "",
      work: ""
    };
  },
  mounted() {
    this.$emit("send", this.list);
    this.$emit("dt", this.title);
  }
};
</script>
<style scoped>
.head {
  margin-bottom: 4.375rem;
}
.width {
  background: #f2f2f9;
  height: 0.625rem;
  margin: 0 auto;
}
p:nth-of-type(2) {
  height: 0.875rem;
  line-height: 0.875rem;
  font-size: 12px;
  color: gray;
}
.van-col {
  padding-top: 1.25rem;
  color: gray;
}
div:focus {
  outline: none;
}
</style>
