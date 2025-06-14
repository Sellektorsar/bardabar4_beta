<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-montserrat font-bold mb-4">
          О нас
        </h1>
        <p class="text-xl max-w-3xl mx-auto">
          Узнайте больше о нашем заведении, истории и том, что делает нас особенными
        </p>
      </div>
    </section>

    <!-- Main Story Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary">
              Наша история
            </h2>
            <p class="text-text-light leading-relaxed">
              Бар-да-бар — это не просто кафе, это место, где рождаются воспоминания. 
              Мы открылись с простой идеей: создать пространство, где каждый гость 
              чувствует себя как дома, где можно насладиться вкусной едой в компании 
              близких людей.
            </p>
            <p class="text-text-light leading-relaxed">
              Наше заведение объединяет в себе уютную атмосферу семейного кафе, 
              энергию спорт-бара и элегантность банкетного зала. Мы гордимся тем, 
              что можем предложить нашим гостям разнообразный опыт в зависимости 
              от их настроения и потребностей.
            </p>
            <div class="flex items-center space-x-8">
              <div class="text-center">
                <div class="text-3xl font-bold text-accent">5+</div>
                <div class="text-sm text-text-light">лет работы</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-accent">1000+</div>
                <div class="text-sm text-text-light">довольных гостей</div>
              </div>
              <div class="text-center">
                <div class="text-3xl font-bold text-accent">50+</div>
                <div class="text-sm text-text-light">блюд в меню</div>
              </div>
            </div>
          </div>
          
          <div class="relative">
            <img 
              src="/images/about-story.jpg" 
              alt="История кафе" 
              class="rounded-xl shadow-custom w-full"
              @error="handleImageError"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Our Spaces Section -->
    <section class="section-padding bg-background">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Наши залы
          </h2>
          <p class="text-lg text-text-light max-w-3xl mx-auto">
            Четыре уникальных пространства для разных случаев жизни
          </p>
        </div>
        
        <div class="space-y-16">
          <!-- Банкетный зал -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h3 class="text-2xl font-montserrat font-bold text-primary">
                Банкетный зал
              </h3>
              <p class="text-text-light leading-relaxed">
                Вместимость зала до 110 человек. Зал отлично подойдет для проведения 
                свадьбы, юбилея, корпоративной вечеринки, семейного торжества и других 
                значимых событий. Современное оборудование, профессиональное обслуживание 
                и изысканная кухня сделают ваше мероприятие незабываемым.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">До 110 гостей</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Профессиональное звуковое оборудование</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Танцевальная зона</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Индивидуальное меню</span>
                </li>
              </ul>
            </div>
            <div class="relative">
              <img 
                src="/images/banquet-hall.jpg" 
                alt="Банкетный зал" 
                class="rounded-xl shadow-custom w-full"
                @error="handleImageError"
              >
            </div>
          </div>

          <!-- VIP-зал -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative order-2 lg:order-1">
              <img 
                src="/images/vip-hall.jpg" 
                alt="VIP-зал" 
                class="rounded-xl shadow-custom w-full"
                @error="handleImageError"
              >
            </div>
            <div class="space-y-6 order-1 lg:order-2">
              <h3 class="text-2xl font-montserrat font-bold text-primary">
                VIP-зал
              </h3>
              <p class="text-text-light leading-relaxed">
                Приватный VIP-зал до 15 человек для особых случаев. Идеально подходит 
                для деловых встреч, романтических ужинов или небольших семейных 
                торжеств. Эксклюзивная атмосфера, персональное обслуживание и 
                изысканная подача блюд.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">До 15 гостей</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Приватная атмосфера</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Персональное обслуживание</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Эксклюзивное меню</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Семейное кафе -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h3 class="text-2xl font-montserrat font-bold text-primary">
                Семейное кафе
              </h3>
              <p class="text-text-light leading-relaxed">
                Отличная дружелюбная атмосфера, уютная обстановка. У нас вы найдете 
                разнообразное меню, как для взрослых, так и для детей. Специальная 
                детская зона, высокие стульчики и игрушки сделают посещение комфортным 
                для всей семьи.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Детское меню</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Детская игровая зона</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Высокие стульчики</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Семейные скидки</span>
                </li>
              </ul>
            </div>
            <div class="relative">
              <img 
                src="/images/family-cafe.jpg" 
                alt="Семейное кафе" 
                class="rounded-xl shadow-custom w-full"
                @error="handleImageError"
              >
            </div>
          </div>

          <!-- Спорт-бар -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative order-2 lg:order-1">
              <img 
                src="/images/sport-bar.jpg" 
                alt="Спорт-бар" 
                class="rounded-xl shadow-custom w-full"
                @error="handleImageError"
              >
            </div>
            <div class="space-y-6 order-1 lg:order-2">
              <h3 class="text-2xl font-montserrat font-bold text-primary">
                Спорт-бар
              </h3>
              <p class="text-text-light leading-relaxed">
                Здесь, на большом экране, вы можете наблюдать прямые трансляции 
                ведущих национальных футбольных чемпионатов, Лиги Чемпионов, 
                хоккейных матчей и других спортивных событий. Отличное место 
                для просмотра игр в компании друзей.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Большой экран</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Прямые трансляции</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Широкий выбор напитков</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-text-light">Закуски к пиву</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
            Наши ценности
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-4">Гостеприимство</h3>
            <p class="text-text-light">
              Каждый гость для нас особенный. Мы создаем атмосферу тепла и уюта, 
              где каждый чувствует себя желанным.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-4">Качество</h3>
            <p class="text-text-light">
              Мы используем только свежие продукты и готовим каждое блюдо с любовью 
              и вниманием к деталям.
            </p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-4">Семейность</h3>
            <p class="text-text-light">
              Мы ценим семейные традиции и создаем место, где разные поколения 
              могут собраться вместе.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-montserrat font-bold mb-4">
          Станьте частью нашей истории
        </h2>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Приходите к нам и создавайте незабываемые моменты в уютной атмосфере Бар-да-бар
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contacts" class="btn-secondary bg-white text-primary hover:bg-accent hover:text-white text-lg px-8 py-4">
            Забронировать стол
          </NuxtLink>
          <NuxtLink to="/menu" class="btn-secondary border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
            Посмотреть меню
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const handleImageError = (event) => {
  event.target.src = '/images/placeholder.jpg'
}

// SEO
useHead({
  title: 'О нас - Бар-да-бар',
  meta: [
    { name: 'description', content: 'Узнайте больше о кафе Бар-да-бар: наша история, залы, ценности. Банкетный зал, VIP-зал, семейное кафе и спорт-бар в одном месте.' }
  ]
})
</script>