function swapfunc(s1, s2) {
    let count = 0;
    let i=0;
    for(i=0; i<s1.length; i++){
        if (s1.charAt(i) != s2.charAt(i)){
            count+=1;
        }
    }    
    if(count%2===0){
        console.log(Math.floor(count / 2))
    }else{
        console.log("Not Possible")
    }
}


s1="110011"
s2="010111"   

//expected output 4

swapfunc(s1, s2)