<template>
  <div class="main">
    <div>

    </div>
    <drawImg ref="myDrawImg" v-on:imgLoaded="imgLoaded" style="border: 1px solid #e4e4e4;border-radius: 5px;"></drawImg>
  </div>

</template>

<script>
  import drawImg from '@/components/drawImg/index.vue'
  export default {
    name: 'demo',
    data() {
      return {
      }
    },
    methods: {
      init(){
        var param = {img: 'https://t.lanxum.com/correction-api/files/file/writing_correct/1ffbaadb-19ad-4e42-9086-e32704be0fb0-14/stream', shapes: [],width:800}
        this.$refs.myDrawImg.init(param);
      },
      back() {
      },
      imgLoaded: function (data) {
        console.log(data);
        this.imgConfig = data;
      },
    },
    components: {
      drawImg,
    },
    mounted() {
      this.init();
    },
    directives: {
    }
  }
</script>

<style scoped>
</style>
