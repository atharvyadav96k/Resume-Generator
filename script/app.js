const next = document.getElementById("next");
const img_inp = document.getElementById('img-inp');
const name_inp = document.getElementById("name-inp");
const dob_inp = document.getElementById('dob-inp');
const Nationality_inp = document.getElementById('Nationality-inp');
const email_inp = document.getElementById('email-inp');
const PersonalDetails_inp = document.getElementById('PersonalDetails-inp');
const Hobbies_inp = document.getElementById('Hobbies-inp');
const WorkingExperience_inp = document.getElementById('WorkingExperience-inp');
const Courses_inp = document.getElementById('Courses-inp');
const NameofInstitute_inp = document.getElementById('NameofInstitute-inp');
const Passingdate_inp = document.getElementById('Passingdate-inp');
const LastYearGrades_inp = document.getElementById('LastYearGrades-inp');
const Skills_inp = document.getElementById('Skills-inp');
const MoreAboutYourSelf_inp = document.getElementById('MoreAboutYourSelf-inp');

// Place to display data
const user_name = Array.from(document.getElementsByClassName('user-name'));
const dob = Array.from(document.getElementsByClassName('dob'));
const Nationality = Array.from(document.getElementsByClassName('Nationality'));
const Email = Array.from(document.getElementsByClassName('Email'));
const PersonalDetails = Array.from(document.getElementsByClassName('PersonalDetails'));
const Hobbies = Array.from(document.getElementsByClassName('Hobbies'));
const WorkingExperience = Array.from(document.getElementsByClassName('WorkingExperience'));
const Courses = Array.from(document.getElementsByClassName('Courses'));
const NameOfInstitute = Array.from(document.getElementsByClassName('NameOfInstitute'));
const PassingDate = Array.from(document.getElementsByClassName('PassingDate'));
const LastYearGrades = Array.from(document.getElementsByClassName('LastYearGrades'));
const Skills = Array.from(document.getElementsByClassName('Skills'));
const MoreInformation = Array.from(document.getElementsByClassName('MoreInformation'));
const profile_img = Array.from(document.getElementsByClassName('profile-img'));

next.addEventListener('click', () => {
    displayContent(user_name, name_inp.value);
    displayContent(dob, dob_inp.value);
    displayContent(Nationality, Nationality_inp.value)
    displayContent(Email, email_inp.value)
    displayContent(PersonalDetails, PersonalDetails_inp.value)
    displayContent(Hobbies, Hobbies_inp.value)
    displayContent(WorkingExperience, WorkingExperience_inp.value)
    displayContent(Courses, Courses_inp.value)
    displayContent(Courses, Courses_inp.value)
    displayContent(PassingDate, Passingdate_inp.value)
    displayContent(LastYearGrades, LastYearGrades_inp.value)
    displayContent(Skills, Skills_inp.value)
    // displayContent(MoreInformation, MoreAboutYourSelf_inp.value)

    // Read the selected image file
    const file = img_inp.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            // Set the source of each profile image to the data URL
            profile_img.forEach((ele) => {
                ele.src = e.target.result;
            });
        };
        reader.readAsDataURL(file);
    }
});

function displayContent(obj, val){
    obj.forEach((ele)=>{
        ele.innerText = val;
    })
}
