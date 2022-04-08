// 请求选项接口
export interface RequestOptions{
    // 是否处理请求结果
    isTransport?:boolean;
}
//  返回res.data的interface（接口）
export interface IRequest<T=any>{
    code:number | string;
    result:T;
    message:string;
    status:string | number;
}

// 用户登录
export interface ILogin{
    // 账户名称
    username:string;
    // 账户密码
    password:string;
}