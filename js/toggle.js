document.getElementById('history').addEventListener('click', function () {
    document.getElementById('donation').classList.remove('bg-green-300');
    document.getElementById('history').classList.add('bg-green-300');
    document.getElementById('main-con').classList.add('hidden');
    document.getElementById('transection').classList.remove('hidden');

});

document.getElementById('donation').addEventListener('click', function () {
    document.getElementById('history').classList.remove('bg-green-300');
    document.getElementById('donation').classList.add('bg-green-300');
    document.getElementById('main-con').classList.remove('hidden');
    document.getElementById('transection').classList.add('hidden');

});
