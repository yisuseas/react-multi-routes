import React from "react";
import Wave from "../../elements/Wave";

function BlogSection(props) {
  const { color, children } = props;

  const waveOrNot = props.isFirst ? null : <Wave />;

  return (
    <div className="w-full static">
      <section
        className={`w-ful pt-4 pb-[5%] relative bg-${color} text-${color}`}
      >
        {waveOrNot}
        <div className="prose mx-auto">{children}</div>
      </section>
    </div>
  );
}

export default BlogSection;
