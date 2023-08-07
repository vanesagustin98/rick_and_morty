import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Error from './components/Error/Error';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

export default function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const navigate = useNavigate()
   const location = useLocation()
   const current = location.pathname !== '/'

   async function login(userData) {
      try {
         const { email, password } = userData
         const URL = 'http://localhost:3001/rickandmorty/login/'
         const result = await axios.get(URL + `?email=${email}&password=${password}`)
         const { access } = result.data
         setAccess(result.data)
         access && navigate('/home')
         !access && alert('Email o contraseña incorrectos')
      } catch (error) {
         console.log(error.message);
      }
   }

   function logOut() {
      setAccess(false)
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);

   async function onSearch(id) {
      try{
         const result = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (result.data && result.data.name) {
            const newCharacter = result.data;
            const characterExists = characters.some((character) => character.id.toString() === id.toString());
            if (characterExists) {
               alert('¡Este personaje ya está en la lista!');
               return;
            } else { setCharacters((oldChars) => [...oldChars, newCharacter]); }
         } else {
            alert('¡No hay personajes con este ID!');
         }
      }catch (error) {
         console.error('Error en la solicitud:', error.message);
         alert('Ocurrió un error al obtener el personaje');
      }
   }

   function onClose(id) {
      setCharacters((oldChars) => oldChars.filter((character) => character.id !== id));
   }
   return (
      <div className='App'>
         {current && <Nav onSearch={onSearch} logOut={logOut} />}
         <Routes>
            <Route path='/' element={<Form login={login} />}></Route>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}
