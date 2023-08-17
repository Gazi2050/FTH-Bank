document.getElementById('btn-deposite').addEventListener('click', function () {
    const depositField = document.getElementById('user-deposit')
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    depositField.value = ''
    if (isNaN(newDepositAmount)) {
        alert('please provide a valid number');
        return;
    }
    const depositTotalElement = document.getElementById('deposit-total')
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString)
    const currentDepositTotal = PreviousDepositTotal + newDepositAmount
    depositTotalElement.innerText = currentDepositTotal;
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);
    if (newDepositAmount > PreviousBalanceTotal) {
        alert('Not enough balance')
        return;
    }
    const currentBalanceTotal = PreviousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})