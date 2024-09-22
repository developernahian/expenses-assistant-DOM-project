// const calculateButton = document.getElementById('calculate');
// calculateButton.addEventListener('click', function(){

// })
document.getElementById('calculate').addEventListener('click', function () {
    console.log('calculate button clicked');


    const income = parseFloat(document.getElementById('income').value);
    const  software = parseFloat(document.getElementById('software').value);
    const  courses = parseFloat(document.getElementById('courses').value);
    const  internet = parseFloat(document.getElementById('internet').value);
    console.log(income, software, courses, internet)
    console.log({income, software, courses, internet})
    console.table({income, software, courses, internet})


    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    console.table({totalExpenses, balance})


    // const totalExpensesElement = document.getElementById('total-expenses');
    // totalExpensesElement.innerText = totalExpenses.toFixed(2);
    // const balanceElement = document.getElementById('balance');
    // balanceElement.innerText = balance.toFixed(2);
    document.getElementById('total-expenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = balance.toFixed(2);
    
    //todo show results section by remove hidden class
    const result = document.getElementById('results')
    result.classList.remove('hidden')

})