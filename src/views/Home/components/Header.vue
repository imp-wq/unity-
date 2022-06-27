<template>
    <div class="header-container">
        <div class="title">综合布线工程虚拟仿真系统</div>
        <img class="logo" src="@/assets/home/logo.png" alt="">
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
    height: 100%;
    background-color: #fff;
    display: flex;
    border-bottom: 1px solid #fff;
    justify-content: space-between;
}

.title {
    margin-left: 20px;
    font-size: 25px;
    color: #000;
    text-align: center;
    line-height: 75px;
    letter-spacing: 5px;
    font-weight: bold;
}

.logo {
    height: 80%;
    width: 400px;
    object-fit: fill;
}
</style>