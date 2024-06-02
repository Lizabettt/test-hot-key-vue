<template>
    <form @submit.prevent>
        <h3>Добавить пользователя</h3>
        <input 
        class="input" 
        v-model="user.name" 
        placeholder="ФИО" 
        type="text">
        
        <input 
        lass="input" 
        v-model="user.date" 
        placeholder="Дата рождения" 
        type="text">
        
        <my-button @click="createUser">Добавить контакт</my-button>
    </form>
</template>

<script>

export default {
    data() {
        return {
            user: {
                name: '',
                date: ''
            }
        }
    },
    methods: {
        createUser() {
            //генерирую id
            this.user.id = Date.now();
            //генерирую событие create и подпишусь на него в app
            this.$emit('create', this.user);
            this.user = {
                name: '',
                date: ''
            }
            
        }
    }
}
</script>
<style scoped></style>