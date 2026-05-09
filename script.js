// Function to handle the loader disappearance
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    
    // The CSS animation takes 4 seconds, so we remove the element 
    // from the DOM after it fades out to keep the page clean.
    setTimeout(() => {
        loader.style.display = 'none';
    }, 5000); // 4s for animation + 1s buffer
});

// Optional: Add a smooth reveal for skills when scrolling
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.skill, .project-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});