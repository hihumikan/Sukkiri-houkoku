import React, { useState, useEffect, useRef } from "react";
import "./Explain";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./toilet_benza_shimeru_girl.png";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export function Explain() {
  const [time, setTime] = useState("");
  const classes = useStyles();
  const isFirstRender = useRef(false);

  const handleClick = () => {
    setTime(
      new Date().getHours() +
        "時" +
        new Date().getMinutes() +
        "分" +
        new Date().getSeconds() +
        "秒にスッキリしました！"
    );
  };
  useEffect(() => {
    isFirstRender.current = true;
  }, []);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      window.open(
        "http://twitter.com/share?url=https://sukkiri.qqey.net/&text=" +
          time +
          "&hashtags=スッキリ報告"
      );
    }
  }, [time]);

  return (
    <div className="app">
      <center>
        <img src={Logo} alt="logo" width="300px" height="300px" />
        <h1>スッキリ報告をする↓</h1>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<TwitterIcon />}
          onClick={() => {
            handleClick();
          }}
        >
          ツイート
        </Button>
        <h1>{time}</h1>
      </center>
    </div>
  );
}
