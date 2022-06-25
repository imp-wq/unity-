<template>
    <div class="footer-container">
        <a class="text" @click="tips()" href="javascript:;">版权所有：牛兕科技(北京)有限公司 联系我们：123456789</a>
    </div>
</template>

<script>
import { ElMessage } from 'element-plus'

export default {
    setup() {
        const tips = () => {
            ElMessage("欢迎联系我们")
        }

        return {
            tips
        }
    }
}
</script>

<style scoped>
.footer-container {
    height: 100%;
    background-color: skyblue;
    text-align: center;
}

.text {
    line-height: 60px;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
}

.text:hover {
    color: greenyellow;
}
</style>