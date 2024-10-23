import { activeProduct } from '../../main'
import {
  handleGetProducts,
  saveProduct,
  saveProducts
} from '../persistence/localStorage'
import { closeModal } from '../views/modal'
import { handleGetProductsToStore, handleRenderList } from '../views/store'
import Swal from 'sweetalert2'

// Guardar o modificar productos

export const handleSaveOrModifyProducts = () => {
  const name = document.getElementById('name').value
  const price = document.getElementById('price').value
  const img = document.getElementById('img').value
  const category = document.getElementById('category').value

  let product = null
  if (activeProduct) {
    product = {
      ...activeProduct,
      name,
      img,
      price,
      category
    }

    saveProduct(product)
    handleGetProductsToStore()
    Swal.fire({
      title: 'Producto modificado!',
      text: 'El producto fue modificado!.',
      icon: 'success'
    })
  } else {
    product = {
      id: new Date().toISOString(),
      name,
      img,
      price,
      category
    }

    saveProduct(product)
    handleGetProductsToStore()
    Swal.fire({
      title: 'Producto añadido!',
      text: 'El producto fue añadido!.',
      icon: 'success'
    })
  }

  closeModal()
}

export const handleDeleteProduct = () => {
  Swal.fire({
    title: 'Está seguro que desea eliminar el producto?',
    text: 'No es posible revertirlo!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProducts()
      const newProducts = products.filter(
        (product) => product.id !== activeProduct.id
      )
      saveProducts(newProducts)
      handleRenderList(newProducts)
      closeModal()
      Swal.fire({
        title: 'Eliminado!',
        text: 'El producto fue eliminado!.',
        icon: 'success'
      })
    } else {
      closeModal()
    }
  })
}
