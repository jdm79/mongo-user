const assert = require('assert');
const User = require('../src/user');

describe('Reading users from the database', () => {
    let james;

    beforeEach( (done) => {
        james = new User({ name: 'James' });
        james.save()
            .then( () => done());
    })

    it('finds all users with a name of James', (done) => {
        User.find({ name: 'James' })
             .then( (users) => {
                console.log(users);
                // the _id's are ObjectIds, not raw string. need toStringing to compare them 
                assert(users[0]._id.toString() === james._id.toString())
                done();
            })
    })
});