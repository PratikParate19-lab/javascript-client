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
    const { classes, data, columns, onSort, order, orderBy } = this.props;

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
              <TableRow
                hover
                key={row.name}
                style={{
                  padding: "5px 20px",
                  height: 25,
                  ...this.getStripedStyle(index)
                }}
              >
                {columns.map(column => (
                  <TableCell component="th" scope="row" align={column.align}>
                   {/* {column.format
                      ? column.format(row[column.field])
                      : row[column.field]} */}
                      {row[column.field]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(style)(TablePage);
