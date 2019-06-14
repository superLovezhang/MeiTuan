<template>
  <div>
      <div class="footer">
          <div class="btns">
              <!-- <a href="/Login">登录</a>
              <a href="/Register">注册</a> -->
              <a :href="item.herfs" v-for="item in UserData" :key="item.user">{{ item.user }}</a>
              <div class="right-btn clearfix">
                  <span>城市：</span><a href="/Address" class="footer-city">武汉</a>
              </div>
          </div>
          <div class="footer-nav">
              <a href="#">首页</a>
              <a href="#" class="footer-divide">|</a>
              <a href="#">我的</a>
              <a href="#" class="footer-divide">|</a>
              <a href="#">美团下载</a>
              <a href="#" class="footer-divide">|</a>
              <a href="#">电脑版</a>
              <a href="#" class="footer-divide">|</a>
              <a href="#">帮助</a>
          </div>
          <div class="connection">
              <p>
                  <span>友情链接：</span>
                  <a href="#">猫眼电影</a>
                  <a href="#">大众点评</a>
                  <a href="#">美团旅行</a>
              </p>
              <p>
                  <a href="#">榛果民宿</a>
                  <a href="#">大众点评下载</a>
                  <a href="#">美团收银官网</a>
              </p>
              <p>
                  <a href="#">美团点评餐饮学院</a>
                  <a href="#">快驴进货商家合作</a>
              </p>
          </div>
          <div class="copy-right">
              <div class="hr"></div>
              <span>©2019 美团网  京ICP证070791号</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            UserData: JSON.parse(window.localStorage.getItem('user')) || [{user: '登录', herfs: '/Login'}, {user: '注册', herfs: '/Register'}]
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../public/sass/base.scss';
$rem: 469/16rem;
.footer{
    font-size: 18/$rem;
    padding: 20/$rem 13/$rem;
    .btns{
        margin-bottom: 35/$rem;
        a{
            width: 76/$rem;
            margin-right: 12/$rem;
            line-height: 38/$rem;
            text-align: center;
            color: $primary-color;
            display: inline-block;
            border-radius: 3px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            border: 1px solid $primary-color;
            &:nth-of-type(3){
                margin-right: 0;
            }
        }
        .right-btn{
            float: right;
            display: flex;
            align-items: center;
            .footer-city{
                width: 112/$rem;
            }
            span{
                display: inline-block;
                line-height: 38/$rem;
            }
        }
        // :nth-child(2){
        //     margin-right: 113/$rem;
        // }
    }
    .footer-nav{
        margin-bottom: 25/$rem;
        a{
            text-align: center;
            padding: 0 24/$rem;
            color: $primary-color;
            font-size: 15/$rem;
        }
        .footer-divide{
            padding: 0;
            color: #333;
        }
    }
    .connection{
        text-align: center;
        font-size: 15/$rem;
        margin-bottom: 30/$rem;
        a{
            line-height: 25/$rem;
            margin-right: 35/$rem;
            color: $primary-color;
        }
    }
    .copy-right{
        position: relative;
        color: #999999;
        font-size: 15/$rem;
        text-align: center;
        .hr{
            position: absolute;
            top: 50%;
            width: 100%;
            height: 1/$rem;
            z-index: -1;
            background-color: #cfcfce;
        }
        span{
            padding: 0 15/$rem;
            display: inline-block;
            background-color: #f0efed;
        }
    }
}
</style>