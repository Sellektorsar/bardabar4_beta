<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-montserrat font-bold mb-4">
          Наше меню
        </h1>
        <p class="text-xl max-w-3xl mx-auto">
          Разнообразные блюда на любой вкус — от сытных бургеров до изысканных закусок
        </p>
      </div>
    </section>

    <!-- Menu Categories -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-6 py-3 rounded-lg font-medium transition-all"
            :class="activeCategory === category.id 
              ? 'bg-primary text-white' 
              : 'bg-background text-primary hover:bg-primary hover:text-white'"
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Menu Items -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="item in filteredItems" 
            :key="item.id"
            class="card group"
          >
            <div class="relative overflow-hidden rounded-lg mb-4">
              <img 
                :src="item.image" 
                :alt="item.name" 
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                @error="handleImageError"
              >
              <div class="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full font-semibold">
                {{ item.price }}₽
              </div>
            </div>
            
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-2">
              {{ item.name }}
            </h3>
            
            <p class="text-text-light mb-4">
              {{ item.description }}
            </p>
            
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-accent">{{ item.price }}₽</span>
              <button class="btn-primary px-4 py-2 text-sm">
                Заказать
              </button>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredItems.length === 0" class="text-center py-16">
          <p class="text-text-light text-lg">
            В этой категории пока нет блюд
          </p>
        </div>
      </div>
    </section>

    <!-- Special Offers -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Специальные предложения
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="card bg-gradient-to-r from-primary to-secondary text-white">
            <h3 class="text-2xl font-montserrat font-bold mb-4">Комбо-обед</h3>
            <p class="mb-4">Бургер + картофель фри + напиток</p>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold">450₽</span>
              <span class="text-lg line-through opacity-75">650₽</span>
            </div>
          </div>
          
          <div class="card bg-gradient-to-r from-accent to-yellow-500 text-white">
            <h3 class="text-2xl font-montserrat font-bold mb-4">Семейный ужин</h3>
            <p class="mb-4">2 основных блюда + 2 десерта + напитки</p>
            <div class="flex items-center justify-between">
              <span class="text-3xl font-bold">1200₽</span>
              <span class="text-lg line-through opacity-75">1600₽</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
          Готовы сделать заказ?
        </h2>
        <p class="text-lg text-text-light mb-8 max-w-3xl mx-auto">
          Забронируйте столик или закажите доставку прямо сейчас
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contacts" class="btn-primary text-lg px-8 py-4">
            Забронировать стол
          </NuxtLink>
          <a href="tel:+7XXXXXXXXXX" class="btn-secondary text-lg px-8 py-4">
            Заказать по телефону
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')

const categories = [
  { id: 'all', name: 'Все блюда' },
  { id: 'burgers', name: 'Бургеры' },
  { id: 'appetizers', name: 'Закуски' },
  { id: 'hot', name: 'Горячие блюда' },
  { id: 'salads', name: 'Салаты' },
  { id: 'desserts', name: 'Десерты' },
  { id: 'drinks', name: 'Напитки' }
]

const menuItems = [
  // Бургеры
  {
    id: 1,
    name: 'Классический бургер',
    description: 'Сочная говяжья котлета, свежие овощи, сыр чеддер',
    price: 350,
    category: 'burgers',
    image: '/images/menu/burger-classic.jpg'
  },
  {
    id: 2,
    name: 'Чизбургер делюкс',
    description: 'Двойная котлета, два вида сыра, бекон, соус барбекю',
    price: 450,
    category: 'burgers',
    image: '/images/menu/burger-deluxe.jpg'
  },
  {
    id: 3,
    name: 'Вегетарианский бургер',
    description: 'Котлета из нута, авокадо, свежие овощи',
    price: 320,
    category: 'burgers',
    image: '/images/menu/burger-vegan.jpg'
  },
  
  // Закуски
  {
    id: 4,
    name: 'Куриные крылышки',
    description: 'Острые крылышки в соусе барбекю с сельдереем',
    price: 280,
    category: 'appetizers',
    image: '/images/menu/wings.jpg'
  },
  {
    id: 5,
    name: 'Картофель фри',
    description: 'Хрустящий картофель с тремя видами соусов',
    price: 180,
    category: 'appetizers',
    image: '/images/menu/fries.jpg'
  },
  {
    id: 6,
    name: 'Луковые кольца',
    description: 'Золотистые луковые кольца в панировке',
    price: 200,
    category: 'appetizers',
    image: '/images/menu/onion-rings.jpg'
  },
  
  // Горячие блюда
  {
    id: 7,
    name: 'Стейк рибай',
    description: 'Сочный стейк средней прожарки с овощами гриль',
    price: 850,
    category: 'hot',
    image: '/images/menu/steak.jpg'
  },
  {
    id: 8,
    name: 'Паста карбонара',
    description: 'Классическая паста с беконом и сливочным соусом',
    price: 420,
    category: 'hot',
    image: '/images/menu/pasta.jpg'
  },
  {
    id: 9,
    name: 'Рыба и чипсы',
    description: 'Треска в пивном кляре с картофелем фри',
    price: 480,
    category: 'hot',
    image: '/images/menu/fish-chips.jpg'
  },
  
  // Салаты
  {
    id: 10,
    name: 'Цезарь с курицей',
    description: 'Классический салат с курицей гриль и сухариками',
    price: 320,
    category: 'salads',
    image: '/images/menu/caesar.jpg'
  },
  {
    id: 11,
    name: 'Греческий салат',
    description: 'Свежие овощи, оливки, сыр фета, оливковое масло',
    price: 280,
    category: 'salads',
    image: '/images/menu/greek.jpg'
  },
  
  // Десерты
  {
    id: 12,
    name: 'Чизкейк Нью-Йорк',
    description: 'Классический чизкейк с ягодным соусом',
    price: 250,
    category: 'desserts',
    image: '/images/menu/cheesecake.jpg'
  },
  {
    id: 13,
    name: 'Шоколадный фондан',
    description: 'Теплый шоколадный кекс с мороженым',
    price: 280,
    category: 'desserts',
    image: '/images/menu/fondant.jpg'
  },
  
  // Напитки
  {
    id: 14,
    name: 'Кофе американо',
    description: 'Классический черный кофе',
    price: 120,
    category: 'drinks',
    image: '/images/menu/coffee.jpg'
  },
  {
    id: 15,
    name: 'Свежевыжатый сок',
    description: 'Апельсиновый, яблочный или морковный',
    price: 180,
    category: 'drinks',
    image: '/images/menu/juice.jpg'
  }
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return menuItems
  }
  return menuItems.filter(item => item.category === activeCategory.value)
})

const handleImageError = (event) => {
  event.target.src = '/images/placeholder-food.jpg'
}

// SEO
useHead({
  title: 'Меню - Бар-да-бар',
  meta: [
    { name: 'description', content: 'Меню кафе Бар-да-бар: бургеры, закуски, горячие блюда, салаты, десерты и напитки. Доступные цены и отличное качество.' }
  ]
})
</script>