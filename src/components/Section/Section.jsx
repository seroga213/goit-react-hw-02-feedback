import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({title, childer}) => {
  return (
    <section className={styled.section}>
      <h1>{title}</h1>

      {childer}
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section