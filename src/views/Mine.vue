<template>
  <div>
    <top-bar>
        <router-link tag="div" to="/Home" class="address">
            <i class="iconfont icon-left"></i>
        </router-link>
        <div class="select-ad">我的美团</div>
        <router-link  tag="div" to="/Home" class="home-page">
            <i class="iconfont icon-home"></i>
            <p>首页</p>
        </router-link>
        <router-link  tag="div" to="/Home/Search"  class="search-page">
            <i class="iconfont icon-search"></i>
            <p>搜索</p>
        </router-link>      
    </top-bar>
    <div class="user-info">
      <div class="user-avatar">
        <img src="https://ms0.meituan.net/touch/img/pic-default.png" alt="">
      </div>
      <div class="account-info">
        <p>ycd673050811</p>
        <p>账户余额：<span>0</span>元</p>
        <i class="iconfont icon-right"></i>
      </div>
    </div>
    <div class="order">
      <div class="all-order">
        <div class="icon" style="background-color:#06c1ae;">
          <i class="iconfont icon-dingdan"></i>
        </div>
        <p>全部订单</p>
      </div>
      <div class="order-items">
        <div class="order-item">
          <i class="iconfont icon-qianbao"></i>
          <p>待付款</p>
        </div>
        <div class="order-item">
          <i class="iconfont icon-money"></i>
          <p>待使用</p>
        </div>
        <div class="order-item">
          <i class="iconfont icon-comment-w"></i>
          <p>待评价</p>
        </div>
        <div class="order-item">
          <i class="iconfont icon-shouhou"></i>
          <p>退款/售后</p>
        </div>
      </div>
    </div>
    <div class="nav-items">
      <div class="nav-item">
        <div class="icon">
          <i class="iconfont icon-star"></i>
        </div>
        <span>我的收藏</span>
        <i class="iconfont icon-right"></i>
      </div>
      <div class="nav-item">
        <div class="icon" style="background-color:#eb2c00;">
          <i class="iconfont icon-43"></i>
        </div>
        <span>我的抵用券</span>
        <i class="iconfont icon-right"></i>
      </div>
      <div class="nav-item">
        <div class="icon" style="background-color:#f5b345;">
          <i class="iconfont icon-gift"></i>
        </div>
        <span>我的抽奖单</span>
        <i class="iconfont icon-right"></i>
      </div>
      <div class="nav-item">
        <div class="icon"  style="background-color:#954bd8;">
          <i class="iconfont icon-jifen"></i>
        </div>
        <span>积分换礼品</span>
        <i class="iconfont icon-right"></i>
      </div>      
    </div>
    <mine-footer></mine-footer>
  </div>
</template>

<script>
import TopBar from '@/components/HomeTopBar';
import MineFooter from '@/components/HomeFooter';
export default {
  components:{
    TopBar,
    MineFooter
  }
};
</script>

<style lang="scss" scoped>
$rem : 469/16rem;
.address{
    color: white;
    width: 68/$rem;
    font-size: 16/$rem;
    line-height: 58/$rem;
    text-align: center;
    i{
        font-size: 29/$rem;
    }
}
.select-ad{
    width: 276/$rem;
    height: 100%;
    color: #fff;
    font-size: 25/$rem;
    line-height: 58/$rem;
    text-align: center;
}
.home-page,
.search-page{
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
.search-page{
    width: 63/$rem;
}
.user-info{
  width: 100%;
  padding: 0 15/$rem;
  height: 100/$rem;
  display: flex;
  margin-bottom: 15/$rem;
  position: relative;
  align-items: center;
  background: url(https://ms0.meituan.net/touch/img/my-photo.png);
  background-size: cover;
  .user-avatar{
    float: left;
    width: 80/$rem;
    height: 100/$rem;
    margin-right: 20/$rem;
    display: flex;
    align-items: center;
    img{
      width: 100%;
    }
  }
  .account-info{
    float: left;
    font-size: 16/$rem;
    p{
      line-height: 35/$rem;
      span{
        color: #fe9e22;
      }
    }
    i{
      top: 40/$rem;
      right: 15/$rem;
      position: absolute;
    }
  }
}
.order{
  width: 469/$rem;
  height: 165/$rem;
  font-size: 18/$rem;
  margin-bottom: 12/$rem;
  background-color: #fff;
  .all-order{
    line-height: 60/$rem;
    padding-left: 12/$rem;
    border-bottom: 1/$rem solid #f2f0ec;
    .icon{
      width: 30/$rem;
      text-align: center;
      line-height: 30/$rem;
      display: inline-block;
      border-radius: 3/$rem;
      background-color: #0092de;
      i{
        color: #fff;
      }
    }
    p{
      display: inline-block;
      padding: 0 15/$rem;
    }
  }
  .order-items{
    width: 100%;
    height: 105/$rem;
    display: flex;
    align-items: center;
    .order-item{
      width: 25%;
      text-align: center;
      i{
        font-size: 38/$rem;
      }
    }
  }
}
.nav-items{
  width: 469/$rem;
  height: 238/$rem;
  font-size: 18/$rem;
  background-color: #fff;
  .nav-item{
    width: 100%;
    position: relative;
    line-height: 60/$rem;
    padding: 0 12/$rem;
    border-bottom: 1/$rem solid #ccc;
    .icon{
      width: 30/$rem;
      text-align: center;
      margin-right: 15/$rem;
      line-height: 30/$rem;
      display: inline-block;
      border-radius: 3/$rem;
      background-color: #0092de;
      i{
        color: #fff;
      }
    }
    >i{
      right: 12/$rem;
      color: #333;
      position: absolute;
    }
  }
}
</style>