<template>
    <div class="container">
        <img class="image" src="@/assets/introduction/introductionImage.png" alt="">
        <div class="content"></div>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

}

.image {
    margin-top: 50px;
    width: 800px;
    height: 450px;
}

.content {
    width: 1000px;
    min-height: 200px;
    background: #fff;
    border: 10px solid #e5e7f2;
    border-radius: 20px;
}
</style>