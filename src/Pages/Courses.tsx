import {
  Box,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CourseList from "../Components/CourseList";

function CustomTabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Courses() {
  const [value, setValue] = useState(0);
  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  const [checked, setChecked] = React.useState(false);
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Typography variant="caption" sx={{ color: "error.main" }}>
        *** Please note that some repositories are marked as private to prevent
        other people from committing academic dishonesty.
      </Typography>

      <Grid
        container
        sx={{ borderBottom: 1, borderColor: "divider", alignItems: "center" }}
      >
        <Grid item xs></Grid>
        <Grid item xs={8}>
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="tabs for semester selection"
          >
            <Tab label="Fall 2021" {...a11yProps(0)} />
            <Tab label="Spring 2022" {...a11yProps(1)} />
            <Tab label="Fall 2022" {...a11yProps(2)} />
            <Tab label="Spring 2023" {...a11yProps(3)} />
            <Tab label="Fall 2023" {...a11yProps(4)} />
            <Tab label="Spring 2024" {...a11yProps(5)} />
          </Tabs>
        </Grid>
        <Grid item xs>
          <FormGroup>
            <FormControlLabel
              sx={{ flexDirection: "row-reverse" }}
              control={
                <Switch
                  checked={checked}
                  onChange={handleCheck}
                  size="small"
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Collapse All"
            />
          </FormGroup>
        </Grid>
      </Grid>
      <CustomTabPanel value={value} index={value}>
        <CourseList index={value} isCollapsed={checked} />
      </CustomTabPanel>
    </>
  );
}

export default Courses;
