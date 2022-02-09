import express from 'express';
import * as handlebars from 'express-handlebars'
import cors from 'cors';

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors())

let hbs = handlebars.create({
    extname: '.hbs'
})

app.engine('.hbs', hbs.engine);

app.set('view engine', '.hbs');
app.set('views', __dirname + '/../views');
app.use(express.static(__dirname + "/../public"))

import apiRoute from './api.route';

app.use('/api', apiRoute);

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});