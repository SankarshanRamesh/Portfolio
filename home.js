const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No additional margin
  threshold: 0, // Trigger at 50% visibility
};

const slowEffectPropName = ["name", "position", "btn btn-one"];
const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    console.log(observer);
    if (entry.isIntersecting) {
      if (slowEffectPropName.includes(entry.target.className)) {
        addAnimeForName(entry);
      } else if (entry.target.className === "personal_content") {
        // addAnimeForAboutInfo(entry);
      } else if (entry.target.className === "skill-info") {
        // addAnimeForSkillInfo(entry);
      }
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, observerOptions);

document.querySelectorAll(".name").forEach((e) => {
  observer.observe(e);
});

document.querySelectorAll(".position").forEach((e) => {
  observer.observe(e);
});

document.querySelectorAll(".btn").forEach((e) => {
  observer.observe(e);
});

document.querySelectorAll(".personal_content").forEach((e) => {
  observer.observe(e);
});

document.querySelectorAll(".skill-info").forEach((e) => {
  observer.observe(e);
});

function addAnimeForName(entry) {
  entry.target.classList.add("name-anime");
  // Listen for animationend event
  entry.target.addEventListener("animationend", () => {
    entry.target.classList.remove("name-anime");
  });
}

function addAnimeForAboutInfo(entry) {
  entry.target.classList.add("about-animation");
  entry.target.addEventListener("animationend", () => {
    entry.target.classList.remove("about-animation");
  });
}

function addAnimeForSkillInfo(entry) {
  entry.target.classList.add("skill-info-animation");
  entry.target.addEventListener("animationend", () => {
    entry.target.classList.remove("skill-info-animation");
  });
}

function download() {
  window.open("asset/Sankarshan-Resume-dotnet-2025.pdf", "_blank");
}

window.onload = () => {};

window.addEventListener("load", function () {
  var spinner = document.getElementsByClassName("center");
  var div = document.getElementsByClassName("container");
  setTimeout(() => {
    spinner[0].style.display = "none";
    div[0].style.display = "block";
  }, 1000);
});

function onLinkedInIconClick() {
  window.open("https://www.linkedin.com/in/sankarshan24/");
}

function onGitHubIconClick() {
  window.open("https://github.com/SankarshanRamesh/");
}

function onHashnodeIconClick() {
  window.open("https://sankarshanramesh.hashnode.dev/");
}
