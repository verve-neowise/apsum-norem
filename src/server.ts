import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



import apiRoute from './api.route';

app.use(apiRoute);

app.get('/', (req, res) => {

});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});