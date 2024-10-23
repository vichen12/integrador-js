export const handleGetProducts = () => {
  const products = localStorage.getItem('products')

  return products ? JSON.parse(products) : []
}

export const saveProduct = (product) => {
  const products = handleGetProducts()
  const existingIndex = products.findIndex((p) => p.id === product.id)
  if (existingIndex !== -1) {
    products[existingIndex] = product
  } else {
    products.push(product)
  }
  localStorage.setItem('products', JSON.stringify(products))
}

export const saveProducts = (products) => {
  localStorage.setItem('products', JSON.stringify(products))
}
