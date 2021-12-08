import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchBar from "material-ui-search-bar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "white",
    color: "yellow",
    paddingTop: '25px',
    paddingBottom: '25px',

    // top: "50%",
    // float: "right",
    // position: "absolute",


    // backgroundColor: theme.palette.background.default,
    // color: theme.palette.text.primary,
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1,
    },
  },
  rightIcons: {
    marginLeft: theme.spacing(0.5),
  },
  spacer: {
    flexGrow: 1,
  },
}));

export default function Header({
  handleDrawerToggle,
  toggleDarkMode,
  darkMode,
}) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appbar} elevation={0} >
      <Toolbar className={classes.appbar}>
      <div className="search-container">
      <SearchBar
        style={{
          margin: "0",
          maxWidth: 200,
          // boxShadow: "0 0 0 2em #F4AAB9",
          fontSize: "1rem",
          border: "2px 2px 2px 2px",
          background: "white",
        }}
        placeholder=""
      >
        {/* <SearchIcon style={{ marginLeft: 0 }} /> */}
      </SearchBar>
    </div>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
        >
          <MenuIcon />
        </IconButton> */}
        {/* <Typography variant="h6" noWrap>
          Medium
        </Typography> */}
        <div className={classes.spacer} />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDarkMode}
          edge="start"
          className={classes.rightIcons}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.rightIcons}
        >
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.rightIcons}
        >
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
