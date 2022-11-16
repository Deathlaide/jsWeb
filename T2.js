function checkSpam(str)
{
    let message = String(str).toLowerCase();
    if (message.includes("viagra") || message.includes("xxx")) {return true;}
    return false;
}

console.log(checkSpam("buy ViAgRA now"));   //true
console.log(checkSpam("free xxxxx"));       //true
console.log(checkSpam("innocent rabbit"));  //false