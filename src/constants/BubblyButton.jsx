import React from 'react';

class BubblyButton extends React.Component {
  animateButton = (e) => {
    e.preventDefault();
    // Reset animation
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 700);
  };

  componentDidMount() {
    const bubblyButtons = document.getElementsByClassName('bubbly-button');

    for (let i = 0; i < bubblyButtons.length; i++) {
      bubblyButtons[i].addEventListener('click', this.animateButton, false);
    }
  }

  render() {
    const { text } = this.props;

    return (
      <button className="bubbly-button me-4 btn-sm">{text}</button>
    );
  }
}

export default BubblyButton;
