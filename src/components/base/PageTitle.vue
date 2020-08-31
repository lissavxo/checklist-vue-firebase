<template>
  <div id="page-title">
    <h1>
        {{title}}
    </h1>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {  
  data(){
    return{
      drawer:true,
    }
  },
  props:{
    title:{
      type:String,
      required: true
    }
  }
}
</script>

<style lang="scss">
#page-title{
  //text-align: center;
  width: 100%;
  padding-bottom: 50px;
  & h1{
    font-weight: lighter;
  }
}
</style>