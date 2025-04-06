// loader
setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.display = "block";
}, 250);

// Task One:
// Humburger Menu ==>

const humburger = document.querySelector(".humburger");
const navbar = document.querySelector(".navbar");
const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");

humburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
    bars.classList.toggle("active");
    xmark.classList.toggle("active");
});

// Progress Bar ==>

    $(document).ready(function() {
        // Define the options for CircleProgress
        let options = {
            startAngle: -1.55,
            size: 150,
            fill: { gradient: ["#fd8529", "#ec4209"] },
            lineCap: "round",
            emptyFill: "rgba(255, 255, 255, .15)"
        };
    
        // Function to initialize the progress circle with a dynamic value
        function initializeProgressCircle(element, value) {
            $(element).circleProgress({
                value: value,
                ...options
            });
        }
    
        // Function to handle intersection observer callback
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const value = $(element).data("value"); // Get value from data attribute
                    initializeProgressCircle($(element).find('.bar'), value);
                    observer.unobserve(element); // Stop observing once it's visible
                }
            });
        }, { threshold: 0.5 }); // Trigger when 50% of element is in viewport
    
        // Set up intersection observer for each skill circle
        $('.circle').each(function() {
            observer.observe(this);
        });
    });