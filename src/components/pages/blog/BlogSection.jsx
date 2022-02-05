import React from "react";
import Wave from "../../elements/Wave";

function BlogSection(props) {
  const { color, swatch, children } = props;

  const palette = {
    coral: {
      50: "#ffecea",
      100: "#ffe0dd",
      200: "#ffd4d0",
      300: "#f5a7a1",
      400: "#e9736d",
      500: "#ba3c39",
      600: "#921a19",
      700: "#710909",
      800: "#550404",
      900: "#3d0202",
    },
    leaf: {
      50: "#ebfffc",
      100: "#b1faf0",
      200: "#6bebdc",
      300: "#33cfc0",
      400: "#00a99c",
      500: "#007c74",
      600: "#005450",
      700: "#003534",
      800: "#002222",
      900: "#001919",
    },
  };

  const final = color ? palette[color][swatch] : "transparent";

  const secStyle = {
    backgroundColor: `${final}`,
    color: `${final}`,
  };
  const waveOrNot = color ? <Wave /> : null;

  return (
    <div className="w-full static">
      <section className={`w-ful pt-4 pb-[5%] relative`} style={secStyle}>
        {waveOrNot}
        <div className="prose mx-auto ">{children}</div>
      </section>
    </div>
  );
}

export default BlogSection;
