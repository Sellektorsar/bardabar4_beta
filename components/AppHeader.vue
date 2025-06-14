<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="headerClass">
    <div class="container-custom">
      <nav class="flex items-center justify-between py-4">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3">
          <img 
            src="/images/logo.svg" 
            alt="Бар-да-бар" 
            class="h-12 w-auto"
            @error="handleLogoError"
          >
          <div class="hidden sm:block">
            <h1 class="text-xl font-montserrat font-bold text-primary">Бар-да-бар</h1>
            <p class="text-xs text-text-light">развлекательный центр</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.path"
            class="nav-link"
            :class="{ 'active': $route.path === item.path }"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Contact Info & CTA -->
        <div class="hidden lg:flex items-center space-x-4">
          <a 
            href="tel:+7XXXXXXXXXX" 
            class="text-primary font-medium hover:text-accent transition-colors"
          >
            +7 (XXX) XXX-XX-XX
          </a>
          <button 
            @click="openBookingModal"
            class="btn-primary"
          >
            Забронировать
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="lg:hidden p-2 text-primary hover:text-accent transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!mobileMenu.isOpen.value"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </nav>
    </div>

    <!-- Mobile Navigation -->
    <div 
      class="lg:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50"
      :class="mobileMenu.isOpen.value ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-8">
          <div class="flex items-center space-x-3">
            <img src="/images/logo.svg" alt="Бар-да-бар" class="h-10 w-auto">
            <div>
              <h2 class="text-lg font-montserrat font-bold text-primary">Бар-да-бар</h2>
              <p class="text-xs text-text-light">развлекательный центр</p>
            </div>
          </div>
          <button 
            @click="mobileMenu.close"
            class="p-2 text-primary hover:text-accent transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <nav class="space-y-4">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.path"
            class="block py-3 px-4 text-lg font-medium text-text hover:text-primary hover:bg-background rounded-lg transition-all"
            :class="{ 'text-primary bg-background': $route.path === item.path }"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <div class="mt-8 space-y-4">
          <a 
            href="tel:+7XXXXXXXXXX" 
            class="block text-center py-3 px-4 text-primary font-medium border border-primary rounded-lg hover:bg-primary hover:text-white transition-all"
          >
            +7 (XXX) XXX-XX-XX
          </a>
          <button 
            @click="openBookingModal"
            class="w-full btn-primary"
          >
            Забронировать стол
          </button>
        </div>

        <!-- Social Links -->
        <div class="mt-8 flex justify-center space-x-4">
          <a href="#" class="text-primary hover:text-accent transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
            </svg>
          </a>
          <a href="#" class="text-primary hover:text-accent transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0956Z"/>
            </svg>
          </a>
          <a href="#" class="text-primary hover:text-accent transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const mobileMenu = inject('mobileMenu')
const isScrolled = ref(false)

const navigation = [
  { name: 'Главная', path: '/' },
  { name: 'Меню', path: '/menu' },
  { name: 'О нас', path: '/about' },
  { name: 'Команда', path: '/team' },
  { name: 'Афиша', path: '/events' },
  { name: 'Отзывы', path: '/reviews' },
  { name: 'Контакты', path: '/contacts' }
]

const headerClass = computed(() => {
  return isScrolled.value 
    ? 'bg-white shadow-lg' 
    : 'bg-transparent'
})

const toggleMobileMenu = () => {
  mobileMenu.isOpen.value = !mobileMenu.isOpen.value
}

const openBookingModal = () => {
  // TODO: Implement booking modal
  console.log('Open booking modal')
}

const handleLogoError = (event) => {
  // Fallback if logo image fails to load
  event.target.style.display = 'none'
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply text-text font-medium hover:text-primary transition-colors relative;
}

.nav-link.active {
  @apply text-primary;
}

.nav-link.active::after {
  content: '';
  @apply absolute bottom-0 left-0 w-full h-0.5 bg-primary;
}
</style>