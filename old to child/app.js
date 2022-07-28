const man = [
    {
        name : 'hridoy',
        id   : 1,
        age   : 10,
        location   : 'uttara',
        
    },
    {
        name : 'azad',
        id   : 2,
        age   : 18,
        location   : 'mirpur',
    },
    {
        name : 'nahid',
        id   : 3,
        age   : 23,
        location   : 'dhaanmondi',
    },
    {
        name : 'mazhar',
        id   : 4,
        age   : 30,
        location : 'laksam',
    },
    {
        name : 'johir',
        id   : 5,
        age   : 40,
        location   : 'sabar',
    },
    {
        name : 'jamir',
        id   : 6,
        age   : 56,
        location  : 'cumilla',
    }
];

man.forEach((data) => {
    if(data.age >= 0 && data.age < 19){
        console.log(`
        your name = ${data.name}
        your id = ${data.id}
        your age = ${data.age}
        your location = ${data.location}

        you are a child. tahnks
        
        
        `);
    }else if(data.age >= 20 && data.age < 40){
        console.log(`
        your name = ${data.name}
        your id = ${data.id}
        your age = ${data.age}
        your location = ${data.location}

        you are a young. tahnks
        
        
        `);
    }else if(data.age >= 40 && data.age < 100){
        console.log(`
        your name = ${data.name}
        your id = ${data.id}
        your age = ${data.age}
        your location = ${data.location}

        you are a old. tahnks
        
        
        `);
    }

});

