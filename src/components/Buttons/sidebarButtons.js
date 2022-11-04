import React, { Component } from "react";
import { Link } from "react-router-dom";
class DashboardButton extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    const handleMenu = () => {
      this.state.open
        ? this.setState({ open: false })
        : this.setState({ open: true });
    };

    if (this.props.button.children) {
      return (
        <>
          <button
            type="button"
            className="flex items-center w-full p-2 text-base font-normal  text-blue-500 rounded-lg dark:text-white hover:-translate-y-2 hover:border-2 hover:shadow-lg dark:hover:bg-gray-700"
            onClick={handleMenu}
          >
            {this.props.button.icon}

            <span class="flex-1 ml-3 text-left whitespace-nowrap">
              {this.props.button.title}
            </span>
            <svg
              sidebar-toggle-item
              className={
                this.state.open
                  ? "w-6 h-6 rotate-180 shrink-0"
                  : "w-6 h-6 shrink-0"
              }
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          {this.state.open ? (
            <ul
              id="dropdown-example"
              class="py-2 flex flex-col w-full p-2 text-base font-normal"
            >
              {this.props.button.children.map((req , index) => {
                return (
                  <Link to={req.route}>
                    <li class="flex gap-4 pl-4 p-2 w-full text-base font-normal transition duration-75 text-blue-500 rounded-lg dark:text-white hover:-translate-y-2  hover:pt-4 hover:shadow-xl dark:hover:bg-gray-700">
                      {req.icon}
                      <span>{req.title}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          ) : null}
        </>
      );
    } else {
      return (
        <>
          <Link
            to={this.props.button.route}
            className="flex w-full items-center p-2 text-base font-normal text-blue-500 rounded-lg dark:text-white hover:-translate-y-2 hover:border-2 hover:shadow-lg dark:hover:bg-gray-700"
          >
            {this.props.button.icon}

            <span className="ml-3">{this.props.button.title}</span>
          </Link>
        </>
      );
    }
  }
}

export default DashboardButton;
