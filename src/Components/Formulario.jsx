import React, { useState } from 'react'

const Formulario = () => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintoma, setSintoma] = useState('')
  const [every, setEvery] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const states = [nombre, propietario, email, fecha, sintoma]
    const every = states.every(item => item !== '')
    console.log(every ? 'Bien' : 'Todos los elementos deben estar llenos')
    setEvery(every)

    console.log('Validando el formulario...')
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-16'>
        {!every && (
          <div className=''>
            <p>Debes completar todos los campos</p>
          </div>
        )}
        <div className='mb-5'>
          <label
            htmlFor='mascota'
            className='block text-gray-700 uppercase font-bold'
          >Nombre mascota
          </label>
          <input
            type='text'
            id='mascota'
            placeholder='Nombre mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            value={nombre}
            onInput={(e) => { setNombre(e.target.value) }}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='propietario'
            className='block text-gray-700 uppercase font-bold'
          >Nombre propietario
          </label>
          <input
            type='text'
            id='propietario'
            placeholder='Nombre propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            value={propietario}
            onInput={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
          >Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Email contacto propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='alta'
            className='block text-gray-700 uppercase font-bold'
          >Alta
          </label>
          <input
            type='date'
            id='alta'
            placeholder='Email contacto propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            value={fecha}
            onInput={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-gray-700 uppercase font-bold'
          >Sintomas
          </label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent'
            placeholder='Descripción de sintomas'
            value={sintoma}
            onInput={(e) => setSintoma(e.target.value)}
          />
        </div>

        <input
          type='submit'
          className='bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer'
          value='Agregar Paciente'
          onClick={handleSubmit}
        />
      </form>
    </div>
  )
}

export default Formulario
