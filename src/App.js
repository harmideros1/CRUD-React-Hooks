import React, { useState, Fragment } from 'react';

// Utils
import { v4 as uuidv4 } from 'uuid';

// Components
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';


function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  // State
  const [users, setUsers] = useState(usersData);

  // Agregar usuarios
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  // eliminar usuarios
  const deleteUser = (id) => {
    setUsers(users.filter( user => user.id !== id));
  }

  // editar usuarios
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null, 
    name: '',
    username: ''
  });

  const editRow = (user) => {

    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username
    });
  }

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map( user => user.id === id ? updateUser : user));
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">

          {editing ?
          
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
            :
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment> 
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            user={users}
            deleteUser={deleteUser}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
