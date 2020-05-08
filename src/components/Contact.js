import React from "react";
import styled from "styled-components";
import Clipboard from "clipboard";

function Contact() {
  var clip = new Clipboard(".btn");

  clip.on("success", function () {
    alert("My email address has been copied to your clipboard.");
  });
  clip.on("error", function () {
    alert("That didn't work, sorry :(");
  });

  return (
    <ContactDiv className="contact">
      <Footer>
        <div class="btn" data-clipboard-text="chaseofthecollins@gmail.com">
          <i class="fas fa-envelope"></i>
        </div>
        <a
          href="https://www.linkedin.com/in/chase-collins42/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/Chase-42"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
      </Footer>
      <p>Copyright © Chase Collins 2020</p>
    </ContactDiv>
  );
}

export default Contact;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5%;
  color: white;
  width: 20rem;
  position: relative;
  bottom: 0;
  text-align: center;
  margin-top: 25%;
  @media (max-width: 1435px) {
    margin-top: 15%;
  }
  button {
    text-decoration: none;
  }
  i {
    color: white;
    transition: all 0.2s ease-in-out;
    margin-right: 5%;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const ContactDiv = styled.div`
  p {
    margin-top: 5%;
    color: white;
    text-align: center;
    position: relative;
    bottom: 0;
    font-size: 0.5rem;
  }
`;
