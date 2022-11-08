const questions=document.querySelectorAll(".question")
const answers=document.querySelectorAll(".answer")
const div=document.querySelectorAll(".fam")

for(let i=0;i<questions.length;i++)
{
    questions[i].addEventListener("click",function(){
    if(answers[i].classList.contains("active")){
        answers[i].classList.remove("active")
        div[i].innerHTML="&plus;"
    }
    else{
        for(let j=0;j<answers.length;j++)
            {
            answers[j].classList.remove("active")
                div[j].innerHTML="&plus;"
            }
        answers[i].classList.add("active")
        div[i].innerHTML="&times;"
    } 
    })
}