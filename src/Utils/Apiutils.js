export function Fetchdata(url,method,body={},options={}){
    let _options={
        ...options
    }
    if(method.toUpperCase() ==='POST'){
        _options.body= JSON.stringify(body)
    }

    return fetch(url,{ 
        method,
        ..._options
    }).then(async(resp)=> {
    const status =resp.status
    return{
        data: await resp.json(),
        status
    }
    })

}

export function Fakelogin(user,pass){
    return new Promise((resolve,reject)=>{
setTimeout(()=>{
    if(user=== "abbas" && pass=== "123" ){
    resolve({user:{name:'abbas'},token: "eyJhbGciOiJIUzI1NiIsInR",status:200})
    }
    else{
        resolve({user:{name:''},token: "",status:404})
    }
},1500)
    })
}