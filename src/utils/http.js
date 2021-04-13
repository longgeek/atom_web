// 导入封装好的 axios 实例
import request from '@/utils/request';

const http = {
    /**
     * methods: 请求
     * @param url 请求地址
     * @param params 请求参数
     */
    get(url, params={}) {
        return request({
            url: url,
            method: 'get',
            params: params,
        });
    },
    post(url, data={}) {
        return request({
            url: url,
            method: 'post',
            data: data,
        });
    },
    put(url, params={}) {
        return request({
            url: url,
            method: 'put',
            params: params,
        });
    },
    delete(url, params={}) {
        return request({
            url: url,
            method: 'delete',
            params: params,
        });
    }
}

// 导出
export default http;
