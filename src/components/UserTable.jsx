import React from 'react'

const UserTable = ({ user, deleteUser, editRow }) => {
    return ( 
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                { user.length > 0 ?
                    user.map( usuario => 

                        <tr key={ usuario.id }>
                            <td>{ usuario.name }</td>
                            <td>{ usuario.username }</td>
                            <td>
                            <button
                                className="button muted-button"
                                onClick={ () => { editRow(usuario) }}
                            >Edit</button>
                            <button
                                className="button muted-button"
                                onClick={() => { deleteUser(usuario.id) }}
                            >Delete</button>
                            </td>
                        </tr>
                    )
                :
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                }
            </tbody>
        </table>
     );
}
 
export default UserTable;