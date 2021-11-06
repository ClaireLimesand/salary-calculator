$( document ).ready( onReady )

let employeeList = [
    {firstName: 'Claire', lastName: 'Placeholder', id: 12345, jobTitle: 'title', annualSalary: 100000},
];

function onReady(){
    $('#submitButton').on('click', createEmployeeList);
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
