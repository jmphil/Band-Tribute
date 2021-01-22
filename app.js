const require = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

var bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());