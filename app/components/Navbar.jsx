import React from "react";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = { visibleNav: true };
    this.prevPosition = false;
  }
  componentDidMount() {
    this.prevPosition = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    const newPosition = window.scrollY;
    if (this.prevPosition === newPosition) return;
    const visibleNav = this.prevPosition < newPosition ? false : true;
    this.setState({ visibleNav: visibleNav });
    this.prevPosition = newPosition;
  }
  render() {
    const navStyle = {
      top: this.state.visibleNav ? 0 : -this.refs.navbar.offsetHeight,
      WebkitTransition: "all .25s ease-in-out",
      MozTransition: "all .25s ease-in-out",
      OTransition: "all .25s ease-in-out",
      transition: "all .25s ease-in-out",
      background: "#323a46",
      borderColor: "#323a46",
      boxShadow: "0 0.75rem 6rem rgba(56,65,74,.03)"
    };

    return (
      <nav
        ref="navbar"
        className="navbar navbar-default navbar-fixed-top"
        style={navStyle}
      >
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" style={{ color: "#fff" }}>
              Ethiopian Coronavirus (COVID-19) daily statstics
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
