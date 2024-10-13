const projectBoxes = document.querySelectorAll('.project-box');
const totalProjects = projectBoxes.length;
const projectsContainer = document.querySelector('.projects');

let currentIndex = 0;
const projectsToShow = 3; // Number of project boxes to show
let intervalId; // Variable to store the interval ID

function showProjects() {
    // Calculate the next set of project boxes to show
    const start = currentIndex;
    const end = (currentIndex + projectsToShow) % totalProjects;

    // Clear the projects container
    projectsContainer.innerHTML = '';

    // Add the current set of project boxes
    for (let i = 0; i < projectsToShow; i++) {
        const index = (start + i) % totalProjects; // Wrap around if end exceeds totalProjects
        projectsContainer.appendChild(projectBoxes[index].cloneNode(true)); // Clone the node to avoid moving the original
    }

    // Update the current index for the next iteration
    currentIndex = (currentIndex + projectsToShow) % totalProjects;
}

// Show the initial projects
showProjects();

// Function to start the interval
function startInterval() {
    intervalId = setInterval(showProjects, 5000);
}

// Function to stop the interval
function stopInterval() {
    clearInterval(intervalId);
}

// Start the interval initially
startInterval();

// Stop the interval on hover
projectsContainer.addEventListener('mouseover', stopInterval);

// Restart the interval when mouse leaves
projectsContainer.addEventListener('mouseleave', startInterval);


document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('click', function () {
        // Get project details from the clicked box
        const projectTitle = this.getAttribute('data-title');
        const projectDescription = this.getAttribute('data-description');

        // Redirect to the project details page, passing the title and description as query parameters
        window.location.href = `project-details.html?title=${encodeURIComponent(projectTitle)}&description=${encodeURIComponent(projectDescription)}`;
    });
});
