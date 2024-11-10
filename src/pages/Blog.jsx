/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import XcloseIcon from "../assets/icons/XcloseIcon";
import "../styles/modal.css";

//json data

import Events from "../data/Events.json";
import LocationIcon from "../assets/icons/LocationIcon";

const Blog = () => {
  let subtitle;
  const [modalVisible, setModalVisible] = useState(false);
  const [newEvent, setNewEvent] = useState(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const ModalContent = ({ events }) => {
    if (!events) return null;
    console.log("modal", events);
    return <></>;
  };

  return (
    <section
      style={{
        color: "#fff",
        fontFamily: "poppins, sans-serif",
        minHeight: "70vh",
      }}
    >
      <p className="text-center text-xl">Social Networks</p>

      <div className="lg:grid lg:grid-cols-4 place-items-center">
        {Events.map((event, index) => (
          <div className="p-5" key={index}>
            <div className="border border-[#ffffff7a] rounded-md p-3">
              <div className="flex flex-row justify-between">
                <div className="w-1/2">
                  <p>{event.event}</p>
                  <p>{event.category}</p>
                  <p className="italic">{event.eventDate}</p>
                </div>

                <img
                  src={event.eventLogo}
                  alt="event logo"
                  className="w-3/12 rounded-lg border border-[#ffffff50]"
                />
              </div>
              <div className="flex flex-row justify-between items-center mt-2">
                <div className="flex flex-row">
                  <LocationIcon />
                  <p className="ml-2">{event.location}</p>
                </div>
                <a
                  href={event.externalLink}
                  className="cursor-pointer border border-[#ffffff68] w-fit px-2 py-1 rounded-md mt-2 place-items-end"
                >
                  More info
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <ModalContent event={event} /> */}
    </section>
  );
};

export default Blog;
