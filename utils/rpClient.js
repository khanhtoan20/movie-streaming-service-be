import rp from 'request-promise';
const request = {
    post: (url,formData,headers={}) => {
        let options = {
            followAllRedirects: true,
            headers: headers,
            method: 'POST',
            url: url,
            form: formData,
        } 
        return rp(options).then((res) => {
            return res;
        })
    },
    get: (url,headers={}) => {
        let options = {
            headers: headers,
            method: 'GET',
            url: url,
            resolveWithFullResponse: true,
        }        
        return rp(options).then((res) => {
            return res
        })
    }
}

export default request