const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.listen(process.env.PORT || 3005, () => {
  console.log("server is listening on port 3005");
});

app.get("/todo", (req, res) => {
  res.send(todos);
});

// GET /todo/3
// app.get("/todo/:id", (req, res) => {
//   console.log(req.params);
//   var id = req.params.id;

//   const filteredData = todos.find(data => {
//     return data.id == id;
//   });
//   console.log(filteredData);
//   res.send(filteredData);
// });
app.delete("/todo/:todoId", (req, res) => {
  var todoId = req.params.todoId;
  console.log(todoId);
  var todo = todos.find(todo => {
    return todo.id == todoId;
  });
  console.log(todo);
  todos.splice(todos.indexOf(todo), 1);
  res.send(todos);
});

// app.post("/albums", (req, res) => {
//     albumsData.push(req.body);
//     console.log(req.body);
//     res.send("this is the post endpoint");
// });
// app.get("/albums/:genre", (req, res) => {
//     console.log(req.query);
//     if (req.query === undefined) {
//         res.send(albumsData);
//     } else {
//         let filteredLIst = albumsData.filter(
//             album => album.primaryGenreName === req.query.genre
//         );
//         res.send(filteredLIst);
//     }
// });
//
// app.put("/albums/:albumId", function (req, res) {
//     console.log(req.params.albumId);
//     console.log(req.body);
//     var albumId = req.params.albumId;
//     var albumIndex = albumsData.findIndex(album => album.albumId === albumId);
//     albumsData[albumIndex] = { ...albumsData[albumIndex], ...req.body };
//     res.send("test");
// });

const todos = [
  {
    id: 1,
    title: "study React",
    completed: false
  },
  {
    id: 2,
    title: "play football",
    completed: false
  },
  {
    id: 3,
    title: "dinner with friends",
    completed: false
  },
  {
    id: 4,
    title: "travel to Italy",
    completed: false
  }
];
