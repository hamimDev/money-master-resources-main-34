

document.getElementById('fast-btn').addEventListener('click', function(){
    const foodInput = document.getElementById('input-id-2');
    const foodInputString = foodInput.value;
    const foodInputNumber = parseInt(foodInputString);

    const rentInput = document.getElementById('input-id-3');
    const rentInputString = rentInput.value;
    const rentInputNumber = parseInt(rentInputString);

    const clothesInput = document.getElementById('input-id-4')
    const clothesInputString = clothesInput.value;
    const clothesInputNumber = parseInt(clothesInputString);

    const totalExpensesAll = foodInputNumber + rentInputNumber + clothesInputNumber;

    const showExpensesAll = document.getElementById('Total-Expenses-id');
    showExpensesAll.innerText = totalExpensesAll;

    const incomeInput = document.getElementById('input-id-1');
    const incomeInputString = incomeInput.value;
    const incomeInputNumber = parseInt(incomeInputString);
    
    const minusBalance = incomeInputNumber - totalExpensesAll;


    const showBalance = document.getElementById('balance-text');
    showBalance.innerText = minusBalance;

    if(incomeInputNumber < totalExpensesAll){
        alert('Tomar kasa ato taka nai !!');
        showExpensesAll.innerText = 0;
        showBalance.innerText = 0;
        return;

    }
})

document.getElementById('Save-2').addEventListener('click', function(){
    

    const incomeInput = document.getElementById('input-id-1');
    const incomeInputString = incomeInput.value;
    const incomeInputNumber = parseInt(incomeInputString);

    const parseintInput = document.getElementById('parseint-Value');
    const parseintInputString = parseintInput.value;
    const parseintInputNumber = parseInt(parseintInputString);

    const parseintMath = parseintInputNumber / 100;

    const ParseintMathShow = incomeInputNumber * parseintMath;
    const savingAmount = document.getElementById('saving-text');
    savingAmount.innerText = ParseintMathShow;

    const showBalance = document.getElementById('balance-text');
    const showBalanceString = showBalance.innerText;
    const showBalanceNumber = parseInt(showBalanceString);

    const finalShowBalance = showBalanceNumber - ParseintMathShow;

    const remainingBalance = document.getElementById('Remaining-Balance');
    remainingBalance.innerText = finalShowBalance;

    if(showBalanceNumber < ParseintMathShow){
        alert('No Saving');
        remainingBalance.innerText ='0';
        savingAmount.innerText = '0';
        return;
    }
    if(finalShowBalance === 0){
        remainingBalance.innerText = 0;
        savingAmount.innerText = 0;
    }
})