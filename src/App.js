import "./styles.css";
import { useState } from "react";

export default function App() {
  var emojiDictionary = {
    "😊": "Smiling",
    "😂": "Laughing",
    "😉": "Just kidding",
    "🤗": "Hugging",
    "😋": "Tasty food",
    "🙄": "Rolling eyes",
    "🤔": "Thinking",
    "😏": "Smirking",
    "😶": "Confused",
    "😔": "Sad",
    "😴": "Sleepy",
    "🥱": "Yawning",
    "😭": "Crying",
    "😡": "Angry",
    "😖": "Annoyed"
  };

  const [meaning, setEmojiMeaning] = useState("");
  var emojisWeKnow = Object.keys(emojiDictionary);

  function inputChangeHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) meaning = "Emoji not present in database";

    setEmojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji interpreter</h1>
      <p style={{ fontSize: "1.5rem" }}>
        Enter the emoji which you want to search 👇🏼{" "}
      </p>
      <input onChange={inputChangeHandler}></input>
      <h3>Emojis we know:</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "3rem", cursor: "pointer" }}
            className="emoji-dic"
          >
            {emoji}
          </span>
        );
      })}
      <p style={{ fontSize: "1.5rem", margin: "2rem" }}>Output: ↓</p>
      <div className="output" style={{ backgroundColor: "lightgray" }}>
        {meaning}
      </div>
    </div>
  );
}
