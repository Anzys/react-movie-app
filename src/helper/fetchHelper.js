// fetch method of calling apis
import axios from "axios";
export const fetchMovies = async (str) => {
  // promise
  //   fetch("https://www.omdbapi.com/?apikey=4cc91a21&t=l")
  //     .then((resp) => resp.json())
  //     .catch((error) => console.log("error"));

  const { data } = await axios.get(
    "https://www.omdbapi.com/?apikey=4cc91a21&t=" + str
  );
  //   console.log(result);
  return data;
};
