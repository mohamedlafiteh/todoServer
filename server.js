const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.listen(process.env.PORT || 3004, () => {
  console.log("server is listening on port 3004");
});

app.get("/todo", (req, res) => {
  res.send(todos);
});

const { Pool } = require("pg");

const pool = new Pool({
  user: "taskadmin",
  host: "localhost",
  database: "cyf_todo",
  password: "task1234",
  port: 5432
});

app.get("/todos", function(req, res) {
  pool.query("SELECT * FROM tasks", (error, result) => {
    if (error) {
      res.json({
        error: error
      });
    }
    res.json(result.rows);
  });
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
  pool.query(`delete from tasks where id=${todoId}`, (err, data) => {
    if (err) {
      console.log(err);
      res.send("An error occured when deleting");
    }
    res.json({
      message: `Great man. Deleted the task wiht id ${todoId}`
    });
  });
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

// const todos = [
//   {
//     id: 1,
//     title: "study React",
//     completed: false
//   },
//   {
//     id: 2,
//     title: "play football",
//     completed: false
//   },
//   {
//     id: 3,
//     title: "dinner with friends",
//     completed: false
//   },
//   {
//     id: 4,
//     title: "travel to Italy",
//     completed: false
//   }
// ];
