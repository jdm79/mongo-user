const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before( (done) => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        // uses a done() to guard against mongoose taking longer to connect
        // everything will pause until this happens, rather than smash through the test without connecting
        .once('open', () => { done(); })
        .on('error', (error) => console.warn('Warning', error));    
});


// hook to drop collection before each test 
beforeEach( (done) => {
    mongoose.connection.collections.users.drop(() => {
        // ready to run the next test
        done();
    }); 
});
