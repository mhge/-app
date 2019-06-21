<template>
  <div>
  <van-row>
      <van-col span="22" offset="1" class="goods">
        <van-row class="good">
          <van-col span="24">
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <van-slider v-model="value" active-color="#A9A9A9" bar-height="6px" :min="30" :max="90">
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
                <span>传德儿童关爱中心为山区筹募手套，呵护山里娃的双手。</span>
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
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <van-slider v-model="value" active-color="#A9A9A9" bar-height="6px" :min="30" :max="90">
              <div slot="button" class="custom-button">
                <van-icon name="gold-coin"/>
              </div>
            </van-slider>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="22" offset="1">
            <van-row class="good1" type="flex">
              <van-col span="6">
                <span>慈善募捐</span>
              </van-col>|
              <van-col span="10" offset="1">
                <span>呵护山里娃的双手</span>
              </van-col>|
              <van-col span="8" offset="1">
                <span>共济公益</span>
              </van-col>
            </van-row>
            <van-row class="good2" type="flex">
              <van-col span="24">
                <span>传德儿童关爱中心为山区筹募手套，呵护山里娃的双手。</span>
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
            <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="24">
            <van-slider v-model="value" active-color="#A9A9A9" bar-height="6px" :min="30" :max="90">
              <div slot="button" class="custom-button">
                <van-icon name="gold-coin"/>
              </div>
            </van-slider>
          </van-col>
        </van-row>
        <van-row>
          <van-col span="22" offset="1">
            <van-row class="good1" type="flex">
              <van-col span="6">
                <span>慈善募捐</span>
              </van-col>|
              <van-col span="10" offset="1">
                <span>呵护山里娃的双手</span>
              </van-col>|
              <van-col span="8" offset="1">
                <span>共济公益</span>
              </van-col>
            </van-row>
            <van-row class="good2" type="flex">
              <van-col span="24">
                <span>传德儿童关爱中心为山区筹募手套，呵护山里娃的双手。</span>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    };
  },
  mounted() {
  }
};
</script>
<style scoped>
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
  color: rgb(80, 78, 78);
  margin-top: 20px;
}
.good1 {
  font-size: 10px;
  line-height: 32px;
}
.good2 span{
  font-size:12px;
}
</style>
