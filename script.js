$( document ).ready( onReady )

let employeeList = [];
let monthlyCost = 0;

function onReady(){
    createEmployeeList(employeeList);
    $('#addEmployee').on('click', handleAddEmployee );
    // renderMonthlyCost(employeeList); 
}

function createEmployeeList(listName) {
    $('#employeeTableBody').empty();
    for (let employee of employeeList) {
        let newTableRow = `
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td>${"<button class='deleteButton'>Delete</button>"}</td>
            </tr>
        `;
        
    $('#employeeTableBody').append(newTableRow);
    $('.deleteButton').on('click', handleDeleteButton);
    }
}

function calculateMonthlyCost(employeesToSum) {
    let sum = 0;
    for (let employee of employeesToSum){ 
        sum +=  employee.annualSalary / 12
    }
    sum = sum.toFixed(2)
    return sum;
}

function renderMonthlyCost(employeesToSum) {
    monthlyCost = calculateMonthlyCost(employeesToSum)
    $('#monthlyCost').text(monthlyCost)
    if (monthlyCost > 20000){
        $('#turnRed').addClass('turnRed');
    } else   {
    $('#turnRed').removeClass('turnRed');
    }
};

function handleAddEmployee(){
    let newFirstName = $( '#firstNameInput' ).val();
    let newLastName = $( '#lastNameInput' ).val();
    let newId = $( '#idInput' ).val();
    let newTitle = $( '#titleInput' ).val();
    let newAnnualSalary = $( '#annualSalaryInput' ).val();
    
    addNewEmployee (newFirstName, newLastName, newId, newTitle, newAnnualSalary)
    
        $( '#firstNameInput' ).val('');
        $( '#lastNameInput' ).val('');
        $( '#idInput' ).val('');
        $( '#titleInput' ).val('');
        $( '#annualSalaryInput' ).val('');
    
    createEmployeeList(employeeList);
    renderMonthlyCost(employeeList);
}

function addNewEmployee (newFirstName, newLastName, newId, newTitle, newAnnualSalary){
    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        id: newId,
        jobTitle: newTitle,
        annualSalary: newAnnualSalary,
    }
    employeeList.push(newEmployee)
}

function handleDeleteButton() {
    $(this).closest('tr').remove();
    renderMonthlyCost();

}

// let index = findIndex
// $(rowID).remove();
  //remove employee Object by fed idNumber  
//   for (let i in array){
//     if (array[i].idNumber === idNumber ){
//       array.splice(i, 1);
//     };
//   };