/*
 * @Author: hms 1076507557@qq.com
 * @Date: 2024-07-14 16:00:09
 * @LastEditors: hms 1076507557@qq.com
 * @LastEditTime: 2024-07-14 17:06:19
 * @FilePath: \To-apply-for-a-job\vue-project\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


import { createApp } from 'vue'
import App from '@/App.vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//element-plus国际化
import zhCn from 'element-plus/es/locale/lang/zh-cn'

//获取实例对象
const app = createApp(App)
//安装element-plus
app.use(ElementPlus,{
    locale: zhCn,
})
//挂载实例对象
app.mount('#app')
