import Paragraph from 'components/atoms/Paragraph/Paragraph';
import { NavLink } from 'react-router-dom';
import { Button, FooterWrap, FooterWrapper } from './Footer.styled';

const Foot = () => {
  return (
    <FooterWrapper>
      <FooterWrap>
        <Paragraph>Blog osobisty .. o ..</Paragraph>
        <Button as={NavLink} to="/">
          Strona główna
        </Button>
      </FooterWrap>
    </FooterWrapper>
  );
};

export default Foot;
