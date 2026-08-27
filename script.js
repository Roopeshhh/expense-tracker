const expenseForm = document.getElementById("expenseForm");

const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeInput = document.getElementById("type");

const transactionList = document.getElementById("transactionList");

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = descriptionInput.value.trim();
  const amount = Number(amountInput.value);
  const type = typeInput.value;

  if (description === "" || amount <= 0) {
    return;
  }

  const transaction = document.createElement("div");

  transaction.className = "transaction";

  transaction.innerHTML = `
        <div>
            <strong>${description}</strong>
            <span>${type}</span>
        </div>

        <strong>
            ₹${amount}
        </strong>
    `;

  const emptyMessage = transactionList.querySelector(".empty-message");

  if (emptyMessage) {
    emptyMessage.remove();
  }

  transactionList.prepend(transaction);

  expenseForm.reset();
});
