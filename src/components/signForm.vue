<script setup>

</script>

<template>
  <form>
    <slot></slot>
  </form>
</template>

<style scoped lang="scss">
    form {
        display: flex;
        flex-direction: column;
        width: 400px;
        margin: auto;
        font-size: 18px;
    }
</style>