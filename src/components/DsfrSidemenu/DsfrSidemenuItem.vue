<script>
import { getRandomId } from '../../utils/random-utils.js'

export default {
  name: 'DsfrSidemenuItem',

  props: {
    id: {
      type: String,
      default: () => getRandomId('sidemenu', 'item'),
    },
    active: Boolean,
  },

  emits: ['toggle-active'],
}
</script>

<template>
  <li
    :id="id"
    class="fr-sidemenu__item"
    :class="{ 'fr-sidemenu__item--active': active }"
  >
    <slot />
  </li>
</template>

<style scoped>
.fr-sidemenu__btn::after {
  display: none;
  content: '';
}
</style>
