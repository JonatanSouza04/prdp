const chai = require('chai');
const chaiHttp = require('chai-http');
import app from '../src/routes';

chai.use(chaiHttp);
chai.should();

describe('Funcionários', function() {
   
    describe('get() Funcionários', function() {
        
        it("Obter todos os registros de funcionários", (done) => {

            chai.request(app)
                .get('/employees')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    let item = res.body[0];
                    chai.expect(item).to.have.a.property('_id');
                    chai.expect(item).to.have.a.property('cpf');
                    chai.expect(item).to.have.a.property('name');

                    done();
                 });
        });

        it("Obter um registro de funcionário", (done) => {

            chai.request(app)
                .get('/employees/5f8a3e41267bc0078433dd17')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    let item = res.body[0];
                    chai.expect(item).to.have.a.property('_id');
                    chai.expect(item).to.have.a.property('cpf');
                    chai.expect(item).to.have.a.property('name');

                    done();
                 });
        }); 

        it("Cadastrar um registro de funcionário", (done) => {

            chai.request(app)
                .post('/employees')
                .send({cpf:'12345678909',name: 'Jonatan Souza' })
                .end((err, res) => {

                     try{
                        res.should.have.status(200)
                     }catch(error){
                        res.should.have.status(400)
                     }

                     res.body.should.be.a('object');
                     done();

                 });
        });         
    });  
});