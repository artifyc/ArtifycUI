import React, {Component} from "react";
import "../../style/searchReturn/sortDropdown.css";

class SortDropdown extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({showMenu: true}, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({showMenu: false}, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <button class="menuDropdown" id="sortBy" onClick={this.showMenu}>
          Featured ▲ ▼
        </button>
        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <button class="menuDropdown">Featured</button>
            <button class="menuDropdown"> Price: Low To High </button>
            <button class="menuDropdown"> Price: High to Low </button>
            <button class="menuDropdown" id="sortByEnd">
              {" "}
              Artist Availability{" "}
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}

export default SortDropdown;
