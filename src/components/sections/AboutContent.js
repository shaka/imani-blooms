import React from 'react'
import classNames from 'classnames';

export default function AboutContent() {
    const outerClasses = classNames(
        'hero section center-content about-content',
        'has-top-divider',
      );
      const picture = require('./../../assets/images/whiteflower.jpg')
    
      return (
        <section
          className={outerClasses}
        >
            <h1>Meet Imani</h1>
        <div className="container-sm">
            <br/>
            Meet Imani 
Imani, is a mother, farmer, food systems and sustainability specialist, and budding ethnobotanist and herbalist.  
Imani also specializes in Justice, Equity, Diversity, and Inclusion (JEDI) and Food System consulting, offering equity and food systems trainings, workshop facilitation, strategic planning, and organizational equity assessments. 
For more information contact Imani @ <a href="mailto:imaniblooms@gmail.com">imaniblooms@gmail.com</a>
        </div>
        </section>
    )
}