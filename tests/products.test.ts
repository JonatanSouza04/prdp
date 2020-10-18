const chai = require('chai');
const chaiHttp = require('chai-http');
import app from '../src/routes';

chai.use(chaiHttp);
chai.should();

describe('Produtos', function() {
   
    describe('get() Produtos', function() {
        
        it("Obter todos os registros de produtos", (done) => {

            chai.request(app)
                .get('/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    let item = res.body[0];
                    chai.expect(item).to.have.a.property('_id');
                    chai.expect(item).to.have.a.property('code');
                    chai.expect(item).to.have.a.property('description');
                    chai.expect(item).to.have.a.property('amount');
                    chai.expect(item).to.have.a.property('withdrawn');
                    chai.expect(item).to.have.a.property('validated');

                    done();
                 });
        });

        it("Obter um registro de  produto", (done) => {
            chai.request(app)
                .get('/products/5f8b23c8fdd5761bd8fe88e2')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    let item = res.body[0];
                    chai.expect(item).to.have.a.property('_id');
                    chai.expect(item).to.have.a.property('code');
                    chai.expect(item).to.have.a.property('description');
                    chai.expect(item).to.have.a.property('amount');
                    chai.expect(item).to.have.a.property('withdrawn');
                    chai.expect(item).to.have.a.property('validated');

                    done();
                 });
        }); 

        it("Cadastrar um registro de produto", (done) => {
            chai.request(app)
                .post('/products')
                .send({code:'FR0214',description: 'PRODUTO INSERIR', amount:10, withdrawn: 0, validated: 0 })
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