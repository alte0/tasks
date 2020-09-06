import chai from 'chai'
import { checkFormsInputNotEmpty } from '../src/js/helpers'
import FormData from 'formdata-node'
const assert = chai.assert

describe('Tesing file helpers.js', function () {
    describe('TEST - checkFormsInputNotEmpty', function () {

        it('Return: false', function () {
            const formData = new FormData()
            formData.set('nameField', '')
            assert.equal(checkFormsInputNotEmpty(formData), false)
        })

        it('Return: false, two fields empty', function () {
            const formData = new FormData()
            formData.set('nameField', '')
            formData.set('nameField2', '')
            assert.equal(checkFormsInputNotEmpty(formData), false)
        })

        it('Return: false, first field empty, second field no empty', function () {
            const formData = new FormData()
            formData.set('nameField', '')
            formData.set('nameField2', 'value')
            assert.equal(checkFormsInputNotEmpty(formData), false)
        })

        it('Return: true', function () {
            const formData = new FormData()
            formData.set('nameField', 'Hello!')
            assert.equal(checkFormsInputNotEmpty(formData), true)
        })

        it('Return: true, two fields with value', function () {
            const formData = new FormData()
            formData.set('nameField', 'Hello!')
            formData.set('nameField2', 'Hello!')
            assert.equal(checkFormsInputNotEmpty(formData), true)
        })
    })
})
