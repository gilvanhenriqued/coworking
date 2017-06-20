process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
// -------------------------------------------- //
  describe('Users', ()=>{
    describe('/GET user', ()=>{
      it('should save without error', ()=>{
        chai.request(server)
        .get('/api/user')
        .end((err, res)=>{
          done()
        })
      })
    })
  })
  // ---------------------------------------------------------------------- //
  describe('/POST user', () => {
        it('it should authenticate without errors', (done) => {
          let user = {
              username: "user1",
              password: "user1",
              first_name: "User",
              last_name: "One",
              email: "userone@gmail.com"
          }
          let successfulAuth = {
              username: "user1",
              password: "user1",
          }
          let unsuccessfulAuth = {
              username: "user1",
              password: "user12",
          }
          chai.request(server)
              .post('/api/users')
              .send(user)
              .end((err, res) => {
                chai.request(server)
                    .post('/api/autentication_routes')
                    .send(unsuccessfulAuth)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('success').eql(false);
                        res.body.should.have.property('message');
                    });
                chai.request(server)
                    .post('/api/autentication_routes')
                    .send(successfulAuth)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('success').eql(true);
                        res.body.should.have.property('token');
                        res.body.should.have.property('user');
                    });
                done();
              });
        });
      });
  //-------------------------------------------------------------------------------------------//
