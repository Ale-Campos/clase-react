"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

function UserCard({ user }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    console.log("Guardando Usuario");
  };

  const handleCancel = () => {
    console.log("Cancelar");
    setEditing(false);
  };

  const handleDelete = () => {
    console.log("Borrado");
  };

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
  }, [user]);

  return (
    <>
      <Card>
        <CardContent>
          <TextField
            disabled={!editing}
            label="Nombre "
            value={firstName || ""}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            disabled={!editing}
            label="Apellido "
            value={lastName || ""}
            onChange={(e) => setLastName(e.target.value)}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color={editing ? "success" : "info"}
            onClick={editing ? handleSave : handleEdit}
          >
            {editing ? "Guardar" : "Editar"}
          </Button>
          <Button
            variant="contained"
            color={editing ? "info" : "error"}
            onClick={editing ? handleCancel : handleDelete}
          >
            {editing ? "Cancelar" : "Borrar"}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default UserCard;
