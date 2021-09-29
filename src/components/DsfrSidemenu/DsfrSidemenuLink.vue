<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
  name: 'DsfrSideMenuLink',
  props: {
    id: {
      type: String,
      default: () => getRandomId('menu'),
    },
    to: {
      type: [String, Object],
      default: '/',
    },
    text: {
      type: String,
      default: 'lien',
    },
    expandedIds: {
      type: Object,
      default: () => ({}),
    },
  },

  emits: ['toggle-sidemenu'],

  computed: {
    isExternalLink () {
      return typeof this.to === 'string' && this.to.startsWith('http')
    },
  },
}
</script>

<template>
  <a
    v-if="isExternalLink"
    :id="id"
    class="fr-sidemenu__link"
    :href="to"
    target="_self"
    :aria-current="expandedIds[id]"
    v-bind="$attrs"
    @click="$emit('toggle-sidemenu', id)"
  >
    {{ text }}
  </a>
  <router-link
    v-else
    :id="id"
    class="fr-sidemenu__link"
    target="_self"
    :to="to"
    :aria-current="expandedIds[id]"
    v-bind="$attrs"
    @click="$emit('toggle-sidemenu', id)"
  >
    {{ text }}
  </router-link>
</template>
