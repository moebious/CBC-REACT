// import React from "react";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Accordion from "./accordion";
import ToggleSwitch from "./components/toggleSwitch";

import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   content: {
//     backgroundColor: "green",
//     color: "yellow",
//     paddingTop: "25px",
//     paddingBottom: "25px",
//   },
// }));

// tab height quemado
// const width = 500;
// const widthModifier = {
//   width: `${width}px`,
// };

const tabHeight = "60px"; // default: '48px'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minHeight: tabHeight,
    height: tabHeight,
    // backgroundColor: "green",
    // color: "yellow",
    // textTransform: "none",
    // marginTop: "60px",
  },
  in: {
    padding: 8,
    // textTransform: "none",
    marginTop: "60px",
  },
}));

function TabPanel(props) {
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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Content() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles();

  return (
    <Box sx={{ width: "100%" }}>
      {/* <Box sx={{ borderBottom: 2, backgroundColor: "orange", borderColor: "divider" }}> */}
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <div className="">Content goes here</div>

        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { backgroundColor: "black" } }}
          className={classes.in}
        >
          {/* {...a11yProps(0)} style={{minWidth:"50%"}} */}
          {/* 
<Tab label="Item One" style={widthModifier}> */}

{/* , { fontWeight: "600" } */}

          <Tab label="Activity" {...a11yProps(0)} className={classes.in}
          // sx={{ borderBottom: 2, borderColor: "divider" }} 
          style={{textTransform: "capitalize"}} />
          <Tab label="Notes" {...a11yProps(1)} className={classes.root} />
          <Tab label="Emails" {...a11yProps(2)} className={classes.root} />
          <Tab label="Calls" {...a11yProps(3)} className={classes.root} />
          <Tab label="Tasks" {...a11yProps(4)} className={classes.root} />
          <Tab label="Meetings" {...a11yProps(5)} className={classes.root} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
        <Accordion value={value} index={0}>
        Item One
      </Accordion>
      

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </Box>
  );
}
