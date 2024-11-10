import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

//json data
import Events from "../data/Events.json";

const Blog = () => {
  let subtitle;
  const [modalVisible, setModalVisible] = useState(false);

  const open = () => {
    setModalVisible(true);
  };

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  const close = () => {
    setModalVisible(false);
  };

  // modal

  const DetailModal = ({ props }) => {
    return (
      <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={close}
        contentLabel="Example Modal"
      >
        <div>
          <div />
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          
        </div>
      </Modal>
    );
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
        {Events.map((events, index) => (
          <div className="p-5" key={index}>
            <div className="border border-[#ffffff7a] rounded-md p-3">
              <div className="flex flex-row justify-between">
                <div className="w-1/2">
                  <p>{events.event}</p>
                  <p>{events.category}</p>
                  <p className="italic">{events.eventDate}</p>
                </div>

                <img
                  src={events.eventLogo}
                  alt="event logo"
                  className="w-3/12 rounded-lg border border-[#ffffff50]"
                />
              </div>
              <p className="cursor-pointer border border-[#ffffff68] w-fit px-2 py-1 rounded-md mt-2">
                More info
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
