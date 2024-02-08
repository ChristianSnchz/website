import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            My name is Christian Sanchez, I am from <b>Venezuela</b> 🇻🇪. I am a
            software engineer with 5 years of experience in building products, I
            am currently working in <b>Best Friend Finance</b> as a Frontend
            Developer.
            <br /> <br />
          </p>

          <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
            My jobs
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Reserve - Best Friend Finance (2022 - Present)
            </li>
            <li className="about-activity">
              <ImPointRight /> Buenbit 6 months (2022)
            </li>
            <li className="about-activity">
              <ImPointRight /> Santander Technology, (2020-2022)
            </li>
            <li className="about-activity">
              <ImPointRight /> Axoft, (2018-2020)
            </li>
            <li className="about-activity">
              <ImPointRight /> Cala Spa, (2017-2018)
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>Hobbies</p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
