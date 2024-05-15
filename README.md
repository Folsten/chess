<h2>Методология</h2>

<p>В проекте я использую методологию BEM исключительно для именования классов и соблюдения компонентного подхода в стилизации.
Прочие аспекты, опционально предлагаемые методологией, например рекомендации по делению, именованию и расположению файлов и папок я не применял осознанно.
Я посчитал, что в случае с лендингом это нецелесообразно и всего несколько файлов будет удобнее нескольких десятков как в процессе вёрстки, так и в случае необходимости внесения изменений в будущем. Кроме того, в условиях к выполнению тестового задания указан запрет на использование библиотек и фреймворков, вероятно, это также касается и сборщиков (vite/webpack/gulp/etc.), а вручную подключать каждый новый файл со стилями к HTML это не оптимально по времени и вредно в плане оптимизации.</p>

<h2>CSS</h2>

<p>Разбил стили лендинга на 4 CSS файла для поддержания чистоты кода и удобства навигации в нём.</p>

<ul>
<li><b>Reset.css</b> - сброс стилей браузера по умолчанию.</li>
<li><b>colors.css</b> - переменные цветов</li>
<li><b>Base.css</b> - максимально общие / базовые стили проекта, подключение шрифтов.</li>
<li><b>Main.css</b> - основной файл для стилизации.</li>
</ul>

<p>Если рассматривать в контексте развёртывания на боевом сервере, то желательно прогонять файлы через сборщик (vite/webpack/gulp/etc.) для их обработки с целью минификации, объединения, автопроставления префиксов и на выходе иметь один CSS файл. Похожие операции также желательны для изображений, HTML и JavaScript.</p>

<h2>JavaScript</h2>

<p>Всем элементам в DOM, с которыми проводятся манипуляции через JavaScript присваивается специальный класс с префиксом "<b>js-*****</b>",
Это делает код чище, за счёт явного указания на то какие из элементов подвергаются манипуляциям и позволяет избегать использования одних и тех же классов одновременно для стилизации и для выборки элементов из DOM.</p>
