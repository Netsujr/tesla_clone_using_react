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
        title="Disney Clone"
        description="A clone of Disney website using React"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Visit Site"
        rightBtnText="Visit GitHub"
      />
      <Section
        title="Gym-Ai"
        description="An App using the GTP-3 API that helps gym begginers with exercises using personalised routines"
        backgroundImg="model-y.jpg"
        leftBtnText="Visit Site"
        rightBtnText="Visit GitHub"
      />
      <Section
        title="Artistible"
        description="An Airbnb clone app where you can hire artists near you to create unique commissioned projects."
        backgroundImg="model-3.jpg"
        leftBtnText="Visit Site"
        rightBtnText="Visit GitHub"
      />
      <Section
        title="Rails Watch List"
        description="A simple rails app where you can create and save your movie list (API call + Cloudinary)"
        backgroundImg="model-x.jpg"
        leftBtnText="Visit Site"
        rightBtnText="Visit GitHub"
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
