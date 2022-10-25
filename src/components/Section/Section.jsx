import PropTypes from 'prop-types';
import { SectionTitle, SectionStyle } from './Section.styled';

 
const Section = ({title, children}) => {
  return (
    <SectionStyle>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Section