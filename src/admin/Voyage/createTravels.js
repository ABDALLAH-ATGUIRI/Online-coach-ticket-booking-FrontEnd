import React, { useRef, createRef, useEffect, useState } from "react";
import axios from "../../api/axios";
import Cookies from "universal-cookie";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Buttons/crudButtons";
import AddIcon from "../../assets/icons/crud/add";
import { Routes, Route, Switch } from "react-router-dom";

const CreateTravels = () => {
  const add = {
    title: "Ajouter",
    icon: AddIcon.call(),
    color: "green",
    route: "/bus"
  };
  return (
    <>
      <section className="overflow-auto max-h-[650px]">
        <div className="p-4 bg-white block w-full sm:flex items-center justify-between border-b  border-gray-200 lg:mt-1.5">
          <div className="mb-1 w-full">
            <div className="mb-4">
              <nav className="flex mb-5" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2">
                  <li className="inline-flex items-center">
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 inline-flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                      </svg>
                      Voyages
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
                      >
                        Ajouter
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="flex justify-between sm:flex items-center md:divide-x md:divide-gray-100">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Ajouter un voyage
                </h1>
                <div className="flex items-center sm:justify-end">
                  <Button info={add} className="bg-orange-500"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateTravels;
