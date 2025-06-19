// Объект с правильными ответами
const correctAnswers = {
    q1: "b",
    q2: "c",
    q3: "c",
    q4: "b",
    q5: "c",
    q6: "c",
    q7: "c",
    q8: "d"
};

// Переменная для хранения количества правильных ответов
let score = 0;

// Функциональное выражение
const calculateResult = function(score){
    if(score <= 4){
        return 'Рекомендуется углубить свои знания о культурной дипломатии';
    }
    else if(score <=6){
        return 'Есть что еще изучить, но у вас есть базовое понимание';
    }
    else if (score <=7){
        return 'У вас хорошее понимание культурной дипломатии.';
    }
    else {
        return 'Вы эксперт в области культурной дипломатии!';
    }
}

// Функция для проверки ответов
function checkAnswers() {
    score = 0; // Обнуляем счет перед каждой проверкой
    for (let questionId in correctAnswers) {
        const selectedAnswer = document.querySelector(`input[name="${questionId}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === correctAnswers[questionId]) {
            score++; // Инкремент баллов за правильный ответ
        }
    }
    displayResult();
}

// Функция для отображения результата
function displayResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Ваш результат: ${score} из 8.  ${calculateResult(score)}`;
}

// Работа со временем
setInterval(function() {
    const button = document.querySelector('button');
    button.style.backgroundColor = (button.style.backgroundColor === 'red') ? '#4CAF50' : 'red';
}, 1000); // Меняем цвет кнопки каждые 1 секунду

// Отклик на действие пользователя (нажатие клавиши)
document.addEventListener('keydown', function(event) {
    const container = document.querySelector('.container');
    container.style.backgroundColor = '#ddd'; // Меняем цвет фона при нажатии любой клавиши
    setTimeout(() => container.style.backgroundColor = '#fff', 200
); // Возвращаем обратно через 200 мс
});