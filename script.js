const expenseForm = document.getElementById("expenseForm");

const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");

const transactionList = document.getElementById("transactionList");

const balanceElement = document.getElementById("balance");
const incomeElement = document.getElementById("income");
const expenseElement = document.getElementById("expense");

let transactions = [];

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = Number(amountInput.value);
  const type = typeInput.value;

  if (description === "" || amount <= 0) {
    return;
  }

  const transaction = {
    id: Date.now(),
    description,
    amount,
    type,
  };

  transactions.push(transaction);

  displayTransactions();
  updateSummary();

  expenseForm.reset();
});

function displayTransactions() {
  transactionList.innerHTML = "";

  if (transactions.length === 0) {
    transactionList.innerHTML = `
            <div class="empty-message">
                No transactions yet.
            </div>
        `;

    return;
  }

  transactions.forEach((transaction) => {
    const transactionElement = document.createElement("div");

    transactionElement.className = "transaction";

    transactionElement.innerHTML = `
            <div>
                <strong>${transaction.description}</strong>
                <span>${transaction.type}</span>
            </div>

            <strong>
                ₹${transaction.amount}
            </strong>
        `;

    transactionList.appendChild(transactionElement);
  });
}

function updateSummary() {
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    if (transaction.type === "income") {
      income += transaction.amount;
    } else {
      expense += transaction.amount;
    }
  });

  const balance = income - expense;

  balanceElement.textContent = `₹${balance}`;
  incomeElement.textContent = `₹${income}`;
  expenseElement.textContent = `₹${expense}`;
}
