<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-montserrat font-bold mb-4">
          Контакты
        </h1>
        <p class="text-xl max-w-3xl mx-auto">
          Свяжитесь с нами или приходите в гости — мы всегда рады видеть вас!
        </p>
      </div>
    </section>

    <!-- Contact Info & Booking Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div class="space-y-8">
            <h2 class="text-3xl font-montserrat font-bold text-primary mb-8">
              Как нас найти
            </h2>
            
            <!-- Address -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary mb-2">Адрес</h3>
                <p class="text-text-light">г. Город, ул. Улица, д. 00</p>
                <p class="text-text-light">Торговый центр "Название", 2 этаж</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary mb-2">Телефон</h3>
                <a href="tel:+7XXXXXXXXXX" class="text-text-light hover:text-accent transition-colors text-lg">
                  +7 (XXX) XXX-XX-XX
                </a>
                <p class="text-sm text-text-light mt-1">Звонки принимаются с 12:00 до 23:00</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary mb-2">Email</h3>
                <a href="mailto:info@bar-da-bar.ru" class="text-text-light hover:text-accent transition-colors">
                  info@bar-da-bar.ru
                </a>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary mb-2">Время работы</h3>
                <div class="space-y-1 text-text-light">
                  <p>Понедельник - Четверг: 12:00 - 24:00</p>
                  <p>Пятница - Суббота: 12:00 - 02:00</p>
                  <p>Воскресенье: 12:00 - 24:00</p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-3.22l-1.14 1.14a.5.5 0 01-.64.064L8 15H5a2 2 0 01-2-2V5zm5.99 4.99a.5.5 0 00.707.707L12 8.414V11a.5.5 0 001 0V7.5a.5.5 0 00-.5-.5H8a.5.5 0 000 1h2.586L8.99 9.596z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary mb-2">Социальные сети</h3>
                <div class="flex space-x-4">
                  <a href="https://t.me/bardabar" class="text-text-light hover:text-accent transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                  <a href="https://vk.com/bardabar" class="text-text-light hover:text-accent transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.9-1.744-.9-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                    </svg>
                  </a>
                  <a href="#" class="text-text-light hover:text-accent transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Booking Form -->
          <div class="bg-background p-8 rounded-xl">
            <h2 class="text-3xl font-montserrat font-bold text-primary mb-8">
              Забронировать стол
            </h2>
            
            <form @submit.prevent="submitBooking" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-text mb-2">
                    Ваше имя *
                  </label>
                  <input
                    id="name"
                    v-model="bookingForm.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Введите ваше имя"
                  >
                </div>
                
                <div>
                  <label for="phone" class="block text-sm font-medium text-text mb-2">
                    Телефон *
                  </label>
                  <input
                    id="phone"
                    v-model="bookingForm.phone"
                    type="tel"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="+7 (XXX) XXX-XX-XX"
                  >
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="date" class="block text-sm font-medium text-text mb-2">
                    Дата *
                  </label>
                  <input
                    id="date"
                    v-model="bookingForm.date"
                    type="date"
                    required
                    :min="minDate"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                </div>
                
                <div>
                  <label for="time" class="block text-sm font-medium text-text mb-2">
                    Время *
                  </label>
                  <select
                    id="time"
                    v-model="bookingForm.time"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Выберите время</option>
                    <option v-for="time in availableTimes" :key="time" :value="time">
                      {{ time }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label for="guests" class="block text-sm font-medium text-text mb-2">
                    Количество гостей *
                  </label>
                  <select
                    id="guests"
                    v-model="bookingForm.guests"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Выберите количество</option>
                    <option v-for="n in 20" :key="n" :value="n">
                      {{ n }} {{ n === 1 ? 'гость' : n < 5 ? 'гостя' : 'гостей' }}
                    </option>
                  </select>
                </div>
                
                <div>
                  <label for="hall" class="block text-sm font-medium text-text mb-2">
                    Предпочитаемый зал
                  </label>
                  <select
                    id="hall"
                    v-model="bookingForm.hall"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  >
                    <option value="">Любой</option>
                    <option value="family">Семейное кафе</option>
                    <option value="sport">Спорт-бар</option>
                    <option value="vip">VIP-зал</option>
                    <option value="banquet">Банкетный зал</option>
                  </select>
                </div>
              </div>

              <div>
                <label for="comment" class="block text-sm font-medium text-text mb-2">
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  v-model="bookingForm.comment"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Дополнительные пожелания..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary text-lg py-4"
                :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
              >
                {{ isSubmitting ? 'Отправляем...' : 'Забронировать стол' }}
              </button>

              <p class="text-sm text-text-light text-center">
                * Обязательные поля. Мы свяжемся с вами для подтверждения брони.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Как добраться
          </h2>
          <p class="text-lg text-text-light">
            Мы находимся в удобном месте с хорошей транспортной доступностью
          </p>
        </div>
        
        <!-- Map Placeholder -->
        <div class="bg-gray-200 h-96 rounded-xl flex items-center justify-center">
          <div class="text-center">
            <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <p class="text-gray-500">Интерактивная карта</p>
            <p class="text-sm text-gray-400">г. Город, ул. Улица, д. 00</p>
          </div>
        </div>

        <!-- Transport Info -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-primary mb-2">На автомобиле</h3>
            <p class="text-text-light">Удобная парковка рядом с заведением</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-primary mb-2">Общественный транспорт</h3>
            <p class="text-text-light">Автобусы №1, 5, 12 до остановки "Центр"</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM6 9.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm.5 2.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-primary mb-2">Пешком</h3>
            <p class="text-text-light">5 минут от центра города</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const bookingForm = ref({
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
  hall: '',
  comment: ''
})

const isSubmitting = ref(false)

const minDate = computed(() => {
  const today = new Date()
  return today.toISOString().split('T')[0]
})

const availableTimes = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
  '21:00', '21:30', '22:00', '22:30', '23:00'
]

const submitBooking = async () => {
  isSubmitting.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would normally send the data to your backend
    console.log('Booking submitted:', bookingForm.value)
    
    // Reset form
    bookingForm.value = {
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      hall: '',
      comment: ''
    }
    
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.')
  } catch (error) {
    console.error('Error submitting booking:', error)
    alert('Произошла ошибка. Пожалуйста, попробуйте еще раз или позвоните нам.')
  } finally {
    isSubmitting.value = false
  }
}

// SEO
useHead({
  title: 'Контакты - Бар-да-бар',
  meta: [
    { name: 'description', content: 'Контакты кафе Бар-да-бар: адрес, телефон, время работы. Забронируйте стол онлайн или свяжитесь с нами удобным способом.' }
  ]
})
</script>