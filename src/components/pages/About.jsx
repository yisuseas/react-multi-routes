import React from "react";
import ContRes from "../elements/ContRes";
import { palette } from "../elements/Palette";
import Wave from "../elements/Wave";

function AboutSection(props) {
  const { color, swatch, img, children } = props;

  const final = color ? palette[color][swatch] : "transparent";

  const secStyle = {
    backgroundColor: `${final}`,
    color: `${final}`,
  };
  const waveOrNot = color ? <Wave /> : null;

  return (
    <div className="w-full static">
      <section className="w-ful pt-4 pb-[5%] relative" style={secStyle}>
        {waveOrNot}
        <ContRes>
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2">
            <div
              className={
                "prose lg:prose-lg px-2 mx-auto order-1 " +
                "prose-h1:font-display prose-h2:font-enfasis prose-p:font-body "
              }
            >
              {children}
            </div>
            {img}
          </div>
        </ContRes>
      </section>
    </div>
  );
}

function About() {
  // Image on Right
  const img_1 = (
    <img
      className="order-2"
      src="https://image.freepik.com/free-vector/people-holding-creative-ideas-icons_53876-59890.jpg"
      alt="sadf"
    />
  );
  // Image on Left
  const img_2 = (
    <img
      className="order-2 lg:order-first"
      src="https://image.freepik.com/free-vector/people-holding-creative-ideas-icons_53876-59890.jpg"
      alt="sadf"
    />
  );

  return (
    <article className="w-full flex flex-col">
      <h1 className="mx-auto mb-6 text-center font-extrabold text-5xl font-display">
        Quienes Somos?
      </h1>
      <AboutSection img={img_1}>
        <h2>Seccion 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          quisquam possimus dolor minus aut voluptate obcaecati ea, unde odio
          necessitatibus commodi sed quae numquam exercitationem aperiam
          perferendis? Necessitatibus, iusto nam.
        </p>
        <p>
          Fuga nam alias quae, laborum velit eligendi exercitationem, sed
          similique, asperiores beatae cum voluptas adipisci est. Repudiandae,
          blanditiis ad et ipsa impedit accusantium? Dolor recusandae incidunt
          voluptatibus amet consectetur neque!
        </p>
      </AboutSection>
      <AboutSection color={"leaf"} swatch={100} img={img_2}>
        <h2>Seccion 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          quisquam possimus dolor minus aut voluptate obcaecati ea, unde odio
          necessitatibus commodi sed quae numquam exercitationem aperiam
          perferendis? Necessitatibus, iusto nam.
        </p>
        <p>
          Fuga nam alias quae, laborum velit eligendi exercitationem, sed
          similique, asperiores beatae cum voluptas adipisci est. Repudiandae,
          blanditiis ad et ipsa impedit accusantium? Dolor recusandae incidunt
          voluptatibus amet consectetur neque!
        </p>
      </AboutSection>
      <AboutSection color={"coral"} swatch={100} img={img_1}>
        <h2>Seccion 3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          quisquam possimus dolor minus aut voluptate obcaecati ea, unde odio
          necessitatibus commodi sed quae numquam exercitationem aperiam
          perferendis? Necessitatibus, iusto nam.
        </p>
        <p>
          Fuga nam alias quae, laborum velit eligendi exercitationem, sed
          similique, asperiores beatae cum voluptas adipisci est. Repudiandae,
          blanditiis ad et ipsa impedit accusantium? Dolor recusandae incidunt
          voluptatibus amet consectetur neque!
        </p>
      </AboutSection>
      <AboutSection color={"leaf"} swatch={200} img={img_2}>
        <h2>Seccion 4</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          quisquam possimus dolor minus aut voluptate obcaecati ea, unde odio
          necessitatibus commodi sed quae numquam exercitationem aperiam
          perferendis? Necessitatibus, iusto nam.
        </p>
        <p>
          Fuga nam alias quae, laborum velit eligendi exercitationem, sed
          similique, asperiores beatae cum voluptas adipisci est. Repudiandae,
          blanditiis ad et ipsa impedit accusantium? Dolor recusandae incidunt
          voluptatibus amet consectetur neque!
        </p>
      </AboutSection>
      <AboutSection color={"coral"} swatch={300} img={img_1}>
        <h2>Seccion 5</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
          quisquam possimus dolor minus aut voluptate obcaecati ea, unde odio
          necessitatibus commodi sed quae numquam exercitationem aperiam
          perferendis? Necessitatibus, iusto nam.
        </p>
        <p>
          Fuga nam alias quae, laborum velit eligendi exercitationem, sed
          similique, asperiores beatae cum voluptas adipisci est. Repudiandae,
          blanditiis ad et ipsa impedit accusantium? Dolor recusandae incidunt
          voluptatibus amet consectetur neque!
        </p>
      </AboutSection>
    </article>
  );
}

export default About;
