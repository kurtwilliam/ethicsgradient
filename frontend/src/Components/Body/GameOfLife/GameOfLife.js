import React, { Component } from "react";
import GameOfLifeLayout from "./GameOfLifeLayout";
import GameOfLifeGrid from "./GameOfLifeGrid";
import GameOfLifeSettings from "./GameOfLifeSettings";
import patterns from "./patterns";
import MetaTags from "react-meta-tags";
import GameOfLifeMidground from "./GameOfLifeMidground";
import GameOfLifeBackground from "./GameOfLifeBackground";
import PhoneDisplay from "./PhoneDisplay";

class GameOfLife extends Component {
  state = {
    speed: 1,
    paused: false,
    randomize: false,
    clear: false,
    gridSize: 400,
    zoomLevel: 0.75,
    selectedPattern: "Dot",
    cursorAction: "draw",
    displayedInfo: "settings", // settings patterns help
    currentHelpPage: 0,
    deviceWidth: 0,
  };

  componentDidMount() {
    document.title = "Bacterial Colony";
    const { innerWidth: width } = window;
    this.setState({ deviceWidth: width });
  }

  handleChange = (e) =>
    this.setState({
      [e.target.name]:
        e.target.name !== "cursorAction"
          ? parseInt(e.target.value, 10)
          : e.target.value,
    });

  toggleState = (e) => {
    // if click event, e is normal event
    // if called from grid, e is just a string
    const name = e.target ? e.target.name : e;
    return this.setState((prevState) => ({
      [name]: !prevState[name],
    }));
  };
  updateSelectedPattern = (patternName) =>
    this.setState((prevState) => ({
      selectedPattern:
        patternName === "" && prevState.selectedPattern === ""
          ? Object.keys(patterns)[0]
          : patternName,
      cursorAction: patternName !== "" ? "draw" : prevState.cursorAction,
    }));

  updateZoom = (zoom) =>
    this.setState({
      zoomLevel: parseFloat(zoom.target ? zoom.target.value : zoom).toFixed(2),
    });

  updateState = (name, value) => this.setState({ [name]: value });

  render() {
    const {
      speed,
      paused,
      gridSize,
      clear,
      randomize,
      zoomLevel,
      selectedPattern,
      cursorAction,
      displayedInfo,
      currentHelpPage,
      deviceWidth,
    } = this.state;
    console.log(deviceWidth);
    return (
      <>
        <MetaTags>
          <meta
            name="description"
            content="Dancing Math Patterns (aka cellular automaton) based off of John Conway's Game of Life."
          />
          <meta property="og:title" content="Bacterial Colony" />
          <meta
            property="og:image"
            content="../../../assets/GameOfLife/Thumb.png"
          />
        </MetaTags>
        {deviceWidth < 800 ? (
          <PhoneDisplay />
        ) : (
          <GameOfLifeLayout className="gol">
            <GameOfLifeBackground />
            <GameOfLifeMidground>
              <GameOfLifeSettings
                speed={speed}
                paused={paused}
                gridSize={gridSize}
                handleChange={this.handleChange}
                toggleState={this.toggleState}
                selectedPattern={selectedPattern}
                updateSelectedPattern={this.updateSelectedPattern}
                updateZoom={this.updateZoom}
                zoomLevel={zoomLevel}
                cursorAction={cursorAction}
                displayedInfo={displayedInfo}
                currentHelpPage={currentHelpPage}
                updateState={this.updateState}
              />
              <GameOfLifeGrid
                speed={speed}
                paused={paused}
                gridSize={gridSize}
                clear={clear}
                randomize={randomize}
                toggleState={this.toggleState}
                selectedPattern={selectedPattern}
                updateZoom={this.updateZoom}
                zoomLevel={zoomLevel}
                cursorAction={cursorAction}
                currentHelpPage={currentHelpPage}
                displayedInfo={displayedInfo}
                updateState={this.updateState}
              />
            </GameOfLifeMidground>
          </GameOfLifeLayout>
        )}
      </>
    );
  }
}

export default GameOfLife;
