
import {DonateGrid} from "./donateGrid";
// Класс формы доната
export default class DonateForm {
    #form = document.querySelector(".donate-form");
    #h1 = document.querySelector("#total-amount");
    #input = document.querySelector(".donate-form__donate-input");

    constructor() {
        this.#init();
    }

    // инцилизация класса
    #init() {
        this.#createEventSubmit();
    }

    // создание событие ввода доната
    #createEventSubmit(){
        const callback = function (event) {
            event.preventDefault();
            // Проверяем данные
            const inputValue = parseInt(this.#input.value);
            if(!this.#validInput(inputValue)){
                return;
            }
            // Записали сумму
            this.#addTotalDonate(inputValue);
            // Записали в таблицу
            const grid = new DonateGrid();
            grid.addRow(inputValue);
            // Обнулили данные
            this.#input.value = 0;
            this.#input.textContent = '';
        }
        this.#form.addEventListener("submit",callback.bind(this));
    }

    // функция добавление суммы
    #addTotalDonate(value){
        const oldSummaDonate = this.#h1.innerText.split('$');
        this.#h1.innerText  = parseInt(oldSummaDonate[0]) + value + "$";
    }

    // функция валидности
    #validInput(value){
        if (!value || value <= 0){
            alert("Сумма доната не может быть меньше 1$");
            return false;
        }
        return true;
    }

}