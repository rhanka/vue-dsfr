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
        aria-expanded="false"
      >
        Dans cette rubrique
      </button>
      <div
        v-for="({ title, menus}, i) of menus"
        id="fr-sidemenu-wrapper"
        :key="i"
        class="fr-collapse"
      >
        <div class="fr-sidemenu__title">
          {{ title }}
        </div>
        <ul
          v-for="(links, j) of menus"
          :key="j"
          class="fr-sidemenu__list flex"
        >
          <li
            v-for="(link, k) of links"
            :key="k"
            class="fr-sidemenu__item  fr-sidemenu__item--active"
          >
            <a
              v-if="typeof link.to === 'string' && link.to.startsWith('http')"
              class="fr-sidemenu__link"
              :href="link.to"
              target="_self"
              aria-current="page"
            >{{ link.label }}</a>
            <router-link
              class="fr-sidemenu__link"
              :to="link.to"
              target="_self"
              aria-current="page"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
