<template>
    <div class="app">
        <my-button @click="getUsers">Получить список контактов</my-button>
        <user-form @create="createUser" />
        <div>
        </div>
        <user-list :users="users" @del="delUser" />

    </div>

</template>
<script>
import UserForm from '@/components/UserForm';
import UserList from '@/components/UserList';
import usersArr from '@/components/UsersArray.js';



export default {
    components: {
        UserList,
        UserForm,

    },

    data() {
        return {
            users: usersArr
             }
    },
    methods: {

        //добавление контакта
        createUser(user) { //принимает нового созданного контакта
            console.log(user);
            this.users.push(user)//пушу в массив
        },
        //удаление контакта
        delUser(user) {
            this.users = this.users.filter(p => p.id !== user.id)
        }
    },
}

</script>
<style></style>