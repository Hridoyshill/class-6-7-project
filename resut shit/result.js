function Result(){
 
    this.result = function(marks){
        let gpa;
        let grade;
        if(marks >= 0 && marks < 33){
            gpa = 1,
            grade = 'f'
        }else if(marks >= 33 && marks < 40){
            gpa = 2,
            grade = 'd'
        }else if(marks >= 40 && marks < 50){
            gpa = 2.5,
            grade = 'c'
        }else if(marks >= 50 && marks < 60){
            gpa = 3,
            grade = 'b'
        }else if(marks >= 60 && marks < 70){
            gpa = 3.5,
            grade = 'a-'
        }else if(marks >= 70 && marks < 80){
            gpa = 4,
            grade = 'a'
        }else if(marks >= 80 && marks <= 100){
            gpa = 5,
            grade = 'a+'
        }
        return{
            gpa : gpa,
            grade : grade
        }
    }


    this.finalresult = function(bn, en, math, s, ss, rel){
      
        let cgpa;
        let finalgrade;

        let totalgpa = this.result(bn).gpa + this.result(en).gpa + this.result(math).gpa + this.result(s).gpa + this.result(ss).gpa + this.result(rel).gpa ;

        cgpa = totalgpa /6;

        if(bn < 33 || en < 33 || math < 33 || s < 33 || ss < 33 || rel < 33 ){
            finalgrade = 'f';
        }else if(cgpa >= 0 && cgpa <1){
            finalgrade = 'f';
        }else if(cgpa >= 1 && cgpa <2){
            finalgrade = 'd';
        }else if(cgpa >= 2 && cgpa <3){
            finalgrade = 'c';
        }else if(cgpa >= 3 && cgpa <3.5){
            finalgrade = 'b';
        }else if(cgpa >= 3.5 && cgpa < 4){
            finalgrade = 'a-';
        }else if(cgpa >= 4 && cgpa <5){
            finalgrade = 'a';
        }else if(cgpa == 5){
            finalgrade = 'a+';
        }

        return{
            finalcgpa :(finalgrade == 'f') ? 'faild' : cgpa.toFixed(2),
            finalresult : finalgrade
        }







        




    }
    



}