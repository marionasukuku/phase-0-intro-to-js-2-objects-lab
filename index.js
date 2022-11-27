// Write your solution in this file!
const employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = { ...employee, streetAddress: "11 Broadway" };
  return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmp = { ...employee[key] };
    delete newEmp[key];
    return newEmp;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}