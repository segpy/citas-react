import React from 'react'

const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md py-10 px-5 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:
        <span>Hook</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:
        <span>Juan</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email:
        <span>correo@corre.com</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta:
        <span>10 Dic de 2022</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas:
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
        </span>
      </p>
    </div>
  )
}

export default Paciente
