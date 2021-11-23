import React, { useState } from "react";
import "./styles.css";
import sample from "./profile.png";

import { Widget } from "rasa-webchat";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        button
      </button>

      {visible ? <p>paragraph</p> : ""}

      <Widget
        // arbitrary custom data. Stay minimal as this will be added to the socket
        title={"Title"}
        inputTextFieldHint={"Type a message..."}
        connectingText={"Waiting for server..."}
        embedded={false}
        hideWhenNotConnected={false}
        fullScreenMode={false}
        profileAvatar={sample}
        connectOn={"open"}
        socketUrl={"https://311320773469.ngrok.io"}
        socketPath={"/socket.io/"}
        initPayload={"/get_started"}
        showFullScreenButton={true}
      />
    </div>
  );
}
