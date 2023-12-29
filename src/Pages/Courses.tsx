import { Box, Tab, Tabs, Typography } from "@mui/material";
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
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
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

  return (
    <>
      <Typography variant="h6">Courses</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs for semester selection"
          centered
        >
          <Tab label="Fall 2021" {...a11yProps(0)} />
          <Tab label="Spring 2022" {...a11yProps(1)} />
          <Tab label="Fall 2022" {...a11yProps(2)} />
          <Tab label="Spring 2023" {...a11yProps(3)} />
          <Tab label="Fall 2023" {...a11yProps(4)} />
          <Tab label="Spring 2024" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={value}>
        <CourseList index={value} />
      </CustomTabPanel>
    </>
  );
}

export default Courses;
