import React, { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);

  const toggleDiv = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      <h1>This is About</h1>
      <div className="bg-black text-white flex flex-col p-2">
        <button onClick={() => toggleDiv()}>
          <i className="fas fa-times"></i>
        </button>
        <div className="overflow-hidden">
          <div className="transition-all mt-[-100px] open:mt-0" open={open}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              quas a blanditiis, molestiae culpa tempora. Vero totam aspernatur
              amet rem impedit explicabo itaque repellat reiciendis quod sequi
              ad, laborum porro.
            </p>
            <p>
              Sequi placeat odit cupiditate ullam molestias voluptatibus ad
              voluptas? Sint, consectetur quibusdam, sed veritatis quam id
              expedita quo rem sunt molestiae, laboriosam praesentium.
              Distinctio fugiat, repellat corrupti perferendis doloribus
              laboriosam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
