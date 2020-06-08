
var pagebutton = document.getElementById('NextButton');
pagebutton.click();
setTimeout(step2, 2000);

function step2(){
    var myname = document.getElementById('QR~QID2');
    myname.value = 'your name';
    var pagebutton = document.getElementById('NextButton');
    pagebutton.click();
    setTimeout(step3, 2000);
}

function step3(){
    var myname = document.getElementById('QR~QID3');
    myname.value = 'your manager name';
    var pagebutton = document.getElementById('NextButton');
    pagebutton.click();
    setTimeout(step4, 2000);  
}

function step4(){
    document.getElementById('QR~QID4~7').checked = true;
    var pagebutton = document.getElementById('NextButton');
    pagebutton.click();
    setTimeout(step5, 2000);
}

function step5() {
  document.getElementById('QR~QID5~2').checked = true;
  var pagebutton = document.getElementById('NextButton');
  pagebutton.click();  
}
