import React from 'react';
import styled from "styled-components"
import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Section
        title="Renato Delboni"
        description="Front-End Developer"
        backgroundImg="model-s.jpg"
        leftBtnText="View Projects"
      />
      <Section
        title="Gym-Ai"
        description="An App using the GTP-3 API that helps users  "
        backgroundImg="model-y.jpg"
        leftBtnText="Visit Site"
        rightBtnText="Visit GitHub"
      />
      <Section
        title="Model 3"
        description="Order online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Visit Site"
        rightBtnText="Visit GitHub"
      />
      <Section
        title="Model X"
        description="Order online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Visit Site"
        rightBtnText="Visit GitHub"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less than a New Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        rightBtnText=""
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  `
