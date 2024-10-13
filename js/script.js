document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('click', function () {
        // Get project details from the clicked box
        const projectTitle = this.getAttribute('data-title');
        const projectDescription = this.getAttribute('data-description');

        // Redirect to the project details page, passing the title and description as query parameters
        window.location.href = `project-details.html?title=${encodeURIComponent(projectTitle)}&description=${encodeURIComponent(projectDescription)}`;
    });
});
