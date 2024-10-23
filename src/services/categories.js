// Render de la vista categorías

import { handleGetProducts } from '../persistence/localStorage'
import { handleRenderList } from '../views/store'

const handleFilter = (category) => {
  const products = handleGetProducts()

  if (category === 'Todos') {
    handleRenderList(products)
  }
  if (
    category === 'Hamburguesas' ||
    category === 'Papas' ||
    category === 'Gaseosas'
  ) {
    const result = products.filter((product) => product.category === category)

    handleRenderList(result)
  }

  if (category === 'Mayor Precio') {
    const result = products.sort((a, b) => b.price - a.price)
    handleRenderList(result)
  }

  if (category === 'Menor Precio') {
    const result = products.sort((a, b) => a.price - b.price)
    handleRenderList(result)
  }
}

export const renderCategories = () => {
  const ulList = document.getElementById('listFilter')
  ulList.innerHTML = `
    <li id='todos'>Todos</li>
    <li id='hamburguesas'>Hamburguesas</li>
    <li id='papas'>Papas</li>
    <li id='gaseosas'>Gaseosas</li>
    <li id='mayorPrecio'>Mayor Precio</li>
    <li id='menorPrecio'>Menor Precio</li>
  `

  const liElements = ulList.querySelectorAll('li')

  liElements.forEach((li) => {
    li.addEventListener('click', (event) => {
      handleClick(li)
    })
  })

  const handleClick = (element) => {
    handleFilter(element.innerHTML)

    liElements.forEach((li) => {
      if (li.classList.contains('liActive')) {
        li.classList.remove('liActive')
      } else if (li === element) {
        li.classList.add('liActive')
      }
    })
  }
}
