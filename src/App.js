import "./App.css";

import { useState } from "react";
import MovieList from "./MovieList";
import Filtre from "./Filtre";
import { BrowserRouter, Route } from "react-router-dom";
import Description from "./Description";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Ex Machina",
      duration: "108 min",
      date: "2015",
      rate: 4.7,
      genre: "science fection,thriller,drama",
      description:
        "The film tells about Caleb (Domahal Gleeson), a 24-year-old programmer who works for a major Internet company and winner of several programming awards around the world.It consists of a body made in the form of a charming and attractive woman named Eva (Alicia Vikander).",
      img: "https://i.egycdn.com/pic/WmFwZndlY212bW90TmJFY21FbWp2TmhURW1iYQ.jpg",
    },
    {
      title: "Five feet apart",
      duration: "116 min",
      date: "2019",
      rate: 4.2,
      genre: "Romance",
      description:
        "Stella Grant is a seventeen-year-old girl who is hospitalized with cystic fibrosis, making her life full of restrictions and routines. One day, she meets Will Newman, who also has cystic fibrosis,  and although they are attracted to each other, they must keep a safe distance.",
      img: "https://i.egycdn.com/pic/WmFwZndlY21URXZOcHBibWVjbXZsbUVtam12UHZ3eA.jpg",
    },
    {
      title: "Exam",
      duration: "97 min",
      date: "2009",
      rate: 3.9,
      genre: "Mystery,thriller",
      description:
        "Eight candidates for a highly desirable corporate job are locked together in an exam room and given a final test with just one question.It seems simple yet confusing that soon, tensions begin to unravel.",
      img: "https://i.egycdn.com/pic/WmFwZndlY21FbVR2dnRSY21FY05kZFRUamw.jpg",
    },
  ]);
  const [keyword, setKeyword] = useState("");
  const [newRate, setNewRate] = useState(1);
  const search = (text) => {
    setKeyword(text);
  };
  const setRate = (rate) => {
    setNewRate(rate);
  };
  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          {" "}
          <Filtre search={search} setRate={setRate} newRate={newRate} />
          <br />
          <MovieList
            addMovie={addMovie}
            movies={movies.filter(
              (movie) =>
                movie.rate >= newRate &&
                movie.title.toLowerCase().includes(keyword.toLowerCase().trim())
            )}
          />
        </Route>
        <Route path="/:name"><Description movies={movies}/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
