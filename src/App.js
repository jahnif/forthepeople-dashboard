import React, { useState, useEffect } from "react";
import axios from "axios";
import Senator from "./Senator";
import Summary from "./Summary";
import "./App.css";

// TODO make filter colors persist after clicking them
// TODO make quote accessible in mobile view
// TODO fix responsivenesss on mobile
// TODO deploy to netlify

function App() {
  let [senators, setSenators] = useState([]);
  let [everySenator, setEverySenator] = useState([]);
  let [yesCount, setYesCount] = useState("");
  let [uncommitteedCount, setuncommittedCount] = useState("");
  let [filteredYesSenators, setFilteredYesSenators] = useState([]);
  let [uncommittedSenators, setUncommittedSenators] = useState([]);
  const getSenators = async () => {
    const senatorData = await axios.get(
      "https://spreadsheets.google.com/feeds/list/1aeLQ_nSf9sgXssD7wWVzY23KxDeBqPpcERGkLKKmS5Q/od6/public/values?alt=json"
    );
    let allSenators = await senatorData.data.feed.entry;
    await setSenators(allSenators);
    setEverySenator(allSenators);
    let yesSenators = await allSenators.filter(
      (status) => status.gsx$status.$t === "Yes"
    );
    await setYesCount(yesSenators.length);
    setFilteredYesSenators(yesSenators);
    let uncommittedSenators = await allSenators.filter(
      (status) => status.gsx$status.$t !== "Yes"
    );
    await setuncommittedCount(uncommittedSenators.length);
    setUncommittedSenators(uncommittedSenators);
    return allSenators;
  };
  function filterYesSenators() {
    setSenators(filteredYesSenators);
  }
  function filterUncommittedSenators() {
    setSenators(uncommittedSenators);
  }
  function showEverySenator() {
    setSenators(everySenator);
  }
  useEffect(() => {
    getSenators();
  }, []);
  return (
    <div className="App">
      <div className="appContainer">
        <h1>Abolish the Filibuster</h1>
        <Summary
          yesCount={yesCount}
          uncommittedCount={uncommitteedCount}
          filteredYesSenators={filterYesSenators}
          filterUncommittedSenators={filterUncommittedSenators}
          showEverySenator={showEverySenator}
        />
        <div className="header-row">
          <div className="state">State</div>
          <div className="senator">Senator</div>
          <div className="status">Abolish Filibuster?</div>
          <div className="quote">Source</div>
        </div>
        {senators.map((entry) => (
          <Senator
            key={entry.gsx$senator.$t}
            state={entry.gsx$state.$t}
            senator={entry.gsx$senator.$t}
            status={entry.gsx$status.$t}
            quote={entry.gsx$quotes.$t}
            source={entry.gsx$source.$t}
            date={entry.gsx$date.$t}
            link={entry.gsx$link.$t}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
