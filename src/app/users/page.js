'use client'

import UserCard from "@/components/users/UserCard";
import UsersTable from "@/components/users/UsersTable";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

function PageUsers() {

    const [editedUser, setEditedUser] = useState(null)

    const handleEdit = (user) => {
        setEditedUser(user)
    }

    useEffect(() => {
        console.log('Usuario desde page')
        console.log(editedUser)
    }, [editedUser])

    return (
        <>
        <div style={{
            display: 'flex',
            flexDirection:'column',
            alignItems: 'center',

        }}>
            <h1>Tabla usuarios</h1>
            <UsersTable handleEdit={handleEdit} ></UsersTable>

            {editedUser && <UserCard user={editedUser} />}

        </div>
        </>
    )
}

export default PageUsers;