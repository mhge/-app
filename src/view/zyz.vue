<template>
  <div class="head">
    <van-nav-bar title="成为志愿者" fixed left-arrow @click-left="onClickLeft"/>
    <img src="../assets/xz.jpg">
    <van-cell-group>
      <van-cell
        title="志愿者是什么？"
        label="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam cumque magnam sunt dolore iste"
      />
    </van-cell-group>
    <van-row>
      <van-col span="22" offset="1">
        <div class="back">
          <van-row>
            <van-col span="14">
              <van-cell
                class="bcont"
                title="什么是志愿者"
                is-link
                label="Lorem ipsum dolor sit adipisicing elit"
              />
            </van-col>
          </van-row>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="22" offset="1">
        <div class="back">
          <van-row>
            <van-col span="14">
              <van-cell
                class="bcont"
                title="什么是志愿者"
                is-link
                label="Lorem ipsum dolor sit adipisicing elit"
              />
            </van-col>
          </van-row>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="22" offset="1">
        <div class="back">
          <van-row>
            <van-col span="14">
              <van-cell
                class="bcont"
                title="什么是志愿者"
                is-link
                label="Lorem ipsum dolor sit adipisicing elit"
              />
            </van-col>
          </van-row>
        </div>
      </van-col>
    </van-row>

    <van-row>
      <van-col span="20" offset="1">
        <div>
          <h4>作为志愿者的创建者，我有什么样的责任和义务？</h4>
          <p>1、Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>2、deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?</p>
          <p>3、deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?</p>
        </div>
      </van-col>
      <van-col span="20" offset="1">
        <div>
          <h4>哪些志愿团队可以接收我？</h4>
          <p>1、Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>2、deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?</p>
          <p>3、deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?</p>
        </div>
      </van-col>
      <van-col span="20" offset="1">
        <div>
          <h4>原来的志愿团队去哪了？</h4>
          <p>1、Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>2、deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?</p>
          <p>3、deleniti commodi ab impedit dignissimos exercitationem recusandae quia veritatis?</p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.push("/main");
    }
  }
  // mounted() {
  //   this.axios({ url: "http://101.132.164.103:8080/together/volunteer.do" });
  // }
};
</script>
<style scoped>
.head {
  margin-top: 46px;
}
img {
  width: 100%;
  height: 4rem;
}
.back {
  height: 113px;

  background-image: url("../assets/xz.jpg");
}
.bcont {
  margin-top: 26px;
}

.bcont > .van-cell__title .van-cell__label {
  width: 4rem;
}
</style>
