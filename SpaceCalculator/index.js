let departureentry = prompt(`Digite a data de partida (Formata DD/MM/YYYY)`)

let departuredate = moment(departureentry, `DD/MM/YYYY`)

let today = moment()

let dateDiff = today - departuredate

let chosenOption = prompt(`Escolha como gostaria de exiber o tempo de partida\n1- Segundos \n2- Minutos \n3- Horas \n4- Dias`)

if(chosenOption == `1`)
{
    let secondOfDeparture = Math.round(dateDiff / 1000 )
    alert(`Tempo de voo: ` + secondOfDeparture + ` segundos`)
}else if(chosenOption == `2`) 
{
    let minutesofdeparture =  Math.round(dateDiff / 1000 / 60)
    alert(`Tempo de voo: ` + minutesofdeparture + ` minutos`)
}else if(chosenOption == `3`) 
{
    let hoursofdeparture =  Math.round(dateDiff / 1000 / 3600 )
    alert(`Tempo de voo: ` + hoursofdeparture + ` horas`)
}else if(chosenOption == `4`) 
{
    let dayofdeparture =  Math.round(dateDiff / 1000 / 3600 / 24 )
    alert(`Tempo de voo: ` + dayofdeparture + ` dias`)
} else {
    alert(`Opcao inavaldia`)
}