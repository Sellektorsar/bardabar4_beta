<template>
  <footer class="bg-secondary text-white">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo & Description -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-3 mb-4">
            <img src="/images/logo.svg" alt="Бар-да-бар" class="h-12 w-auto">
            <div>
              <h3 class="text-xl font-montserrat font-bold">Бар-да-бар</h3>
              <p class="text-sm text-gray-300">развлекательный центр</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4">
            Уютное место для отдыха с семьей и друзьями. Банкетный зал, спорт-бар, VIP-зал. 
            Вкусная еда и отличная атмосфера.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-300 hover:text-accent transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
              </svg>
            </a>
            <a href="#" class="text-gray-300 hover:text-accent transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.0956Z"/>
              </svg>
            </a>
            <a href="https://t.me/bardabar" class="text-gray-300 hover:text-accent transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a href="https://vk.com/bardabar" class="text-gray-300 hover:text-accent transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1.01-1.49-.9-1.744-.9-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.491.593-.491h1.744c.441 0 .61.203.78.678.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.271.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-montserrat font-semibold mb-4">Навигация</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-gray-300 hover:text-accent transition-colors">Главная</NuxtLink></li>
            <li><NuxtLink to="/menu" class="text-gray-300 hover:text-accent transition-colors">Меню</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-gray-300 hover:text-accent transition-colors">О нас</NuxtLink></li>
            <li><NuxtLink to="/team" class="text-gray-300 hover:text-accent transition-colors">Команда</NuxtLink></li>
            <li><NuxtLink to="/events" class="text-gray-300 hover:text-accent transition-colors">Афиша</NuxtLink></li>
            <li><NuxtLink to="/reviews" class="text-gray-300 hover:text-accent transition-colors">Отзывы</NuxtLink></li>
            <li><NuxtLink to="/contacts" class="text-gray-300 hover:text-accent transition-colors">Контакты</NuxtLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-lg font-montserrat font-semibold mb-4">Наши услуги</h4>
          <ul class="space-y-2">
            <li class="text-gray-300">Банкетный зал (до 110 человек)</li>
            <li class="text-gray-300">VIP-зал (до 15 человек)</li>
            <li class="text-gray-300">Семейное кафе</li>
            <li class="text-gray-300">Спорт-бар</li>
            <li class="text-gray-300">Организация мероприятий</li>
            <li class="text-gray-300">Корпоративные события</li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-montserrat font-semibold mb-4">Контакты</h4>
          <div class="space-y-3">
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="text-gray-300">г. Город, ул. Улица, д. 00</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <a href="tel:+7XXXXXXXXXX" class="text-gray-300 hover:text-accent transition-colors">
                +7 (XXX) XXX-XX-XX
              </a>
            </div>
            
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <a href="mailto:info@bar-da-bar.ru" class="text-gray-300 hover:text-accent transition-colors">
                info@bar-da-bar.ru
              </a>
            </div>
            
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
              <div>
                <p class="text-gray-300">Пн-Чт: 12:00 - 24:00</p>
                <p class="text-gray-300">Пт-Сб: 12:00 - 02:00</p>
                <p class="text-gray-300">Вс: 12:00 - 24:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-300 text-sm mb-4 md:mb-0">
          © {{ currentYear }} Бар-да-бар. Все права защищены.
        </p>
        <div class="flex space-x-6 text-sm">
          <a href="/privacy" class="text-gray-300 hover:text-accent transition-colors">
            Политика конфиденциальности
          </a>
          <a href="/terms" class="text-gray-300 hover:text-accent transition-colors">
            Пользовательское соглашение
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>