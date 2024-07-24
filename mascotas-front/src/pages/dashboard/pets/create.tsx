import CreatePetForm from "@/components/CreatePetForm"
import BackOffice from "@/layout/BackOffice"
import React from "react"

const create = () => {
  return (
    <BackOffice>
      <div
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center py-10"
        style={{ backgroundImage: "url('/image-adopt.jpeg')" }}
      >
        <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#1f9063]">
            Agregar nueva mascota
          </h2>
          <CreatePetForm />
        </div>
      </div>
    </BackOffice>
  )
}

export default create
