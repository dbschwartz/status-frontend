import React from "react";
import '../styles/desktop/StatusBox.css';
import '../styles/mobile/StatusBox.css';

function StatusBox() {

  return (
    <section className="status-box">
      <header className="status-update">
          Status Update
      </header>
      <p className="status-info-text">Please update your name and status.</p>
    </section>
  );
}

export default StatusBox;
