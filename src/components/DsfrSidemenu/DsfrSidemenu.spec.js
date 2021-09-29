import { render } from '@testing-library/vue'

import DsfrSideMenu from './DsfrSidemenu.vue'

const VIcon = { props: ['name'], template: '<i :class="name"></i>' }

describe('DsfrSideMenu', () => {
  it('should render DsfrSideMenu with two `ul`', () => {
    // Given
    const headingTitle = 'Titre de rubrique I'
    const firstLevelMenuLabel = 'Premier niveau - I.1'
    const secondLevelMenuLabel11 = 'Deuxième niveau - I.1.1'
    const secondLevelMenuLabel12 = 'Deuxième niveau - I.1.2'
    const firstLevelMenuLabel2 = 'Premier niveau - I.2'
    const secondLevelMenuLabel21 = 'Deuxième niveau - I.1.1'
    const secondLevelMenuLabel22 = 'Deuxième niveau - I.1.2'

    const headingTitle2 = 'Titre de rubrique II'
    const firstLevelMenuLabel22 = 'Premier niveau - II.1'
    // const secondLevelMenuLabel211 = 'Deuxième niveau - II.1.1'
    // const secondLevelMenuLabel212 = 'Deuxième niveau - II.1.2'
    // const firstLevelMenuLabel22 = 'Premier niveau - II.2'
    // const secondLevelMenuLabel221 = 'Deuxième niveau - II.1.1'
    // const secondLevelMenuLabel222 = 'Deuxième niveau - II.1.2'

    const firstMenuList = {
      title: headingTitle,
      links: [
        [
          {

          },
        ],
      ],
    }

    // When
    const { container, getByText } = render(DsfrSideMenu, {
      global: {
        components: {
          VIcon,
        },
      },
      props: {
        menu: [
          {
            title: headingTitle,
            links: [
              {
                title: firstLevelMenuLabel,
                links: [
                  { to: '1.1', label: secondLevelMenuLabel11 },
                  { to: '1.2', label: secondLevelMenuLabel12 },
                ],
              },
              {
                title: '',
                links: [
                  { to: '1.1', label: secondLevelMenuLabel21 },
                  { to: '1.2', label: secondLevelMenuLabel22 },
                ],
              },
            ],
          },
          {
            title: headingTitle2,
            links: [
              {
                title: firstLevelMenuLabel2,
                links: [
                  { to: '1.1', label: secondLevelMenuLabel21 },
                  { to: '1.2', label: secondLevelMenuLabel22 },
                ],
              },
            ],
          },
        ],
      },
    })

    const firstHeading = getByText(headingTitle)
    const firstLevelMenuLabel22Label = getByText(firstLevelMenuLabel22)
    const firstLevelMenuUl = getByText(firstLevelMenuLabel)
    const firstLevelMenu2Ul = getByText(firstLevelMenuLabel2)

    // Then
    expect(firstLevelMenuLabel22Label).toHaveClass()
    expect(firstMenuList).toHaveClass()
    expect(firstHeading).toHaveClass()
    expect(firstLevelMenuUl).toHaveClass()
    expect(firstLevelMenu2Ul).toHaveClass()
    expect(container.querySelector('')).toHaveClass()
  })
})
