<template>
  <component
    :is="is"
    class="fr-link"
    :to="to"
    :href="href"
    :class="{
      'flex': true,
      'reverse': iconRight,
    }"
    @click.stop="onClick"
  >
    <VIcon
      v-if="icon"
      :name="icon"
      :label="iconOnly ? label : undefined"
      :class="{
        'icon-right': iconRight,
        'icon-left': !iconOnly && !iconRight,
      }"
    />
    <span v-if="!iconOnly">{{ label }}</span>
  </component>
</template>

<script>
export default {
  name: 'DsfrHeaderMenuLink',
  props: {
    path: {
      type: String,
      default: undefined,
    },
    button: Boolean,
    iconOnly: Boolean,
    iconRight: Boolean,
    icon: {
      type: String,
      default: undefined,
    },
    label: {
      type: String,
      default: '',
    },
    onClick: {
      type: Function,
      default: () => {},
    },
  },

  computed: {
    is () {
      if (this.button) {
        return 'button'
      }
      return this.path.startsWith('http') ? 'a' : 'router-link'
    },
    to () {
      return (this.button || this.path.startsWith('http')) ? undefined : this.path
    },
    href () {
      return (!this.button && this.path.startsWith('http')) ? this.path : undefined
    },
  },
}
</script>

<style scoped>

.icon-left {
  margin-right: 0.5rem
}
.icon-right {
  margin-left: 0.5rem
}

.flex {
  display: flex;
  align-items: center;
}

.reverse {
  flex-direction: row-reverse;
}
</style>
