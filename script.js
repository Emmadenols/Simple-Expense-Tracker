let expenses = [];
let totalSpent = 0;

const itemInput = document.getElementById("item-input");
const priceInput = document.getElementById("price-input");
const amountInput = document.getElementById("amount-input");
const addBtn = document.getElementById("add-btn");
const totalSpentAmount = document.getElementById("total-spent-amount");

addBtn.addEventListener('click', function() {
    const item = itemInput.value;
    const price = priceInput.value;
    const amount = Number(amountInput.value);

    if (item === '') {
      alert('Please enter an item');
      return;
    }
    if (isNaN(price) || price <=0 ) {
      alert('Please enter a valid value for price');
      return;
    }
    if (isNaN(amount) || amount <=0 ) {
      alert('Please enter a valid amount');
      return;
    }
    expenses.push({item, price, amount});

    totalSpent = (amount * price);
    totalSpentAmount.textContent = totalSpent;
    price.textContent = priceInput.value;
    item.textContent = itemInput.value;
    


})