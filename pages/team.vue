<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="section-padding bg-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-montserrat font-bold mb-4">
          Наша команда
        </h1>
        <p class="text-xl max-w-3xl mx-auto">
          Познакомьтесь с профессионалами, которые делают ваш отдых незабываемым
        </p>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="member in team" :key="member.id" class="card text-center">
            <div class="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
              {{ member.initials }}
            </div>
            <h3 class="text-xl font-montserrat font-semibold text-primary mb-2">
              {{ member.name }}
            </h3>
            <p class="text-accent font-medium mb-4">{{ member.position }}</p>
            <p class="text-text-light">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useContentStore } from '~/stores/content'

const contentStore = useContentStore()
const team = computed(() => contentStore.team.map(member => ({
  ...member,
  initials: member.name.split(' ').map(n => n[0]).join('').toUpperCase()
})))

useHead({
  title: 'Команда - Бар-да-бар',
  meta: [
    { name: 'description', content: 'Команда профессионалов кафе Бар-да-бар: управляющий, шеф-повар, бармены и официанты.' }
  ]
})
</script>