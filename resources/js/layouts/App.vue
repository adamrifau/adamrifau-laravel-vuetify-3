<template>
    <div>
      
        <router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>


    </div>
</template>

<script>

export default {
    data(){
        return{
            string: 'From Vue'
        }
    },

    mounted(){
        console.log(this.$router.go);
    }
}

</script>