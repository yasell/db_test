## Тестовое задание

Готовый собранный шаблон лежит в папке `/build` (или собирается командой `npm run build`).
Здесь в корне - "рабочее" окружение. Чтобы начать работу, устанавливаем все пакеты и зависимости: выполнить в папке проекта: `npm i`.

Использование - `npm start` (дабы не ставить глобально 4-ю версию gulp).

### Парадигма

- Использую именование классов по БЭМ (block__elem_mod).
- Никаких сеток не использовал здесь (смысл?).
- Из стороннего: подключена библиотека jQuery и [Swiper](http://idangero.us/swiper/api)-слайдер.

## Назначение папок

```
/				 Исходные файлы и здесь работает сервер автообновлений.
build/			Сюда собирается проект
fonts/      	  Шрифты проекта (никак не обрабатываются)
img/          	Все картинки (обрабатываются (ужимаются) из корня этой папки плюс подпапки)
js/           	Глобальные js-файлы (обработается только если существует и не пустой)
sass/             Диспетчер подключений, глобальные стили и стили блоков
index.html 	   Главная страница проекта

```

## Url проекта (gh-pages)

Cодержимое папки `build/` запушено в ветку `gh-pages` текущего репозитория.
[gh-pages](https://yasell.github.io/db_test/)
