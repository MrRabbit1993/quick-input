const $request = (url, config,Authorization) => {
    return new Promise((resolve, reject) => {
        console.log("请求",url,config,Authorization)
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${Authorization}`
            },
            body: JSON.stringify(config)
        })
        .then(res => res.json())
        .then(res => {
            console.log("相应",res)
            resolve(res)
        })
        .catch(err => reject(err))
    })
}
export default $request;