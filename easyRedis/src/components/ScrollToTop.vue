<template>
  <transition name="bounce">
    <div class="to-top-container" @click="scrollToTop" v-if="toTopShow">
      <i class="el-icon-to-top el-icon-arrow-up"></i>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        toTopShow: false,
        scrollTop: 0,
        realDom: null,
        minShowHeight: 500,
      };
    },
    props: ['dom'],
    methods: {
      handleScroll() {
        this.scrollTop = this.realDom.scrollTop;
        this.toTopShow = (this.scrollTop > this.minShowHeight) ? true : false;
      },
      scrollToTop() {
        let timer = null;
        let that = this;

        cancelAnimationFrame(timer);

        timer = requestAnimationFrame(function fn() {
          const nowTop = that.realDom.scrollTop;

          if (nowTop > 5000) {
            that.realDom.scrollTop -= 1000;
            timer = requestAnimationFrame(fn);
          }
          else if (nowTop > 1000 && nowTop <= 5000) {
            that.realDom.scrollTop -= 500;
            timer = requestAnimationFrame(fn);
          }
          else if (nowTop > 200 && nowTop <= 1000) {
            that.realDom.scrollTop -= 100;
            timer = requestAnimationFrame(fn);
          }
          else if (nowTop > 0 && nowTop <= 200) {
            that.realDom.scrollTop -= 15;
            timer = requestAnimationFrame(fn);
          }

          else {
            cancelAnimationFrame(timer);
            that.toTopShow = false;
          }
        });
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.realDom = document.querySelector(this.dom);
        this.realDom.addEventListener('scroll', this.handleScroll, true);
      });
    },
    destroyed() {
      this.realDom.removeEventListener('scroll', this.handleScroll, true);
    }
  };
</script>

<style type="text/css">
  .to-top-container {
    background-color: #409eff;
    position: fixed;
    right: 50px;
    bottom: 30px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .5);
    opacity: .5;
    z-index: 10000;
  }
  .to-top-container:hover{
    opacity: 1;
  }
  .to-top-container .el-icon-to-top{
    color: #fff;
    display: block;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
