$( document ).ready( onReady )

let employeeList = [];

function onReady(){
    createEmployeeList(employeeList);
    $('#addEmployee').on('click', handleAddEmployee );
    renderMonthlyCost(employeeList); 
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
            </tr>
        `;
        
    $('#employeeTableBody').append(newTableRow);
    }
}

function calculateMonthlyCost(employeesToSum) {
    let sum = 0;
    for (let employee of employeesToSum){ 
        sum =  employee.annualSalary / 12
    }
    return sum;
}

function renderMonthlyCost(employeesToSum) {
    let monthlyCost = calculateMonthlyCost(employeesToSum)
    $('#monthlyCost').text(monthlyCost)
}

function handleAddEmployee(){
    let newFirstName = $( '#firstNameInput' ).val();
    let newLastName = $( '#lastNameInput' ).val();
    let newId = $( '#idInput' ).val();
    let newTitle = $( '#titleInput' ).val();
    let newAnnualSalary = $( '#annualSalaryInput' ).val();

    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        id: newId,
        jobTitle: newTitle,
        annualSalary: newAnnualSalary,
    }
    
    employeeList.push(newEmployee)
    
        $( '#firstNameInput' ).val('');
        $( '#lastNameInput' ).val('');
        $( '#idInput' ).val('');
        $( '#titleInput' ).val('');
        $( '#annualSalaryInput' ).val('');
    
    createEmployeeList(employeeList);
    renderMonthlyCost(employeeList);
}
