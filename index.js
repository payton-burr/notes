const addBtn = document.querySelector('.add');
const notesContainer = document.querySelector('.notes');

const addNote = (text = '') => {
  const note = document.createElement('div');

  note.classList.add('note');

  note.innerHTML = `
        <div class="tools">
            <img src="clipboard.svg" class="edit" alt="edit">
            <img src="trashcan.svg" class="trash" alt="trash">
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;

  const textArea = note.querySelector('textarea');
  const edit = note.querySelector('.edit');
  const trash = note.querySelector('.trash');
  const main = note.querySelector('.main');

  main.innerHTML = marked(text);
  textArea.value = text;

  trash.addEventListener('click', () => {
    note.remove();
  });

  edit.addEventListener('click', () => {
    textArea.classList.toggle('hidden');
    main.style.width = textArea.style.width;
    main.style.height = textArea.style.height;
    main.classList.toggle('hidden');
  });

  textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    console.log(textArea.style.width);

    main.innerHTML = marked(value);
  });

  notesContainer.appendChild(note);
};

addBtn.addEventListener('click', () => addNote());
