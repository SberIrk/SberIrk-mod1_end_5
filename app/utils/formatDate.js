import moment from "moment";

// получаем сегоднешную дату в нужном формате
export function nowDate () {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}