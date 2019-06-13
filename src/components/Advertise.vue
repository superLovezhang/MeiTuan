<template>
  <div>
      <div class="ad-wrap line">
          <div class="btns">
              <a href="#">打开美团APP</a>
              <a href="#">下载APP优惠大</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../public/sass/base.scss';
.ad-wrap{
    width: 100%;
    height: 122/$rem;
    position: relative;
    background: url(https://ms0.meituan.net/touch/img/download_banner.png);
    background-size: cover;
    .btns{
        width: 100%;
        height: 41/$rem;
        left: -1/$rem;
        bottom: 15/$rem;
        position: absolute;
        text-align: center;
        :nth-child(1),
        :nth-child(2){
            width: 128/$rem;
            font-weight: 700;
            font-size: 12/$rem;
            line-height: 41/$rem;
            margin-right: 15/$rem;
            text-align: center;
            color: $primary-color;
            display: inline-block;
            border-radius: 35/$rem;;
            background-color: white;
            border: 1/$rem solid $primary-color;
        }
        :nth-child(2){
            color: white;
            margin-right: 0;
            background-color: $primary-color;
        }
    }
}
</style>