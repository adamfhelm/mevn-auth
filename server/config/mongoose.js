const mongoose = require('mongoose');

// Mongoose Settings:

mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

const db = mongoose.connection;

// Use config to make a connection

module.exports = (dbconfig) => {

  // mongoose.connect(
  //   dbconfig.db,
  //   { useNewUrlParser: true }
  // );

  mongoose.connect(dbconfig.db);

}

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => { console.log('Database Opened') });

mongoose.Promise = global.Promise;






