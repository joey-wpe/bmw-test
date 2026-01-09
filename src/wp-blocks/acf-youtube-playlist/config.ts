import { gql } from "@/__generated__";

export default {
  displayName: "AcfYoutubePlaylist", // Must match __typename
  fragment: {
    key: "AcfYoutubePlaylistBlock",
    entry: gql(`
      fragment AcfYoutubePlaylistBlock on AcfYoutubePlaylist {
        blockYoutubePlaylist {
          playlistId
        }
      }
    `),
  },
};
