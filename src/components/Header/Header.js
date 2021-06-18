import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
        {/* DiCssdeck is an icon from react-icons */}
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
          <DiCssdeck size="3rem"/> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Project</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technology</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"></AiFillGithub>
      </SocialIcons>

      <SocialIcons href="https://github.com">
        <AiFillInstagram size="3rem"></AiFillInstagram>
      </SocialIcons>

      <SocialIcons href="https://github.com">
        <AiFillLinkedin size="3rem"></AiFillLinkedin>
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
