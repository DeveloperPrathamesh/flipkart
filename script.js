
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

let getweather = () =>{
    let city = prompt("Enter a city name:")
    let url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    fetch(url, {method: 'get'})
    .then((res) => res.json())
    .then((data) =>{
       
        if (data.cod == 200){
            let temp = data.list[0].temp.day;
            let desc = data.list[0].weather[0].description;
            let city = data.city.name;
            alert(`The current temperature of ${city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()} is ${temp}°C and it seems to be ${desc}`) 
        }
        else {
        alert('Please enter a valid city name');
        }
    })
        
}
