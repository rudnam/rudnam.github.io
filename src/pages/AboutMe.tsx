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
        Science at the University of the Philippines - Diliman. I like learning
        new things and that includes programming :]
      </p>
      <p>Interests are NBA/Basketball and languages.</p>
      <p>
        You can contact me through Gmail:{" "}
        <a href="mailto:francis.m.albarracin@gmail.com">
          francis.m.albarracin@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

export default AboutMe;
