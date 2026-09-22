const students = {name : "jawad",
    age:17,
    school:"youcode",
    note :[18, 12, 17]
}
console.log("name :"+students.name,
    "age: "+students.age,
    "study at : "+students.school,
)
let somme = 0 
 for(let stu of students.note){
    somme += stu
 }
let moyenne = somme/ students.note.length
console.log(moyenne)
 if(moyenne > 14){
    console.log("mzyanne");
 }
 else if (moyenne >= 10){
    console.log("ma3likch")
 }
 else{
    console.log("kassol")
 }