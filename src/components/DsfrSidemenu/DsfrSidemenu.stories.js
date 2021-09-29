import DsfrSidemenu from './DsfrSidemenu.vue'

export default {
  component: DsfrSidemenu,
  title: 'Éléments/Menu latéral - Sidemenu',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    menus: {
      control: 'object',
      description: 'Liste d’objets contenant les props à donner à DsfrSidemenuLink ou DsfrSidemenuSubmenu',
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

export const MenuLateral = (args, { argTypes }) => ({
  components: {
    DsfrSidemenu,
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
    }
  },

  template: `
    <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w);">
      <DsfrSidemenu
        :menu-title="menuTitle"
        :menus="menus"
      />
    </div>
  `,
})
MenuLateral.args = {
  dark: false,
  menuTitle: 'Rubrique n°1',
  headingTitle: 'Dans cette rubrique',
  menus: [
    {
      text: 'Niveau 1 - 1',
      to: '/1-1',
    },
    {
      text: 'Niveau 1 - 2',
      to: '/1-2',
    },
    {
      text: 'Niveau 1 - 3',
      to: '/1-3',
    },
    {
      text: 'Niveau 1 - 4',
      to: '/1-4',
    },
    {
      title: 'Titre de rubrique de niveau 1',
      items: [
        {
          text: 'Niveau 2 - 1',
          to: '/2-1',
        },
        {
          title: 'Titre de rubrique de niveau 2',
          items: [
            {
              text: 'Niveau 3 - 1',
              to: '/3-1',
            },
            {
              text: 'Niveau 3 - 2',
              to: '/3-2',
            },
            {
              text: 'Niveau 3 - 3',
              to: '/3-3',
            },
          ],
        },
        {
          text: 'Niveau 2 - 3',
          to: '/2-3',
        },
      ],
    },
  ],
  // menusList: [
  //   { title: 'Niveau 1 - Rubrique 1', menus: [{ to: '/path1', label: 'path 1' }] },
  //   { title: 'Niveau 1 - Rubrique 2', menus: [{ to: '/path2', label: 'path 2' }, { title: 'Niveau 2', links: [{ to: '/path11', label: 'path 1' }] }] },
  //   { title: 'Niveau 1 - Rubrique 3', menus: [{ to: '/path3', label: 'path 3' }] },
  // ],
}
