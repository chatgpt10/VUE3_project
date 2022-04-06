import { defineStore } from "pinia";
// 引入token方法
import {setToken, clearToken} from '@/utils/auth'
export  const userInfo=defineStore({
    id:'userInfo',
    state: ()=>{
        return { 
            name:'jack',
            age:18
        }
    },
    getters: {
        getNewName: (state)=>
          state.name+='【China】'
    },
    actions: {
        // 重置用户信息
        resetInfo() {
            this.$reset();
        },
        // 年龄设置
        setAge(age:number){
            this.age=age
        },
        // 登录后保存token 
         login(from: any){
            // const {result} =await userLogin()
            // const token =result?.token
            // if(token) {
            //     setToken(token)
            // }
            // return result;
            console.log(from);
            
            const token ='cnsoidhjiosdhiovhsdihvnisdhvhsdivhjis';
            setToken(token)
        },
        // 退出登录
        async logout(){
            await userLogout();
            this.resetInfo();
            clearToken();

        }
    }
})

// export default userInfo