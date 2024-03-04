/** @format */

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Fullscreen } from "@mui/icons-material";
import { Edit } from "@mui/icons-material";

const tablestyle = {
  marginTop: "3rem",
};
const headstyle = {
  background: "#2a2a2a",
  color: "#fff",
  width: "200px",
  align: "center",
  padding: " 1rem 4rem ",
};
const cellstyle = {
  align: "center",
  width: "200px",
  padding: " 1rem 4rem",
};

const columns = [
  { id: "projectName", label: "Name", minWidth: 170 },
  { id: "location", label: "Location", minWidth: 100 },
  {
    id: "timeline",
    label: "Timeline",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  //   {
  //     id: "description",
  //     label: "Description",
  //     minWidth: 170,
  //     align: "right",
  //     format: (value) => value.toLocaleString("en-US"),
  //   },
];

function createData(projectName, location, timeline, description) {
  return { projectName, location, timeline, description };
}

export default function StickyHeadTable({ projects }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  let [projectRows, setProjectRows] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  React.useEffect(() => {
    const rows = [];
    projects.map((item) => {
      const {
        projectName,
        location,
        coverImage,
        description,
        galleryPhotos,
        timeline,
      } = item;
      const newRow = createData(projectName, location, timeline);
      rows.push(newRow);
    });
    setProjectRows(rows);
  }, [projects]);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{ width: "100%", overflow: "hidden" }}
      style={tablestyle}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table
          stickyHeader
          aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={headstyle}>
                  {column.label}
                </TableCell>
              ))}
              <TableCell style={headstyle}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          style={cellstyle}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell style={cellstyle}>
                      <Edit /> <Fullscreen />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={projectRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
