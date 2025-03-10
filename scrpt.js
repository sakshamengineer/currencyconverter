const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const btn = document.querySelector('#exchange');
btn.addEventListener('click' , async (evt) => {
    evt.preventDefault();
    let convert = document.querySelector('#convert');
    let fromcurr = document.querySelector('#fromcur').value.toLowerCase();
    let tocurr = document.querySelector('#tocur').value.toLowerCase();
    let num = document.querySelector('#num');
    let amt = num.value;
    if (amt === "" || amt < 0 ){
        amt = 0;
        num.value = "0";
    }
    const url = `${BASE_URL}/${fromcurr}.json`;
    let resp = await fetch(url);
    let data = await resp.json()
    let rate = data[`${fromcurr}`][`${tocurr}`];
    let finalamt = num.value * rate;
    convert.innerText = `${num.value} ${fromcurr.toUpperCase()} = ${finalamt.toFixed(3)} ${tocurr.toUpperCase()}`;
})