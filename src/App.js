import React from "react";
import "./index.css";

class App extends React.Component {
  state = {
    data: [
      { todo: "cooking" },
      { todo: "reading " },
      { todo: "playing" },
      { todo: "shopping" },
      { todo: "cleaning" },
    ],
  };
  render() {
    const {data} = this.state;
    console.log(data);

    return (
      <div className="app">
        <form>
          <input />
          <button>Add</button>
        </form>
        <h1>To Do List</h1>
        <ul>
          {data.map((item, index) => {
            return <li key={index}>{item.todo}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default App;
