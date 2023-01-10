function buyACar(money){
    let carPrice= 100
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (money>=carPrice){
            resolve();
        } reject(new Error("not enough"));
    },1000)
    })
}
buyACar(100)
    .then(()=>{
        console.log(`enough!`)})
    .catch((error)=>{
        console.log(error)})
