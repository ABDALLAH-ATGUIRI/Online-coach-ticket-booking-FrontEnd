import React, { Component } from "react";
import DashboardButton from "../../Buttons/sidebarButtons";
import voyageIcon from "../../../assets/icons/svg/voyage";
import addTravelIcon from "../../../assets/icons/svg/addTravel";
import displayTravelsIcon from "../../../assets/icons/svg/displayTravels";
import statusIcon from "../../../assets/icons/svg/status";
import busesIcon from "../../../assets/icons/svg/buses";
import addBusesIcon from "../../../assets/icons/svg/addBuses";
import busesInfoIcon from "../../../assets/icons/svg/busesInfo";
import clientsIcon from "../../../assets/icons/svg/clients";
import bookingIcon from "../../../assets/icons/svg/booking";
import dashboardIcon from "../../../assets/icons/svg/dashboard";
import logoutIcon from "../../../assets/icons/svg/logout";

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  render() {
    const Dashboard = {
      title: "Tableau de bord",
      icon: dashboardIcon.call(),
      route: "/",
      children: false
    };

    const Voyages = {
      title: "Voyages",
      icon: voyageIcon.call(),
      children: [
        {
          title: "Ajouter",
          icon: addTravelIcon.call(),
          route: "/travel/create"
        },
        {
          title: "Afficher tout",
          icon: displayTravelsIcon.call(),
          route: "/travel"
        },
        {
          title: "Statut",
          icon: statusIcon.call(),
          route: "/state"
        }
      ]
    };

    const Buses = {
      title: "Buses",
      icon: busesIcon.call(),
      children: [
        {
          title: "Ajouter",
          icon: addBusesIcon.call(),
          route: "/buses/create"
        },
        {
          title: "Toutes les info",
          icon: busesInfoIcon.call(),
          route: "/buses"
        },
        {
          title: "Statut",
          icon: statusIcon.call()
        }
      ]
    };

    const Clients = {
      title: "Clients",
      icon: clientsIcon.call(),
      route: "/clients",
      children: false
    };

    const Booking = {
      title: "Réservation",
      icon: bookingIcon.call(),
      route: "/booking",
      children: false
    };

    return (
      <aside className="w-56" aria-label="Sidebar">
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
              {logoutIcon.call()}
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
