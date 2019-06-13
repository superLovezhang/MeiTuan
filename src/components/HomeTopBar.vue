<template>
  <div>
      <div class="header-top">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../public/sass/base.scss';

.header-top{
    width: 100%;
    height: 52/$rem;
    // line-height: 52/$rem;
    display: flex;
    background-color: $primary-color;
    
}
</style>