import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle> Technologies </SectionTitle>
    <SectionText>
      Some Technologies that I've recently worked on.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size= "3rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experience with Javascript (ES6)<br/> Framework: React.js, NextJS, Apollo Client,
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size= "3rem"/>
        <ListContainer>
          <ListTitle>
            Back-End
          </ListTitle>
          <ListParagraph>
            Experience with NodeJS, ExpressJS<br/> Framework: Apollo Server, Keystone <br/>Database: MongoDB and MySql
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size= "3rem"/>
        <ListContainer>
          <ListTitle>
            UI/UX
          </ListTitle>
          <ListParagraph>
            Experience with 
            <br/ >Framework: Bootstrap, SemanticUI, Material UI
            <br/ >Tools: Adobe XD,  Figma, and Adobe XD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
