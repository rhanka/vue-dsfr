import DsfrSidemenuOneLevel from './DsfrSidemenuOneLevel.vue'

export default {
  component: DsfrSidemenuOneLevel,
  title: 'Éléments/Menu latéral simple - Sidemenu',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    links: {
      control: 'object',
      description: 'Liste d’objets contenant les props à donner à DsfrSidemenuOneLevelLink',
    },
    headingTitle: {
      control: 'text',
      description: '',
    },
    onclick: {
      action: 'Clicked',
    },
  },
}

export const MenuLateralSimple = (args, { argTypes }) => ({
  components: {
    DsfrSidemenuOneLevel,
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  data () {
    return {
      ...args,
      links: args.links.map((link, idx) => ({
        ...link,
        onClick ($event) {
          $event.preventDefault()
        },
      })),
    }
  },

  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w);">
      <DsfrSidemenuOneLevel
        :heading-title="headingTitle"
        :links="links"
        :expand-on-mount="true"
      />
    </div>
  `,
})
MenuLateralSimple.args = {
  dark: false,
  headingTitle: 'Dans cette rubrique',
  links: [
    {
      label: 'Niveau 1 - 1',
      to: '/1-1',
      isCurrentPage: true,
    },
    {
      label: 'Niveau 1 - 2',
      to: '/1-2',
    },
    {
      label: 'Niveau 1 - 3',
      to: '/1-3',
    },
    {
      label: 'Niveau 1 - 4',
      to: '/1-4',
    },
  ],
}
