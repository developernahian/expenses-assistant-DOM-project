//TODO:global variable
let count = 0;

//TODO: function to get input value
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

//TODO: function for show error validation
function showError(id){
    document.getElementById(id).classList.remove('hidden');
}




//TODO: add event listener for calculate button
// const calculateButton = document.getElementById('calculate');
// calculateButton.addEventListener('click', function(){

// })
document.getElementById('calculate').addEventListener('click', function () {
    console.log('calculate button clicked');

    //TODO: count increment
    count = count + 1;

    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);
    // get value from function
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');
    console.log(income, software, courses, internet)
    console.log({income, software, courses, internet})
    console.table({income, software, courses, internet})


    //NOTE: eta live validation na. calculate button e click korar por validatin dekhabe. tobe live validation best practice. live validatio ta niche comment kora rakha ache. ei code comment kore  live validation er code comment out korle kaz korbe.
    //TODO: input validation after calculate button click
    if(income < 0 || isNaN(income)){
        //document.getElementById('income-error').classList.remove('hidden');
        //fuction call
        showError('income-error');
        return;
    }

    if(software < 0 || isNaN(software)){
        //document.getElementById('software-error').classList.remove('hidden');
        showError('software-error');
        return;
    }

    if(courses < 0 || isNaN(courses)){
        //document.getElementById('courses-error').classList.remove('hidden');
        showError('courses-error');
        return;
    }

    if(internet < 0 || isNaN(internet)){
        //document.getElementById('internet-error').classList.remove('hidden');
        showError('internet-error');
        return;
    }





    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    console.table({totalExpenses, balance})


    //TODO: validation (income theke total expenses big hole error dekhabe)
    if(totalExpenses > income){
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }




    // const totalExpensesElement = document.getElementById('total-expenses');
    // totalExpensesElement.innerText = totalExpenses.toFixed(2);
    // const balanceElement = document.getElementById('balance');
    // balanceElement.innerText = balance.toFixed(2);
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);
    
    //todo show results section by remove hidden class
    const result = document.getElementById('results')
    result.classList.remove('hidden')



    //todo history
    const historyItem = document.createElement('div');
    historyItem.className  = 'bg-white p-3 rounded-md shadow-sm border-l-2 border-blue-500';

    historyItem.innerHTML = `
    <p class="text-sm text-gray-700 font-semibold">Serial: ${count}</p>
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
    `
    const historyContainer = document.getElementById('history-list');


    //todo insertBefore er maddhome kothay add korbo seta bole dewa jai. 2 ta parameter accept kore. prothom ta ki insert korbo and second ta kothay insert korbo. eta appendChild er moto kaz kore. but appendChile e all time last e add hoy. Note that "prepend" o use kora jai. eta new method
    /*
    todo appendChild::: adds the node at the end.
    todo prepend::: adds the node at the start.
    todo insertBefore::: allows more control over the exact position by inserting the node before a specific reference node.
    */
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);


})








// TODO: add event listener for savings button
// const calculateSavingsButton = document.getElementById('calculate-savings');
// calculateSavingsButton.addEventListener('click', function () {
//     console.log('calculate savings button clicked');
// })
document.getElementById('calculate-savings').addEventListener('click', function(){
    console.log('calculate savings button clicked');

    //todo get saving percentage by user input value
    const savingPercentage = parseFloat(document.getElementById('savings').value);
    console.log(savingPercentage)



    // const income = parseFloat(document.getElementById('income').value);
    // const software = parseFloat(document.getElementById('software').value);
    // const courses = parseFloat(document.getElementById('courses').value);
    // const internet = parseFloat(document.getElementById('internet').value);
    // get value from function
    const income = getInputValueById('income');
    const software = getInputValueById('software');
    const courses = getInputValueById('courses');
    const internet = getInputValueById('internet');

    //todo calculate balance
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    console.table({totalExpenses, balance})


    //todo calculate saving ammount
    const savingAmount = (balance * savingPercentage) / 100;
    console.log(savingAmount)

    //todo update UI with saving ammount and remaining balance
    document.getElementById('savings-amount').innerText = savingAmount.toFixed(2);
    document.getElementById('remaining-balance').innerText = (balance - savingAmount).toFixed(2);
})


//TODO: history tab functionality
const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');

historyTab.addEventListener('click', function(){
    console.log('history tab clicked');

    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.remove('text-gray-600');

    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.add('text-gray-600');



    document.getElementById('expense-form').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')



});


//TODO: assistant tab click korle history tab hide hoye assistant tab open hobe and button color change hobe
//assistantTab ei variable ta global variable hisebe upore declear kora hoyeche
assistantTab.addEventListener('click', function(){
    console.log('assistant tab clicked');

    assistantTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    assistantTab.classList.remove('text-gray-600');

    historyTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')

})

/*

//TODO: live validation for input START
document.getElementById('income').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('income').value);

    console.log(inputValue);

    if(isNaN(inputValue) || inputValue < 0){
        document.getElementById('income-error').classList.remove('hidden');
        return;

    }

})


document.getElementById('software').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('software').value);

    console.log(inputValue);

    if(isNaN(inputValue) || inputValue < 0){
        document.getElementById('software-error').classList.remove('hidden');
        return;

    }

})

document.getElementById('courses').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('courses').value);

    console.log(inputValue);

    if(isNaN(inputValue) || inputValue < 0){
        document.getElementById('courses-error').classList.remove('hidden');
        return;

    }

})

document.getElementById('internet').addEventListener('input', function(){
    const inputValue = parseFloat(document.getElementById('internet').value);

    console.log(inputValue);

    if(isNaN(inputValue) || inputValue < 0){
        document.getElementById('internet-error').classList.remove('hidden');
        return;

    }

})

//END: live validation for input END

*/