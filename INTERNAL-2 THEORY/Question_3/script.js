document.getElementById('toggleButton').addEventListener('click', function() {
    var content = document.getElementById('content');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
});
