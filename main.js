btn.addEventListener("click", function(){
    const mail = document.getElementById("email");
    const click = document.getElementById("btn");

    const regem = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

    if((mail.value) == ""){
        alert("이메일을 입력해주세요");
        mail.focus();
    }
    else if (!regem.test(mail.value)){
       alert("이메일을 제대로 입력해주세요");
        return false;
    }
    else alert("신청이 완료되었습니다");
})