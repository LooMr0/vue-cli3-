<template>
  <button class="lb-button lb-button-primary">
    <slot></slot>
  </button>
</template>

<script>
  window.text = 'lb'
  import('@/assets/index')
  console.log(text)
  export default {
    name: 'lb-button',
    data () {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
  .lb-button {
    line-height: 1.499;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    height: 32px;
    &-primary {
      color: #fff;
      background-color: #1890ff;
      border-color: #1890ff;
      text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
      -webkit-box-shadow: 0 2px 0 rgba(0,0,0,0.045);
      box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    }
  }
</style>
