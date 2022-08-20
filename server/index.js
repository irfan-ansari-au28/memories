import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

// https://localhost:5000/posts
app.use('/posts',postRoutes)

app.use(bodyParser.json({limit: "30m", extended: true}))
app.use(bodyParser.urlencoded({limit: "30m", extended: true}))
app.use(cors())

//MongoDB
/*
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

*/

const CONNECTION_URL = "mongodb+srv://memories_user:karomaro@cluster0.qbie7i4.mongodb.net/?retryWrites=true&w=majority"
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=>console.log(`Server Running on Port: https://localhost:${PORT}`)))
.catch((error)=>console.log(`${error} did not connect`))

