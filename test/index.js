var app = require('../index.js');

describe('Sample CI Process', () =>
{
    it('Should Without error', (done) =>
    {
        var value = app.findSqrt(10);
        var expected = 3;

        if (value == expected)
        {
            done()
        }
        else
        {
            done(new Error(`Expected 3 got ${value}`));
        }
    });
});
