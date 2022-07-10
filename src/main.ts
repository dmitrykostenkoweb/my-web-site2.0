import {createApp} from 'vue'
// @ts-ignore
import VueKinesis from "vue-kinesis"
import App from './App.vue'
import router from './routes'


const app = createApp(App)

app.use(VueKinesis);
app.use(router)
app.mount('#app')
