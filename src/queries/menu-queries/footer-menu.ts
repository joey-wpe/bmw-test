import { gql } from "@/__generated__";

export const FOOTER_MENU_QUERY = gql(`
  query GetFooterMenu {
    footerMenuItems: menuItems(
      where: {location: FOOTER, parentDatabaseId: 0}
      first: 100
    ) {
      nodes {
        ...FooterMenuItem
      }
    }
    footerSocialMenu: menuItems(
      where: {location: FOOTER_SOCIAL_MENU, parentDatabaseId: 0}
      first: 100
    ) {
      nodes {
        ...MenuItem
      }
    }
    footerLegalMenu: menuItems(
      where: {location: FOOTER_LEGAL_MENU, parentDatabaseId: 0}
      first: 100
    ) {
      nodes {
        ...MenuItem
      }
    }
  }
`);
