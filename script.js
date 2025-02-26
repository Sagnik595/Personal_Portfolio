document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".ele2").addEventListener("click", function () {
        document.querySelector(".about").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector(".ele3").addEventListener("click", function () {
        document.querySelector(".projectsection").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelector(".ele4").addEventListener("click", function () {
        // Assuming you have a section for skills, add its correct class or id
        document.querySelector(".skillssection").scrollIntoView({ behavior: "smooth" });
    });
});
