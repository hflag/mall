import axios from 'axios'


export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL:'http://123.207.32.32:8000',
    baseURL: "http://106.54.54.237:8000/api/v1",
    timeout:5000
  })
  // 2.axios的拦截器
  instance.interceptors.request.use(config=>{
    // console.log(config);
    // 拦截后做一些必要的处理
    return config
  },err=>{
    console.log(err);
  })
  instance.interceptors.response.use(res=>{
    return res
  },err=>{

  })
  return instance(config)
}
