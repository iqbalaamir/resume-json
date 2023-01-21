let a = [{
        "name": "Aamir Iqbal",
        "qualification": "MCA",
        "experience": "2years",
        "work": {
            "JOB1": {
                "Company": "Inmovidu",
                "Position": "FullStack"
            },
            "JOB2": {
                "Company": "Blockcod",
                "Position": "Software Development Engineer"
            }
        }
    },
    {
        "name": "Aamir Iqbal",
        "qualification": "MCA",
        "experience": "2years",
        "work": {
            "JOB1": {
                "Company": "Inmovidu",
                "Position": "FullStack"
            },
            "JOB2": {
                "Company": "Blockcod",
                "Position": "Software Development Engineer"
            }
        }
    }
];

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element['work']['JOB1']);
}
a.forEach(element => {
    console.log(element['work']['JOB2']);
});
for (const key in a) {
    if (Object.hasOwnProperty.call(a, key)) {
        const element = a[key];
        console.log(element.name);
    }
}
for (const i of a) {
    console.log(i.qualification);
}