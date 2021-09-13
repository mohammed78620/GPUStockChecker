process.env.NODE_ENV = 'test'
const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app')
const conn = require('../index')

describe('GET /gpu', () => {
    
    before((done) => {
    
        conn.connect()
        .then(()=> done())
        .catch((err) => done(err))
    })
    after((done) => {
        conn.close()
        .then(()=> done())
        .catch((err) => done(err))
    })

    it('OK , getting gpus entries which are empty', (done) => {

        request(app).get('/gpus')
            .then((res) => {
                const body = res.body
                expect(body.length).to.equal(0)
                done()

            })
            .catch((err) => {
                done(err)
            })
            
    })
    it('OK , getting gpu with one entry', (done) => {
        let data = {
            title: "ERGERG",
            img: "FDGVDFV",
            stock: false
        }
        request(app).post('/gpus/add')
            .send(data)
            .then((res) => {
                request(app).get('/gpus')
                .then((res) => {
                    const body = res.body
                    expect(body.length).to.equal(1)
                    done()
                })
                

            })
            .catch((err) => {
                done(err)
            })
            
    })
})