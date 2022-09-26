import { Routes, Route } from 'react-router-dom'

import { Create } from '../pages/Create'
import { Home } from '../pages/Home'
import { Preview } from '../pages/Preview'
import { Perfil } from '../Pages/Perfil'


export function AppRoutes () {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/create' element={ <Create /> } />
      <Route path='/perfil' element={ <Perfil /> } />
      <Route path='/preview/:id' element={ <Preview /> } />
    </Routes>
  )
}