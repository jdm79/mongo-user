const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
    .once('open', () => console.log('good to go!'))
    .on('error', (error) => console.warn('Warning', error));
    
// hook to drop collection before each test 
beforeEach( (done) => {
    mongoose.connection.collections.users.drop(() => {
        // ready to run the next test
        done();
    }); 
});
