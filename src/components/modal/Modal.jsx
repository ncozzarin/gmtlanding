import React from "react";
import "../../styles.css";

export default function Modal({ title, text, showModalProp, setShowModal }) {

const closeModal = () => {
    console.log("a")
    setShowModal(false);
    };

  return (
    <>
      {showModalProp ? (
        <>
        <div
      className="modal-backdrop"
      onClick={() => {
        // close modal when outside of modal is clicked
        closeModal();
      }}
    >
          <div
             onPressOut={() => {closeModal()}}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" text-center  rounded-t">
                  <h3 className="font-bold text-center lg:text-4xl text-xl pt-4 pb-2 text-blue-700 ">
                    {title}
                  </h3>
                  <hr className="border-2 mt-1 m-auto border-yellow-500 w-1/12  drop-shadow-xl" />
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                    {text.map((item, index) => (
                      <><p
                            key={index}
                            className="px-3 pt-2 m-auto font-light text-center text-xl items-center leading-snug text-neutral-500"
                        >
                            {item}
                        </p><br /></>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-black"
            onClick={closeModal}
          ></div>
          </div>
        </>
      ) : null}
    </>
  );
}