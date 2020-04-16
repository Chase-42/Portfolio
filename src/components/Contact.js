import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Footer>
      <a href="#">
        <i class="fas fa-envelope"></i>
      </a>
      <i class="fab fa-linkedin-in"></i>
      <i class="fab fa-github"></i>
      <i class="fas fa-phone"></i>
    </Footer>
  );
}

export default Contact;

export const Footer = styled.footer`
  margin-top: 5%;
  color: white;
  width: 40em;
  position: relative;
  bottom: 0;
  text-align: center;
  i {
    color: white;
    transition: all 0.2s ease-in-out;
    margin-right: 5%;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
