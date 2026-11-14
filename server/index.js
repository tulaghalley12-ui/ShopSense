import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({limit: "30mb", extend: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://tulaghalley12_db_user:3AtNPq4pueR6YQoN@cluster0.vrd71mf.mongodb.net";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {serNewUrlParser: true, useUnifiedtopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);
