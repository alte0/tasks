import chai from 'chai'
import assertArrays from 'chai-arrays'
import chaiQuantifiers from 'chai-quantifiers'
import {
    checkLengthMinMaxStr,
    hasDateExpired,
    reverseDate,
    deleteTaskFromArrTasks,
    changeStatusTask,
    getTextInSearchParams
} from '../src/helpers/helpers'

chai.use(assertArrays)
chai.use(chaiQuantifiers)
const assert = chai.assert
const expect = chai.expect;

describe('This is test file - helpers.js', function () {
    describe('TEST - checkLengthMinMaxStr', function () {

        it('Return: false, \'\', 1, 1', function () {
            assert.equal(checkLengthMinMaxStr('', 1, 1), false)
        })

        it('Return: false, \'df\', 3, 3', function () {
            assert.equal(checkLengthMinMaxStr('df', 3, 3), false)
        })

        it('Return: false, \'df3\', 4, 4', function () {
            assert.equal(checkLengthMinMaxStr('df3', 4, 4), false)
        })

        it('Return: true \'df3d\', 4, 4', function () {
            assert.equal(checkLengthMinMaxStr('df3d', 4, 4), true)
        })

        it('Return: true, \'d\', 1, 1', function () {
            assert.equal(checkLengthMinMaxStr('d', 1, 1), true)
        })
    })

    describe('TEST - hasDateExpired (Warning Date)', function () {

        it('Return: false', function () {
            assert.equal(hasDateExpired('2020.09.10'), false)
        })

        it('Return: true', function () {
            assert.equal(hasDateExpired('2020.09.06'), true)
        })
    })

    describe('TEST - reverseDate', function () {

        it('Return: \'10-09-2020\'', function () {
            assert.equal(reverseDate('2020.09.10'), '10-09-2020')
        })

        it('Return: \'06-09-2020\'', function () {
            assert.equal(reverseDate('2020.09.06'), '06-09-2020')
        })
    })

    describe('TEST - deleteTaskFromArrTasks', function () {
        const tasksFake = [
            {
                'task_id': 1
            },
            {
                'task_id': 2
            }
        ]

        it('Return: is array', function () {
            expect(deleteTaskFromArrTasks(tasksFake, 1)).to.be.array()
        })

        it('Return: array of size 1', function () {
            expect(deleteTaskFromArrTasks(tasksFake, 1)).to.be.ofSize(1)
        })

        it('Return: [{\'task_id\': 2}]', function () {
            expect(deleteTaskFromArrTasks(tasksFake, 1)).to.containExactlyOne(item => item.task_id === 2)
        })
    })

    describe('TEST - changeStatusTask', function () {
        const taskFake = {
            'task_status': 0
        }

        it('Return: object change to 1', function () {
            assert.equal(changeStatusTask(taskFake)['task_status'], 1)
        })
    })

    describe('TEST - getTextInSearchParams', function () {
        it('Return: params ""', function () {
            assert.equal(getTextInSearchParams({ search: ''}), '')
        })

        it('Return: params "name"', function () {
            assert.equal(getTextInSearchParams({ search: '?q=name' }), 'name')
        })
    })
})
