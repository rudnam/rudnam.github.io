import React from "react";

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi! I&apos;m{" "}
        <b>
          <span className="prim">Francis</span>
        </b>
        !
      </p>
      <p>
        I&apos;m currently taking up a bachelor&apos;s degree in Computer
        Science at the University of the Philippines - Diliman. Outside of my
        studies at uni I also try to learn more and practice on my own,
        particularly in the field of software development.
      </p>
      <p>
        As for my interests I like learning new languages. I have been studying
        Japanese for 2 years and have passed the JLPT N1 level. I have also just
        started studying Mandarin recently. I also like following what&apos;s
        going on in the NBA and just basketball in general.
      </p>
      <p>
        You can contact me through{" "}
        <a href="mailto:francisalbarracin2@gmail.com">Gmail</a>.
      </p>
    </div>
  );
}

export default AboutMe;
