const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero-section");

const sectionOneOptions = { };

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver)
 {
  entries.forEach(entry => {
    if(!entry.isIntersecting)
    {
      header.classList.add("nav");
    }
    console.log(entry.target);
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);