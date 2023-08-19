/*

step 1 : addevent listener to the diposit

2 get deposit amount from the deposit input field
2/5 : convert string deposit amount to a number type

3: clear the diposite  input field after getting the value
4: get the previuse deposit-total

5 :calculate the deposit  total and set the deposit total
6 get the cuurent balance total
7 calculate the new balance and set it to the balance total element 

// */ 
// step1

document.getElementById('btn-diposit').addEventListener('click',function(){
    // console.log('diposit btn clicked')
    
// step 2

    const dipositField = document.getElementById('diposit-field');
    const newDepositAmountString =dipositField.value; 
    // console.log(newDepositAmountString);
    const newDepositAmount =parseFloat(newDepositAmountString);
    console.log(newDepositAmount);

// step 3 
dipositField.value = '';

// step 4
 
const depositTotalElement = document.getElementById('deposit-total');

const previuseDepositTotalString =depositTotalElement.innerText;
const previuseDepositTotal = parseFloat(previuseDepositTotalString);


// step 5
const newDepositTotal = previuseDepositTotal + newDepositAmount;
depositTotalElement.innerText = newDepositTotal;


// step 6

const  balanceTotalElement =document.getElementById('balance-total');
const previuseBalanceTotalString = balanceTotalElement.innerText;

const previuseBalanceTotalAmount = parseFloat(previuseBalanceTotalString);
// step 7 

const newBalanceTotal = previuseBalanceTotalAmount + newDepositAmount;
balanceTotalElement.innerText = newBalanceTotal;



}) 


