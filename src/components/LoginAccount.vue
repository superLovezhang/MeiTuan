<template>
  <div>
      <div class="input-wrap">
          <input type="text" placeholder="账户名/手机号/Email">
          <input type="password" placeholder="请输入您的密码">
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
    padding-left: 12/$rem;
    background-color: #fff;
    input[type='text'],
    input[type='password']{
        width: 100%;
        height: 50%;
        border: 0;
        color: #757575;
        font-size: 18/$rem;
        padding-left: 5/$rem;
        background-color: #fff;
        border-bottom: 1/$rem solid #ccc;
    }
    input[type='password']{
        border: 0;
    }
    .input-bottom{
        .account-login{
            display: block;
            width: 445/$rem;
            color: #fff;
            font-size: 25/$rem;
            text-align: center;
            margin: 18/$rem 0 15/$rem 0;
            line-height: 60/$rem;
            border-radius: 5/$rem;
            background-color: #06c1ae;
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