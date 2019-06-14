<template>
  <div>
    <top-bar>
        <router-link tag="div" to="/Home" class="address">
            <i class="iconfont icon-left"></i>
        </router-link>
        <div class="select-ad">团购详情</div>
        <router-link  tag="div" to="/Home" class="home-page">
            <i class="iconfont icon-star"></i>
            <p>收藏</p>
        </router-link>
        <router-link  tag="div" to="/Home/Search"  class="search-page">
            <i class="iconfont icon-daohang"></i>
            <p>导航</p>
        </router-link>      
    </top-bar>
    <ad></ad>
    <div class="shop-items">
        <div class="shop-picture">
            <img src="http://p0.meituan.net/deal/b4eefa487833ef9baa0e8362871e800516363.jpg" alt="">
            <div class="shop-descri">
                <h3>味多美</h3>
                <p>经典100%蛋糕一个，约20cm，圆形</p>
            </div>
        </div>
        <div class="goods-price">
            <p>196元<span>门市价218元</span></p>
            <a href="#">立即抢购</a>
        </div>
        <div class="shop-label">
            <p><i class="iconfont icon-tuikuan"></i>支持随时退款</p>
            <p><i class="iconfont icon-gou"></i>支持过期自动退</p>
            <p><i class="iconfont icon-yonghu"></i>已售135239</p>
        </div>
    </div>
    <div class="score-wrap">
        <div class="score">
            <div class="icon-gather">
                <i class="iconfont icon-icon"></i>
                <i class="iconfont icon-icon"></i>
                <i class="iconfont icon-icon"></i>
                <i class="iconfont icon-icon"></i>
                <i class="iconfont icon-icon special"></i>
                <span>4.1</span>
            </div>
            <div class="people-num">19716人评价></div>
        </div>
        <div class="comment">
            <a href="#">点心好2264</a>
            <a href="#">回头客999</a>
            <a href="#">菜品精致196</a>
            <a href="#">上菜快194</a>
            <a href="#">饮品赞99</a>
            <a href="#" class="specail">现做现卖98</a>
            <a href="#">交通便利21</a>
            <a href="#" class="specail">朋友聚餐11</a>
            <a href="#">高大上11</a>
            <a href="#" class="specail">家庭聚餐6</a>
        </div>
    </div>
    <div class="shop-info">
        <p>商家信息</p>
        <div class="shop-box">
            <div class="shop-address">
                <h3>味多美（加油大厦店）</h3>
                <p>海淀区蓝靛厂南路24号加油国际大厦一层...</p>
                <p><i class="iconfont"></i><span>离我最近</span></p>
            </div>
            <div class="tel">
                <div class="right-line">
                    <i class="iconfont icon-dianhua"></i>
                </div>
            </div>
        </div>
        <div class="branch-info">
            <span>查看全部268家适用分店</span>
            <i class="iconfont icon-right"></i>
        </div>
    </div>
    <div class="purchase-notes">
        <p>购买须知</p>
        <div class="notes">
            <h4>有效期</h4>
            <p>2015.7.6至2019.6.28（周末、法定节假日通用）</p>
        </div>
        <div class="notes">
            <h4>使用时间</h4>
            <p>09:00-21:00</p>
        </div>
        <div class="notes">
            <h4>使用规则</h4>
            <p>
                <ul>
                    <li>温馨提示：蛋糕上边的水果为时令水果。</li>
                    <li>团购用户不可同时享受商家其他优惠</li>
                    <li>电话预约，请至少提前三小时致电商家预约，预约逾期不保留</li>
                    <li>必须打客服电话提前预约4001170170转1，预约出示美团券</li>
                    <li>仅限到店自提，不提供配送服务</li>
                </ul>
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import TopBar from '@/components/HomeTopBar';
import ad from '@/components/Advertise';
export default {
    components: {
        TopBar,
        ad
    }
};
</script>

<style lang="scss" scoped>
$rem: 469/16rem;
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
.shop-items{
    width: 469/$rem;
    height: 438/$rem;
    margin-bottom: 13/$rem;
    .shop-picture{
        height: 253/$rem;
        position: relative;
        img{
            width: 100%;
        }
        .shop-descri{
            left: 0;
            bottom: 0;
            width: 100%;
            height: 50%;
            color: #fff;
            font-size: 18/$rem;
            position: absolute;
            padding: 45/$rem 0 0 20/$rem;
            // background-color: rgba(0, 0, 0, .4);
            background: linear-gradient(to top, rgba(0, 0, 0, .6), rgba(0, 0, 0, 0));
            h3{
                font-weight: 700;
                font-size: 25/$rem;
                margin-bottom: 10/$rem;
            }
        }
    }
    .goods-price{
        width: 469/$rem;
        height: 78/$rem;
        padding: 0 15/$rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1/$rem solid #ccc;
        background-color: #fff;
        p{
            color: #06c1ae;
            font-weight: 700;
            font-size: 30/$rem;
            span{
                font-weight: 400;
                color: #a2a2a2;
                font-size: 18/$rem;
            }
        }
        a{
            width: 163/$rem;
            line-height: 50/$rem;
            color: #fff;
            font-size: 25/$rem;
            text-align: center;
            border-radius: 5/$rem;
            background-color: #ff9900;
            display: inline-block;
        }
    }
    .shop-label{
        width: 100%;
        height: 116/$rem;
        color: #6bbd00;
        font-size: 18/$rem;
        display: flex;
        flex-wrap: wrap;
        padding: 15/$rem 18/$rem;
        background-color: #fff;
        p{
            width: 50%;
            line-height: 38/$rem;
            i{
                margin-right: 5/$rem;
                font-weight: 700;
                font-size: 25/$rem;
            }
        }
        p:nth-of-type(3){
            color: #7c7c7c;
        }
    }
}
.score-wrap{
    width: 469/$rem;
    height: 234/$rem;
    margin-bottom: 10/$rem;
    background-color: #fff;
    .score{
        height: 60/$rem;
        color: #999999;
        font-size: 18/$rem;
        padding: 0 12/$rem;
        border-bottom: 1/$rem solid #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .icon-gather{
            i{
                color: #ff9712;
            }
            .special{
                color: #e5e5e5;
            }
            span{
                margin-left: 15/$rem;
                color: #fa952f;
            }
        }
        .people-num{
            
        }
    }
    .comment{
        color: #fdb338;
        height: 100/$rem;
        font-size: 18/$rem;
        padding: 0 12/$rem;
        padding-top: 12/$rem;
        a{
            margin: 0 5/$rem 10/$rem 0;
            color: #fdb338;
            padding: 0 5/$rem;
            line-height: 38/$rem;
            display: inline-block;
            border-radius: 5/$rem;
            border: 1/$rem solid #fdb338;
        }
        .specail{
            color: #acacac;
            border: 1/$rem solid #acacac;
        }
    }
}
.shop-info{
    width: 469/$rem;
    height: 229/$rem;
    font-size: 18/$rem;
    margin-bottom: 15/$rem;
    background-color: #fff;
    >p{
        padding: 0 12/$rem;
        line-height: 55/$rem;
        border-bottom: 1/$rem solid #ccc;
    }
    .shop-box{
        display: flex;
        border-bottom: 1/$rem solid #ccc;
        justify-content: space-between;
        .shop-address{
            height: 124/$rem;
            padding: 23/$rem 24/$rem 19/$rem 13/$rem;
            h3{
                color: #000;
                font-weight: 700;
            }
            p{
                color: #6f6f6f;
            }
            p:nth-of-type(2){
                span{
                    color: #ec8a0c;
                }
            }
        }
        .tel{
            width: 76/$rem;
            text-align: center;
            padding: 23/$rem 0 19/$rem 0;
            line-height: 82/$rem;
            .right-line{
                border-left: 1/$rem solid #f2f0ec;
                i{
                    font-size: 25/$rem;
                    color: #48c1b3;
                }
            }
        }
    }
    .branch-info{
        width: 100%;
        color: #0cc2b0;
        font-size: 18/$rem;
        display: flex;
        justify-content: space-between;
        line-height: 51/$rem;
        padding: 0 12/$rem 24/$rem;
        i{
            font-weight: 700;
        }
    }
}
.purchase-notes{
    width: 469/$rem;
    height: 512/$rem;
    font-size: 19/$rem;
    background-color: #fff;
    >p{
        font-size: 20/$rem;
        padding: 0 13/$rem;
        line-height: 55/$rem;
        border-bottom: 1/$rem solid #ccc;
    }
    .notes{
        padding: 0 13/$rem;
        h4{
            color: #ffa826;
            line-height: 63/$rem;
        }
        p{
            padding-left: 10/$rem;
            ul{
               padding-left: 10/$rem;
               li{
                   line-height: 30/$rem;
                   list-style-type: disc;
               }
            }
        }
    }
}
</style>