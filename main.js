let lastSelection = 0;

function getRandom(){
    //select random student from max number given in form
    let maxStudents = document.getElementById("student_number").value;
    //don't select the same student twice
    let studentSelected = Math.floor(Math.random() * (maxStudents) + 1);
    while(studentSelected == lastSelection){
        studentSelected = Math.floor(Math.random() * (maxStudents) + 1);
    }
    lastSelection = studentSelected;
    //display selected student on page
    let display = document.getElementById("result");
    display.innerHTML = studentSelected;
}