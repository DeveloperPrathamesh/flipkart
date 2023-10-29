
let changemode = () =>{
    let mybody = document.body;
    mybody.classList.toggle('dark');
}

let onpageload = () => {
    document.getElementById('crsl').style.opacity = '0.1';
    document.getElementById('items').style.opacity = '0.1';
}

let closecoupon = () => {
    let x = document.getElementById('coupon');
    x.style.visibility = 'hidden';
    document.getElementById('crsl').style.opacity = '1';
    document.getElementById('items').style.opacity = '1';
   
}