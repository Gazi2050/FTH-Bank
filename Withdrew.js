document.getElementById('btn-withdrew').addEventListener('click', function () {
    const withdrewField = document.getElementById('user-withdrew');
    const newWithdrewAmountString = withdrewField.value;
    const newWithdrewAmount = parseFloat(newWithdrewAmountString);
    withdrewField.value = '';
    if (isNaN(newWithdrewAmount)) {
        alert('please provide a valid number');
        return;
    }
    const withdrewTotalElement = document.getElementById('withdrew-total');
    const previousWithdrewTotalString = withdrewTotalElement.innerText;
    const previousWithdrewTotal = parseFloat(previousWithdrewTotalString);
    const balanceTotalElement = document.getElementById('balance-total');
    const PreviousBalanceTotalString = balanceTotalElement.innerText;
    const PreviousBalanceTotal = parseFloat(PreviousBalanceTotalString);
    if (newWithdrewAmount > PreviousBalanceTotal) {
        alert('Not enough balance')
        return;
    }
    const currentWithdrewTotal = previousWithdrewTotal + newWithdrewAmount;
    withdrewTotalElement.innerText = currentWithdrewTotal;
    const currentBalanceTotal = PreviousBalanceTotal - newWithdrewAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
}
)