<template>
    <div class="user">
        <div class="user__item">
            <div><strong>ФИО:</strong> {{ user.name }}</div>
            <div><strong>Дата рождения:</strong> {{ user.date }}</div>
        </div>
        <div class="user__btns">
            <my-button
            @click="$emit('del', user)"
            >Удалить</my-button>
            <my-button>Изменить</my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.user {
    display: flex;
    justify-content: space-between;
}

.user__item {
    padding: 10px;
}
</style>