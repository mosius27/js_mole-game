// Объявляем переменные в глобальной области видимости
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

// Функция, которая возвращает элемент лунки по индексу
function getHole(index) {
    return document.getElementById(`hole${index}`);
  }
  
  // Обработчик клика на лунку
  function handleHoleClick(event) {
    const hole = event.currentTarget;
  
    if (hole.classList.contains('hole_has-mole')) {
      // Если в лунке есть крот, увеличиваем счетчик убитых кротов
      const deadCounter = document.getElementById('dead');
      deadCounter.textContent = +deadCounter.textContent + 1;
  
      // Убираем класс hole_has-mole, чтобы убрать крота
      hole.classList.remove('hole_has-mole');
    } else {
      // Если в лунке нет крота, увеличиваем счетчик промахов
      const lostCounter = document.getElementById('lost');
      lostCounter.textContent = +lostCounter.textContent + 1;
    }
  
    // Проверяем условия победы и поражения
    if (+deadCounter.textContent === 10) {
      alert('Поздравляем! Вы победили!');
      resetCounters();
    } else if (+lostCounter.textContent === 5) {
      alert('Игра окончена. Вы проиграли.');
      resetCounters();
    }
  }
  
  // Функция для сброса счетчиков
  function resetCounters() {
    deadCounter.textContent = '0';
    lostCounter.textContent = '0';
  }
  
  // Регистрируем обработчик для каждой лунки
  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', handleHoleClick);
  }