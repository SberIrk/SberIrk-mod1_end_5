
import {nowDate} from "../utils/formatDate.js"

// таблица доната
export class DonateGrid{

    #conteinerDonate = document.querySelector(".donates-container__donates");

    // Добавляем новую строчку доната таблици
    addRow(value){
        this.#conteinerDonate.prepend(this.#createDivItem(value))
    }

    // создаем элемент новой строчки
    #createDivItem(value){
        // Готовим дату
        const div = document.createElement("div");
        div.className = "donate-item";
        div.textContent = nowDate();

        // Готовим добавляем сумму доната
        const donateSumma = document.createElement("b");
        donateSumma.textContent = ` - ${value}$`;

        div.append(donateSumma)
        return div;
    }

}