let students = [];

function addStudent(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;

    if(name === "" || email === "" || course === "" || age === "" || mobile === ""){
        alert("Please fill all fields");
        return;
    }

    students.push({
        name,
        email,
        course,
        age:Number(age),
        mobile
    });

    displayStudents();
    updateStats();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("age").value = "";
    document.getElementById("mobile").value = "";
}

function displayStudents(){

    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student,index)=>{

        table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>${student.age}</td>
            <td>${student.mobile}</td>
            <td>
                <button class="delete-btn"
                onclick="deleteStudent(${index})">
                Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function deleteStudent(index){
    students.splice(index,1);
    displayStudents();
    updateStats();
}

function updateStats(){

    document.getElementById("totalStudents").innerText =
    students.length;

    let totalAge = 0;

    students.forEach(student=>{
        totalAge += student.age;
    });

    let avgAge = students.length > 0
        ? (totalAge/students.length).toFixed(1)
        : 0;

    document.getElementById("averageAge").innerText = avgAge;
}