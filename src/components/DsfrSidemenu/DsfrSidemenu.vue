<script>
import DsfrSidemenuLink from './DsfrSidemenuLink.vue'
import DsfrSidemenuItem from './DsfrSidemenuItem.vue'
import DsfrSidemenuList from './DsfrSidemenuList.vue'
import DsfrSidemenuSubmenu from './DsfrSidemenuSubmenu.vue'

export default {
  name: 'DsfrSideMenuOneLevel',

  components: {
    DsfrSidemenuLink,
    DsfrSidemenuItem,
    DsfrSidemenuList,
    DsfrSidemenuSubmenu,
  },

  props: {
    id: {
      type: String,
      default: 'fr-sidemenu-wrapper',
    },
    menuTitle: {
      type: String,
      default: 'Titre de rubrique',
    },
    mainLabel: {
      type: String,
      default: 'Menu latéral',
    },
    menus: {
      type: Array,
      default: () => [],
    },
  },

  data () {
    return {
      expandedIds: {},
      level1: undefined,
    }
  },

  methods: {
    toggleExpand (id) {
      console.log(id)
      this.expandedIds[id] = !this.expandedIds[id]
    },
  },
}
</script>

<template>
  <nav
    class="fr-sidemenu"
    :aria-label="mainLabel"
  >
    <div class="fr-sidemenu__inner">
      <button
        class="fr-sidemenu__btn"
        hidden
        :aria-controls="id"
        :aria-expanded="expandedIds[id]"
        @click="toggleExpand($id)"
      >
        {{ menuTitle }}
      </button>
      <div
        :id="id"
        class="fr-collapse"
        :class="{ 'fr-collapse--expanded': expandedIds[id]}"
      >
        <slot />
        <DsfrSidemenuList v-if="menus && menus.length">
          <DsfrSidemenuItem
            v-for="(menu, idx) of menus"
            :key="idx"
            :expanded-ids="expandedIds"
          >
            <DsfrSidemenuLink
              v-if="menu.to && menu.text"
              v-bind="menu"
              :expanded-ids="expandedIds"
              @toggle-sidemenu="toggleExpand($event)"
              @click.prevent=""
            />
            <DsfrSidemenuSubmenu
              v-if="menu.menus"
              :title="menu.title"
              :items="menu.items"
              :expanded-ids="expandedIds"
              @toggle-sidemenu="toggleExpand($event)"
            />
          </DsfrSidemenuItem>
        </DsfrSidemenuList>
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
