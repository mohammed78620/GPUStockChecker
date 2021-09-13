process.env.NODE_ENV = 'test'
const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app')
const conn = require('../index')

describe('POST /add', () => {
    
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
    

    it('OK , create new GPU entry', (done) => {
        let data = {
            title: "ERGERG",
            img: "FDGVDFV",
            stock: false
        }
        request(app).post('/gpus/add')
            .send(data)
            .then((res) => {
                const body = res.body
                expect(body).to.contain.property('_id')
                expect(body).to.contain.property('title')
                expect(body).to.contain.property('img')
                expect(body).to.contain.property('stock')
                done()

            })
            .catch((err) => {
                done(err)
            })
            
    })
    it('fail , GPU entry requires title', (done) => {
        let data = {
            img: "FDGVDFV",
            stock: false
        }
        request(app).post('/gpus/add')
            .send(data)
            .then((res) => {
                const body = res.body
                expect(body).to.contain('ValidationError')
                done()

            })
            .catch((err) => {
                done(err)
            })
            
    })
})

