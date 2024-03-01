const myself = document.getElementById("myself-section");
const experience = document.getElementById("experience-section");
const portfolio = document.getElementById("portfolio-section");
const skills = document.getElementById("skills-section");

function scrollToMyself() {
    myself.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}
function scrollToExperience() {
    experience.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center'
    });
}
function scrollToPortfolio() {
    portfolio.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center'
    });
}
function scrollToSkills() {
    skills.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'center'
    });
}
