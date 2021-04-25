import React, { useState } from "react";
import MediaQuery from "react-responsive";

const Senator = ({ state, senator, quote, date, source, status, link }) => {
  const [viewSource, setViewSource] = useState(false);
  const toggleViewSource = () => {
    viewSource ? setViewSource(false) : setViewSource(true);
    console.log(viewSource);
  };
  return (
    <>
      <MediaQuery query="(min-width: 900px)">
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
      </MediaQuery>
      <MediaQuery query="(max-width: 900px)">
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
            <div className="view-source" onClick={toggleViewSource}>
              {viewSource ? "-" : "+"} View Source
            </div>
          </div>
          <div className={`quote ${viewSource ? "open-source" : ""}`}>
            <span>{quote}</span>
            <span className="source-date">
              <span>
                - <a href={link}>{source}</a>, {date}
              </span>
            </span>
          </div>
        </div>
      </MediaQuery>
    </>
  );
};

export default Senator;
