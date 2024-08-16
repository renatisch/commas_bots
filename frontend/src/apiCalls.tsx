import React from "react";
import axios from "axios";

type FetchBotsProps = {
  setBots: Function;
};

export default function fetchBotsAPI({ setBots }: FetchBotsProps) {
  const botsEndpoint = "http://127.0.0.1:8000/bots";
  axios.get(botsEndpoint).then((response) => {
    if (response.status === 200) {
      setBots(response.data.bots);
    }
  });
}
