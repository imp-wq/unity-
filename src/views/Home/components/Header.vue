<template>
    <div class="header-container">
        <img class="logo" :src="`${publicPath}logo.jpg`" alt="">
        <div class="title">综合布线系统</div>
    </div>

</template>

<script>

export default {
    setup() {
        const publicPath = process.env.BASE_URL
        return {
            publicPath
        }
    }
}
</script>

<style scoped>
.header-container {
    background-color: skyblue;
    display: flex;
    padding: 20px;
    border-bottom: 1px solid #fff;
}

.title {
    flex: 1;
    font-size: 50px;
    color: #fff;
    text-align: center;
    line-height: 100px;
    letter-spacing: 20px;
}

.logo {
    margin-left: 20px;
    height: 100px;
    width: 100px;
}
</style>