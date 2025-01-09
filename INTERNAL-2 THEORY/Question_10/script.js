document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input[type="text"]');
    const button = document.querySelector('button');
    const ul = document.querySelector('ul');

    button.addEventListener('click', addTask);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = input.value.trim();
        if (taskText === '') {
            button.classList.add('vibrate');
            setTimeout(() => button.classList.remove('vibrate'), 300);
            return;
        }

        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            li.classList.toggle('completed');
        });

        const span = document.createElement('span');
        span.textContent = taskText;

        const cross = document.createElement('span');
        cross.textContent = '✖';
        cross.classList.add('cross');
        cross.addEventListener('click', () => {
            ul.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(cross);
        ul.appendChild(li);

        input.value = '';
    }
});
