var work = {
    "jobs": [{
        "position": "Intern 4 weeks",
        "employer": "Baucontrol",
        "description": "Baustoffprüfer",
        "dates": "2005",
        "location": "Bingen"
    }, {
        "position": "Intern 4 weeks",
        "employer": "Jacobi Holzbau",
        "description": "Dachdecker",
        "dates": "2005",
        "location": "Mainz"
    }, {
        "position": "working student",
        "employer": "Züblin",
        "description": "Programmer, writing a multi model container filter application, making one last course at University and wirting Master Thesis about Building Information Modeling Based Ecological Evaluation",
        "dates": "2010-2012",
        "location": "Stuttgart"
    }, {
        "position": "BIM Engineer",
        "employer": "Züblin",
        "description": "Doing everything to improve 5D Model Creation",
        "dates": "2012-today",
        "location": "Stuttgart"
    }],
    "display": function() {
        for (index in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].position);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
            var formattedExperience = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
            $(".work-entry:last").append(formattedExperience);

            //console.log(work.jobs[index]);
        }
    }
};

var projects = {
    "projects": [{
            "title": "Teamcenter Application Test",
            "dates": "2016",
            "description": "",
            "images": ["images/fry.jpg"]
        },
        {
            "title": "Numerical algorithm tool for railways alignment",
            "dates": "2014-2016",
            "description": "",
            "images": ["images/fry.jpg", "images/fry.jpg"]
        }
    ],
    "display": function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedProjecDescription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedProjectImage = "";
            for (image in project.images) {
                formattedProjectImage += HTMLprojectImage.replace("%data%", project.images[image]);
            }
            var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjecDescription + formattedProjectImage;
            $(".project-entry:last").append(formattedProject);
            //console.log(formattedProject);
        })
    }
};

var bio = {
    "name": "Matthias Rätzke",
    "role": "BIM Engineer, Software Developer & Web Developer",
    "welcomeMessage": "Let me please introduce to myself",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mail": "raetzman@gmx.de",
        "phone": "(+49/0)-711 7883 8939",
        "github": "raetzman",
        "twitter": "raetzman85",
        "location": "Stuttgart",
        "xing": "https://www.xing.com/profile/Matthias_Raetzke"
    },
    "skills": ["C#", ".NET", "SQL", "CAD/CAE", "JavaScript"],
    "display": function() {

        // This solution is two lines
        var formattedHTMLName = HTMLheaderName.replace("%data%", bio.name);

        // now i use on line solution
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
        $("#header").prepend(formattedHTMLName);
        // also for phone
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.phone));
        // @mail
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.mail));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts.xing).replace("%contact%","xing"));
        $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skillIndex = 0; skillIndex < bio.skills.length; skillIndex++) {
                var formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[skillIndex]);
                $("#skills").append(formattedHTMLskill);
                //console.log(formattedHTMLskill);
            }
        }
    }
};


var education = {
    "schools": [{
            "name": "Gymnasium Gonsenheim",
            "dates": "1998-2005",
            "degree": "Abitur",
            "location": "Mainz",
            "major": "Math, English"
        },
        {
            "name": "Technical University Darmstadt",
            "dates": "2005-2009",
            "degree": "B.Sc. Computational Eningeering",
            "location": "Darmstadt",
            "major": "Computer Science for Construction Eningeering"
        },
        {
            "name": "Technical University Darmstadt",
            "dates": "2009-2011",
            "degree": "M.Sc. Computational Eningeering",
            "location": "Darmstadt",
            "major": "Computer Science for Construction Eningeering"
        }
    ],

    "onlineCourses": [{
        "title": "Nanodegree Webdeveloper candidate",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/"
    }],
    "display" : function () {
        // the start
        $("#education").append(HTMLschoolStart);
        // now the list items
        for (var schoolIndex = 0; schoolIndex < education.schools.length; schoolIndex++) {
                var formattedEducation = HTMLschoolName.replace("%data%",education.schools[schoolIndex].name);
                formattedEducation += HTMLschoolDegree.replace("%data%", education.schools[schoolIndex].degree);
                formattedEducation += HTMLschoolDates.replace("%data%", education.schools[schoolIndex].dates);
                formattedEducation += HTMLschoolLocation.replace("%data%", education.schools[schoolIndex].location);
                formattedEducation += HTMLschoolMajor.replace("%data%", education.schools[schoolIndex].major);
                $("#education").append(formattedEducation);

                // $("#education").append(HTMLschoolMajor.replace("%data%", no idea what to put here));
                //console.log(formattedHTMLskill);
        }
        $("#education").append(HTMLonlineClasses);
        for (var onlineCoursesIndex = 0; onlineCoursesIndex < education.onlineCourses.length; onlineCoursesIndex++) {
            var formattedPnlineSchool =  HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCoursesIndex].title);
            formattedPnlineSchool += HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCoursesIndex].school);
            formattedPnlineSchool += HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCoursesIndex].school)
            formattedPnlineSchool += HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCoursesIndex].dates)
            formattedPnlineSchool += HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCoursesIndex].url);
            $("#education").append(formattedPnlineSchool);
        }
    }
};


bio.display();

work.display();

projects.display();

education.display();


$("#mapDiv").append(googleMap);
