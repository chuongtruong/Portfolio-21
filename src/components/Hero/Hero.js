import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main center>
       Hello, <br/>
       It's me, Chuong!
     </SectionTitle>
     <SectionText>
      Welcome to my personal blog, I'm glad that you're here.<br/>
      I'm skilled in full-stack web development and I do M.E.R.N stack !

     </SectionText>
     <Button onClick={() => window.open("https://www.linkedin.com/in/chuong-truong-web-dev/", "_blank")}>Let's connect !</Button>
   </LeftSection>
 </Section>
);

export default Hero;