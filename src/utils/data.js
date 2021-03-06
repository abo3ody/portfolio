import avtoatelImg from "../assets/images/avtoatel.jpg";
import searchBooksImg from "../assets/images/books-search.jpg";
import weatherAppImg from "../assets/images/weather-app.jpg";
const projects = [
   {
      id: 1,
      name: "avtoatel",
      url: "https://avtoatel.netlify.app/",
      img: avtoatelImg,
      techUsed: ["html", "css", "js", "react", "redux"],
      sourceCodeUrl: "https://github.com/abo3ody/avtoatel",
      desc: "e-commerce website for sale car: eva-mats, eco-mats, capes, bags.",
   },
   {
      id: 2,
      name: "books library",
      url: "https://react-books-search.netlify.app/",
      img: searchBooksImg,
      techUsed: ["html", "css", "js", "react", "redux"],
      sourceCodeUrl: "https://github.com/abo3ody/search-books",
      desc: "website for searching books using google books API.",
   },
   {
      id: 3,
      name: "weather app",
      url: "https://weather-app-kablo.netlify.app/",
      img: weatherAppImg,
      techUsed: ["html", "css", "js", "react"],
      sourceCodeUrl: "https://github.com/abo3ody/weather-app",
      desc: "website for check the weather in the world using openweathermap api",
   },
];

export default projects;
