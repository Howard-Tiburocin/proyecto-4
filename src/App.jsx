import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFethc'
import FormUser from './assets/components/FormUser'
import UserCard from './assets/components/UserCard'

function App() {

  const [infoUptade, setInfoUptade] = useState()

  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers, createUser, deleteUser, updateUser] = useFetch(baseUrl)


  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  return (
    <div>
      <h1>Users Crud</h1>
      <FormUser createUser={createUser}
      infoUptade={infoUptade}
      updateUser={updateUser}
      setInfoUptade={setInfoUptade}
      />
      <div>
        {
          users?.map(user => (
            <UserCard 
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setInfoUptade={setInfoUptade}
            />
         ))
        }
      </div>
    </div>

  )
}

export default App
