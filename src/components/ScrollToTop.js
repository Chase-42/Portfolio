import React, { Component } from 'react';
import '../App.scss';

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    let scrollComponent = this;
    document.addEventListener('scroll', function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 260) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    this.setState({
      is_visible: false,
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className='scroll-to-top'>
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <i class='fas fa-caret-up'></i>
          </div>
        )}
      </div>
    );
  }
}
