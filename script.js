let count = 0;
const allBtn = document.getElementsByClassName("add-btn");
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count += 1;
    const placeName = e.target.parentNode.childNodes[1].innerText;
    const price = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const selectedContainer = document.getElementById('selected-place-container');
    
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = placeName;
    const p2 = document.createElement('p');
    p2.innerText = price;

    li.appendChild(p);
    li.appendChild(p2);
    selectedContainer.appendChild(li);
    
    const budget = document.getElementById('budget').innerText;
    const budgetToInt = parseInt(budget);
    const budgetAmount = document.getElementById('budget');
    const budgetCalc = budgetToInt - parseInt(price);
    budgetAmount.innerText = budgetCalc;
    if(budgetCalc < 0) {
        alert("Budget amount is only $900!");
        return;
    }

    // const totalCost = document.getElementById('total-cost').innerText;
    // const toInteger = parseInt(totalCost);
    // const sum = toInteger + parseInt(price);
    
    // const grandTotal = document.getElementById('grand-total').innerText;
    // const grandToInteger = parseInt(grandTotal);
    // const sum2 = grandToInteger + parseInt(price);
    e.target.parentNode.parentNode.style.backgroundColor = "gray";
    e.target.setAttribute("disabled", true);
    totalCost('total-cost', price);
    setInnerText('cart-count', count);
    setInnerText('budget', budgetCalc);
  });
}
function totalCost(id, value) {
    const totalCost = document.getElementById(id).innerText;
    const toInteger = parseInt(totalCost);
    const sum = toInteger + parseInt(value);
    setInnerText(id, sum);
}
function grandTotalCost(category) {
    const totalCost = document.getElementById('total-cost').innerText;
    const toInteger = parseInt(totalCost);

    if(category == 'bus') {
        setInnerText('grand-total', toInteger + 100);
    } else if (category == 'train') {
        setInnerText('grand-total', toInteger - 200);
    } else if (category == 'flight') {
        setInnerText('grand-total', toInteger + 500);
    } else {
        setInnerText('grand-total', toInteger);
    }
}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}