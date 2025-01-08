import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Section from "./components/Section";

const App = () => {
  return (
    <div>
      <Parallax pages={3}>
        {/* Section 1 */}
        <ParallaxLayer offset={0} speed={0.5}>
          <Section
            content="Welcome to the Parallax World"
            imagePath="./src/assets/images/mtn1.jpg"
          />
        </ParallaxLayer>

        {/* Section 2 */}
        <ParallaxLayer offset={1} speed={1}>
          <Section
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis."
            imagePath="./src/assets/images/mtn2.jpg"
          />
        </ParallaxLayer>

        {/* Section 3 */}
        <ParallaxLayer offset={2} speed={1.5}>
          <Section
            content="Thank you for visiting. Enjoy the visuals!"
            imagePath="./src/assets/images/mtn3.jpg"
          />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
