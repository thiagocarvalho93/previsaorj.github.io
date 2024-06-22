export default function getImagePath(variable, version, hour, day, month, year) {
  return `./assets/${getVariableDirectory(variable)}/${variable}_${version}_${hour}Z${day}${month}${year}.png`
}

function getVariableDirectory(variable) {
  switch (variable) {
    case 'prec': return 'Precipitacao'
    case 'temp': return 'Temperatura'
    default: return 'Precipitacao'
  }
}