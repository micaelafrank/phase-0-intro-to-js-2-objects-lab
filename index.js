// Write your solution in this file!
const employee ={
    name: "Micaela",
    streetAddress: "193 7th Avenue",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployeeKeyValue = {...employee, [key]: value,};
    return newEmployeeKeyValue;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}