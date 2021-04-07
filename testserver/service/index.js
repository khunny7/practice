import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.connect('mongodb://mongodb.testserver_contacts-network/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Database Connected'))
.catch(err => console.error(err));

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`Node and express server running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});