$( document ).ready( onReady )

let employeeList = [];
let monthlyCost = 0;
let globalIndex = 0;

function onReady(){
    createEmployeeList(employeeList);
    $('#addEmployee').on('click', handleAddEmployee );
    renderMonthlyCost(employeeList); 
}

function createEmployeeList(listName) {
    $('#employeeTableBody').empty();
    for (let employee of employeeList) {
        let newTableRow = `
            <tr id="row${employee.employeeIndex}">
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td>
                    <button id="button${employee.employeeIndex}">Delete</button>
                </td>
            </tr>
        `;
        
    $('#employeeTableBody').append(newTableRow);
    $(`#button${employee.employeeIndex}`).on('click', handleDeleteButton);
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
}

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
    let employeeIndex = globalIndex;
    globalIndex ++
    let newEmployee = {
        firstName: newFirstName,
        lastName: newLastName,
        id: newId,
        jobTitle: newTitle,
        annualSalary: newAnnualSalary,
        employeeIndex: employeeIndex,
    }
    employeeList.push(newEmployee)
}

function handleDeleteButton(event) {
    console.log(event.target.id.substring(6))
    let employeeIdRender= (event.target.id.substring(6))
    for (let employees of employeeList){
        if (employeeIdRender == employees.employeeIndex) {
            employeeList.splice(employeeList.indexOf(employees), 1);
            $(`#row${employeeIdRender}`).remove();
        }
    }
}
  // $(this).closest('tr').remove();

