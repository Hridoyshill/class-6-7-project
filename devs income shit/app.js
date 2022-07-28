const devs = [
    {
        name : 'hridoy',
        id   : 1,
        skill   : 'java',
        location   : 'uttara',
        income   : 1400,
    },
    {
        name : 'hridi',
        id   : 2,
        skill   : 'javascript',
        location   : 'mirpur',
        income   : 1200,
    },
    {
        name : 'rofiq',
        id   : 3,
        skill   : 'php',
        location   : 'dhanmondi',
        income   : 1100,
    },
    {
        name : 'sofiq',
        id   : 4,
        skill   : 'mongo',
        location   : 'uttara',
        income   : 1300,
    },
    {
        name : 'amir',
        id   : 6,
        skill   : 'laravel',
        location   : 'mirpur',
        income   : 1000,
    },
    {
        name : 'nahid',
        id   : 6,
        skill   : 'java',
        location   : 'uttara',
        income   : 900,
    },
];

let total = 0;
devs.forEach((data) => {
    console.log(`
    name = ${data.name}
    id = ${data.id}
    skill = ${data.skill}
    location = ${data.location}
    income = ${data.income}
    
    `);
    total = total + data.income;
});
console.log(`total = ${total}`);