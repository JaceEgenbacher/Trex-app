import PropTypes from 'prop-types';

const MyMenu = ({ isDisplayed }) => {
  if (isDisplayed) {
    return <h1>Menu will be displayed</h1>;
  }
  return <h1> Menu will not be displayed</h1>;
};

MyMenu.propTypes = {
  isDisplayed: PropTypes.bool,
};

export default MyMenu;
