import React from 'react';
import users from './users.json';

function UserList() {
    const userList = users.map( user => {
        return  <div key={user.id}>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.status}</div>
                </div>;
    });
    return (
        <div>
            {userList}
        </div>
    )
};

export default UserList;