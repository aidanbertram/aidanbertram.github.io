function print(n, obj){
    console.log('Problem ${n}', JSON.parse(JSON.stringify(obj)));
}

const employees = [
    {
        firstName: "Sam",
        department: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
    },
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
    },
    {
        firstName: "Bill",
        department: "HR",
        designation: "Executive",
        salary: 21200,
        raiseEligible: false
    },

];
print(1, employees);

const company = {
    companyName: "Tech Stars",
    website: "www.techstars.com",
    employees: employees
}
print(2, company);

const newEmployee ={
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false
}
company.employees.push(newEmployee);
print(3, employees);

let total = 0;
for(const employee of employees){
    total+= employee["salary"];
}
print(4, total);

for(const employee of employees){
    if(employee["raiseEligible"] == true){
        employee["salary"] *= 1.1;
        employee["raiseEligible"] = false
    }
}
print(5, employees);

const employeeWFH = ['Anna', 'Sam'];
for (const employee of employees) {
    let flag = false;
    for (const employeeName of employeeWFH) {
        if (employee.firstName === employeeName) {
            flag = true;
            break;
        }
    }
    employee.WFH = flag;
}
print(6, employees);