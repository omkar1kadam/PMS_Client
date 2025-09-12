import ProjectPage from "./components/project-page"
import {Routes, Route} from 'react-router-dom'
import CreateProjectForm from "./components/submissionForm"
import EditProjectForm from "./components/editForm"
import Dashboard from "./components/dashboard"

const App = () => {
  return (
    <div>
      <Routes>
<Route path='/project/details/:id' element={
      <Dashboard/>}
/>

<Route path='/' element={
      <ProjectPage/>
}/>
<Route path='/project/create' element={
      <CreateProjectForm/>}/>
<Route path='/project/edit/"id' element={
      <EditProjectForm/>}/>

      </Routes>
    </div>
  )
}

export default App
