import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [index, setIndex] = useState(0)
  const words = ['Joy', 'Beauty', 'Ethnobotanical Legacies']

  useEffect(() => {
    const changeWord = setInterval(() => {
     if(index === 2) {
       setIndex(0)
     } else {
      setIndex((t) => t + 1);
     }
    }, 2000);

    return () => {
      clearInterval(changeWord);
    };
  }, [index]);

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const picture = require('./../../assets/images/whiteflower.jpg')

  return (
    <section
      {...props}
      className={outerClasses}
      style={{ paddingBottom: "0px"}}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="10">
              Imani Blooms
            </h1>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="50">
          <Image
                className="has-shadow"
                src={picture}
                alt="Hero"
                width={300}
                height={400} />
          </div>
          <div className="container-xs" style={{ color: "black", paddingTop: "40px" }}>
            <p>Imani Blooms - Blooming Black {words[index]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;