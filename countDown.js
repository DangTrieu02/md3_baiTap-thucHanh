function countDown(min,sec,callback){
    let x= setInterval(()=>{
        sec--;
        console.log(`${min} : ${sec}`);
        if (sec===0){
            sec=60;
            min--;
            if (min<0){
                clearInterval(x)
                callback();
            }
        }
    },100)
}
function finished(){
    console.log(`count finished!`)
}
countDown(1,5,finished)