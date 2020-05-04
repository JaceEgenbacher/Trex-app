import React from 'react';
import SlideDrawer from './SlideDrawer/SlideDrawer';
import Backdrop from './Backdrop/Backdrop';

class alltogether extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideDrawerOpen: false };
    this.drawerToggleClickHandler = this.drawerToggleClickHandler.bind(this);
  }
  drawerToggleClickHandler() {
    this.setState((state) => ({
      slideDrawerOpen: !state.slideDrawerOpen,
    }));
  }

  render() {
    return (
      <div onClick={this.drawerToggleClickHandler}>
        <button className="toggle-button">
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
          {this.state.slideDrawerOpen ? <SlideDrawer /> : null}
        </button>
      </div>
    );
  }
}

export default alltogether;
