process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
// teste de cadastro do usuário
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
  // teste para autenticação de usuario
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
// teste das rotas de serviços
describe('/GET services',() => {
  beforeEach((done) => { //Before each test we empty the database
services.remove({}, (err) => {
   done();
});
  it('It should return without error', (done) => {
    let services = {
      tipoServico: "reserva" ,
      date: "2017/07/11",
      custo: 10000
    }
    let successfulReturn = {
      tipoServico: "reserva" ,
      date: "2017/07/11",
      custo: 10000
    }
    let unsuccessfulReturn = {
    
    }
chai.request(server)
    .post('/api/services')
    .send(services)
    .end((err, res) => {
      chai.request(server)
          .post('/api/services_routes')
          .send(unsuccessfulReturn)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('success').eql(false);
              res.body.should.have.property('message');
          });
      chai.request(server)
          .post('/api/services_routes')
          .send(successfulReturn)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.should.have.property('success').eql(true);
              res.body.should.have.property('token');
              res.body.should.have.property('service');
          });
      done();
    });
});
