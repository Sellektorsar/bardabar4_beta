import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
  state: () => ({
    team: [
      {
        id: 1,
        name: 'Александр Петров',
        position: 'Управляющий',
        bio: 'Опыт работы в ресторанном бизнесе более 10 лет. Обеспечивает высокое качество обслуживания.',
        image: '/images/placeholder.jpg'
      },
      {
        id: 2,
        name: 'Мария Иванова',
        position: 'Шеф-повар',
        bio: 'Создает уникальные блюда, сочетая традиционные рецепты с современными тенденциями.',
        image: '/images/placeholder.jpg'
      },
      {
        id: 3,
        name: 'Дмитрий Сидоров',
        position: 'Бармен',
        bio: 'Мастер коктейлей и знаток напитков. Создает атмосферу и поднимает настроение.',
        image: '/images/placeholder.jpg'
      }
    ],
    
    events: [
      {
        id: 1,
        title: 'Живая музыка',
        description: 'Выступление местной группы с популярными хитами',
        date: '2024-12-15',
        time: '20:00',
        price: 'Вход свободный'
      },
      {
        id: 2,
        title: 'Караоке вечер',
        description: 'Пойте любимые песни в компании друзей',
        date: '2024-12-22',
        time: '19:00',
        price: 'Вход свободный'
      },
      {
        id: 3,
        title: 'Новогодняя вечеринка',
        description: 'Встречаем Новый год вместе! Программа, конкурсы, призы',
        date: '2024-12-31',
        time: '22:00',
        price: '2000₽'
      }
    ],

    menu: [
      {
        id: 1,
        name: 'Классический бургер',
        description: 'Сочная котлета из говядины, свежие овощи, фирменный соус',
        price: 450,
        category: 'burgers',
        image: '/images/menu/burger-classic.jpg'
      },
      {
        id: 2,
        name: 'Делюкс бургер',
        description: 'Двойная котлета, бекон, сыр чеддер, карамелизированный лук',
        price: 650,
        category: 'burgers',
        image: '/images/menu/burger-deluxe.jpg'
      },
      {
        id: 3,
        name: 'Куриные крылышки',
        description: 'Острые крылышки в фирменном соусе барбекю',
        price: 380,
        category: 'appetizers',
        image: '/images/menu/wings.jpg'
      }
    ]
  }),

  actions: {
    // Team management
    addTeamMember(member) {
      const newId = Math.max(...this.team.map(m => m.id)) + 1
      this.team.push({ ...member, id: newId })
    },

    updateTeamMember(id, updates) {
      const index = this.team.findIndex(m => m.id === id)
      if (index !== -1) {
        this.team[index] = { ...this.team[index], ...updates }
      }
    },

    deleteTeamMember(id) {
      this.team = this.team.filter(m => m.id !== id)
    },

    // Events management
    addEvent(event) {
      const newId = Math.max(...this.events.map(e => e.id)) + 1
      this.events.push({ ...event, id: newId })
    },

    updateEvent(id, updates) {
      const index = this.events.findIndex(e => e.id === id)
      if (index !== -1) {
        this.events[index] = { ...this.events[index], ...updates }
      }
    },

    deleteEvent(id) {
      this.events = this.events.filter(e => e.id !== id)
    },

    // Menu management
    addMenuItem(item) {
      const newId = Math.max(...this.menu.map(i => i.id)) + 1
      this.menu.push({ ...item, id: newId })
    },

    updateMenuItem(id, updates) {
      const index = this.menu.findIndex(i => i.id === id)
      if (index !== -1) {
        this.menu[index] = { ...this.menu[index], ...updates }
      }
    },

    deleteMenuItem(id) {
      this.menu = this.menu.filter(i => i.id !== id)
    }
  }
})