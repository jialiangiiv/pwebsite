import React from 'react'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import './Failure.css'
import Accordion from 'react-bootstrap/Accordion'

function Failure() {
  return (
    <>
      <Link to="/" className="back">
        {'<'}
      </Link>
      <div className="main">
        <div className="f-title">Failure Resume 🤷‍♀️</div>
        <p className="description">
          Failure sucks, but it has taught me a lot about myself: how resilient
          i am, how far i need to go, and where i need to be. So, here is a list
          of my academic failures.
        </p>
        <ul className="lst">
          <li>Rejected by CCS 2025 (Second round)</li>
          <li>Rejected by IEEE S&P 2025 (Second round)</li>
          <li>Rejected by CHI 2025 (First round)</li>
          <li>Rejected by PETS 2024 travel grant</li>
        </ul>
      </div>
      <Footer />
    </>
  )
}

export default Failure
