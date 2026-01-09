import { gql } from "@/__generated__";

export const CheckboxFieldFragment = gql(`
  fragment CheckboxField on CheckboxField {
    label
    labelPlacement
    isRequired
    cssClass
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
    choices {
      text
      value
    }
  }
`);

export const DateFieldFragment = gql(`
  fragment DateField on DateField {
    label
    labelPlacement
    isRequired
    cssClass
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
  }
`);

export const EmailFieldFragment = gql(`
  fragment EmailField on EmailField {
    label
    labelPlacement
    isRequired
    cssClass
    placeholder
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
  }
`);

export const HtmlFieldFragment = gql(`
  fragment HtmlField on HtmlField {
    label
    content
  }
`);

export const NumberFieldFragment = gql(`
  fragment NumberField on NumberField {
    label
    labelPlacement
    isRequired
    cssClass
    placeholder
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
  }
`);

export const PhoneFieldFragment = gql(`
  fragment PhoneField on PhoneField {
    label
    labelPlacement
    isRequired
    cssClass
    placeholder
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
  }
`);

export const RadioFieldFragment = gql(`
  fragment RadioField on RadioField {
    label
    labelPlacement
    isRequired
    cssClass
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
    choices {
      isSelected
      text
      value
    }
  }
`);

export const SelectFieldFragment = gql(`
  fragment SelectField on SelectField {
    label
    labelPlacement
    isRequired
    cssClass
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
    choices {
      isSelected
      text
      value
    }
  }
`);

export const TextAreaFieldFragment = gql(`
  fragment TextAreaField on TextAreaField {
    label
    labelPlacement
    isRequired
    cssClass
    placeholder
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
  }
`);

export const TextFieldFragment = gql(`
  fragment TextField on TextField {
    label
    labelPlacement
    isRequired
    cssClass
    placeholder
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
  }
`);

export const WebsiteFieldFragment = gql(`
  fragment WebsiteField on WebsiteField {
    label
    labelPlacement
    isRequired
    cssClass
    placeholder
    conditionalLogic {
      actionType
      logicType
      rules {
        fieldId
        operator
        value
      }
    }
  }
`);
