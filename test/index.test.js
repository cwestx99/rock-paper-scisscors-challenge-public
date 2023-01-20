
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';

chai.use(chaiHttp);

describe('Server tests', () => {

    describe(`/Get tests on '/' route`, () => {
        it('should return a 200 status once index page has been received', async () => {
            const res = await chai.request(server)
                .get(`/`)
                .send();

            expect(res).to.have.status(200);
        })
    }
    )
})
