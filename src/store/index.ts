import { createPinia } from 'pinia';
// 引入用户信息
import { userInfo } from './modules/userInfo'

const store = createPinia();
export {userInfo};
export default store;
