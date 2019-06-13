<template>
  <div>
      <div class="input-wrap">
          <div class="input-user">
              <input type="text" placeholder="请输入手机号" maxlength="11">
              <span>获取验证码</span>
          </div>
          <div class="input-user">
              <input type="password" placeholder="请输入短信验证码">
          </div>
          <div class="input-bottom">
              <a href="#" class="account-login">登录</a>
              <div class="btns">
                <a href="#" class="register-btn">注册</a>
                <a href="#" class="retrieve-password">找回密码</a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
.input-wrap{
    width: 100%;
    height: 110/$rem;
    font-size: 18/$rem;
    padding-left: 12/$rem;
    background-color: #fff;
    .input-user{
        padding-right: 12/$rem;
        border-bottom: 1/$rem solid #ccc;
        input[type='text'],
        input[type='password']{
            border: 0;
            margin-right: 15/$rem;
            width: 303/$rem;
            height:55/$rem;
            color: #757575;
            font-size: 18/$rem;
            padding-left: 5/$rem;
            // background-color: red;
            background-color: #fff;
        }
        input[type='password']{
            width: 100%;
            border: 0;
            margin-right: 0;
        }   
        span{
            color: #999999;
            width: 125/$rem;
            line-height: 38/$rem;
            text-align: center;
            display: inline-block;
            background-color: #dcdcdc;
        }     
    }
    .input-bottom{
        .account-login{
            display: block;
            width: 445/$rem;
            color: #999999;
            font-size: 25/$rem;
            text-align: center;
            margin: 18/$rem 0 15/$rem 0;
            line-height: 60/$rem;
            border-radius: 5/$rem;
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
}
</style>