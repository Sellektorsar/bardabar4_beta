<template>
  <div class="space-y-6">
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-bold text-gray-900">Управление командой</h2>
      <button
        @click="showAddForm = true"
        class="btn-primary"
      >
        Добавить сотрудника
      </button>
    </div>

    <!-- Team List -->
    <div class="bg-white shadow rounded-lg overflow-hidden">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Сотрудник
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Должность
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Описание
            </th>
            <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Действия
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="member in contentStore.team" :key="member.id">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {{ getInitials(member.name) }}
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{ member.name }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{ member.position }}</div>
            </td>
            <td class="px-6 py-4">
              <div class="text-sm text-gray-900 max-w-xs truncate">{{ member.bio }}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                @click="editMember(member)"
                class="text-accent hover:text-accent-dark mr-4"
              >
                Редактировать
              </button>
              <button
                @click="deleteMember(member.id)"
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
    <div v-if="showAddForm || editingMember" class="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div class="mt-3">
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            {{ editingMember ? 'Редактировать сотрудника' : 'Добавить сотрудника' }}
          </h3>
          
          <form @submit.prevent="saveMember" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Имя</label>
              <input
                v-model="memberForm.name"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Должность</label>
              <input
                v-model="memberForm.position"
                type="text"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              >
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Описание</label>
              <textarea
                v-model="memberForm.bio"
                rows="3"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
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
                {{ editingMember ? 'Сохранить' : 'Добавить' }}
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
const editingMember = ref(null)

const memberForm = reactive({
  name: '',
  position: '',
  bio: ''
})

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const editMember = (member) => {
  editingMember.value = member
  memberForm.name = member.name
  memberForm.position = member.position
  memberForm.bio = member.bio
}

const deleteMember = (id) => {
  if (confirm('Вы уверены, что хотите удалить этого сотрудника?')) {
    contentStore.deleteTeamMember(id)
  }
}

const saveMember = () => {
  if (editingMember.value) {
    contentStore.updateTeamMember(editingMember.value.id, { ...memberForm })
  } else {
    contentStore.addTeamMember({ ...memberForm })
  }
  cancelEdit()
}

const cancelEdit = () => {
  showAddForm.value = false
  editingMember.value = null
  memberForm.name = ''
  memberForm.position = ''
  memberForm.bio = ''
}
</script>