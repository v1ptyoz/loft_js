const workers = [
    { "name": "John", "salary": 500 },
    { "name": "Mike", "salary": 1300 },
    { "name": "Linda", "salary": 1500 }
];

console.log(getWorthyWorkers(workers));

function getWorthyWorkers(array) {
    result = [];
    array.forEach(element => {
        if (element.salary > 1000) {
            result.push(element.name);
        }
    });
    return result;
}