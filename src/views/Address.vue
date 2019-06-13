<template>
  <div>
      <topbar>
        <router-link tag="div" to="/Home" class="address">
            <i class="iconfont icon-left"></i>
        </router-link>
        <div class="select-ad">选择城市</div>
        <router-link  tag="div" to="/Home" class="home-page">
            <i class="iconfont icon-home"></i>
            <p>首页</p>
        </router-link>
        <router-link  tag="div" to="/Home/Search"  class="search-page">
            <i class="iconfont icon-search"></i>
            <p>搜索</p>
        </router-link>
      </topbar>
      <div class="city-page">
          <div class="current-city">
              <p>定位城市：<span>武汉</span></p>
          </div>
          <div class="hot-city">
              <h3>热门城市</h3>
              <p v-for="(item, index) in 3" :key="index">
                  <span>北京</span>
                  <span>北京</span>
                  <span>北京</span>
                  <span>北京</span>
              </p>
          </div>
          <div class="all-city">
              <h3>全部城市</h3>
              <div class="first-letter">
                <span>A</span>
                <span>B</span>
                <span>C</span>
                <span>D</span>
                <span>E</span>
                <span>F</span>
                <span>G</span>
                <span>H</span>
                <span>J</span>
                <span>k</span>
                <span>L</span>
                <span>M</span>
                <span>N</span>
                <span>P</span>
                <span>Q</span>
                <span>R</span>
                <span>S</span>
                <span>T</span>
                <span>W</span>
                <span>S</span>
                <span>Y</span>
                <span>Z</span>
              </div>
              <div class="city-items">
                  <dl class="clearfix" v-for="(citys, index) in 3" :key="index">
                      <dt>A</dt>
                      <dd v-for="item in city" :key="item">{{ item }}</dd>
                  </dl>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import topbar from '../components/HomeTopBar.vue';
export default {
    data(){
        return{
            city:['鞍山','安庆','安阳','安顺','安康','安丘',
                '阿拉善盟','阿克苏','安吉','安岳','安平','安溪',
                '安宁','安化','阿拉尔','安福','阿勒泰市','阿图什市',
                '安州区','阿荣旗','安陆市','阿特区','阿贝','阿勒泰',
                '澳门','更多>>']
        }
    },
    components:{
        topbar
    }
};
</script>

<style lang="scss" scoped>
@import '../../public/sass/base.scss';
$rem : 469/16rem;
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
    font-size: 25/$rem;
    line-height: 52/$rem;
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
.city-page{
    padding: 13/$rem;
    .current-city{
        font-size: 17/$rem;
        line-height: 52/$rem;
        padding-left: 15/$rem;
        border-radius: 3/$rem;
        background-color: #fff;
        span{
            color: $primary-color;
        }
    }
    .hot-city{
        h3{
            margin: 25/$rem 0 15/$rem 0;
            font-size: 18/$rem;
            font-weight: normal;
        }
        p{
            font-size: 18/$rem;
            display: flex;
            background-color: #fdfdfc;
            span{
                flex: 1;
                text-align: center;
                line-height: 53/$rem;
                border: {
                    right: 1/$rem solid #eae6df;
                    bottom: 1/$rem solid #eae6df;
                }
                background-color: #fff;
            }
        }
    }
    .all-city{
        h3{
            margin: 25/$rem 0 15/$rem 0;
            font-weight: normal;
        }
        .first-letter{
            width: 100%;
            height: 263/$rem;
            font-size: 18/$rem;
            background-color: #fff;
            border-bottom: 1/$rem solid #f1efea;
            span{
                width: 20%;
                height: 20%;
                line-height: 263/$rem/5;
                color: $primary-color;
                text-align: center;
                display: inline-block;
            }
        }
    }
    .city-items{
        dl{
            background-color: #fff;
            dt{
                float: left;
                width: 25%;
                color: #b7b7b7;
                font-size: 35/$rem;
                text-align: center;
                line-height: 100/$rem;
                border: 1px solid #f1efea {
                    top: 0;
                    left: 0;
                }
            }
            dd{
                float: left;
                width: 25%;
                font-size: 18/$rem;
                text-align: center;
                line-height: 50/$rem;
                border: 1px solid #f1efea {
                    top: 0;
                    left: 0;
                }
            }
        }
    }
}
</style>