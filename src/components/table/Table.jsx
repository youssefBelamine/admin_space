import React from 'react'
import "./table.scss"
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {rows} from "./data";

const List = () => {
    

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            {/* <TableCell>Dessert (100g serving)</TableCell> */}
            <TableCell align="center">Tracking ID</TableCell>
            <TableCell align="center">Product</TableCell>
            <TableCell align="center">Customer</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Payment Method</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center" className='cellWrapper'>
                <img src={row.img} className='image' />
                {row.product}
                </TableCell>
              <TableCell align="center">{row.customer}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.method}</TableCell>
              <TableCell align="center">
                <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List;