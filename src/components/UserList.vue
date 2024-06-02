<template>   
        <h2><strong>Список контактов</strong></h2>
        <user-item 
        v-for="user in users"
        :user="user"
        :key="user.id"
        @del="$emit('del', user)"        
       />    
       
</template>
 <!-- прокидываю событие удаления поста из userList в app-->
<script>
import UserItem from "@/components/UserItem";
    export default {    
  components: {
    UserItem,
},
  props: {
    users: {
      type: Array,
      required: true
    }
  }
}

</script>
<style scoped>

</style>
