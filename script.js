let qrcode = select("img");
let qrtext = select("textarea");
let qrbtn = select('button')
let bannerElm = document.getElementById('banner');

qrbtn.addEventListener("click", generateQR);

function generateQR() {
    if (qrtext.value == ""){
        bannerElm.classList.add('banner-visible');
    }else{
        bannerElm.classList.remove('banner-visible');
        let size = "1000x1000";
        let data = qrtext.value;
        let baseURL = "http://api.qrserver.com/v1/create-qr-code/";
        let url = `${baseURL}?data=${data}&size=${size}`;
        qrcode.src = url;
    }
    
}

function select(elm) {
    return document.querySelector(elm);
}