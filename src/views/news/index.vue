<template>
  <div class="hello">
    <lb-button @click.native="showMe">1234</lb-button>
  </div>
</template>

<script>
  import { testStatus } from '@/api/base'
  export default {
    name: 'news',
    props: {
      msg: String
    },
    methods: {
      showMe () {
        let res = testStatus({Id:'5185678582514953003'})
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
