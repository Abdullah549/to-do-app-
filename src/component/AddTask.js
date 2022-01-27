import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { useDispatch, useSelector } from "react-redux";

import { creatTask } from "../action/task";

function AddTask() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("value is ", value);
  };
  const addTask = () => {
    const data = {
      name: `${value}`,
    };
    dispatch(creatTask(data));
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Add New Task</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { width: "100%" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  id="outlined-multiline-flexible"
                  label="New Task"
                  multiline
                  // maxRows={4}
                  value={value}
                  onChange={handleChange}
                />
              </div>
            </Box>
          </Typography>
          <Button
            className={"mt-1"}
            variant="contained"
            color="success"
            onClick={addTask}
          >
            Add
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AddTask;
