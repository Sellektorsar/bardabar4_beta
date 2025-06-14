import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    role: null
  }),

  getters: {
    isAdmin: (state) => state.role === 'admin',
    isEditor: (state) => state.role === 'editor' || state.role === 'admin'
  },

  actions: {
    async login(credentials) {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mock authentication
        if (credentials.username === 'admin' && credentials.password === 'admin123') {
          this.user = { username: 'admin', name: 'Администратор' }
          this.isAuthenticated = true
          this.role = 'admin'
          return { success: true }
        } else if (credentials.username === 'editor' && credentials.password === 'editor123') {
          this.user = { username: 'editor', name: 'Редактор' }
          this.isAuthenticated = true
          this.role = 'editor'
          return { success: true }
        } else {
          return { success: false, error: 'Неверные учетные данные' }
        }
      } catch (error) {
        return { success: false, error: 'Ошибка входа' }
      }
    },

    logout() {
      this.user = null
      this.isAuthenticated = false
      this.role = null
    },

    checkAuth() {
      // Check if user is authenticated (e.g., from localStorage)
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        const userData = JSON.parse(savedUser)
        this.user = userData.user
        this.isAuthenticated = userData.isAuthenticated
        this.role = userData.role
      }
    },

    saveAuth() {
      // Save authentication state to localStorage
      localStorage.setItem('user', JSON.stringify({
        user: this.user,
        isAuthenticated: this.isAuthenticated,
        role: this.role
      }))
    }
  }
})