let total=0;
let expenses=[];
function addExpense(){
    
    let name=document.getElementById("expenseName").value;
    let amount=document.getElementById("expenseAmount").value;
    amount= Number(amount);
    let expense={
        name: name,
        amount: amount
    };
    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpense();
    document.getElementById("expenseName").value ="";
    document.getElementById("expenseAmount").value="";
}
function displayExpense(){
    let list=document.getElementById("expenseList");
    list.innerHTML="";
    total=0;
    for(let i=0;i<expenses.length;i++){
        let item=document.createElement("li");
        item.textContent=expenses[i].name + " - Rs."+expenses[i].amount;
        list.appendChild(item);
        total=total+expenses[i].amount;

    }
    document.getElementById("totalAmount").textContent=total;
}
window.onload = function () {
    let savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
        expenses = JSON.parse(savedExpenses);
        displayExpense();
    }
};
