import React from 'react';
import Spacer from '../../components/atoms/Spacer';
import HyphenedLink from '../../components/atoms/HyphenedLink';

const InfoSidebar: React.FC = () => {
  return (
    <div className="w-full text-white text-left">
      <header className="lg:sticky lg:top-24 mx-8 my-12">
        <h2 className="text-gradient text-5xl font-bold">Abhinav Saini</h2>
        <h3 className="text-xl text-gradient-white">Front-End Engineer</h3>
        <Spacer size="1rem" />
        <p className="text-md">
          I build exceptional and accessible digital experiences for the web.
        </p>
        <Spacer size="3rem" styles="hidden lg:block" />
        <nav className="hidden lg:block">
          <ol>
            <li>
              <HyphenedLink href="#experience">Experience</HyphenedLink>
            </li>
            {/* <li>
              <HyphenedLink href="#about">Experience</HyphenedLink>
            </li>
            <li>
              <HyphenedLink href="#about">Projects</HyphenedLink>
            </li>
            <li>
              <HyphenedLink href="#about">About</HyphenedLink>
            </li> */}
          </ol>
        </nav>
      </header>
    </div>
  );
};

export default InfoSidebar;
