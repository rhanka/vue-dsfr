import DsfrSidemenu from './DsfrSidemenu.vue'
import DsfrSidemenuItem from './DsfrSidemenuItem.vue'
import DsfrSidemenuLink from './DsfrSidemenuLink.vue'
import DsfrSidemenuList from './DsfrSidemenuList.vue'

export default {
  component: DsfrSidemenuLink,
  title: 'Éléments/Menu latéral - Sidemenu/Lien seul',
  argTypes: {
    dark: {
      control: 'boolean',
      description: 'Permet de voir le composant dans les deux **thèmes** : **clair** (`false`, défaut) et **sombre** (`true`).\n\n*N.B. : Ne fait pas partie du composant.*',
    },
    title: {
      control: 'text',
      description: 'Titre du menu latéral. Ne fait pas partie du composant',
    },
    to: {
      control: 'text',
      description: 'Objet (pour les routes internes uniquement) ou String contenant l’URL du lien',
    },
    text: {
      control: 'text',
      description: 'String contenant le texte du lien',
    },
  },
}

export const ItemDeMenuSimple = (args) => ({
  components: {
    DsfrSidemenu,
    DsfrSidemenuList,
    DsfrSidemenuItem,
    DsfrSidemenuLink,
  },

  data () {
    return {
      ...args,
      active: args.active,
    }
  },

  methods: {
    toggleExpanded (id) {
      this.expandedIds[id] = !this.expandedIds[id]
      this.active = this.expandedIds[id]
    },
  },

  template: `
  <div :data-rf-theme="dark ? 'dark' : ''" style="background-color: var(--w);">
    <DsfrSidemenu :menu-title="title">
      <DsfrSidemenuList>
        <DsfrSidemenuItem :active="active">
          <DsfrSidemenuLink
            @toggle-sidemenu="toggleExpanded($event)"
            @click.prevent=""
            :expanded-ids="expandedIds"
            :to="to"
            :text="text"
          />
        </DsfrSidemenuItem>
      </DsfrSidemenuList>
    </DsfrSidemenu>
  </div>
  `,
})
ItemDeMenuSimple.args = {
  dark: false,
  title: 'Titre de la rubrique',
  active: false,
  to: '/',
  text: 'Texte du lien',
  expandedIds: [],
}
