/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import IconButton from "@material-ui/core/IconButton";
import TablePagination from '@material-ui/core/TablePagination';
const style = theme => ({
  root: {
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

class TablePage extends Component {
  getStripedStyle(index) {
    return { background: index % 2 ? "#fafafa" : "white" };
  }
  
  render() {
    console.log("this", this.props);
    const {
      classes,
      data,
      columns,
      onSort,
      order,
      orderBy,
      actions,
      count,
      onChangePage,
      page
    } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.field} align={column.align}>
                  <TableSortLabel
                    active={orderBy === column.field}
                    direction={order}
                    onClick={() => onSort(column.field)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.name} hover selected={index % 2 === 0}>
                {columns.map(column => (
                  <TableCell component="th" scope="row" align={column.align}>
                    {column.format
                      ? column.format(row[column.field])
                      : row[column.field]}
                  </TableCell>
                ))}
                {actions.map(({ icon, handler }) => (
                  <IconButton
                    className={classes.button}
                    onClick={() => handler(row)}
                  >
                    {icon}
                  </IconButton>
                ))}
              </TableRow>
            ))}
          </TableBody>
          <TablePagination
            rowsPerPageOptions={[]}
            count={count}
            page={page}
            rowsPerPage={10}
            onChangePage={onChangePage}
          />
        </Table>
      </Paper>
    );
  }
}

export default withStyles(style)(TablePage);
