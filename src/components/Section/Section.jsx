import PropTypes from 'prop-types';

 
const Section = ({title, childer}) => {
  return (
    <section>
      <h1>{title}</h1>
      {childer}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Section