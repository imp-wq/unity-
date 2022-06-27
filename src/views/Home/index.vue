<template>
    <div class="home-container">
        <el-container>
            <el-aside width="243px">
                <Aside />
            </el-aside>
            <el-container>
                <el-header height="75px">
                    <Header />
                </el-header>
                <el-main>
                    <router-view v-slot="{ Component }">
                        <transition name="slide" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </el-main>
            </el-container>
            <!-- <el-footer>
                <Footer />
            </el-footer> -->

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

.home-container {}

.home-container,
.el-container {
    height: 100%;
}

.el-main {
    background-image: url('@/assets/home/background.png');
}

.el-header,
.el-footer {
    padding: 0;

}


.el-aside {
    border-right: 1px solid #000;
}

.home-container {}

.el-main {
    overflow: hidden;
}
</style>