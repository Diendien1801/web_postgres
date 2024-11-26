const express = require("express");
const exphbs = require("express-handlebars");
const { createPagination } = require("express-handlebars-paginate");
const app = express();
const port = process.env.NODE_ENV || 3000;

app.use(express.static(__dirname + "/public"));

app.engine(
  "hbs",
  exphbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layouts",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    helpers: {
      createPagination,
      formatDate: (date) => {
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      },
    },
  })
);

app.set("view engine", "hbs");

//routes

app.get("/", (req, res) => res.redirect("/blog"));
app.use("/blog", require("./routes/blogRouter"));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
