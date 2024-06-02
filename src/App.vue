<template>
    <div class="app">
        <user-form 
        @create="createUser"/>
        <div>
        </div>
        <user-list 
        :users="users" 
        @del="delUser" />

    </div>

</template>
<script>
import UserForm from '@/components/UserForm';
import UserList from '@/components/UserList';
export default {
    components: {
        UserList,
        UserForm,
    },
    data() {
        return {
            users: [
                { id: 1, name: 'ggg', date: '111' },
                { id: 2, name: 'ggg2', date: '1118' },
                { id: 3, name: 'ggg5', date: '1117' },
            ],
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