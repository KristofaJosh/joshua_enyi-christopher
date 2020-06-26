require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');


const contactRouter = require('./routes/contactRoutes');
const isLogged = require('./middlewares/isAuth');


mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@chrisjoshmongodbcluster-nve0k.mongodb.net/Portfolio?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true});


const schema = require("./schema");


const app = express();


// set up middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(isLogged);
app.use(contactRouter);


app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.get('/', (req, res)=> {
    res.send(
        `
        <h1>Hey There!!</h1>
        <h3>Chris Josh say's hello!</h3>
        <h2>Today is ${Date()}</h2>
`
    );
});


mongoose.connection.once('open', () => console.log("Database Connected"));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});