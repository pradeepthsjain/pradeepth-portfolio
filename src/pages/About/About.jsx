import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import Flip from "gsap/Flip";
import React, { useEffect } from "react";
import { Page } from "../../components/Page";
import { blue, green, yellow } from "../../utils";
import { Educations, Paragraph, SkillsWrapper, Text } from "./About.styled";
import { AboutItem } from "./AboutItem";
import Skills from "./SkillBall";
import kle from "../../assets/images/kle.png";
import school from "../../assets/images/school.jpg";
import nitte from "../../assets/images/nitte.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export const About = () => {
  const { ref, inView } = useInView({});
  const [show, setShow] = useState(inView);
  useEffect(() => {
    setShow(inView);
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    let cards = document.querySelectorAll(".about-item");
    cards.forEach((card, i) => {
      if (i === 0) {
        card.classList.add("active");
      }
      card.addEventListener("mouseenter", (e) => {
        if (card.classList.contains("active")) {
          return;
        }
        const state = Flip.getState(cards);
        cards.forEach((c) => {
          c.classList.remove("active");
        });
        card.classList.add("active");
        Flip.from(state, {
          duration: 0.5,
          ease: "elastic.out(1,0.9)",
          absolute: true,
        });
      });
    });
  }, []);
  return (
    <div ref={ref}>
      <Page header="About">
        <Text>
          <Paragraph>
          I'm a passionate programmer who is always looking for new challenges to improve myself. 
          I'm also a team player, always ready to learn new things and help others.
            <br />I was born in Mumbai and raised in Bangalore, India. 
            I love to play the piano in my free time, and I enjoy watching movies and playing video games.
          </Paragraph>
          <Educations>
        
            <AboutItem
              color={green}
              data={{
                title: "Nalanda English High Public School, Bangalore",
                p: "High School (2010-2018)",
                image: school,
              }}
            />
            <AboutItem
              color={yellow}
              data={{
                title: "Dr. N.S.A.M PU College, Nitte",
                p: "Secondary Education (2018-2020)",
                image: nitte,
              }}
            />
            <AboutItem
              color={blue}
              active
              data={{
                title: "K.L.E Society's Degree College, Bangalore",
                p: "Bachelors of Computer Application (2020-2023)",
                image: kle,
              }}
            />
          </Educations>
        </Text>
        <SkillsWrapper>
          {show ? (
            <Canvas camera={{ position: [0, 0, 18] }}>
              <Skills />
            </Canvas>
          ) : (
            `${inView}`
          )}
        </SkillsWrapper>
      </Page>
    </div>
  );
};
