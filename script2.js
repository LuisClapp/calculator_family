let income = document.getElementById('incomes').value;

let expensescreditcard = document.getElementById('expensescreditcard').value;


let expensesdebitcard = document.getElementById('expensesdebitcard').value;

function calculateBalance() {
    const total = income - expensescreditcard - expensesdebitcard; 
    
    const itsOk = total >= 0;
    
   let balanceText = "negativo";

   if (itsOk) {
       balanceText = "positivo";
   }
   
   let result = (`${balanceText}` + " " + `${total.toFixed(2)}`)

   return [
       document.getElementById("balance").innerHTML = (`Seu saldo é ${result} R$`), 
        document.getElementById("getIncome").innerHTML = (`Receita de: ${income} R$`), 
        document.getElementById("getExpenseCreditCard").innerHTML = (`Despesas com cartão de crédito de: ${expensescreditcard} R$`), 
        document.getElementById("getExpenseDebitCard").innerHTML = (` Total das despesas com cartão de débito, PIX ou em espécie de: ${expensesdebitcard} R$`)
    ];
};