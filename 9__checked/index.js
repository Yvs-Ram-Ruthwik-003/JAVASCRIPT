// .checked = property that determines the checked status of an HTML checkbox or radio button element

const mycheckbox = document.getElementById("mycheckbox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const phonepay = document.getElementById("phonepay");
const mysubmit = document.getElementById("mysubmit");

const submitresult = document.getElementById("submitresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){

    if(mycheckbox.checked){
        submitresult.innerHTML = `you are subscribed!`;
    }else{
        submitresult.innerHTML = `you are not subscribed`;
    }

    if(visa.checked){
        paymentresult.innerHTML = 'you are paying with Visa';
    }else if(mastercard.checked){
        paymentresult.innerHTML = 'you are paying with MasterCard';
    }else if(phonepay.checked){
        paymentresult.innerHTML = 'you are paying with Phonepay';
    }else{
        paymentresult.innerHTML = 'Please select an option to pay';
    }
}