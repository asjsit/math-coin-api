<p align=center>
<img width=380px src="https://sun4-2.userapi.com/impg/o3APjcKpg-PXb_Oz4cwx19g8AJf9rc4yAfYteQ/jx7a7gU6pMI.jpg?size=604x363&quality=96&sign=40f11d2b84e374a5558155c79386e883&type=album"></img>
</p>
<p align=center>
<a href="https://www.npmjs.com/package/math-coin-api"><img src="https://img.shields.io/npm/v/math-coin-api.svg?style=flat-square" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/math-coin-api"><img src="https://img.shields.io/npm/dt/math-coin-api.svg?style=flat-square" alt="NPM downloads"></a></p>
<div align="center">

**Модуль** для удобного использования **[MathCoin API](https://vk.com/@math_coin_game-dokumentaciya-api)**.
  
От **[AdepT-Hub](https://adept-hub.ru)** с  ❤.

</div>



## 📦 Установка

```sh
$ npm install math-coin-api
```
<br>

## 🚀 Использование

```js
const { MathCoinApi } = require('math-coin-api')
const api = new MathCoinApi({ token: 'YOUR_TOKEN', id: 'YOUR_ID' }) // Ваш токен и айди

// Получение баланса мерчанта
async function getMyBalance() {
    const balance = await api.getMyBalance() // Получаем баланс
    console.log(balance) // Выводим результат в консоль
}
getMyBalance() // Вызов функции
```

## 💸 Получение баланса пользователей

|Параметры|Описание|Тип|
|-|-|-|
|user_id|Айди пользователя у которого нужно проверить баланс|Number|

```js
// Получение баланса пользователей
async function getBalance() {
    const user_id = 657023844 // Айди пользователя у которого нужно получить баланс
    const userBalance = await api.getBalance({ user_id }) // Получаем балансы пользователей
    console.log(userBalance) // Выводим результат в консоль
}
getBalance() // Вызов функции
```

## 📄 Получение истории переводов

```js
// Получение истории переводов
async function getHistory() {
    const history = await api.getHistory() // Получаем истоорию переводов
    console.log(history) // Выводим результат в консоль
}
getHistory() // Вызов функции
```
## 💳 Перевод коинов пользователю

|Параметры|Описание|Тип|
|-|-|-|
|to_id|Айди пользователя которому нужно сделать перевод|Number|
|amount|Сумма перевода (по дефолту 0.1)|Number|

```js
//Перевод коинов пользователю
async function send() {
    const send = await api.send({to_id: 626050539, amount: 1}) // Делаем перевод 1 коин
    console.log(send) // Выводим результат в консоль
}
send() // Вызов функции
```
