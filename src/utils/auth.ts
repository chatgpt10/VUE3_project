// token 处理
const TokenKey ='my_vue3_token';
const TokenPrefix ='Bearer'; //prefix  token的前缀 这里是Bearer

const isLogin=()=>{
    return !!localStorage.getItem('TokenKey')
}

const getToken=()=>{
    return localStorage.getItem('TokenKey')
}
const setToken = (token: string) => {
    localStorage.setItem(TokenKey, token);
}
const clearToken = () => {
    localStorage.removeItem(TokenKey);
}

export { TokenPrefix,isLogin,getToken,clearToken,setToken }