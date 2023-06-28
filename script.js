
const projectTab = document.getElementById("projects-container");
const aboutTab   = document.getElementById("about-container");
const galleryTab = document.getElementById("gallery-container");
const facilitiesTab = document.getElementById("facilities-container");
const academicsTab = document.getElementById("academics-container");
const researchTab = document.getElementById("research-container");
const facultyTab = document.getElementById("faculty-container");

function projectDisplay() {
    projectTab.style.display = "flex";
    aboutTab.style.display   = 'none';
    galleryTab.style.display = 'none';
    facilitiesTab.style.display = "none";
    academicsTab.style.display = 'none';
    researchTab.style.display = 'none';
    facultyTab.style.display = 'none';
}
function aboutDisplay() {
    aboutTab.style.display   = 'flex';
    projectTab.style.display = "none";
    galleryTab.style.display = 'none';
    facilitiesTab.style.display = "none";
    academicsTab.style.display = 'none';
    researchTab.style.display = 'none';
    facultyTab.style.display = 'none';
}
function galleryDisplay() {
    galleryTab.style.display = 'flex';
    projectTab.style.display = 'none';
    aboutTab.style.display   = 'none';
    facilitiesTab.style.display = "none";
    academicsTab.style.display = 'none';
    researchTab.style.display = 'none';
    facultyTab.style.display = 'none';
}
function facilitiesDisplay() {
    facilitiesTab.style.display = "flex";
    galleryTab.style.display = 'none';
    projectTab.style.display = 'none';
    aboutTab.style.display   = 'none';
    academicsTab.style.display = 'none';
    researchTab.style.display = 'none';
    facultyTab.style.display = 'none';
}
function academicsDisplay() {
    academicsTab.style.display = 'flex';
    facilitiesTab.style.display = "none";
    galleryTab.style.display = 'none';
    projectTab.style.display = 'none';
    aboutTab.style.display   = 'none';
    researchTab.style.display = 'none';
    facultyTab.style.display = 'none';
}
function researchDisplay() {
    researchTab.style.display = 'flex';
    projectTab.style.display = "none";
    aboutTab.style.display   = 'none';
    galleryTab.style.display = 'none';
    facilitiesTab.style.display = "none";
    academicsTab.style.display = 'none';
    facultyTab.style.display = 'none';
}
function facultyDisplay() {
    researchTab.style.display = 'none';
    projectTab.style.display = "none";
    aboutTab.style.display   = 'none';
    galleryTab.style.display = 'none';
    facilitiesTab.style.display = "none";
    academicsTab.style.display = 'none';
    facultyTab.style.display = 'flex';
}

const project1Content = document.getElementById("projects-content1");
const project2Content = document.getElementById("projects-content2");
const project3Content = document.getElementById("projects-content3");
const project4Content = document.getElementById("projects-content4");

project1Content.style.display = 'none';
project2Content.style.display = 'none';
project3Content.style.display = 'none';
project4Content.style.display = 'none';

const project1btn = document.getElementById("projects-item1")

project1btn.addEventListener('click', projects1Display); 
function projects1Display() {
    if(project1Content.style.display == 'none') {
        project1Content.style.display = "block"; 
    }
    else {
        project1Content.style.display = "none"; 
    }
    project2Content.style.display = 'none';
    project3Content.style.display = 'none';
    project4Content.style.display = 'none';
}
function projects2Display() {
    if(project2Content.style.display === 'none') {
        project2Content.style.display = "block"; 
    }
    else {
        project2Content.style.display = "none"; 
    }
    project1Content.style.display = 'none';
    project3Content.style.display = 'none';
    project4Content.style.display = 'none';
}
function projects3Display() {
    if(project3Content.style.display === 'none') {
        project3Content.style.display = "block"; 
    }
    else {
        project3Content.style.display = "none"; 
    }
    project2Content.style.display = 'none';
    project1Content.style.display = 'none';
    project4Content.style.display = 'none';
}
function projects4Display() {
    if(project4Content.style.display === 'none') {
        project4Content.style.display = "block"; 
    }
    else {
        project4Content.style.display = "none"; 
    }
    project2Content.style.display = 'none';
    project3Content.style.display = 'none';
    project1Content.style.display = 'none';
}