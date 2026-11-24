async function loadStudents() {
    const response = await fetch("/api/students/");
    const data = await response.json();

    console.log(data);
}

loadStudents();