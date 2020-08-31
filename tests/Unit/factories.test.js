const chai = require('chai');
const { expect } = chai;
const factory = require('../../database/factories/factory');
const CategoryFactory = require('../../database/factories/CategoryFactory');
describe('Test factories', () => {

        
    it('factories with all data', (done) => {

        const expectData = [
            {
                id: 1,
                name: 'PHP',
                date: '25-04'
            },
            {
                id: 1,
                name: 'PHP',
                date: '25-04'
            },
            {
                id: 1,
                name: 'PHP',
                date: '25-04'
            },
            {
                id: 1,
                name: 'PHP',
                date: '25-04'
            },
        ];


        expect(factory(CategoryFactory, 4)).to.eql(expectData)
        done()
    })

    it('factories with change partial data', (done) => {            

        const expectData = [
            {
                id: 1,
                name: 'PHP',
                date: '14-06'
            },
            {
                id: 1,
                name: 'PHP',
                date: '14-06'
            },
            {
                id: 1,
                name: 'PHP',
                date: '14-06'
            },
            {
                id: 1,
                name: 'PHP',
                date: '14-06'
            },
        ];


        expect(factory(CategoryFactory, 4, { date: '14-06'})).to.eql(expectData)
        done()
        
    })
   
})
