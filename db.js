const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI? 
    process.env.MONGODB_URI 
    : 'mongodb://root:mongoroot1@ds221416.mlab.com:21416/zoocriadero';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})
mongoose.set('useFindAndModify', false);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB is connected')
})
    
module.exports = mongoose;