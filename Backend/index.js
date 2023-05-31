const express = require('express');
const cors = require('cors')
const app = express();
const ConnectToMongo = require('./MongoConnection')
app.use(express.json())

app.use(cors(
    {
        origin : "http://localhost:3000",
        
    }
));




ConnectToMongo();

app.use('/user' , require('./Routes/UserRoutes'))

app.listen( 3001 , ()=> {console.log("LISTENING AT PORT: 3001")} )
