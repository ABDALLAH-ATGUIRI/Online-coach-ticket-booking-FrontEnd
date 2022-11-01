import React, { Component } from "react";
import DashboardButton from "../Buttons/sidebarButtons";
import voyageIcon from "../../assets/icons/svg/voyage";
import addTravelIcon from "../../assets/icons/svg/addTravel";
import displayTravelsIcon from "../../assets/icons/svg/displayTravels";
import statusIcon from "../../assets/icons/svg/status";
import busesIcon from "../../assets/icons/svg/buses";
import addBusesIcon from "../../assets/icons/svg/addBuses";
import busesInfoIcon from "../../assets/icons/svg/busesInfo";
import clientsIcon from "../../assets/icons/svg/clients";
import bookingIcon from "../../assets/icons/svg/booking";
import dashboardIcon from "../../assets/icons/svg/dashboard";

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }
  render() {
    const Dashboard = {
      title: "Dashboard",
      icon: dashboardIcon.call(),
      children: false
    };

    const Voyages = {
      title: "Voyages",
      icon: voyageIcon.call(),
      children: [
        {
          title: "Ajouter",
          icon: addTravelIcon.call()
        },
        {
          title: "Afficher tout",
          icon: displayTravelsIcon.call()
        },
        {
          title: "Statuts",
          icon: statusIcon.call()
        }
      ]
    };

    const Buses = {
      title: "Buses",
      icon: busesIcon.call(),
      children: [
        {
          title: "Ajouter",
          icon: addBusesIcon.call()
        },
        {
          title: "Toutes les info",
          icon: busesInfoIcon.call()
        },
        {
          title: "Statuts",
          icon: statusIcon.call()
        }
      ]
    };

    const Clients = {
      title: "Clients",
      icon: clientsIcon.call(),
      children: false
    };

    const Booking = {
      title: "Booking",
      icon: bookingIcon.call(),
      children: false
    };

    return (
      <aside className="w-56  absolute" aria-label="Sidebar">
        <div className="flex flex-col justify-between overflow-y-auto h-[650px] py-4 pt-10 px-3 bg-[#212121]">
          <ul className="space-y-2">
            <li>
              <DashboardButton button={Dashboard}></DashboardButton>
            </li>

            {/* Voyages select */}
            <li className="flex items-center flex-col ">
              <DashboardButton button={Voyages}></DashboardButton>
            </li>
            {/* Buses select */}
            <li className="flex items-center flex-col ">
              <DashboardButton button={Buses}></DashboardButton>
            </li>
            {/* Clients select */}
            <li className="flex items-center ">
              <DashboardButton button={Clients}></DashboardButton>
            </li>
            {/* Booking select */}
            <li className="flex items-center ">
              <DashboardButton button={Booking}></DashboardButton>
            </li>
          </ul>
          <div className="">
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-5 h-5 text-[#FE5008] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 text-[#FE5008] font-bold whitespace-nowrap">
                Sign In
              </span>
            </a>
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
