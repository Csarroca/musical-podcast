export const podcast = {
  name: "podcastTest",
  image: "https:/.com/ad.svg",
  author: "testAuthor",
  id: "1220000",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis iusto quos rerum distinctio adipisci voluptatibus? Amet tenetur expedita sapiente veritatis quisquam in consectetur quod. Blanditiis labore recusandae quo nostrum.",
};

export const episodeList = [
  {
    title: "episode1",
    duration: 111,
    date: "12/12/22",
    trackId: 12345,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "audio",
  },
  {
    title: "episode2",
    duration: 1112,
    date: "13/12/22",
    trackId: 123456,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "audio",
  },
  {
    title: "episode3",
    duration: 1113,
    date: "14/12/22",
    trackId: 1234567,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    url: "audio",
  },
];

export const episodeListFromApi = {
  results: [
    {
      trackName: "episode1",
      trackTimeMillis: 111,
      releaseDate: "12/12/22",
      trackId: 12345,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      episodeUrl: "audio",
    },
    {
      trackName: "episode2",
      trackTimeMillis: 1112,
      releaseDate: "13/12/22",
      trackId: 123456,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      episodeUrl: "audio",
    },
    {
      trackName: "episode3",
      trackTimeMillis: 1113,
      releaseDate: "14/12/22",
      trackId: 1234567,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      episodeUrl: "audio",
    },
  ],
};

export const podcasts = [
  {
    name: "podcastTest1",
    image: "https:/.com/ad.svg",
    author: "testAutho1r",
    id: 1220001,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis iusto quos rerum distinctio adipisci voluptatibus? Amet tenetur expedita sapiente veritatis quisquam in consectetur quod. Blanditiis labore recusandae quo nostrum.",
  },
  {
    name: "podcastTest2",
    image: "https:/.com/ad.svg",
    author: "testAutho2r",
    id: 1220002,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis iusto quos rerum distinctio adipisci voluptatibus? Amet tenetur expedita sapiente veritatis quisquam in consectetur quod. Blanditiis labore recusandae quo nostrum.",
  },
  {
    name: "podcastTest3",
    image: "https:/.com/ad.svg",
    author: "testAuthor3",
    id: 1220003,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis iusto quos rerum distinctio adipisci voluptatibus? Amet tenetur expedita sapiente veritatis quisquam in consectetur quod. Blanditiis labore recusandae quo nostrum.",
  },
];

export const episode = {
  title: "episodeTest",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi vel quia temporibus accusantium dolor! Hic veritatis, mollitia nam optio assumenda ex ut quibusdam illum quia, perspiciatis recusandae repellendus iusto facere!",
  url: "http://localhost/audioUrlTest",
};

export const apiResponsePodcasts = {
  feed: {
    entry: [
      {
        "im:name": { label: "podcastTest" },
        "im:image": [
          {
            label: "https:/.com/ad.svg",
            attributes: { height: "55" },
          },
          {
            label: "https:/.com/ad.svg",
            attributes: { height: "60" },
          },
          {
            label: "https:/.com/ad.svg",
            attributes: { height: "170" },
          },
        ],
        summary: {
          label:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis iusto quos rerum distinctio adipisci voluptatibus? Amet tenetur expedita sapiente veritatis quisquam in consectetur quod. Blanditiis labore recusandae quo nostrum.",
        },

        id: {
          label:
            "https://podcasts.apple.com/us/podcast/caresha-please/id1628914491?uo=2",
          attributes: { "im:id": "1220000" },
        },
        "im:artist": { label: "testAuthor" },
      },
    ],
  },
};
