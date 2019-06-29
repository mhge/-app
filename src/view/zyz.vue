<template>
  <div class="head">
    <van-nav-bar title="成为志愿者" fixed left-arrow @click-left="onClickLeft"/>
    <img src="http://www.pubchn.com/file/upload/201905/28/14-26-05-94-135598.jpg">
    <van-cell-group>
      <van-cell
        title="志愿者是什么？"
        label="志愿者是指以自己的时间、知识、技能、体力等从事志
服务的自然人。"
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
                label="实名认证信息，成为志愿者"
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
                label="寻找我的志愿组织，找到志同道合的小伙伴"
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
                label="找到感兴趣的招募信息，和有相同兴趣的小
伙伴一起参与志愿活动"
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
          <p>1.找到更多志同道合的小伙伴。</p>
          <p>2.定期参与志愿组织活动,获取服务时长。</p>
          <p>4.报名参与志愿者活动,并参与志愿者培训,遵守志愿活动规范。</p>
        </div>
      </van-col>
      <van-col span="20" offset="1">
        <div>
          <h4>哪些志愿团队可以接收我？</h4>
          <p>1.如果您的所属单位或团组织已在平台上入驻,您可以申请加入。</p>
          <p>2.在平台中找到您感兴趣的组织,申请加入。</p>
          <p>3.您还可以在平台上自己申请创建组织,成为组织的管员。</p>
        </div>
      </van-col>
      <van-col span="20" offset="1">
        <div>
          <h4>原来的志愿团队去哪了？</h4>
          <p>系统取代了旧有系统,您之前的参与过的志愿组织平台上注册了新
的组织,您可以去咨询原组织负责的组织名称,在平台中搜索组织名
称,找到组织。</p>
          
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

  background-image: url("http://www.pubchn.com/file/upload/201905/28/14-25-38-64-135598.jpg");
}
.bcont {
  margin-top: 26px;
}

.bcont > .van-cell__title .van-cell__label {
  width: 4rem;
}
p{
  color: #A9A9A9
}
</style>
