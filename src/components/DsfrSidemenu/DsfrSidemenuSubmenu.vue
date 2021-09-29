<script>
import { getRandomId } from '../../utils/random-utils.js'
import DsfrSidemenuLink from './DsfrSidemenuLink.vue'
import DsfrSidemenuList from './DsfrSidemenuList.vue'
import DsfrSidemenuItem from './DsfrSidemenuItem.vue'

export default {
  name: 'DsfrSidemenuSubmenu',

  components: {
    DsfrSidemenuItem,
    DsfrSidemenuLink,
    DsfrSidemenuList,
  },

  props: {
    id: {
      type: String,
      default: () => getRandomId('menu'),
    },
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      required: true,
    },
    expandedIds: {
      type: Object,
      required: true,
    },
  },

  emits: ['toggle-sidemenu'],
}
</script>
<template>
  <button
    class="fr-sidemenu__btn"
    :aria-expanded="expandedIds[id]"
    :aria-controls="id"
    @click="$emit('toggle-sidemenu', id)"
  >
    {{ title }}
  </button>
  <div
    :id="id"
    class="fr-collapse"
    :class="{ 'fr-collapse--expanded': expandedIds[id]}"
  >
    <DsfrSidemenuList class="fr-sidemenu__list">
      <DsfrSidemenuItem
        v-for="(item, idx) of items"
        :key="idx"
      >
        <DsfrSidemenuLink
          v-if="item.label && item.to"
          :expanded-ids="expandedIds[id]"

          v-bind="item"
        />
        <DsfrSidemenuSubmenu
          v-else-if="item.items && item.title"
          v-bind="item"
          :expanded-ids="expandedIds"
        />
        {{ item.title }}
      </DsfrSidemenuItem>
    </DsfrSidemenuList>
  </div>
</template>
