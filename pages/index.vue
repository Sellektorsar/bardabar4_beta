<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Video/Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Бар-да-бар интерьер" 
          class="w-full h-full object-cover"
          @error="handleImageError"
        >
        <div class="absolute inset-0 hero-bg"></div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4">
        <div class="container-custom">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 fade-in">
            Добро пожаловать в<br>
            <span class="text-accent">Бар-да-бар</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto slide-up">
            Развлекательный центр для незабываемого отдыха с семьей и друзьями
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <NuxtLink to="/menu" class="btn-primary text-lg px-8 py-4">
              Посмотреть меню
            </NuxtLink>
            <button @click="scrollToAbout" class="btn-secondary text-lg px-8 py-4">
              Узнать больше
            </button>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            О нашем заведении
          </h2>
          <p class="text-lg text-text-light max-w-3xl mx-auto">
            Бар-да-бар — это уютное место, где каждый найдет что-то особенное для себя
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h3 class="text-2xl font-montserrat font-semibold text-primary">
              Место для любого случая
            </h3>
            <p class="text-text-light leading-relaxed">
              Отличная дружелюбная атмосфера, уютная обстановка. У нас вы найдете разнообразное меню, 
              как для взрослых, так и для детей. Наше заведение идеально подходит для семейного отдыха, 
              романтических ужинов, встреч с друзьями и деловых обедов.
            </p>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-primary">Семейное кафе</h4>
                  <p class="text-sm text-text-light">Уютная атмосфера для всей семьи</p>
                </div>
              </div>
              
              <div class="flex items-center space-x-3">
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-primary">Спорт-бар</h4>
                  <p class="text-sm text-text-light">Трансляции на большом экране</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img 
              src="/images/about-image.jpg" 
              alt="Интерьер кафе" 
              class="rounded-xl shadow-custom w-full"
              @error="handleImageError"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Наши залы и услуги
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
              </svg>
            </div>
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-2">Банкетный зал</h3>
            <p class="text-text-light">До 110 человек. Идеально для свадеб, юбилеев и корпоративов</p>
          </div>
          
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-2">VIP-зал</h3>
            <p class="text-text-light">До 15 человек. Приватная атмосфера для особых случаев</p>
          </div>
          
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-2">Семейное кафе</h3>
            <p class="text-text-light">Дружелюбная атмосфера и детское меню</p>
          </div>
          
          <div class="card text-center">
            <div class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
              </svg>
            </div>
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-2">Спорт-бар</h3>
            <p class="text-text-light">Трансляции спортивных событий на большом экране</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Preview Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Наше меню
          </h2>
          <p class="text-lg text-text-light max-w-3xl mx-auto">
            Разнообразные блюда на любой вкус — от сытных бургеров до изысканных закусок
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div class="card">
            <img 
              src="/images/menu-burger.jpg" 
              alt="Бургеры" 
              class="w-full h-48 object-cover rounded-lg mb-4"
              @error="handleImageError"
            >
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-2">Бургеры</h3>
            <p class="text-text-light mb-4">Сочные бургеры с отборным мясом и свежими овощами</p>
            <span class="text-accent font-semibold">от 350₽</span>
          </div>
          
          <div class="card">
            <img 
              src="/images/menu-appetizers.jpg" 
              alt="Закуски" 
              class="w-full h-48 object-cover rounded-lg mb-4"
              @error="handleImageError"
            >
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-2">Закуски</h3>
            <p class="text-text-light mb-4">Разнообразные закуски к пиву и другим напиткам</p>
            <span class="text-accent font-semibold">от 200₽</span>
          </div>
          
          <div class="card">
            <img 
              src="/images/menu-hot.jpg" 
              alt="Горячие блюда" 
              class="w-full h-48 object-cover rounded-lg mb-4"
              @error="handleImageError"
            >
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-2">Горячие блюда</h3>
            <p class="text-text-light mb-4">Сытные и вкусные горячие блюда для полноценного обеда</p>
            <span class="text-accent font-semibold">от 450₽</span>
          </div>
        </div>
        
        <div class="text-center">
          <NuxtLink to="/menu" class="btn-primary text-lg px-8 py-4">
            Посмотреть полное меню
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Events Preview Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Афиша мероприятий
          </h2>
          <p class="text-lg text-text-light max-w-3xl mx-auto">
            Следите за нашими событиями и не пропустите интересные мероприятия
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div class="card">
            <div class="bg-primary text-white p-4 rounded-t-lg">
              <div class="text-center">
                <div class="text-2xl font-bold">15</div>
                <div class="text-sm">ДЕК</div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-montserrat font-semibold text-primary mb-2">Живая музыка</h3>
              <p class="text-text-light text-sm mb-2">Выступление местной группы</p>
              <p class="text-accent font-semibold">20:00</p>
            </div>
          </div>
          
          <div class="card">
            <div class="bg-primary text-white p-4 rounded-t-lg">
              <div class="text-center">
                <div class="text-2xl font-bold">22</div>
                <div class="text-sm">ДЕК</div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-montserrat font-semibold text-primary mb-2">Караоке вечер</h3>
              <p class="text-text-light text-sm mb-2">Пойте любимые песни</p>
              <p class="text-accent font-semibold">19:00</p>
            </div>
          </div>
          
          <div class="card">
            <div class="bg-primary text-white p-4 rounded-t-lg">
              <div class="text-center">
                <div class="text-2xl font-bold">31</div>
                <div class="text-sm">ДЕК</div>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-montserrat font-semibold text-primary mb-2">Новогодняя вечеринка</h3>
              <p class="text-text-light text-sm mb-2">Встречаем Новый год вместе!</p>
              <p class="text-accent font-semibold">22:00</p>
            </div>
          </div>
        </div>
        
        <div class="text-center">
          <NuxtLink to="/events" class="btn-primary text-lg px-8 py-4">
            Смотреть все события
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Отзывы наших гостей
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                А
              </div>
              <div>
                <h4 class="font-semibold text-primary">Анна</h4>
                <div class="flex text-accent">
                  <span v-for="i in 5" :key="i">★</span>
                </div>
              </div>
            </div>
            <p class="text-text-light">
              "Отличное место для семейного отдыха! Вкусная еда, приятная атмосфера и внимательный персонал."
            </p>
          </div>
          
          <div class="card">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                М
              </div>
              <div>
                <h4 class="font-semibold text-primary">Михаил</h4>
                <div class="flex text-accent">
                  <span v-for="i in 5" :key="i">★</span>
                </div>
              </div>
            </div>
            <p class="text-text-light">
              "Провели корпоратив в банкетном зале. Все прошло на высшем уровне! Рекомендую!"
            </p>
          </div>
          
          <div class="card">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                Е
              </div>
              <div>
                <h4 class="font-semibold text-primary">Елена</h4>
                <div class="flex text-accent">
                  <span v-for="i in 5" :key="i">★</span>
                </div>
              </div>
            </div>
            <p class="text-text-light">
              "Уютное место с отличной кухней. Особенно понравились бургеры и десерты!"
            </p>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/reviews" class="btn-secondary text-lg px-8 py-4">
            Все отзывы
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-montserrat font-bold mb-4">
          Готовы к незабываемому вечеру?
        </h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Забронируйте столик прямо сейчас и насладитесь отличной атмосферой нашего заведения
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contacts" class="btn-secondary bg-white text-primary hover:bg-accent hover:text-white text-lg px-8 py-4">
            Забронировать стол
          </NuxtLink>
          <a href="tel:+7XXXXXXXXXX" class="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
            Позвонить нам
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleImageError = (event) => {
  // Fallback for missing images
  event.target.style.display = 'none'
}

// SEO
useHead({
  title: 'Бар-да-бар - Развлекательный центр',
  meta: [
    { name: 'description', content: 'Кафе Бар-да-бар - уютное место для отдыха с семьей и друзьями. Банкетный зал, спорт-бар, VIP-зал. Вкусная еда и отличная атмосфера.' }
  ]
})
</script>