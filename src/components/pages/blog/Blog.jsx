import React from "react";
import BlogSection from "./BlogSection";

function Blog() {
  return (
    <article className="w-full">
      <BlogSection>
        <h1 className="font-display">This is a blog entry</h1>
        <h2 className="font-enfasis">Another Subtitle</h2>
        <p className="font-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique, dolorum dicta autem saepe velit magni quae dolore ratione
          in, eligendi minima ullam omnis adipisci reprehenderit facere laborum
          libero nihil.
        </p>
      </BlogSection>
      <BlogSection color={"coral"} swatch={50}>
        <h2 className="font-enfasis">Another Subtitle</h2>
        <p className="font-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique, dolorum dicta autem saepe velit magni quae dolore ratione
          in, eligendi minima ullam omnis adipisci reprehenderit facere laborum
          libero nihil.
        </p>
      </BlogSection>
      <BlogSection color={"coral"} swatch={100}>
        <h2>Another Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique, dolorum dicta autem saepe velit magni quae dolore ratione
          in, eligendi minima ullam omnis adipisci reprehenderit facere laborum
          libero nihil.
        </p>
      </BlogSection>
      <BlogSection color={"coral"} swatch={200}>
        <h2>Another Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique, dolorum dicta autem saepe velit magni quae dolore ratione
          in, eligendi minima ullam omnis adipisci reprehenderit facere laborum
          libero nihil.
        </p>
      </BlogSection>
      <BlogSection color={"coral"} swatch={300}>
        <h2>Another Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique, dolorum dicta autem saepe velit magni quae dolore ratione
          in, eligendi minima ullam omnis adipisci reprehenderit facere laborum
          libero nihil.
        </p>
      </BlogSection>
      <BlogSection color={"coral"} swatch={400}>
        <h2>Another Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique, dolorum dicta autem saepe velit magni quae dolore ratione
          in, eligendi minima ullam omnis adipisci reprehenderit facere laborum
          libero nihil.
        </p>
      </BlogSection>
    </article>
  );
}

export default Blog;
