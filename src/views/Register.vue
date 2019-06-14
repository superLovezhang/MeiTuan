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
      <div class="progress">
        <div class="progress-items" ref="progress">
          <span class="active">输入手机号</span>>
          <span>输入验证码</span>>
          <span>设置密码</span>>
        </div>
      </div>
      <div class="verificate">
        <input type="text" placeholder="请输入短信中的验证码" v-model="inputs">
      </div>
      <div class="input-bottom">
        <a href="#" class="account-login"  ref="retrieve" @touchstart='toggle'>{{ title }}</a>
        <div class="btns">
          <a href="#" class="register-btn">注册</a>
          <a href="#" class="retrieve-password">找回密码</a>
        </div>
      </div>
  </div>
</template>

<script>
import TopBar from '@/components/HomeTopBar';
import { all } from 'q';
export default {
  data(){
    return{
      inputs: '',
      index: 0,
      title:'获取验证码'
    }
  },
  components: {
    TopBar
  },
  methods:{
    toggle(){
      if(this.inputs.length === 11){
        this.index++;
        this.title = '提交验证码'
      }
      else{return ; }
      let allSpan = this.$refs.progress.childNodes;
      allSpan[++this.index].style.color = '#06c1ae';
    }
  },
  watch:{
    inputs(NewValue){
      if(NewValue.length === 11){
        this.$refs.retrieve.style.backgroundColor = '#06c1ae';
      }else{
        this.$refs.retrieve.style.backgroundColor = '#dcdcdc';
      }
    }
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
.progress{
  height: 53/$rem;
  font-size: 18/$rem;
  margin-bottom: 15/$rem;
  background-color: #fff;
  .progress-items{
    display: flex;
    color: #aaaaaa;
    line-height: 53/$rem;
    justify-content: center;
    span{
      width: 119/$rem;
      color: #333;
      text-align: center;
      display: inline-block;
    }
    .active{
      color: $primary-color;
    }
  }
}
.verificate{
  input[type='text']{
    border: 0;
    width: 100%;
    color: #757575;
    height: 55/$rem;
    font-size: 18/$rem;
    padding-left: 20/$rem;
    background-color: #fff;
  }
}
.input-bottom{
  padding: 0 12/$rem;
    .account-login{
        display: block;
        width: 445/$rem;
        color: #fff;
        // color: #999999;
        font-size: 25/$rem;
        text-align: center;
        margin: 18/$rem 0 15/$rem 0;
        line-height: 60/$rem;
        border-radius: 5/$rem;
        // background-color: $primary-color;
        background-color: #dcdcdc;
    }
    .btns{
        display: flex;
        padding-right: 12/$rem;
        justify-content: space-between;
        .register-btn,
        .retrieve-password{
            color: #06c1ae;
            font-size: 18/$rem;
        }
    }
}
.active{
  color: $primary-color;
}
</style>