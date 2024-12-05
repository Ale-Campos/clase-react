"use client";

import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function UsersTable({ handleEdit }) {
  const columns = [
    { field: "id", headeName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "Nombre",
      width: 150,
    },
    {
      field: "lastName",
      headerName: "Apellido",
      width: 150,
    },
    {
      field: "username",
      headerName: "Usuario",
      width: 160,
      valueGetter: (value, row) => `${row.firstName || ""}.${row.lastName}`.toLowerCase(),
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <Box padding={1} sx={{height:400 , width:590}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        rowSelection
        onRowClick={(data) => {
            handleEdit(data.row)
        }}
      />
    </Box>
  );
}

export default UsersTable;