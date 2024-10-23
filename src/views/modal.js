/* POPUP */

import { activeProduct, setActiveProduct } from '../../main'

export const openModal = () => {
  const popup = document.getElementById('modalPopUp')
  const deleteButton = document.getElementById('delete')
  popup.style.display = 'flex'
  deleteButton.style.display = 'none'

  if (activeProduct) {
    deleteButton.style.display = 'block'
    document.getElementById('name').value = activeProduct.name
    document.getElementById('price').value = activeProduct.price
    document.getElementById('img').value = activeProduct.img
    document.getElementById('category').value = activeProduct.category
  }
}

export const closeModal = () => {
  const popup = document.getElementById('modalPopUp')
  popup.style.display = 'none'
  setActiveProduct(null)
  resetModal()
}

export const resetModal = () => {
  document.getElementById('name').value = ''
  document.getElementById('price').value = 0
  document.getElementById('img').value = ''
  // Primer elemento de la lista
  document.getElementById('category').value = ''
}
