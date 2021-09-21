import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="project">
    <SectionDivider/>
    <SectionTitle main>
      Projects
    </SectionTitle>
    <GridContainer>
     {
       projects.map(({id, image, title, description, tags, source, visit}) => (
         <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title> {title} </HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <TitleContent>
              <br/>
              Stack
            </TitleContent>
            <TagList>
              {tags.map((tag,i)=>(
                <Tag key={i}> {tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>
                Demo
            </ExternalLinks>
            <ExternalLinks href={visit}>
                GitHub
            </ExternalLinks>
          </UtilityList>
         </BlogCard>

       ))
     }

    </GridContainer>
  </Section>
);

// Note
// We can create a list of project object in this file; however, it's gonna mess things up. Code is not clear
// We create a CONSTANT, put it in a seperated folder, import it to here

// Decompose an object for convienience
// Instead of doing this
// projects.map((project) => (
//  <div> {project.title}</div>
//  <div>{project.description}</div>
//  <div> {project.tag}</div>
// ))
//  Do this:
// projects.map((title, description, tag) => (
//  <div> {title}</div>
//  <div>{description}</div>
//  <div> {tag}</div>
// ))
//don't have to type project.[key name] ever single time.



export default Projects;