var work = {
    "jobs": [{
        "position": "Intern",
        "employer": "Baucontrol",
        "description": "Baustoffprüfer",
        "dates": "2010",
        "location": "Bingen"
    },{
        "position": "working student",
        "employer": "Züblin",
        "description": "Programmer, writing a multi model container filter application, making one last course at University and wirting Master Thesis about Building Information Modeling Based Ecological Evaluation",
        "dates": "2010-2012",
        "location": "Stuttgart"
    },{
        "position": "BIM Engineer",
        "employer": "Züblin",
        "description": "Doing everything to improve 5D Model Creation",
        "dates": "2012-today",
        "location": "Stuttgart"
    }]
};

var projects = {
    "projects":[{
            "title": "Teamcenter Application Test",
            "dates": "2016",
            "description": "",
            "images": ["images/fry.jpg"]
        },
        {
            "title": "Numerical algorithm tool for railways alignment",
            "dates": "2014-2016",
            "description": "",
            "images": ["images/fry.jpg","images/fry.jpg"]
        }]
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
        "location": "Germany"
    },
    "skills": ["C#",".NET","JavaScript"]
};


var education = {
    "schools": [{
            "name": "Gymnasium Gonsenheim",
            "dates": "1998-2005",
            "degree": "Abitur",
            "city": "Mainz"
        },
        {
            "name": "Technical University Darmstadt",
            "dates": "2005-2012",
            "degree": "M.Sc. Computational Eningeering",
            "city": "Darmstadt"
        }
    ],

    "onlineCourses": [{
        "title": "Nanodegree Webdeveloper candidate",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/"
    }]
};


if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(var skillIndex = 0; skillIndex < bio.skills.length; skillIndex++){
        var formattedHTMLskill = HTMLskills.replace("%data%", bio.skills[skillIndex]);
        $("#skills").append(formattedHTMLskill);
        //console.log(formattedHTMLskill);
    }
}

function displayWork(){
    for(index in work.jobs){
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].position);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
        var formattedDescription =HTMLworkDescription.replace("%data%", work.jobs[index].description);
        var formattedExperience = formattedEmployer + formattedTitle + formattedDates + formattedLocation+ formattedDescription;
        $(".work-entry:last").append(formattedExperience);

        //console.log(work.jobs[index]);
    }
}

displayWork();

$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});
/* Lesson 10-Quiz10
$("#main").append(internationalizeButton) // ??? was in helper.js ;-)
function inName(name){
    var names = name.trim().split(" ");
    return names[0].charAt(0).toUpperCase() + names[0].slice(1,names[0].length) + " " + names[1].toUpperCase();
}
*/
projects.display = function(){
    //console.log(projects);
    //console.log(projects.projects);

    projects.projects.forEach(function(project){
        $("#projects").append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedProjecDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedProjectImage = "";
        for(image in project.images){
            formattedProjectImage += HTMLprojectImage.replace("%data%", project.images[image]);
        }
        var formattedProject = formattedProjectTitle + formattedProjectDates + formattedProjecDescription + formattedProjectImage;
        $(".project-entry:last").append(formattedProject);
        console.log(formattedProject);
    })
}
projects.display();

/*
$("#mapDiv").append(googleMap);
*/


