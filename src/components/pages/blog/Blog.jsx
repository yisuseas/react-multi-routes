import React from "react";
import BlogSection from "./BlogSection";

function Blog() {
  return (
    <article className="w-full">
      <BlogSection color="transparent" isFirst>
        <h1>This is a blog entry</h1>
        <h2>Another Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique, dolorum dicta autem saepe velit magni quae dolore ratione
          in, eligendi minima ullam omnis adipisci reprehenderit facere laborum
          libero nihil.
        </p>
      </BlogSection>
      <BlogSection color="red-300">
        <h2>Another Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique, dolorum dicta autem saepe velit magni quae dolore ratione
          in, eligendi minima ullam omnis adipisci reprehenderit facere laborum
          libero nihil.
        </p>
      </BlogSection>
      <BlogSection color="blue-300">
        <h2>Another Subtitle</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          similique, dolorum dicta autem saepe velit magni quae dolore ratione
          in, eligendi minima ullam omnis adipisci reprehenderit facere laborum
          libero nihil.
        </p>
      </BlogSection>
      <BlogSection color="gold-300">
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
