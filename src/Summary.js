import React, { useState } from "react";

const Summary = ({
  yesCount,
  uncommittedCount,
  filteredYesSenators,
  filterUncommittedSenators,
  showEverySenator,
}) => {
  const [activeYesButton, setActiveYesButton] = useState(false);
  const [activeUncommittedButton, setActiveUncommittedButton] = useState(false);
  const [activeAllSenatorsButton, setActiveAllSenatorsButton] = useState(true);
  function activeButton(name) {
    if (name === "yes") {
      setActiveYesButton(true);
      setActiveUncommittedButton(false);
      setActiveAllSenatorsButton(false);
    } else if (name === "uncommitted") {
      setActiveYesButton(false);
      setActiveUncommittedButton(true);
      setActiveAllSenatorsButton(false);
    } else if (name === "allSenators") {
      setActiveYesButton(false);
      setActiveUncommittedButton(false);
      setActiveAllSenatorsButton(true);
    }
  }
  return (
    <div className="summary-dashboard">
      <div className="summary-container">
        <div className="summary-count">
          <div className="count">{yesCount}</div>
          <div className="count-label">Yes ⭐</div>
          <div
            className={`yes-filter filter ${
              activeYesButton ? "yes-active" : ""
            }`}
            onClick={() => {
              activeButton("yes");
              filteredYesSenators();
            }}
          >
            See Supporters
          </div>
        </div>
        <div className="summary-count">
          <div className="count">{uncommittedCount}</div>
          <div className="count-label">Uncommitted ❓</div>
          <div
            className={`uncommitted-filter filter ${
              activeUncommittedButton ? "uncommitted-active" : ""
            }`}
            onClick={() => {
              activeButton("uncommitted");
              filterUncommittedSenators();
            }}
          >
            See Uncommitted
          </div>
        </div>
      </div>
      <div
        className={`see-all filter ${
          activeAllSenatorsButton ? "all-senators-active" : ""
        }`}
        onClick={() => {
          activeButton("allSenators");
          showEverySenator();
        }}
      >
        See All Senators
      </div>
    </div>
  );
};

export default Summary;
