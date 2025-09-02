import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import personPic from '../../Assets/person.jpg'
import CV from '../../Assets/Pdf/CV.pdf'
import './About.css'

function About() {
  return (
    <>
      <Container className="home-content">
        <Row>
          {/* Picture */}
          <Col md={4} style={{ textAlign: 'left', padding: '0 2rem' }}>
            <img src={personPic} alt="home pic" className="avatar-image" />
            <p>Email: jy843[at]gwmail[dot]gwu[dot]edu</p>
          </Col>

          {/* Content */}
          <Col md={8} style={{ padding: '0 2rem' }}>
            <h1 className="heading">Jialiang Yan</h1>
            <h1 className="content">
              {/* I'M
               */}
              <p>
                Hi!{' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋
                </span>{' '}
                I am a first-year Ph.D. student in Computer Science at George
                Washington University, advised by{' '}
                <a
                  href="https://adamaviv.com/"
                  className="highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Adam J. Aviv
                </a>
                . Before that, I earned my bachelor's degree in Computing
                Science at the University of Alberta, where I was advised by{' '}
                <a
                  href="https://bkacsmar.github.io//"
                  className="highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Bailey Kacsmar
                </a>{' '}
                and{' '}
                <a
                  href="https://www.cdemmansepp.com/"
                  className="highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Carrie Demmans Epp
                </a>
                .
              </p>
              <p>
                My research interests lie in user privacy and online safety,
                especially from the perspective of gender and sexuality.
              </p>
              <p>
                "Jialiang" is pronounced as "Jah-lee-ahng". I use they/them
                pronouns, but she/her or he/him are totally fine too.
              </p>
              <p>
                In my free time, I enjoy reading and playing guitar. My favorite
                artist is{' '}
                <a
                  href="https://open.spotify.com/artist/4wXchxfTTggLtzkoUhO86Q"
                  className="highlight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Soccer Mommy
                </a>
                <span className="wave" role="img" aria-labelledby="wave">
                  🌸
                </span>
                .
              </p>
              {/* Buttons */}
              <a
                href={CV}
                className="highlight"
                target="_blank"
                rel="noopener noreferrer"
              >
                curriculum vitae
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/failure" className="highlight">
                failure resume
              </Link>
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About
