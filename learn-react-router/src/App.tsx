import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/staff' element={<StaffList />}></Route>
          <Route path='/staff/:id' element={<StaffItem />}></Route>
          <Route path='/staff/add' element={<AddStaff />}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </MainLayout>
      {/* <MainLayout>
        <Dashboard />
        <About />
        <StaffList />
      </MainLayout> */}
    </div>
  )
}

export default App
