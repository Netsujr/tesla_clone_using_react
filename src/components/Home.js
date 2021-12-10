import React from 'react';
import styled from "styled-components"
import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Artistible"
        description="An Airbnb clone app where you can hire artists near you to create unique commissioned projects."
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Rails Watch List"
        description="A simple rails app where you can create and save your movie list (API call + Cloudinary)"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="TinyMe Studios"
        description="A landing page for a photographer client, mainly using a lot of HTML/CSS with some javascript"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn More"
      />
      <Section
        title="Contact"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="GitHub"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;

  `
