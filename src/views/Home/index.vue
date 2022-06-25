<template>
    <div class="home-container">
        <el-container>
            <el-header height="140px">
                <Header />
            </el-header>
            <el-container direction="horizontal">
                <el-aside>
                    <Aside />
                </el-aside>
                <el-main>
                    <transition name="slide" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
            <el-footer>
                <Footer />
            </el-footer>

        </el-container>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Aside from './components/Aside.vue'

export default {
    components: {
        Header,
        Footer,
        Aside
    }
}
</script>

<style scoped>
@import './transition.css';

.home-container,
.el-container {
    height: 100%;
}

.el-header,
.el-footer {
    padding: 0;
}


.el-aside {
    border-right: 1px solid #000;
}

.home-container {
    background-color: #D5EBF5;
}

.el-main {
    overflow: hidden;
}
</style>