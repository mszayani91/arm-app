let express = require('express'),
    mongoose = require('mongoose'),
    dataBaseConfig = require('./database/db');
bodyParser = require('body-parser'),
    cors = require('cors');

//MongoDB Connection

mongoose.Promise = global.Promise;
mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database connected sucessfully ')
},
    error => {
        console.log('Could not connected to database : ' + error)
    }
)

//Adding Routes

const receiptRoutes = require('./routes/receipt.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
// PORT
const port = process.env.PORT || 7000;

app.listen(port, () => {
    console.log('PORT Connected on: ' + port)
})

//Api Routes
app.use('/arm', receiptRoutes)
