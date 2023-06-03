# Задание 1: 15.02.2023
Реализовать реакт приложение, которое получает данные пользователя с сервера 

https://jsonplaceholder.typicode.com/users

Данные полученные с сервера вывести на страницу, добавить стилизацию к элементам.
Для стилизации можно использовать одну из следующих библиотеки а также стандартные css стили.

https://ant.design/

https://chakra-ui.com/docs/components

https://mui.com/

Справочник по CSS - http://htmlbook.ru/css

Выполненное задание загрузить на гитхаб, после поделиться ссылкой на репозиторий

**Задача со звездочкой 1**

С помощью [].find() => найти принадлежащий конкретному пользователю пост, и его также вывести на страницу ( получится карточка содержащая данные о пользователе, и данные что пользователь написал в посте).
Проверку можно завязать на id (Пользователь) == userId (Пост)

https://jsonplaceholder.typicode.com/posts

# Задание 2: 01.03.2023
- Реализовать раздел навигации Вход / Регистрация
- Развернуть на фронте стор менеджер (redux)
- Реализовать редюсер, который будет вызывать редюсер для получения пользователя и произовить регистрацию пользователя (в данном случае соединять массив)
let users = [ {...}, newUser ]
- Хранить шаблонные данные пользователя в локальной переменной, которую вернет редюсер

---

**Структура переменной / коллекции пользователя**

{
  id: 1,
  name: '....',
  login: '...',
  password: '...' }


---

**Задача со звездочкой**

- Развернуть сервер на express.js. Создать роутинги по аналогии с роутингом posts
- При нажатии на кнопку Вход / Зарегистрироваться передавать заполненные данные на сервер, в соответствующий роутинг (GET , POST)
- Если действие является "Вход" - выполнить вызов метода Users.findOne({login: login, password: password}), полученный ответ передать в реакт (фронт), иначе вывести положительный ответ с текстом "Пользователь отсутствует".
- Если действие является "Регистрация" заносить в базу данных в коллекцию (таблицу) users данные, введенные пользователем. после чего перенаправлять на роутинг получения пользователя ( res.redirect(`/user/${id}`) ) и вернуть полученного пользователя в реакт (фронт).

----

Полученного пользователя хранить в сторе (redux) на фронте (react). Если в сторе пользователь присутствует, то в навигации скрыть кнопки "Вход / Регистрация" и выводить имя пользователя + кнопку "Выход" которая будет очищать стор и эмулировать выход из аккаунта, после чего появятся изначальные кнопки. 
