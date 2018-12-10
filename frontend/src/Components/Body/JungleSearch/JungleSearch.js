import React, { Component } from "react";
import Chunk from "../../shared/Chunk";
import Draggable from "react-draggable";

class JungleSearch extends Component {
  render() {
    return (
      <Chunk>
        <Draggable
          axis="x"
          handle=".handle"
          defaultPosition={{ x: 0, y: 0 }}
          position={null}
          grid={[25, 25]}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
        >
          <div className="box">I can be dragged anywhere</div>
        </Draggable>
      </Chunk>
    );
  }
}

export default JungleSearch;
