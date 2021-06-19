import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:111-111-1111">+1 (408) 912 6236</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:chuong.works@gmail.com">chuong.works@gmail.com</LinkItem>
        </LinkColumn>
        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan>Paulo Coelho — 'And, when you want something, all the universe conspires in helping you to achieve it.'</Slogan>
          </CompanyContainer>
          <SocialContainer>
          <SocialIcons href="https://github.com">
            <AiFillGithub size="3rem"></AiFillGithub>
          </SocialIcons>
          <SocialIcons href="https://github.com">
            <AiFillInstagram size="3rem"></AiFillInstagram>
          </SocialIcons>
          <SocialIcons href="https://github.com">
            <AiFillLinkedin size="3rem"></AiFillLinkedin>
          </SocialIcons>
        </SocialContainer>
        </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
