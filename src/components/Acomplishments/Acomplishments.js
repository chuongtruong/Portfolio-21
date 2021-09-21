import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, ExternalLinks } from './AcomplishmentsStyles';
import Button from '../../styles/GlobalComponents/Button';

const data = [
  { URL: 'https://www.coursera.org/account/accomplishments/certificate/XM5BQK6VF3V6', text: 'Front-End Web UI Frameworks and Tools: Bootstrap 4'},
  { URL: 'https://www.coursera.org/account/accomplishments/certificate/GV4SPMBWJ8KS', text: 'Front-End Web Development with React', },
  { URL: 'https://www.linkedin.com/posts/chuongtruong777_certificateofcompletionlearning-mongodbpdf-activity-6794836689660588032-V_gm', text: 'MongoDB', },
  { URL: '', text: 'More to have', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certificates</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum>{card.text}</BoxNum>
          <br/>
          {
            card.URL !== '' && (<ExternalLinks href={card.URL}>
              Certification's URL
          </ExternalLinks>) 
          }
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
