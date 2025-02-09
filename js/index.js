const body = document.body; /*declares document body in variable*/

const today = new Date(); /*creates date object*/

const thisYear = today.getFullYear(); /*creates variable for current year*/

const footer = document.createElement('footer'); /*creates footer element*/

body.appendChild(footer); /*appends footer to body*/

const copyright = document.createElement('p'); /*creates paragraph element*/

const copyrightSymbol = '\u00A9'; /*creates variable for copyright symbol*/

copyright.innerHTML = `${copyrightSymbol} Eric Rodriguez ${thisYear}`; /*sets inner HTML of copyright element*/

footer.appendChild(copyright); /*appends copyright element to footer*/

const skills = ['HTML', 'CSS', 'Javascript', 'GitHub']; /*creates an array of skills*/

const skillsSection = document.querySelector("#skills"); /*selects skills section*/

const skillsList = skillsSection.querySelector("ul"); /*selects unordered list in skills section*/

for (let i = 0; i <skills.length; i++) {    /*iterates through skills array*/

    const skill = document.createElement("li"); /*creates list item element*/

    skill.innerText = skills[i]; /*selects inner text of list item*/

    skillsList.appendChild(skill); /*appends list item to skills section*/
};

const messageForm = document.forms["leave_message"]; /*selects leave message form*/

/*Retrieves values from form input fields*/
messageForm.addEventListener("submit", function(event) {/*adds events listener to form*/

    event.preventDefault(); /*prevents from reloading page before logging to console*/

    const usersName = event.target.usersName.value; /*creates variable for user name*/
    const usersEmail = event.target.usersEmail.value; /*creates variable for user email*/
    const usersMessage = event.target.usersMessage.value; /*creates variable for user message*/

    console.log("Name:", usersName); /*logs user name to console*/
    console.log("Email:", usersEmail); /*logs user email to console*/
    console.log("Message:", usersMessage); /*logs user message to console log*/

    const messageSection = document.querySelector("#messages"); /*selects messages section*/
    const messageList = messageSection.querySelector("ul"); /*selects unordered list in message section*/
    const newMessage = document.createElement("li"); /*creates list item element*/

    const userLink = document.createElement("a"); /*creates <a> element*/

    userLink.href = `mailto:${usersEmail}`; /*sets href attribute of <a> element*/
    userLink.textContent =usersName; /*sets visible text content of <a> element* as user's name*/

    const messageText = document.createElement("span"); /*creates span element*/
   
    messageText.textContent = usersMessage; /*sets text of span element as user's message*/

    newMessage.appendChild(userLink); /*appends <a> element to list item*/
    newMessage.appendChild(messageText); /*appends span element to list item*/

/*creates "Remove" button for each message*/
    const removeButton = document.createElement("button"); /*creates button element*/
    removeButton.textContent = "Remove"; /*sets text content of button element to "Remove"*/
    removeButton.type = "button"; /*sets type attribute of button element to "button"*/

/*adds event listener to "Remove" button*/
    removeButton.addEventListener("click", function() {

        const entry = removeButton.parentNode; /*creates variable for parent node of button*/
        entry.remove(); /*removes message from DOM*/
    });

/*appends list item to unordered list in messages section*/
    newMessage.appendChild(removeButton); /*appends "Remove" button to list item*/
    messageList.appendChild(newMessage); /*appends list item to unordered list*/



   
    messageForm.reset(); /*resets form input fields*/
});

/* Fetch API */
let githubUsername = 'eric-m-rodriguez'; /*creates variable for GitHub username*/

let githubUrl = `https://api.github.com/users/${githubUsername}/repos`; /*creates variable for GitHub URL*/

fetch (githubUrl) /*fetches data from GitHub API*/
    .then(response => response.json()) /*parses response as JSON*/
    .then(repositories => {
        console.log(repositories); /*logs repos to console*/  
    
        const projectSection =document.querySelector('#projects'); /*selects project section */

        const projectList =projectSection.querySelector('ul'); /*selects unordered list in project section*/

        /* Loops through respositories array and displays each item as a list item */
    
        for (let i = 0; i <repositories.length; i++) {
            const project = document.createElement('li'); /*creates list element*/
            project.innerText = repositories[i].name; /*sets inner text of list element*/
            projectList.appendChild(project); /*appends list element to project section*/
        }
    })
    
    .catch (error => 
        console.error("Error", error.message)); /*logs error message to the console */


    
    