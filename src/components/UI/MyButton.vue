<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn {
    margin: 10px;
    padding: 10px;
    background: none;
    color: darkslategray;
    border: 2px solid darkslategray;
    border-radius: 10px;
    background-color: rgb(208, 229, 235);
    font-size: 15px;
    cursor: pointer;
}

.btn:hover {
    background-color: aqua;
    transform: scale(1.05);
    transition: .8 ease;
}
</style>