const { assert, should } = require('chai');

describe("test", () => {
    describe("test", ()=> {
        it("should be a string", (done) => {
            assert.typeOf("test", "string");
            done();
        })
    })
})