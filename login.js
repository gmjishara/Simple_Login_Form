const enterName=document.getElementById('input1');
const enterPassword=document.getElementById('input2');
const logingStatus=document.getElementById('h3');

function ifFunction(){
    if(enterName.value==="gmjishara" && enterPassword.value==="Mqs97123@"){
        logingStatus.innerText+=" "+"you are successfully logged";
    }
    else{
        logingStatus.innerText+=" "+"something went wrong";
    }
}
