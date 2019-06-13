<template>
  <div>
      <topbar>
        <div @touchend="$router.go(-1)" class="address">
            <i class="iconfont icon-left"></i>
        </div>
        <div class="select-ad">搜索</div>
        <router-link  tag="div" to="/Home" class="home-page">
            <i class="iconfont icon-home"></i>
            <p>首页</p>
        </router-link>
      </topbar>
      <ad />
      <div class="search-box">
        <input type="text" placeholder="输入商家名、品类或商圈">
        <i class="iconfont icon-search"></i>
        <input type="submit" value="搜索">
      </div>
      <div class="keyword">
        <p>
          <a href="#">周边热门</a>
          <a href="#" class="divide-line">|</a>
          <a href="#">东澜岸天河...</a>
          <a href="#" class="divide-line">|</a>
          <a href="#">普罗旺斯氧...</a>
          <a href="#" class="divide-line">|</a>
          <a href="#">武汉欢乐谷</a>
          <a href="#">千与千寻</a>
          <a href="#" class="divide-line">|</a>
          <a href="#">想唱就唱KTV</a>
          <a href="#" class="divide-line">|</a>
          <a href="#">等你下课电...</a>
          <a href="#" class="divide-line">|</a>
          <a href="#">善苜村自助...</a>
          <a href="#">即刻主题公寓</a>
          <a href="#" class="divide-line">|</a>
          <a href="#">布鹿·Blue酒...</a>
          <a href="#" class="divide-line">|</a>
        </p>
      </div>
      <div class="search-footer">
        <span>当前位置：武汉团购搜索</span>
        <footer-component />
      </div>
  </div>
</template>

<script>
import topbar from '@/components/HomeTopBar';
import ad from '@/components/Advertise';
import FooterComponent from '@/components/HomeFooter';
export default {
  name:'Search',
  components:{
    topbar,
    ad,
    FooterComponent
  }
};
</script>

<style lang="scss" scoped>
@import '../../public/sass/base.scss';
.address{
    color: white;
    width: 68/$rem;
    font-size: 16/$rem;
    line-height: 52/$rem;
    text-align: center;
    i{
        font-size: 23/$rem;
    }
}
.select-ad{
    width: 276/$rem;
    height: 100%;
    color: #fff;
    font-size: 20/$rem;
    line-height: 52/$rem;
    text-align: center;
}
.home-page{
    padding-top: 10/$rem;
    width: 65/$rem;
    height: 100%;
    color: #fff;
    text-align: center;
    font-size: 12/$rem;
    i{
        font-weight: 700;
        font-size: 22/$rem;
    }
}
$rem: 469/16rem;
.search-box{
  font-size: 18/$rem;
  position: relative;
  padding: 13/$rem;
  input[type='text']{
    width: 357/$rem;
    height: 50/$rem;
    border:1/$rem solid #ccc;
    margin-right: 10/$rem;
    border-radius: 5/$rem;
    padding-left: 45/$rem;
    background-color: #fff;
  }
  i{
    font-size: 32/$rem;
    top: 22/$rem;
    left: 25/$rem;
    color: #999999;
    position: absolute;
  }
  input[type='submit']{
    border: 0;
    color: #999999;
    width: 75/$rem;
    height: 50/$rem;
    border-radius: 5/$rem;
    background-color: #dcdcdc;
  }
}
.keyword{
  font-size: 18/$rem;
  width: 469/$rem;
  height: 226/$rem;
  margin-bottom: 12/$rem;
  padding-top: 28/$rem;
  background-color: #fff;
  p{
    a{
      color: #333;
      text-align: center;
      width: 115/$rem;
      margin-bottom: 28/$rem;
      display: inline-block;
      border-bottom: 1/$rem solid #f2f0ec;
    }
    .divide-line{
      width: 1px;
      color: #f2f0ec;
    }
    a:nth-child(1){
      color: #fdb338;
    }
  }
}
.search-footer{
  padding-top: 20/$rem;
  border-top: 1/$rem solid #e2e2e0;
  >span{
    padding: 0 20/$rem;
    font-size: 15/$rem;
    color: $primary-color;
  }
}
</style>