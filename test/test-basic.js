const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('./../index')

chai.use(chaiHttp);

describe('test collection', () => {
    it('should default api up and running', () => {
        console.log('server.routes', server._router.stack.forEach((route) => console.log(route.route?.path)))
        chai.request(server).get('/api/welcome').end((err, res)=>{
            console.log('res', res && res.statusCode);
            expect(res.statusCode).to.be.equal(200)
        })
    });

    it('should test base api', () => {
        const expectedValue = 10;
        const actualValue = 10;

        expect(actualValue).to.be.equal(expectedValue)
    });
});
