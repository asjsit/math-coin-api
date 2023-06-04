const {post} = require('axios')

const url = 'http://77.232.138.218/api'

exports.MathCoinApi = class {
    constructor({token, id} = this) {
        this.token = token
        this.id = id
    }

    getMyBalance({token, id} = this) {
        return post(url + '/mybalance', {token, id}).then(({data}) => data)
    }

    getBalance({token, user_id = this.user_id} = this) {
        if(!user_id) throw new Error('Ошибка! Параметр user_id не передан.')
        return post(url + '/balance', {token, user_id}).then(({data}) => data)
    }

    send({token = this.token, id = this.id, to_id = this.to_id, amount = this.amount} = this) {
        if(!to_id) throw new Error('Ошибка! Параметр to_id не передан.')
        return post(url + '/send', {token, id, to_id, amount: amount ?? 0.1}).then(({data}) => data)
    }

    getHistory({token, id} = this) {
        return post(url + '/tx', {token, id}).then(({data}) => data)
    }
}