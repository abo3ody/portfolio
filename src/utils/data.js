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
      name: "weather app",
      url: "https://ka15-weather.netlify.app",
      img: weatherAppImg,
      techUsed: ["html", "tailwindcss", "typescript", "vite"],
      sourceCodeUrl: "https://github.com/abo3ody/weather",
      desc: "website for check the weather in the world using openweathermap api",
   },
   {
      id: 3,
      name: "books library",
      url: "https://react-books-search.netlify.app/",
      img: searchBooksImg,
      techUsed: ["html", "css", "js", "react", "redux"],
      sourceCodeUrl: "https://github.com/abo3ody/search-books",
      desc: "website for searching books using google books API.",
   },
];

export default projects;
