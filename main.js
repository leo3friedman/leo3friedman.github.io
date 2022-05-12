window.onload = () => {
  const githubIcon = document.getElementById("github-img");
  const linkedInIcon = document.getElementById("linkedin-img");
  const gmailIcon = document.getElementById("gmail-img");
  const blogButton = document.getElementById("blog-nav");
  const meButton = document.getElementById("me-nav");
  const resumeButton = document.getElementById("resume-nav");
  const blogSection = document.getElementById("blog");
  const meSection = document.getElementById("about-me");
  const resumeSection = document.getElementById("resume");

  githubIcon.addEventListener("mouseenter", () => {
    githubIcon.src = "assets/github.svg";
  });

  githubIcon.addEventListener("mouseleave", () => {
    githubIcon.src = "assets/github-grey.svg";
  });

  linkedInIcon.addEventListener("mouseenter", () => {
    linkedInIcon.src = "assets/linkedin.svg";
  });

  linkedInIcon.addEventListener("mouseleave", () => {
    linkedInIcon.src = "assets/linkedin-grey.svg";
  });

  gmailIcon.addEventListener("mouseenter", () => {
    gmailIcon.src = "assets/gmail.svg";
  });

  gmailIcon.addEventListener("mouseleave", () => {
    gmailIcon.src = "assets/gmail-grey.svg";
  });

  blogButton.onclick = () => {
    setTimeout(function () {
      blogButton.style.textDecoration = "underline";
      meButton.style.textDecoration = "none";
      resumeButton.style.textDecoration = "none";
      blogSection.style.display = "block";
      meSection.style.display = "none";
      resumeSection.style.display = "none";
    }, 80);
  };
  meButton.onclick = () => {
    setTimeout(function () {
      meButton.style.textDecoration = "underline";
      blogButton.style.textDecoration = "none";
      resumeButton.style.textDecoration = "none";
      meSection.style.display = "block";
      blogSection.style.display = "none";
      resumeSection.style.display = "none";
    }, 80);
  };
  resumeButton.onclick = () => {
    setTimeout(function () {
      resumeButton.style.textDecoration = "underline";
      blogButton.style.textDecoration = "none";
      meButton.style.textDecoration = "none";
      resumeSection.style.display = "block";
      blogSection.style.display = "none";
      meSection.style.display = "none";
    }, 80);
  };
};
