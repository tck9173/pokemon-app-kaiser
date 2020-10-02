const express = require('express');
const app = express();
const methodOverride = require('method-override');
const routes = require('./routes');


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/pokemon', routes.pokemon);
app.use(express.static("public"));
app.use('/players', routes.players);
app.use('/teams', routes.teams);

app.listen(3000, () => {
    console.log('Server up and running!');
});