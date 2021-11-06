$( document ).ready( onReady )

// let employeeList = [];

// function createNewEmployee(firstName, lastName, id, title, annualSalary){
//     let newEmployee = {
//       firstName: firstNameInput,
//       lastName: lastNameInput,
//       id: idInput,
//       jobTitle: titleInput,
//       annualSalary: annualSalaryInput,
//     }
//     employeeList.push(newEmployee);
//     return true;
//   }
let employeeList = [{
    firstName: 'Claire', 
    lastName: 'Placeholder', 
    id: 12345, 
    jobTitle: 'title', 
    annualSalary: 100000
}];

function onReady(){
    createEmployeeList(employeeList)
    $('#addEmployee').on('click', handleAddEmployee )
}

function createEmployeeList(listName) {
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
        
    $('#employeeTable').append(newTableRow);
    }
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
    
}