const
  express = require('express'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  app = express(),
  exphbs = require('express-handlebars'),
  sequelize = require('sequelize'),
  mysql = require('mysql'),
  port = 3000;

app.use(bodyParser.urlencoded({
  extended: false
}));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.listen(port, function() {
  console.log(`Listening now on port ${port}.`)
});
