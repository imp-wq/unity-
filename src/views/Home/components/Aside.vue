<template>
    <div class="aside-container">
        <div class="title">欢迎老师同学使用</div>
        <el-menu class="el-menu-vertical-demo" background-color="00FFFFFF" text-color="#fff" active-color="#9469B3"
            default-active="/introduce" router>
            <el-menu-item index="/introduce">
                <span class="list-item"> 简介 </span>
            </el-menu-item>

            <el-sub-menu index="/thesisTeach">
                <template #title>
                    <span class="list-item"> 理论教学 </span>
                </template>

                <el-menu-item index="/thesisTeach/knowledge">
                    <span class="list-item"> 知识基础 </span>
                </el-menu-item>
                <el-menu-item index="/thesisTeach/production">
                    <span class="list-item"> 产品仓库 </span>
                </el-menu-item>
            </el-sub-menu>

            <el-menu-item v-for="(item) in list" :key="item.title" :index="item.route">
                <span class="list-item">{{ item.title }}</span>
            </el-menu-item>
        </el-menu>
        <div class="contactUs">系统制作：牛兕科技(北京)有限公司 </div>
        <!-- <el-button @click="start" class="start" type="primary">进入系统</el-button> -->
    </div>
</template>

<script>
export default {
    setup() {
        const list = [
            {
                title: "实验指南",
                route: '/guide'
            }, {
                title: "教学视频",
                route: '/video'
            }]
        const start = () => {
            window.location.href = "http://www.baidu.com"
        }
        return {
            list,
            start
        }
    }
}
</script>

<style>
.aside-container {
    position: relative;
    background-color: #672a92;
    height: 100%;
    font-size: 24px;
    color: #fff;
}

.title {
    height: 75px;
    text-align: center;
    line-height: 75px;
}

.start {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
}

.list-item {
    width: 100%;
    text-align: center;
    font-size: 24px;
    letter-spacing: 5px;
}

.contactUs {
    position: absolute;
    bottom: 50px;
    width: 100%;
    text-align: center;
    font-size: 12px;
}
</style>