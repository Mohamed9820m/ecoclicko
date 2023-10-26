const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const sequelize =require('./database/configdb')

const app = express();
const port = 5001;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// Define your routes here
const AdminRoute= require('./Routes/AdminRoute')
const BlogRoute= require('./Routes/BlogRoute')
const CommentsRoute= require('./Routes/CommentsRoute')
const UsersRoute= require('./Routes/UsersRoute')
const LikesRoute= require('./Routes/LikesRoute')

app.use('/api/Admin',AdminRoute)
app.use('/api/Blog',BlogRoute)
app.use('/api/Comments',CommentsRoute)
app.use('/api/Users',UsersRoute)
app.use('/api/Likes',LikesRoute)

// connsect the database 
sequelize.sync() // You may use { force: true } to drop and recreate tables
.then(() => {
  console.log('Database connected');
})
.catch((err) => {
  console.error('Error syncing database:', err);
});
// Start the server
app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});
