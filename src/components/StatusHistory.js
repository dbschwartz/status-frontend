import React, {  useEffect } from "react";
import '../styles/desktop/StatusHistory.css';


function StatusHistory(props) {


  return (
    <section className="status-history-box">
        <div class="name">
        <p>Name</p>
        {props.statuses.map((status, index) => (
        <p key={index}>{status.name}</p>
      ))}</div>
        <div class="status"> 
        <p>Status</p>
        {props.statuses.map((status, index) => (
        <p key={index}>{status.status}</p>
      ))}</div>

    </section>
  );
}

export default StatusHistory;
