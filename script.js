const inputNumber = document.querySelector("#input-number");

function centuryFromYear(year) {
  if (year % 100 === 0) {
    let century = (year / 100);
    console.log(century);
    // document.body.innerHTML = `<p>${century}</p>`;
    return (century);
  } else {
    let century = (Math.ceil((year / 100)));
    console.log(century);
    // document.body.innerHTML = `<p>${century}</p>`;
    return (century);
  }
}

inputNumber.addEventListener('input', event => {
  centuryFromYear(event.target.value);
});