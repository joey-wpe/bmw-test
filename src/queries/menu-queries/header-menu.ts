import { gql } from "@/__generated__";

export const HEADER_MENU_QUERY = gql(`
  query GetHeaderMenu {
    primaryMenuItems: menuItems(
      where: { location: PRIMARY, parentDatabaseId: 0 }
      first: 100
    ) {
      nodes {
        ...TopLevelMenuItem
      }
    }
  }
`);
