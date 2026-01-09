import { gql } from "@/__generated__";

export const PAGE_QUERY = gql(`
  query GetPage($databaseId: ID!, $asPreview: Boolean = false) {
    page(id: $databaseId, idType: DATABASE_ID, asPreview: $asPreview) {
      title
      content
      seo {
        fullHead
        title
      }
      editorBlocks(flat: true) {
        name
        __typename
        renderedHtml
        id: clientId
        parentClientId
        ...CoreHeadingBlockFragment
        ...CoreParagraphBlockFragment
        ...CustomCoreColumnBlock
        ...CustomCoreColumnsBlock
        ...AcfContactFormBlock
        ...AcfCourseCardBlock
        ...AcfCourseCardImageBlock
        ...AcfCoursesTableBlock
        ...AcfEventCardBlock
        ...AcfFaqBlock
        ...AcfFeaturedTabsBlock
        ...AcfFormCardBlock
        ...AcfFourColImagesCtaBlock
        ...AcfFourColImagesBlock
        ...AcfHeroLargeBlock
        ...AcfHeroSmallBlock
        ...AcfImageBlockBlock
        ...AcfImageLargeHeadingTextBlock
        ...AcfImageWithLowerTextBlock
        ...AcfImageWithMultiRowTextBlock
        ...AcfInstructorsBlock
        ...AcfSectionHeaderBlock
        ...AcfSpecialOffersBlock
        ...AcfTableBlockBlock
        ...AcfTestimonialBlock
        ...AcfTextBlockBlock
        ...AcfThreeColImagesBlock
        ...AcfTwoColImageTextBlock
        ...AcfTwoColumnBannerBlock
        ...AcfTwoColumnImageFormBlock
        ...AcfYoutubePlaylistBlock
      }
    }
  }
`);
