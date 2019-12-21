
const
  myFormInputs = [
    document.querySelector('#date'),
    document.querySelector('#amount'),
    document.querySelector('#price')
  ],
  myTable = document.querySelector('.table')

document.querySelector('.form').addEventListener('submit', event => {

  event.preventDefault()

  const
    myFormData = myFormInputs.map(item => item.value),
    myTableRow = document.createElement('tr')

  myFormData.forEach(item => {
    const myTableData = document.createElement('td')
    myTableData.innerText = item
    myTableRow.appendChild(myTableData)
  })

  const myTableSubtotal = document.createElement('td')
  myTableSubtotal.innerText = myFormData[1] * myFormData[2]
  myTableRow.appendChild(myTableSubtotal)

  myTable.appendChild(myTableRow)

  eraseMyFormInputs()

})

const eraseMyFormInputs = () => {
  myFormInputs[0].value = ''
  myFormInputs[1].value = 1
  myFormInputs[2].value = ''

  myFormInputs[0].focus()
}