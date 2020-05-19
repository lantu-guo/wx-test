// 封装请求函数的代码，支持promise
const bastUrl='http://localhost:3000'
function http(option){
  // data请求后台的参数
  const {url,method="",data={}}=option
  return new Promise((resolve,reject)=>{
    // 发请求
    wx.request({
      url: bastUrl+url,
      method:method,
      data,
      success(data){
        resolve(data.data)
      }  //请求成功之后的函数
    })
  })
}
http.post=(url,data)=>{
  return http({
    url,
    data,
    method:'post'
  })
}
http.get=(url,data)=>{
  return http({
    url,
    data,
    method:'get'
  })
}
// 执行
// http.post('xxx',{name:1},then());
// http.get('xxx',{name:1},then());
export default http;