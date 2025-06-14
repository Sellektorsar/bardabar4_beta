<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-montserrat font-bold mb-4">
          Отзывы гостей
        </h1>
        <p class="text-xl max-w-3xl mx-auto">
          Читайте отзывы наших гостей и поделитесь своим мнением
        </p>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div v-for="review in reviews" :key="review.id" class="card">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                {{ review.initials }}
              </div>
              <div>
                <h4 class="font-semibold text-primary">{{ review.name }}</h4>
                <div class="flex text-accent">
                  <span v-for="i in review.rating" :key="i">★</span>
                </div>
              </div>
            </div>
            <p class="text-text-light mb-4">{{ review.text }}</p>
            <p class="text-sm text-text-light">{{ review.date }}</p>
          </div>
        </div>

        <!-- Add Review Form -->
        <div class="bg-background p-8 rounded-xl max-w-2xl mx-auto">
          <h2 class="text-2xl font-montserrat font-bold text-primary mb-6 text-center">
            Оставить отзыв
          </h2>
          
          <form @submit.prevent="submitReview" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="reviewName" class="block text-sm font-medium text-text mb-2">
                  Ваше имя *
                </label>
                <input
                  id="reviewName"
                  v-model="reviewForm.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Введите ваше имя"
                >
              </div>
              
              <div>
                <label for="rating" class="block text-sm font-medium text-text mb-2">
                  Оценка *
                </label>
                <select
                  id="rating"
                  v-model="reviewForm.rating"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                >
                  <option value="">Выберите оценку</option>
                  <option value="5">★★★★★ (5)</option>
                  <option value="4">★★★★☆ (4)</option>
                  <option value="3">★★★☆☆ (3)</option>
                  <option value="2">★★☆☆☆ (2)</option>
                  <option value="1">★☆☆☆☆ (1)</option>
                </select>
              </div>
            </div>

            <div>
              <label for="reviewText" class="block text-sm font-medium text-text mb-2">
                Ваш отзыв *
              </label>
              <textarea
                id="reviewText"
                v-model="reviewForm.text"
                rows="4"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Поделитесь своими впечатлениями..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary text-lg py-4"
              :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
            >
              {{ isSubmitting ? 'Отправляем...' : 'Отправить отзыв' }}
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const reviews = [
  {
    id: 1,
    name: 'Анна Смирнова',
    initials: 'АС',
    rating: 5,
    text: 'Отличное место для семейного отдыха! Вкусная еда, приятная атмосфера и внимательный персонал. Особенно понравился детский уголок.',
    date: '10 декабря 2024'
  },
  {
    id: 2,
    name: 'Михаил Козлов',
    initials: 'МК',
    rating: 5,
    text: 'Провели корпоратив в банкетном зале. Все прошло на высшем уровне! Отличная организация, вкусная еда, хорошее обслуживание.',
    date: '8 декабря 2024'
  },
  {
    id: 3,
    name: 'Елена Волкова',
    initials: 'ЕВ',
    rating: 5,
    text: 'Уютное место с отличной кухней. Особенно понравились бургеры и десерты! Обязательно вернемся еще.',
    date: '5 декабря 2024'
  },
  {
    id: 4,
    name: 'Сергей Новиков',
    initials: 'СН',
    rating: 4,
    text: 'Хорошее место для просмотра футбола. Большой экран, отличное пиво и закуски. Атмосфера супер!',
    date: '3 декабря 2024'
  }
]

const reviewForm = ref({
  name: '',
  rating: '',
  text: ''
})

const isSubmitting = ref(false)

const submitReview = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Review submitted:', reviewForm.value)
    
    // Reset form
    reviewForm.value = {
      name: '',
      rating: '',
      text: ''
    }
    
    alert('Спасибо за ваш отзыв! Он будет опубликован после модерации.')
  } catch (error) {
    console.error('Error submitting review:', error)
    alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.')
  } finally {
    isSubmitting.value = false
  }
}

useHead({
  title: 'Отзывы - Бар-да-бар',
  meta: [
    { name: 'description', content: 'Отзывы гостей кафе Бар-да-бар. Читайте мнения посетителей и оставляйте свои отзывы о нашем заведении.' }
  ]
})
</script>