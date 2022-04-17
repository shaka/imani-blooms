import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="/about">
                    <Image
                      src={require('./../../assets/images/pinkflower.png')}
                      alt="Pink Flower"
                      width={90}
                      height={90} />
                      </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <a href="/about">
                  <h4 className="mt-0 mb-8">
                    Meet Imani
                    </h4>
                    </a>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <a href="/farm">
                    <Image
                      src={require('./../../assets/images/greenery.png')}
                      alt="Green"
                      width={90}
                      circle
                      height={90} />
                      </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <a href="/farm">
                  <h4 className="mt-0 mb-8">
                   Imani Blooms Farm
                    </h4>
                    </a>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <a href="/abolition">
                    <Image
                      src={require('./../../assets/images/Photo3.png')}
                      alt="Features tile icon 03"
                      width={90}
                      height={90} />
                      </a>
                  </div>
                </div>
                <div className="features-tiles-item-content">
                <a href="/abolition">
                  <h4 className="mt-0 mb-8">
                    Freedom Flowers
                    </h4>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;