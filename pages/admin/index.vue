<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <img src="/images/logo.svg" alt="Бар-да-бар" class="h-10 w-auto">
            <div>
              <h1 class="text-xl font-montserrat font-bold text-primary">Админ-панель</h1>
              <p class="text-sm text-text-light">Панель управления сайтом</p>
            </div>
          </div>
          
          <div class="flex items-center space-x-4">
            <span class="text-sm text-text-light">
              Добро пожаловать, {{ authStore.user?.name }}
              <span class="text-accent">({{ authStore.role }})</span>
            </span>
            <button
              @click="handleLogout"
              class="text-sm text-red-600 hover:text-red-800 transition-colors"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Navigation Tabs -->
      <div class="mb-8">
        <nav class="flex space-x-8">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            :class="[
              'py-2 px-1 border-b-2 font-medium text-sm transition-colors',
              activeTab === tab.id
                ? 'border-accent text-accent'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            ]"
          >
            {{ tab.name }}
          </button>
        </nav>
      </div>

      <!-- Dashboard Overview -->
      <div v-if="activeTab === 'dashboard'" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center">
              <div class="p-3 bg-primary rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Команда</p>
                <p class="text-2xl font-semibold text-gray-900">{{ contentStore.team.length }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center">
              <div class="p-3 bg-accent rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"/>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Мероприятия</p>
                <p class="text-2xl font-semibold text-gray-900">{{ contentStore.events.length }}</p>
              </div>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow">
            <div class="flex items-center">
              <div class="p-3 bg-secondary rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-600">Блюда в меню</p>
                <p class="text-2xl font-semibold text-gray-900">{{ contentStore.menu.length }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h3 class="text-lg font-medium text-gray-900 mb-4">Быстрые действия</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              @click="activeTab = 'team'"
              class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <h4 class="font-medium text-gray-900">Управление командой</h4>
              <p class="text-sm text-gray-500 mt-1">Добавить или редактировать сотрудников</p>
            </button>
            
            <button
              @click="activeTab = 'events'"
              class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <h4 class="font-medium text-gray-900">Афиша мероприятий</h4>
              <p class="text-sm text-gray-500 mt-1">Добавить новые события</p>
            </button>
            
            <button
              @click="activeTab = 'menu'"
              class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <h4 class="font-medium text-gray-900">Меню</h4>
              <p class="text-sm text-gray-500 mt-1">Обновить блюда и цены</p>
            </button>
            
            <NuxtLink
              to="/"
              target="_blank"
              class="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left block"
            >
              <h4 class="font-medium text-gray-900">Просмотр сайта</h4>
              <p class="text-sm text-gray-500 mt-1">Открыть сайт в новой вкладке</p>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Team Management -->
      <AdminTeamManager v-if="activeTab === 'team'" />

      <!-- Events Management -->
      <AdminEventsManager v-if="activeTab === 'events'" />

      <!-- Menu Management -->
      <AdminMenuManager v-if="activeTab === 'menu'" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuthStore } from '~/stores/auth'
import { useContentStore } from '~/stores/content'

const authStore = useAuthStore()
const contentStore = useContentStore()
const router = useRouter()

const activeTab = ref('dashboard')

const tabs = [
  { id: 'dashboard', name: 'Обзор' },
  { id: 'team', name: 'Команда' },
  { id: 'events', name: 'Мероприятия' },
  { id: 'menu', name: 'Меню' }
]

const handleLogout = () => {
  authStore.logout()
  localStorage.removeItem('user')
  router.push('/admin/login')
}

// Check authentication
onMounted(() => {
  authStore.checkAuth()
  if (!authStore.isAuthenticated) {
    router.push('/admin/login')
  }
})

useHead({
  title: 'Админ-панель - Бар-да-бар',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>