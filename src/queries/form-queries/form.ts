import { gql } from "@/__generated__";

export const GET_GF_FORM = gql(`
  query GetGFForm($id: ID!) {
    gfForm(id: $id, idType: DATABASE_ID) {
      title
      description
      confirmations {
        isDefault
        message
      }
      formFields(first: 100) {
        nodes {
          id
          databaseId
          layoutGridColumnSpan
          type
          visibility
          ...CheckboxField
          ...DateField
          ...EmailField
          ...HtmlField
          ...NumberField
          ...PhoneField
          ...RadioField
          ...SelectField
          ...TextAreaField
          ...TextField
          ...WebsiteField
        }
      }
    }
  }
`);

export const SUBMIT_GF_FORM = gql(`
  mutation SubmitGFForm($input: SubmitGfFormInput!) {
    submitGfForm(input: $input) {
      entry {
        id
      }
      errors {
        id
        message
      }
    }
  }
`);
