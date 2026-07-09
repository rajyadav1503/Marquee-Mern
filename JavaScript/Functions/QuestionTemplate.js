// template to send mail to students

const students = [

    { 
        name:'Raj',
        college:'Parul University',
        year:3,
        course:'Btech ',
        branch:'CSE',
        email:'rajyadav1503@paruluniversity.ac.in',
        phone:8837012591,
        marks:[
            {subject:'Maths',marks:90},
            {subject:'Social Science',marks:99},
            {subject:'English',marks:90},
            {subject:'Hindi',marks:95}

        ]
    },
        { 
        name:'Nitu',
        college:'Parul University',
        year:3,
        course:'Btech ',
        branch:'CSE',
        email:'nitu@paruluniversity.ac.in',
        phone:8837012591,
        marks:[
            {subject:'Maths',marks:90},
            {subject:'Social Science',marks:99},
            {subject:'English',marks:90},
            {subject:'Hindi',marks:95}

        ]
    },
        { 
        name:'Abhi',
        college:'Parul University',
        year:3,
        course:'Btech ',
        branch:'CSE',
        email:'abhi@paruluniversity.ac.in',
        phone:8837012591,
        marks:[
            {subject:'Maths',marks:90},
            {subject:'Social Science',marks:99},
            {subject:'English',marks:90},
            {subject:'Hindi',marks:95}

        ]
    },
        { 
        name:'Anuj Prakash Dixit',
        college:'Parul University',
        year:3,
        course:'Btech ',
        branch:'CSE',
        email:'anuj@paruluniversity.ac.in',
        phone:8837012591,
        marks:[
            {subject:'Maths',marks:90},
            {subject:'Social Science',marks:99},
            {subject:'English',marks:90},
            {subject:'Hindi',marks:95}

        ]
    },
        { 
        name:'Shani Kumar',
        college:'Parul University',
        year:3,
        course:'BCA',
        branch:'BCA',
        email:'shaniyadav1503@paruluniversity.ac.in',
        phone:8837012591,
        marks:[
            {subject:'Maths',marks:90},
            {subject:'Social Science',marks:99},
            {subject:'English',marks:90},
            {subject:'Hindi',marks:95}

        ]
    }
]

function sendEmail( students ) { 

    console.log( 

        `Hello !! , ${students.name} .
        This is a test mail .
        your email id is ${students.email}.

        your phone no is ${students.phone}.

        your college is ${students.college}.

        your course is ${students.course}.

        your marks are ${students.marks}.

        `);

         students.marks.forEach(mark => {
            console.log(`${mark.subject} : ${mark.marks}`);
        });

        console.log("\nThank You.\n");

}

students.forEach(sendEmail);


function getTotalMarks(student) {
    return student.marks.reduce((total, subject) => {
        return total + subject.marks;
    }, 0);
}

console.log(getTotalMarks(students[0])); // 374

function getTopper(students) {
    return students.reduce((topper, student) => {

        if (getTotalMarks(student) > getTotalMarks(topper)) {
            return student;
        }

        return topper;

    });
}

const topper = getTopper(students);

console.log(topper);

function getStudentsByCourse(courseName) {
    return students.filter(student => student.course.trim() === courseName);
}

const btechStudents = getStudentsByCourse("BCA");

console.log(btechStudents);