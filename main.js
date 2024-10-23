import { renderCategories } from './src/services/categories'
import {
  handleDeleteProduct,
  handleSaveOrModifyProducts
} from './src/services/products'
import { handleSearch } from './src/services/search'
import { closeModal, openModal } from './src/views/modal'
import { handleGetProductsToStore } from './src/views/store'

renderCategories()

export let activeProduct = null

export const setActiveProduct = (product) => {
  activeProduct = product
}

// STORE
handleGetProductsToStore()

//HEADER

const buttonAdd = document.getElementById('add-element')

buttonAdd.addEventListener('click', () => {
  openModal()
})

const buttonClose = document.getElementById('close-modal')

buttonClose.addEventListener('click', () => {
  closeModal()
})

const saveButton = document.getElementById('save')
const deleteButton = document.getElementById('delete')

saveButton.addEventListener('click', () => {
  handleSaveOrModifyProducts()
})

deleteButton.addEventListener('click', () => {
  handleDeleteProduct()
})

// SEARCH

const searchBtn = document.getElementById('button-search')
searchBtn.addEventListener('click', () => {
  const searchInput = document.getElementById('input-search')
  const searchValue = searchInput.value

  handleSearch(searchValue)
})
