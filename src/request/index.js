import axios from "axios";
import serverConfig from "./config"


const serviceAxios = axios.create({
    baseURL: serverConfig.baseURL,
    timeout: 30000,
    withCredentials: false
});

/**
 * 一些常见的http状态码信息
 */
const httpCode = {
    302: '接口重定向了！',
    400: '参数不正确！',
    401: '您未登录，或者登录已经超时，请先登录！',
    403: '您没有权限操作！',
    404: '请求地址出错！',
    408: '请求超时！',
    409: '系统已存在相同数据！',
    500: '服务器内部错误！',
    501: '服务未实现！',
    502: '网关错误！',
    503: '服务不可用！',
    504: '服务暂时无法访问，请稍后再试！',
    505: 'HTTP 版本不受支持！'
}

/**
 * 给自定义的axios实例service添加一个请求拦截器
 */
serviceAxios.interceptors.request.use(config => {
    return config
}, error => {
    console.log('接口拦截请求，出错：' + error)
    return Promise.reject(error);
})

/**
 * 给自定义的axios实例service添加一个响应拦截器
 */
serviceAxios.interceptors.response.use(response => {
    if (response.status == '200' || response.status == '201') {
      let data = response.data
      if (data && data.header && data.header.errorCode == '0') {
        return Promise.resolve(data.body)
      }else if (data && data.code == '0002') {
        console.log('接口拦截返回结果，成功，但mock接口状态码不对：')
        console.log(response);
        return Promise.reject({
            response: {
                status: 1997,
                data: {
                    message: data.desc
                }
            }
        })
      }else {
        console.log('接口拦截返回结果，成功，但业务接口状态码不对：')
        console.log(response);
        return Promise.reject({
            response: {
                status: 1998,
                data: {
                    message: data.header.errorMsg
                }
            }
        })
      }
      
    } else {
      console.log('接口拦截返回结果，成功，但状态码不对：')
      console.log(response);
      return Promise.reject({
        response: {
            status: 1999,
            data: {
                message: response.data.message
            }
        }
      })
    }
  }, error => {
    console.log('接口拦截返回结果，出错：')
    console.log(error);
    if (error.response) {
      // 根据请求失败的http状态码去给用户相应的提示
      let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message
    }
    return Promise.reject(error)
})

export const axiosPost = (url, data, config = {}) => {
    return serviceAxios({
        method: "post",
        url,
        data,
        ...config
    });
}

export const axiosGet = (url, params, config = {}) => {
    return serviceAxios({
        method: "get",
        url,
        params,
        ...config
    });
}

export const axiosPut = (url, data, config = {}) => {
    return serviceAxios({
        method: "put",
        url,
        data,
        ...config
    });
}

export const axiosPatch = (url, data, headers) => {
    return serviceAxios({
        method: "PATCH",
        url,
        data,
        headers
    });
}