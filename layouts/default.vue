<template>
  <div class="min-h-screen bg-background">
    <!-- Header -->
    <AppHeader />
    
    <!-- Main Content -->
    <main>
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Mobile Menu Overlay -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      @click="closeMobileMenu"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isMobileMenuOpen = ref(false)

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Provide mobile menu state to child components
provide('mobileMenu', {
  isOpen: isMobileMenuOpen,
  close: closeMobileMenu
})

onMounted(() => {
  // Close mobile menu on route change
  const router = useRouter()
  router.afterEach(() => {
    closeMobileMenu()
  })
})
</script>