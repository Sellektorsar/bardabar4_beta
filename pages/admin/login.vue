<template>
  <div class="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="flex justify-center">
          <img src="/images/logo.svg" alt="Бар-да-бар" class="h-16 w-auto">
        </div>
        <h2 class="mt-6 text-center text-3xl font-montserrat font-bold text-primary">
          Вход в админ-панель
        </h2>
        <p class="mt-2 text-center text-sm text-text-light">
          Введите ваши учетные данные для доступа к панели управления
        </p>
      </div>
      
      <form @submit.prevent="handleLogin" class="mt-8 space-y-6">
        <div class="space-y-4">
          <div>
            <label for="username" class="block text-sm font-medium text-text mb-2">
              Логин
            </label>
            <input
              id="username"
              v-model="credentials.username"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Введите логин"
            >
          </div>
          
          <div>
            <label for="password" class="block text-sm font-medium text-text mb-2">
              Пароль
            </label>
            <input
              id="password"
              v-model="credentials.password"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              placeholder="Введите пароль"
            >
          </div>
        </div>

        <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
          <p class="text-red-600 text-sm">{{ error }}</p>
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full btn-primary py-3"
          :class="{ 'opacity-50 cursor-not-allowed': isLoading }"
        >
          {{ isLoading ? 'Вход...' : 'Войти' }}
        </button>

        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
          <p class="text-sm text-gray-600 mb-2">Тестовые учетные данные:</p>
          <div class="space-y-1 text-xs text-gray-500">
            <p><strong>Администратор:</strong> admin / admin123</p>
            <p><strong>Редактор:</strong> editor / editor123</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const credentials = ref({
  username: '',
  password: ''
})

const isLoading = ref(false)
const error = ref('')

const handleLogin = async () => {
  isLoading.value = true
  error.value = ''

  try {
    const result = await authStore.login(credentials.value)
    
    if (result.success) {
      authStore.saveAuth()
      await router.push('/admin')
    } else {
      error.value = result.error
    }
  } catch (err) {
    error.value = 'Произошла ошибка при входе'
  } finally {
    isLoading.value = false
  }
}

// Redirect if already authenticated
onMounted(() => {
  authStore.checkAuth()
  if (authStore.isAuthenticated) {
    router.push('/admin')
  }
})

useHead({
  title: 'Вход в админ-панель - Бар-да-бар',
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>