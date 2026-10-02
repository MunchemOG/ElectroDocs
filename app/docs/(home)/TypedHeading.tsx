"use client";

import { useEffect, useState } from "react";
import TypeIt from "typeit-react";

// Types a few endings once and settles on the thesis; it never loops. With reduced motion the
// thesis is shown still from the start.
export default function TypedHeading() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.05]">
      Pedro Pathing,
      <br />
      {reduced ? (
        <span className="text-fd-primary">on any battery.</span>
      ) : (
        <TypeIt
          as="span"
          className="text-fd-primary"
          options={{
            speed: 70,
            deleteSpeed: 40,
            waitUntilVisible: true,
            loop: false,
            cursor: false,
          }}
          getBeforeInit={(instance) =>
            instance
              .type("with faster loops.")
              .pause(1200)
              .delete()
              .type("without retuning.")
              .pause(1200)
              .delete()
              .type("on any battery.")
          }
        />
      )}
    </h1>
  );
}
