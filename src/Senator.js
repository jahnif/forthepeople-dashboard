import React from "react";

const Senator = ({ state, senator, quote, date, source, status, link }) => {
  return (
    <div className="senatorContainer">
      <div className="state">{state}</div>
      <div className={`senator ${status !== "Yes" ? "uncommitted" : ""}`}>
        {senator}
      </div>
      <div className={`status ${status !== "Yes" ? "uncommitted" : ""}`}>
        {status}{" "}
        {status === "Yes" ? (
          "⭐"
        ) : (
          <div className="call-now">
            <a href="https://votesaveamerica.com/calltool/">Call Now 📞</a>
          </div>
        )}
      </div>
      <div className="quote">
        <span>{quote}</span>
        <span className="source-date">
          <span>
            - <a href={link}>{source}</a>, {date}
          </span>
        </span>
      </div>
    </div>
  );
};

export default Senator;
