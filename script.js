var name = prompt('Введите свое имя: ');

function str(dateOfBirth = +prompt('Введите свой год рождения: '), year = +prompt(' Введите текущий год: ')) {
    let num = year - dateOfBirth;
    return num;
}
document.write(name + ', ' + 'Ваш возраст ' + str());