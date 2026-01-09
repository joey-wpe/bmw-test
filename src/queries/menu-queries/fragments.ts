import { gql } from "@/__generated__";

export const MenuItemFragment = gql(`
  fragment MenuItem on MenuItem {
    id
    databaseId
    uri
    path
    label
    parentId
    parentDatabaseId
    cssClasses
    target
  }
`);

export const SecondLevelMenuItemFragment = gql(`
  fragment SecondLevelMenuItem on MenuItem {
    ...MenuItem
    childItems {
      nodes {
        ...MenuItem
      }
    }
  }
`);

export const TopLevelMenuItemFragment = gql(`
  fragment TopLevelMenuItem on MenuItem {
    ...MenuItem
    childItems {
      nodes {
        ...SecondLevelMenuItem
      }
    }
  }
`);

export const FooterMenuItemFragment = gql(`
  fragment FooterMenuItem on MenuItem {
    ...MenuItem
    childItems {
      nodes {
        ...MenuItem
      }
    }
  }
`);
