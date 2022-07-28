
let res = new Result();

student.map( (data) => {
    

console.log(`

student name     = ${data.name}
student roll     = ${data.roll}
student gender   = ${data.gender}

subject     marks             gpa                         grade
bangla      ${data.bn}      ${res.result(data.bn).gpa}    ${res.result(data.bn).grade}
english     ${data.en}      ${res.result(data.en).gpa}    ${res.result(data.en).grade}
math        ${data.math}    ${res.result(data.math).gpa}  ${res.result(data.math).grade}
s           ${data.s}       ${res.result(data.s).gpa}     ${res.result(data.s).grade}
ss           ${data.ss}       ${res.result(data.ss).gpa}  ${res.result(data.ss).grade}
rel         ${data.rel}     ${res.result(data.rel).gpa}   ${res.result(data.rel).grade}
-------------------------------------------------------------------------
total cgpa = ${res.finalresult(data.bn, data.en, data.math, data.s, data.ss, data.rel).finalcgpa}         and grade = ${res.finalresult(data.bn, data.en, data.math, data.s, data.ss, data.rel).finalresult}  


`);






});