import {schedulesDay} from "../schedules/load"
//selecionar o input de data
const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedulesDay()