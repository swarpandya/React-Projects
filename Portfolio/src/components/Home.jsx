import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import swar from "../assets/swar.jpg";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => {
        clientCount.current.textContent = v.toFixed();
      },
    });
  };

  const animationProjectsCount = () => {
    animate(0, 60, {
      duration: 1,
      onUpdate: (v) => {
        projectCount.current.textContent = v.toFixed();
      },
    });
  };
  // initial={{
  //     x: "-100%",
  //     opacity: 0,
  // }}
  // whileInView={{
  //     x: 1,
  //     opacity: 1,
  // }}

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },

      whileInView: {
        x: 1,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },

      whileInView: {
        y: 1,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Swar Pandya
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              cursor: "",
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:swarcanada@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 3 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {ratio < 3 && (
                  <motion.span
                    whileInView={animationProjectsCount}
                    ref={projectCount}
                  ></motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>swarcanada@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={swar} alt="Swar" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
