<h2>Общая информация</h2>

<p>В проекте я использую методологию BEM исключительно для именования классов и соблюдения компонентного подхода в стилизации.
Прочие аспекты, опционально предлагаемые методологией, например рекомендации по именованию и расположению файлов и папок я не применял осознанно.</p>

<h2>CSS</h2>

<p>Разбил стили лендинга на 4 CSS файла для поддержания чистоты кода и удобства навигации в нём.</p>

<ul>
<li><b>Reset.css</b> - сброс стилей браузера по умолчанию.</li>
<li><b>Base.css</b> - максимально общие / базовые стили проекта и подключение шрифтов.</li>
<li><b>Main.css</b> - основной файл для стилизации.</li>
<li><b>Media.css</b> - стили медиа запросов (media-queries), получающие локальный приоритет над прочими стилями в зависимости от ширины экрана пользователя.</li>
</ul>

<p>Если рассматривать в контексте развёртывания на боевом сервере, то желательно предварительно прогонять файлы через сборщик (vite/webpack/gulp/etc.) для их обработки с целью минификации, объединения, автопроставления префиксов и на выходе иметь один CSS файл. Подобное необходимо и для html / js.</p>

<h2>JavaScript</h2>

<p>Всем элементам в DOM, с которыми проводятся манипуляции через JavaScript присваивается специальный класс с префиксом "JS-*****",
Это делает код чище, за счёт явного указания на то какие из элементов подвергаются манипуляциям и позволяет избегать использования одних и тех же классов одновременно для стилизации и для выборки элементов из DOM.</p>
