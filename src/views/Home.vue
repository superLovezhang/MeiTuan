<template>
  <div>
    <topbar>
      <router-link tag="div" to="/Address" class="location">
        <span>北京 <i class="iconfont icon-down"></i></span>
      </router-link>
      <router-link to="/Home/Search" class="search-wrap">
          <span class="search-bar">输入商家/品类/商圈</span>
          <i class="iconfont icon-search"></i>
      </router-link>
      <router-link to="/Mine" class="mine">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
      </router-link>
    </topbar>
    <ad />
    <div class="classification" ref="classwrap">
      <div class="class-wrap" ref="classificat" @touchstart="slideTo($event)"  @touchmove="slideMove($event)"  @touchend="slideEnd($event)">
        <ul class="clearfix" v-for="(item, index) in classData" :key="index">
          <router-link tag="li" :to="{path :'/Home/'+items.title+''}" v-for="items in item.ul1" :key="items.title">
            <span></span>
            {{ items.title }}
          </router-link>
        </ul>
      </div>
      <div class="point" ref="points">
        <span class="active"></span>
        <span></span>
      </div>
    </div>
    <div class="shop-list">
      <dl>
        <dt>猜你喜欢</dt>
        <router-link tag="dd" to="/Shop" v-for="(item, index) in shopData" :key="index">
          <img :src="item.imgUrl">
          <div class="item">
            <h3>{{ item.title }}</h3>
            <p>{{ item.descri }}</p>
            <p>{{ item.price }}元<span> 门市价:{{ item.shopPrice }}元</span><span class="special">已售{{ item.sale }}</span></p>
          </div>
        </router-link>
      </dl>
      <div class="more">
        <p>查看全部团购</p>
        <p><i class="iconfont icon-right"></i></p>
      </div>
    </div>
    <FooterComponent />
  </div>
</template>
<script>
import classData from '../../public/Data/classification.json';
import topbar from '@/components/HomeTopBar.vue';
import ad from '@/components/Advertise.vue';
import FooterComponent from '@/components/HomeFooter';
export default {
  data(){
    return{
      classData: classData.data,
      shopData: [],
      elementX:0,
      tranX:0,
      index:0,
      startX:0,
      endX:0,
      disX:0
    }
  },
  created(){
    this.axios.get('/Data/shopData.json')
    .then((res)=>{
      if(res.status === 200 && res.statusText === "OK"){
        this.shopData = res.data.data;
      }
    }).catch(err=>{
      console.log(err)
    })
  },
  methods:{
    slideTo(e){
      this.$refs.classificat.style.transition = '';
      this.startX = e.changedTouches[0].clientX;
      this.elementX = this.$refs.classificat.offsetLeft;
    },
    slideMove(e){
      this.endX = e.changedTouches[0].clientX;
      this.disX = this.endX - this.startX;
      this.tranX = this.disX + this.elementX;
      this.$refs.classificat.style.left = ''+this.tranX+'px';
    },
    slideEnd(e){
      this.$refs.classificat.style.transition = 'all .5s';
      console.log(this.index)
      if(this.disX < 0){
        // 右划
        this.$refs.classificat.style.left =  -(this.$refs.classwrap.clientWidth) +'px';
        this.index = 1;
      }
      if(this.disX > 0){
        // 左滑
        this.$refs.classificat.style.left =  '0';
        this.index = 0;
      }
      let points = this.$refs.points.childNodes;
      for(let i=0; i<2; i++){
        points[i].className = '';
      }
      points[this.index].className = 'active';
    }
  },
  name:'Home',
  components:{
    topbar,
    ad,
    FooterComponent
  }
}
</script>
<style lang="scss" scoped>
@import '../../public/sass/base.scss';
.location{
        color: white;
        width: 68/$rem;
        font-size: 16/$rem;
        line-height: 52/$rem;
        text-align: center;
        i{
          font-size: 12/$rem;
          font-weight: 700;
        }
    }
.search-wrap{
    width: 299/$rem;
    height: 52/$rem;
    display: flex;
    align-items: center;
    position: relative;
    .search-bar{
        width: 100%;
        line-height: 32/$rem;
        border: none;
        display: block;
        font-size: 12/$rem;
        color: #68dbce;
        padding-left: 30/$rem;
        border-radius: 3/$rem;
        background-color: #05a494;
    }
    i{
      left: 10/$rem;
      top: 18/$rem;
      color: white;
      font-size: 20/$rem;
      position: absolute;
    }
}
.mine{
  width: 50/$rem;
  height: 52/$rem;
  padding: 8/$rem 0;
  color: white;
  font-size: 12/$rem;
  text-align: center;
  i{
    font-weight: 800;
    font-size: 28/$rem;
  }
  p{
    margin-top: -7/$rem;
  }
}



.classification{
  width: 100%;
  height: 183/$rem;
  overflow: hidden;
  position: relative;
  padding-top: 10/$rem;
  margin-bottom: 12/$rem;
  background-color: white;
    .class-wrap{
      width: 200%;
      height: 100%;
      position: absolute;
      ul{
        float: left;
        width: 50%;
        li{
          width: 20%;
          height: 81/$rem;
          float: left;
          font-size: 12/$rem;
          color: #666666;
          text-align: center;
          span{
            display: block;
            width: 42/$rem;
            height: 42/$rem;
            margin: 0 auto;
            background: url(../../public/images/01.png) no-repeat;
            background-size: cover;
          }
        }
    }
  }
  .point{
    width: 45/$rem;
    height: 10/$rem;
    bottom: 0;
    left: 50%;
    margin-bottom: 13/$rem;
    position: absolute;
    transform: translateX(-50%);
    span{
      width: 10/$rem;
      height: 10/$rem;
      float: left;
      border-radius: 50%;
      background-color: #f0efed;
    }
    :nth-child(2){
      float: right;
    }
    .active{
      background-color: $primary-color;
    }
  }
}
.shop-list{
  width: 100%;
  background-color: white;
  dl{
    padding: 0 10/$rem;
    dt{
      color: #333;
      font-size: 18/$rem;
      line-height: 43/$rem;
      border-bottom: 1/$rem solid #f2f0ec;
    }
    dd{
      width: 100%;
      height: 105/$rem;
      padding: 10/$rem 0;
      font-size: 13/$rem;
      color: #666666;
      border-bottom: 1/$rem solid #f2f0ec;
      img{
        width: 91/$rem;
        height: 86/$rem;
        margin-right: 10/$rem;
        vertical-align: top;
      }
      .item{
        display: inline-block;
        width: 296/$rem;
        height: 95/$rem;
        h3{
          color: #333;
          font-size: 17/$rem;
        }
        p:nth-of-type(1){
          line-height: 23/$rem;
          margin-bottom: 16/$rem;
        }
        p:nth-of-type(2){
          position: relative;
          font-size: 18/$rem;
          color: $primary-color;
          span{
            color: #666666;
            font-size: 13/$rem;
            // margin-left: 107/$rem;
          }
          .special{
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }
  $rem: 469/16rem;
  .more{
    display: flex;
    padding: 0 10/$rem;
    font-size: 18/$rem;
    line-height: 50/$rem;
    color: $primary-color;
    justify-content: space-between;
    i{
      font-weight: 700;
    }
  }
}
</style>