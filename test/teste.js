process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);

  describe('Users', ()=>{
    describe('/GET user', ()=>{
      chai.request(server)
      .get('/api/user')
      .end((err, res)=>{

      })
    })
  })
