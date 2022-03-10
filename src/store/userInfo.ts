import { defineStore } from "pinia";

const userInfo=defineStore({
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
        setAge(age:number){
            this.age=age
        }
    }
})

export default userInfo