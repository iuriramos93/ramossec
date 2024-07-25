// import { useRef, useState } from "react";

// Parts Home

import Services from "../parts/Services";
import Sobre from "../parts/About";
import Inicio from "../parts/Home";
import Nos_Move from "../parts/Mission";
import Valores from "../parts/Values";
import Team from "../parts/Team";
// import Portfolio from "../Portfolio";

window.addEventListener("load", () => {
  const observer = new IntersectionObserver((entries) => {
    Array.from(entries).forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.id == "home") {
          entry.target.children[0].children[0].children[2].setAttribute(
            "data-animate",
            "slide"
          );
          entry.target.children[1].setAttribute("data-animate", "slide");
        }
        if (entry.target.id == "about") {
          entry.target.children[0].setAttribute("data-animate", "grow");
        }
        if (entry.target.id == "values") {
          entry.target.setAttribute("data-animate", "slide2");
        }
        // if (entry.target.id == "services") {
        //   entry.target.children[0].children[0].setAttribute(
        //     "data-animate",
        //     "grow"
        //   );
        // }
        if (entry.target.id == "team") {
          entry.target.children[0].setAttribute("data-animate", "grow");
        }
      }
      // else {
      //   entry.target.setAttribute("data-animate", "not-animate");
      // }
    }),
      { root: "main", rootMargin: "0px", threshold: [0.5, 1] };
  });
  Array.from(document.querySelectorAll("section")).forEach((element) => {
    observer.observe(element);
  });
});

function Home() {
  return (
    <>
      <Inicio />
      <Sobre />
      <Nos_Move />
      <Valores />
      {/* <Portfolio /> */}
      <Services />
      <Team />
    </>
  );
}

export default Home;
