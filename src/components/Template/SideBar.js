import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>SHASHIN KESHARWANI</h2>
        <p>
          <a href="mailto:aryankeshari2003@gmail.com">
            aryankeshari2003@gmail.com
          </a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Shashin. I am a <a href="/">passionate</a> Full Stack
        Developer skilled in <a href="https://react.dev/">React</a>,{' '}
        <a href="https://nodejs.org/">Node.js</a>, and{' '}
        <a href="https://www.mongodb.com/">MongoDB</a>. I specialize in building
        dynamic, responsive web applications with a focus on seamless user
        experiences and AI integration.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Shashin Kesharwani <Link to="/">shashinkesharwani.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
