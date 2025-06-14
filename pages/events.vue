<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-montserrat font-bold mb-4">
          Афиша мероприятий
        </h1>
        <p class="text-xl max-w-3xl mx-auto">
          Следите за нашими событиями и не пропустите интересные мероприятия
        </p>
      </div>
    </section>

    <!-- Events Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="event in events" :key="event.id" class="card">
            <div class="bg-primary text-white p-4 rounded-t-lg">
              <div class="text-center">
                <div class="text-3xl font-bold">{{ event.day }}</div>
                <div class="text-sm uppercase">{{ event.month }}</div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-montserrat font-semibold text-primary mb-3">
                {{ event.title }}
              </h3>
              <p class="text-text-light mb-4">{{ event.description }}</p>
              <div class="flex items-center justify-between">
                <span class="text-accent font-semibold">{{ event.time }}</span>
                <span class="text-sm text-text-light">{{ event.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useContentStore } from '~/stores/content'

const contentStore = useContentStore()

const events = computed(() => contentStore.events.map(event => {
  const date = new Date(event.date)
  return {
    ...event,
    day: date.getDate().toString().padStart(2, '0'),
    month: date.toLocaleDateString('ru-RU', { month: 'short' }).toUpperCase()
  }
}))

useHead({
  title: 'Афиша - Бар-да-бар',
  meta: [
    { name: 'description', content: 'Афиша мероприятий кафе Бар-да-бар: живая музыка, караоке, тематические вечеринки и праздники.' }
  ]
})
</script>