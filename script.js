function updateRate() {
  const rate = document.getElementById("rate");
  const rateValue = document.getElementById("rateValue");

  rateValue.textContent = `${rate.value}%`;
}

function compute() {
  const principalInput = document.getElementById("principal");
  const principal = Number(principalInput.value);

  if (principal <= 0 || !Number.isFinite(principal)) {
    alert("Enter a positive number");
    principalInput.focus();
    return;
  }

  const rate = Number(document.getElementById("rate").value);
  const years = Number(document.getElementById("years").value);
  const interest = (principal * rate * years) / 100;
  const futureYear = new Date().getFullYear() + years;
  const result = document.getElementById("result");
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  result.innerHTML = `If you deposit <mark>${currency.format(principal)}</mark> at an interest rate of <mark>${rate}%</mark>, you will receive <mark>${currency.format(interest)}</mark> in simple interest by the year <mark>${futureYear}</mark>.`;
}

updateRate();
