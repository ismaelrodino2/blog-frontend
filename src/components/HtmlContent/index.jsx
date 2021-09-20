import './styles.module.css';
import PropTypes from 'prop-types';

export const HtmlContent = ({ html }) => {
  return (
    <div className="flex justify-center ">
      <div className="main-container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};
HtmlContent.propTypes = {
  html: PropTypes.string,
};
