<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">Управление меню</h2>
      <button
        @click="showAddForm = true"
        class="btn-primary"
      >
        Добавить блюдо
      </button>
    </div>

    <!-- Menu List -->
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Блюдо
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Категория
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Цена
            </th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Действия
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in contentStore.menu" :key="item.id">
            <td class="px-6 py-4">
              <div class="flex items-center">
                <div class="h-10 w-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold">
                  🍽️
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{ item.name }}</div>
                  <div class="text-sm text-gray-500 max-w-xs truncate">{{ item.description }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                {{ getCategoryName(item.category) }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ item.price }}₽</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                @click="editItem(item)"
                class="text-accent hover:text-accent-dark mr-4"
              >
                Редактировать
              </button>
              <button
                @click="deleteItem(item.id)"
                class="text-red-600 hover:text-red-900"
              >
                Удалить
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add/Edit Form Modal -->
    <div v-if="showAddForm || editingItem" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            {{ editingItem ? 'Редактировать блюдо' : 'Добавить блюдо' }}
          </h3>
          
          <form @submit.prevent="saveItem" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Название</label>
              <input
                v-model="itemForm.name"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Описание</label>
              <textarea
                v-model="itemForm.description"
                rows="3"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Категория</label>
              <select
                v-model="itemForm.category"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Выберите категорию</option>
                <option value="burgers">Бургеры</option>
                <option value="appetizers">Закуски</option>
                <option value="hot">Горячие блюда</option>
                <option value="salads">Салаты</option>
                <option value="desserts">Десерты</option>
                <option value="drinks">Напитки</option>
              </select>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Цена (₽)</label>
              <input
                v-model.number="itemForm.price"
                type="number"
                required
                min="0"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
            </div>

            <div class="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                @click="cancelEdit"
                class="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Отмена
              </button>
              <button
                type="submit"
                class="px-4 py-2 text-sm font-medium text-white bg-accent rounded-md hover:bg-accent-dark"
              >
                {{ editingItem ? 'Сохранить' : 'Добавить' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useContentStore } from '~/stores/content'

const contentStore = useContentStore()

const showAddForm = ref(false)
const editingItem = ref(null)

const itemForm = reactive({
  name: '',
  description: '',
  category: '',
  price: 0
})

const categories = {
  burgers: 'Бургеры',
  appetizers: 'Закуски',
  hot: 'Горячие блюда',
  salads: 'Салаты',
  desserts: 'Десерты',
  drinks: 'Напитки'
}

const getCategoryName = (category) => {
  return categories[category] || category
}

const editItem = (item) => {
  editingItem.value = item
  itemForm.name = item.name
  itemForm.description = item.description
  itemForm.category = item.category
  itemForm.price = item.price
}

const deleteItem = (id) => {
  if (confirm('Вы уверены, что хотите удалить это блюдо?')) {
    contentStore.deleteMenuItem(id)
  }
}

const saveItem = () => {
  const itemData = {
    ...itemForm,
    image: `/images/menu/placeholder.jpg` // Default image
  }
  
  if (editingItem.value) {
    contentStore.updateMenuItem(editingItem.value.id, itemData)
  } else {
    contentStore.addMenuItem(itemData)
  }
  cancelEdit()
}

const cancelEdit = () => {
  showAddForm.value = false
  editingItem.value = null
  itemForm.name = ''
  itemForm.description = ''
  itemForm.category = ''
  itemForm.price = 0
}
</script>