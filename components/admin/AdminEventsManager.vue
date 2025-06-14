<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">Управление мероприятиями</h2>
      <button
        @click="showAddForm = true"
        class="btn-primary"
      >
        Добавить мероприятие
      </button>
    </div>

    <!-- Events List -->
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Мероприятие
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Дата и время
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
          <tr v-for="event in contentStore.events" :key="event.id">
            <td class="px-6 py-4">
              <div class="text-sm font-medium text-gray-900">{{ event.title }}</div>
              <div class="text-sm text-gray-500 max-w-xs truncate">{{ event.description }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ formatDate(event.date) }}</div>
              <div class="text-sm text-gray-500">{{ event.time }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ event.price }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                @click="editEvent(event)"
                class="text-accent hover:text-accent-dark mr-4"
              >
                Редактировать
              </button>
              <button
                @click="deleteEvent(event.id)"
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
    <div v-if="showAddForm || editingEvent" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            {{ editingEvent ? 'Редактировать мероприятие' : 'Добавить мероприятие' }}
          </h3>
          
          <form @submit.prevent="saveEvent" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Название</label>
              <input
                v-model="eventForm.title"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Описание</label>
              <textarea
                v-model="eventForm.description"
                rows="3"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Дата</label>
              <input
                v-model="eventForm.date"
                type="date"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Время</label>
              <input
                v-model="eventForm.time"
                type="time"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Цена</label>
              <input
                v-model="eventForm.price"
                type="text"
                required
                placeholder="Например: 500₽ или Вход свободный"
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
                {{ editingEvent ? 'Сохранить' : 'Добавить' }}
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
const editingEvent = ref(null)

const eventForm = reactive({
  title: '',
  description: '',
  date: '',
  time: '',
  price: ''
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const editEvent = (event) => {
  editingEvent.value = event
  eventForm.title = event.title
  eventForm.description = event.description
  eventForm.date = event.date
  eventForm.time = event.time
  eventForm.price = event.price
}

const deleteEvent = (id) => {
  if (confirm('Вы уверены, что хотите удалить это мероприятие?')) {
    contentStore.deleteEvent(id)
  }
}

const saveEvent = () => {
  if (editingEvent.value) {
    contentStore.updateEvent(editingEvent.value.id, { ...eventForm })
  } else {
    contentStore.addEvent({ ...eventForm })
  }
  cancelEdit()
}

const cancelEdit = () => {
  showAddForm.value = false
  editingEvent.value = null
  eventForm.title = ''
  eventForm.description = ''
  eventForm.date = ''
  eventForm.time = ''
  eventForm.price = ''
}
</script>