const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
    it('saves a user', (done) => {
        const james = new User({ name: 'James' });
        
        james.save()
            .then( () => {
                assert(!james.isNew);
                done();
            })
    });
});