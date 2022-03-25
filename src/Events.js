/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    button.onclick = () => button.remove();

    document.body.append(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach(str => {
        const li = document.createElement('li');
        li.innerHTML = str;
        li.onmouseover = event => event.target.setAttribute('title', str);
        ul.append(li);
    });

    document.body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.innerHTML = 'tensor';

    let isFirstClick = true;
    a.onclick = e => {
        if (isFirstClick) {
            e.target.innerHTML = `${e.target.innerHTML} ${e.target.href}`;
            e.preventDefault();
            isFirstClick = false;
        }
    };

    document.body.appendChild(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const createLi = () => {
        const li = document.createElement('li');
        li.innerHTML = 'Пункт';
        li.onclick = e => e.target.innerHTML += '!';

        return li;
    };

    const ul = document.createElement('ul');
    ul.appendChild(createLi());

    const button = document.createElement('button');
    button.innerHTML = 'Добавить пункт';
    button.onclick = () => ul.appendChild(createLi());

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
