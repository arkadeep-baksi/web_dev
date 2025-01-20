setInterval(function(){
    const date = new Date();
    const hh = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();

    if (hh>11){
        console.log(`Current Clock Time- ${hh}:${mm}:${ss} PM`);
    }
    else{
        console.log(`Current Clock Time- ${hh}:${mm}:${ss} AM`);
    }
}, 1000);