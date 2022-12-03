
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
        this.#createEventСhange();
    }

    // событие ввода доната
    #createEventСhange(){
        const callback = function (event) {
            // Проверяем данные
            const inputValue = parseInt(this.#input.value);
            if(!this.#validInput(inputValue)){
                this.#input.value = 0;
            } else if(inputValue > 100){
                this.#input.value = 100;
            } else {
                this.#input.value = inputValue;
            }
        }
        this.#input.addEventListener("input",callback.bind(this));
    }


    // создание событие Submit доната
    #createEventSubmit(){
        const callback = function (event) {
            event.preventDefault();
            // Проверяем данные
            const inputValue = parseInt(this.#input.value);
            if(!this.#validInput(inputValue)){
                alert("Сумма доната не может быть меньше 1$");
                return;
            }
            // Записали сумму
            this.#addTotalDonate(inputValue);
            // Записали в таблицу
            const grid = new DonateGrid();
            grid.addRow(inputValue);
            // Обнулили данные
            this.#input.value = 0;
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
            return false;
        }
        return true;
    }

}