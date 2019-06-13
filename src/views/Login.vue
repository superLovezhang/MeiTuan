<template>
  <div>
      <top-bar>
        <div @touchend="$router.go(-1)" class="address">
            <i class="iconfont icon-left"></i>
        </div>
        <div class="select-ad">美团网</div>
        <div class="home-page">
            <i class="iconfont icon-daohang"></i>
            <p>导航</p>
        </div>
      </top-bar>
      <div class="login-method">
        <div class="login-wrap">
            <router-link to="/Login/account" class="login">美团账号登录</router-link>
            <router-link to="/Login/verificate" class="login">手机验证登录</router-link>
        </div>
        <div class="free-space">

        </div>
      </div>
      <router-view></router-view>   
  </div>
</template>

<script>
import TopBar from '@/components/HomeTopBar';
export default {
    components: {
        TopBar
    }
};
</script>

<style lang="scss" scoped>
@import '../../public/sass/base.scss';
$rem: 469/16rem;
.address{
    color: white;
    width: 68/$rem;
    font-size: 16/$rem;
    line-height: 64/$rem;
    text-align: center;
    i{
        font-size: 30/$rem;
    }
}
.select-ad{
    width: 395/$rem;
    height: 100%;
    color: #fff;
    font-size: 20/$rem;
    line-height: 64/$rem;
    text-align: center;
}
.home-page{
    padding-top: 10/$rem;
    width: 64/$rem;
    height: 100%;
    color: #fff;
    text-align: center;
    font-size: 12/$rem;
    i{
        font-weight: 700;
        font-size: 30/$rem;
    }
    p{
        margin-top: -5/$rem;
    }
}
.login-method{
    width: 100%;
    height: 54/$rem;

    background-color: #fff;
    .login-wrap{
        padding: 0 12/$rem;
        .login{
            position: relative;
            width: 222/$rem;
            line-height: 48/$rem;
            text-align: center;
            font-size: 18/$rem;
            display: inline-block;
            
            color: #333;
        }
        .router-link-active{
            color: $primary-color;
        }
        .router-link-active:after{
            content: '';
            width: 222/$rem;
            height: 6/$rem;
            position: absolute;
            left: 0;
            bottom: -6/$rem;
            background-color: $primary-color;
        }
    }
    .free-space{
        width: 469/$rem;
        height: 6/$rem;
        background-color: #ddd8ce;
    }
}
</style>