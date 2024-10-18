import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      This project was coded by Thuany and can be found on{" "}
      <a
        href="https://github.com/thumaraujo/react-homework4"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Github
      </a>
      .
    </div>
  );
}
