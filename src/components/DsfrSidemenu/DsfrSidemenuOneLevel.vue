<script>
import DsfrSidemenuLink from './DsfrSidemenuLink.vue'

export default {
  name: 'DsfrSideMenuOneLevel',

  components: {
    DsfrSidemenuLink,
  },

  props: {
    menuTitle: {
      type: String,
      default: '',
    },
    headingTitle: {
      type: String,
      default: '',
    },
    links: {
      type: Array,
      default: () => [],
    },
    expandOnMount: Boolean,
  },

  data () {
    return {
      firstLevelExpanded: this.expandOnMount,
      level1: undefined,
    }
  },

  methods: {
    toggleExpand () {
      this.firstLevelExpanded = !this.firstLevelExpanded
    },

    setLevel1 (idx) {
      this.level1 = idx
    },

    onClick ($event, i, link) {
      if (typeof link.onClick === 'function') {
        link.onClick($event, i, link)
      }
      this.setLevel1(i)
    },
  },
}
</script>

<template>
  <nav
    class="fr-sidemenu"
    aria-label="Menu latéral"
  >
    <div class="fr-sidemenu__inner">
      <button
        class="fr-sidemenu__btn"
        hidden
        aria-controls="fr-sidemenu-wrapper"
        :aria-expanded="firstLevelExpanded"
        @click="toggleExpand()"
      >
        Dans cette rubrique
      </button>
      <div
        id="fr-sidemenu-wrapper"
        class="fr-collapse"
      >
        <div class="fr-sidemenu__title">
          {{ headingTitle }}
        </div>
        <ul class="fr-sidemenu__list">
          <li
            v-for="(link, i) of links"
            :key="i"
            class="fr-sidemenu__item"
            :class="{
              'fr-sidemenu__item--active': i === level1
            }"
          >
            <DsfrSidemenuLink
              v-bind="link"
              :is-current-page="i ===level1"
              @click="onClick($event, i, link)"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style src="./sidemenu.css" />

<style scoped>
.fr-sidemenu__btn {
  justify-content: space-between;
}

.icon {
  transition: transform 0.3s;
}

.menu-icon {
  margin-right: 0.5rem;
}

.fr-sidemenu__btn[aria-expanded="true"] .icon {
  transform: rotate(-180deg);
}

.fr-sidemenu__btn::before {
  content: '';
  display: none;
}

.fr-sidemenu__inner > .fr-sidemenu__btn::after {
  content: '';
  display: none;
}
</style>
