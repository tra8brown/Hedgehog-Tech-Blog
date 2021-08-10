const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

//renders all handlebars pages
app.get('/', (req, res) => {
    res.render('all');
});

//server starts listening
app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});