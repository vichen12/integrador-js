import { openModal } from './modal'
import { setActiveProduct } from '../../main'
import { handleGetProducts } from '../persistence/localStorage'

export const handleGetProductsToStore = () => {
  const products = handleGetProducts()

  handleRenderList(products)
}

export const handleRenderList = (products) => {
  const burgers = products.filter(
    (product) => product.category === 'Hamburguesas'
  )

  const potatoes = products.filter((product) => product.category === 'Papas')

  const soda = products.filter((product) => product.category === 'Gaseosas')

  const renderProductGroup = (products, title) => {
    if (products.length > 0) {
      const htmlProducts = products.map((product, index) => {
        return `<div class='product_card' id='product-${product.category}-${index}'> 
                    <img src='${product.img}'/>
                    <h4>${product.name}</h4>
                    <p>$${product.price}</p>
                </div>`
      })

      return `
      <section class='section_store'>
        <h3>${title}</h3>
        <div class='container_products'>
          ${htmlProducts.join('')}
        </div>
      </section>
      `
    } else {
      return ''
    }
  }

  const storeContainer = document.getElementById('store-container')
  storeContainer.innerHTML = `
    ${renderProductGroup(burgers, 'Hamburguesas')}
    ${renderProductGroup(potatoes, 'Papas')}
    ${renderProductGroup(soda, 'Gaseosas')}
  `

  const addEvents = (products) => {
    products.forEach((product, index) => {
      const productContainer = document.getElementById(
        `product-${product.category}-${index}`
      )

      productContainer.addEventListener('click', () => {
        setActiveProduct(product)
        openModal()
      })
    })
  }

  addEvents(burgers)
  addEvents(potatoes)
  addEvents(soda)
}
