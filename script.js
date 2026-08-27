const expenseForm = document.getElementById("expenseForm");

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Transaction form submitted");
});
