import { ChangeEvent, ReactNode, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Modal from "../modal"

interface IModalRegisterProps {
  onClose: () => void
}

function ModalRegister({ onClose }: IModalRegisterProps): ReactNode {
  const [fullname, setFullname] = useState('')
  const [alamat, setAlamat] = useState('')
  const [jenisKelamin, setJenisKelamin] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleFullnameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullname(event.target.value)
  }

  return (
    <>
      <Modal onClose={onClose}>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#5d5a00] mb-14">REGISTER</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="fullname" className="font-semibold">Fullname</label>
            <input type="text" id="fullname" name="fullname" className="border-2 border-black h-11 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address" className="font-semibold">Alamat</label>
            <input type="text" id="address" name="address" className="border-2 border-black h-11 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="font-semibold">Jenis Kelamin</label>
            <input type="text" id="gender" name="gender" className="border-2 border-black h-11 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="username" className="font-semibold">Username</label>
            <input type="text" id="username" name="username" className="border-2 border-black h-11 rounded-lg" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input type="password" id="password" name="password" className="border-2 border-black h-11 rounded-lg" />
          </div>
          <button className="bg-[#5E5A00] text-white h-[50px] rounded-lg text-2xl font-bold">SUBMIT</button>
        </div>
        <div className="flex justify-center mt-5">
          <p className="italic">Belum memiliki akun ? <NavLink to="/register" className="underline text-[#0092a6]">Register</NavLink></p>
        </div>
      </Modal>
    </>
  )
}

export default ModalRegister