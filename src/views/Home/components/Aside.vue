<template>
    <div class="aside-container">
        <el-menu default-active="0" class="el-menu-vertical-demo" text-color="skyblue" active-color="#000000" router>
            <el-menu-item v-for="(item) in list" :key="item.title" :index="item.route">
                <span>{{ item.title }}</span>
            </el-menu-item>
        </el-menu>
        <el-button @click="start" class="start" type="primary">进入系统</el-button>
    </div>
</template>

<script>
export default {
    setup() {
        const list = [
            {
                title: "简介",
                route: '/introduce'
            },
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
    background-color: #fff;
    height: 100%;
}

.start {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
}
</style>