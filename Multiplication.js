function Submit(){
    let number=Number(document.getElementById("txtNumber").value);
    for(a=1;a<=12;a++){
        let result=number*a;
        document.getElementById('secResult').innerHTML+=`${number} * ${a} = ${result}`+'<br>';
    }
}
function Reset(){
    document.getElementById('txtNumber').value="";
    document.getElementById('secResult').innerHTML="";
}