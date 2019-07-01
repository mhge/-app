<template>
  <div class="head">
    <van-nav-bar title="组织入住" fixed left-arrow @click-left="onClickLeft" />
    <img
      src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1309837259,2276102512&fm=26&gp=0.jpg"
    />
    <van-cell-group>
      <van-cell title="志愿组织是什么?" label="由有志于社会公益事业的义务工作志愿者自愿组成的非
营利性组织。" />
    </van-cell-group>
    <van-row>
      <van-col span="20" offset="1">
        <div>
          <h3>如何注册志愿组织?</h3>
          <van-row>
            <van-col span="24" class="flex">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561825419167&di=5e6a2d974e7243ce258a3e33cbd423f3&imgtype=0&src=http%3A%2F%2Fi9.hexunimg.cn%2F2016-06-08%2F184303568.jpg"
              />
              <div>
                <h4>寻找您的志愿小伙伴</h4>
                <p>您首先需要有一群志同道合的志愿小伙伴。</p>
              </div>
            </van-col>
            <van-col span="24" class="flex">
              <img
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1663822030,3517329342&fm=26&gp=0.jpg"
              />
              <div>
                <h4>注册您的志愿组织</h4>
                <p>
                  打开电脑,访问https:v.17weishan.com注册账用于创建及管理您
                  的志愿组织。
                </p>
              </div>
            </van-col>
            <van-col span="24" class="flex">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561825419167&di=5e6a2d974e7243ce258a3e33cbd423f3&imgtype=0&src=http%3A%2F%2Fi9.hexunimg.cn%2F2016-06-08%2F184303568.jpg"
              />
              <div>
                <h4>完善您的组织信息</h4>
                <p>
                  国家鼓励志愿组织到当地民政局备案登记,若您已经备案登记,可
                  开展志愿者活动。
                </p>
              </div>
            </van-col>
            <van-col span="24" class="flex">
              <img
                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=778732679,4058714739&fm=26&gp=0.jpg"
              />
              <div>
                <h4>等待申请通过</h4>
                <p>
                  组织信息需要经过审核后才能被大家看到,请务必保证您的组织
                  信息真实有效。
                </p>
              </div>
            </van-col>
            <van-col span="24" class="flex">
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561825392406&di=f52a1dfe20adf5f252419135791c6b73&imgtype=0&src=http%3A%2F%2F2.eewimg.cn%2Fnews%2Fuploadfile%2Fszds%2Fuploadfile%2F201206%2F20120601051826846.jpg"
              />
              <div>
                <h4>发布志愿者招募</h4>
                <p>
                  审核通过之后,您就可以发布您的志愿者招募信息,招募合适的志
                  愿者。
                </p>
              </div>
            </van-col>
          </van-row>
        </div>
      </van-col>
    </van-row>
    <van-row class="color">
      <van-col span="20" offset="1">
        <div>
          <h4>作作为志愿组织的创建者,我有什么样的权利义务?</h4>
          <p>1、可以招募更多的小伙伴一起参与公益活动。</p>
          <p>2、审核:确保小伙伴们不犯错。</p>
          <p>3、信息的正确性:保证发布的信息是合规的。</p>
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
.van-col {
  margin-top: 20px;
}
.van-col > img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-right: 30px;
}
.flex {
  display: flex;
}
h4 {
  margin: 0;
}
</style>
