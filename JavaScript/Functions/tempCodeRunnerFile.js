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
        course:'Btech ',
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

         student.marks.forEach(mark => {
            console.log(`${mark.subject} : ${mark.marks}`);
        });

        console.log("\nThank You.\n");

}

students.forEach(sendEmail);