const express = require("express");
const cors = require("cors");
const app = express();
const Users = require("./hello");

app.use(cors());

app.get("/", (req, res) => {
  const { search } = req.query;

  const keys = ["first_name", "last_name", "email", "gender"];


    const searchQuery= (data)=>{

        return data.filter((item)=>(
            keys.some(key=>item[key].toLowerCase().includes(search.toLowerCase()))
        ))

    }

    res.json(searchQuery(Users).splice(0, 10))
  console.log(search);
});

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
