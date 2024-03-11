import logo from "@assets/images/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalLogin from "../modalLogin";
import ModalRegister from "../modalRegister";

function NavbarUser() {
  const [showModal, setShowModal] = useState(false)
  const [showModalRegister, setShowModalRegister] = useState(false)

  const handlerShowModal = () => { setShowModal(true) }
  const handlerRegistrationClicked = () => {
    setShowModalRegister(true)
    setShowModal(false)
  }

  return (
    <>
      <div className="flex justify-between px-[150px] py-4 bg-black">
        <NavLink to="/home">
          <div className="flex text-white items-center gap-x-5">
            <div>
              <img src={logo} className="w-10 h-10" />
            </div>
            <div className="font-bold">
              <p>PEMILU PRESIDEN DUMBWAYS.ID</p>
            </div>
          </div>
        </NavLink>
        <div className="flex items-center gap-x-5">
          <div>
            <ul className="flex text-white gap-x-5">
              <li>Partai</li>
              <li>|</li>
              <li>Paslon</li>
              <li>|</li>
              <NavLink to="/vote">
                <li>Voting</li>
              </NavLink>
            </ul>
          </div>
          <div>
            {/* <NavLink to="/login"> */}
            <button onClick={handlerShowModal} className="bg-white text-black px-5 py-2 rounded font-bold">
              LOGIN
            </button>
            {/* </NavLink> */}
          </div>
        </div>
      </div>
      {
        showModal && <ModalLogin onClose={() => (setShowModal(false))} onRegistrationClicked={handlerRegistrationClicked} />
      }
      {
        showModalRegister && <ModalRegister onClose={() => (setShowModalRegister(false))} />
      }
    </>
  )

}

export default NavbarUser;