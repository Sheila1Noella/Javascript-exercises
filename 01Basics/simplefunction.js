let MyGrade = function(currentgrades, totalgrades) {
    let myPercent = (currentgrades/totalgrades) * 100
    let Grades = ''
    if(myPercent>=90){
        Grades = 'A'
    }
    else if (myPercent>=80)
    {
        Grades = 'B'
    }
    else if (myPercent>=70)
    {
        Grades = 'C'
    }
    else if(myPercent>=60)
    {
        Grades = 'D'
    }
    else if(myPercent>=50)
    {
        Grades = 'E'
    }
    else{
        Grades = 'F'
    }
    return `Your grades is ${Grades} and percentage is ${myPercent}`
}
let yourResult = MyGrade(90,150)
console.log(yourResult);