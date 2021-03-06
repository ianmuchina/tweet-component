import type { Tweet } from "./types";

export let tweets: Tweet[] = [
  // Poll
  {
    lang: "en",
    favorite_count: 57,
    created_at: "2019-03-26T17:42:29.000Z",
    display_text_range: [0, 84],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1110597904643743744",
    text: "CSS poll: If we had a button to emulate print styles, how often would you use it? 🖨",
    user: {
      id_str: "1599870367",
      name: "Firefox DevTools",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1168976837474770944/IKcaSA_Y_normal.png",
      screen_name: "FirefoxDevTools",
      verified: false,
    },
    conversation_count: 34,
    news_action_type: "conversation",
    card: {
      card_platform: {
        platform: {
          audience: {
            name: "production",
          },
          device: {
            name: "Swift",
            version: "12",
          },
        },
      },
      name: "poll4choice_text_only",
      url: "card://1110597903809044480",
      binding_values: {
        choice1_label: {
          string_value: "Weekly or more",
          type: "STRING",
        },
        choice2_label: {
          string_value: "A few times a month",
          type: "STRING",
        },
        end_datetime_utc: {
          string_value: "2019-04-02T17:42:28Z",
          type: "STRING",
        },
        counts_are_final: {
          boolean_value: true,
          type: "BOOLEAN",
        },
        choice2_count: {
          string_value: "671",
          type: "STRING",
        },
        choice1_count: {
          string_value: "442",
          type: "STRING",
        },
        choice4_label: {
          string_value: "Almost never",
          type: "STRING",
        },
        last_updated_datetime_utc: {
          string_value: "2019-04-02T17:42:33Z",
          type: "STRING",
        },
        duration_minutes: {
          string_value: "10080",
          type: "STRING",
        },
        choice3_count: {
          string_value: "827",
          type: "STRING",
        },
        choice4_count: {
          string_value: "726",
          type: "STRING",
        },
        choice3_label: {
          string_value: "A few times a year",
          type: "STRING",
        },
        api: {
          string_value: "capi://passthrough/1",
          type: "STRING",
        },
        card_url: {
          scribe_key: "card_url",
          string_value: "https://twitter.com",
          type: "STRING",
        },
      },
    },
  },

  // Voice 
  {
    lang: "en",
    favorite_count: 423,
    created_at: "2020-06-17T17:48:18.000Z",
    display_text_range: [0, 6],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/HoQEEMxPvH",
          expanded_url:
            "https://twitter.com/tomwarren/status/1273311522400460802/video/1",
          indices: [7, 30],
          url: "https://t.co/HoQEEMxPvH",
        },
      ],
    },
    id_str: "1273311522400460802",
    text: "oh wow https://t.co/HoQEEMxPvH",
    user: {
      id_str: "12273252",
      name: "Tom Warren",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484240745280294926/DiRkwtc0_normal.jpg",
      screen_name: "tomwarren",
      verified: true,
    },
    photos: [],
    video: {
      aspectRatio: [16, 9],
      contentType: "media_entity",
      durationMs: 17537,
      mediaAvailability: {
        status: "available",
      },
      poster:
        "https://pbs.twimg.com/ext_tw_video_thumb/1273311498811645953/pu/img/Vf9fSnLEtGJ39N8H.jpg",
      variants: [
        {
          type: "video/mp4",
          src: "https://video.twimg.com/ext_tw_video/1273311498811645953/pu/vid/480x270/xeOn73_CbmMXk7ik.mp4?tag=10",
        },
        {
          type: "application/x-mpegURL",
          src: "https://video.twimg.com/ext_tw_video/1273311498811645953/pu/pl/_hNER5eWQhY9qn-p.m3u8?tag=10",
        },
        {
          type: "video/mp4",
          src: "https://video.twimg.com/ext_tw_video/1273311498811645953/pu/vid/1280x720/JQDyCIWe6mqAECWk.mp4?tag=10",
        },
        {
          type: "video/mp4",
          src: "https://video.twimg.com/ext_tw_video/1273311498811645953/pu/vid/640x360/OvLFo51X4M-Hl6-B.mp4?tag=10",
        },
      ],
      videoId: {
        type: "tweet",
        id: "1273311522400460802",
      },
      viewCount: 12308,
    },
    conversation_count: 46,
    news_action_type: "conversation",
  },

  // Poll
  {
    lang: "en",
    favorite_count: 63,
    created_at: "2020-07-10T17:30:57.000Z",
    display_text_range: [0, 55],
    entities: {
      hashtags: [
        {
          indices: [0, 5],
          text: "poll",
        },
        {
          indices: [15, 19],
          text: "CSS",
        },
      ],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1281642077382737922",
    text: "#poll 💭\n\nWhich #CSS superpower would you like to have?",
    user: {
      id_str: "1056088112106037248",
      name: "Annie🦄⚡",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1479900767188312065/pQNHPtzs_normal.jpg",
      screen_name: "anniebombanie_",
      verified: false,
    },
    conversation_count: 21,
    news_action_type: "conversation",
    card: {
      card_platform: {
        platform: {
          audience: {
            name: "production",
          },
          device: {
            name: "Swift",
            version: "12",
          },
        },
      },
      name: "poll4choice_text_only",
      url: "card://1281642076757807105",
      binding_values: {
        choice1_label: {
          string_value: "Centering? Too easy!! 🍰",
          type: "STRING",
        },
        choice2_label: {
          string_value: "What horizontal scroll? 🙌",
          type: "STRING",
        },
        end_datetime_utc: {
          string_value: "2020-07-12T05:30:57Z",
          type: "STRING",
        },
        counts_are_final: {
          boolean_value: true,
          type: "BOOLEAN",
        },
        choice2_count: {
          string_value: "36",
          type: "STRING",
        },
        choice1_count: {
          string_value: "84",
          type: "STRING",
        },
        choice4_label: {
          string_value: "Auto-responsiveness! 💪",
          type: "STRING",
        },
        last_updated_datetime_utc: {
          string_value: "2020-07-12T05:31:01Z",
          type: "STRING",
        },
        duration_minutes: {
          string_value: "2160",
          type: "STRING",
        },
        choice3_count: {
          string_value: "77",
          type: "STRING",
        },
        choice4_count: {
          string_value: "488",
          type: "STRING",
        },
        choice3_label: {
          string_value: "IE support? Zilch!! 🙏",
          type: "STRING",
        },
        api: {
          string_value: "capi://passthrough/1",
          type: "STRING",
        },
        card_url: {
          scribe_key: "card_url",
          string_value: "https://twitter.com",
          type: "STRING",
        },
      },
    },
  },
  // Text: Hashtags
  {
    lang: "und",
    favorite_count: 206790,
    created_at: "2021-03-17T19:06:25.000Z",
    display_text_range: [0, 119],
    entities: {
      hashtags: [
        {
          indices: [0, 14],
          text: "StopAsianHate",
        },
        {
          indices: [15, 29],
          text: "StopAsianHate",
        },
        {
          indices: [30, 44],
          text: "StopAsianHate",
        },
        {
          indices: [45, 59],
          text: "StopAsianHate",
        },
        {
          indices: [60, 74],
          text: "StopAsianHate",
        },
        {
          indices: [75, 89],
          text: "StopAsianHate",
        },
        {
          indices: [90, 104],
          text: "StopAsianHate",
        },
        {
          indices: [105, 119],
          text: "StopAsianHate",
        },
      ],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1372263069125111810",
    text: "#StopAsianHate\n#StopAsianHate\n#StopAsianHate\n#StopAsianHate\n#StopAsianHate\n#StopAsianHate\n#StopAsianHate\n#StopAsianHate",
    user: {
      id_str: "783214",
      name: "Twitter",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484658488294973452/IUxxyP5m_normal.jpg",
      screen_name: "Twitter",
      verified: true,
    },
    conversation_count: 4852,
    news_action_type: "conversation",
  },

  // Picture 4
  {
    lang: "in",
    favorite_count: 15435,
    created_at: "2021-04-05T00:19:47.000Z",
    display_text_range: [0, 12],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/Y6QyUkNzCz",
          expanded_url:
            "https://twitter.com/jxpann/status/1378864910088699907/photo/1",
          indices: [13, 36],
          url: "https://t.co/Y6QyUkNzCz",
        },
      ],
    },
    id_str: "1378864910088699907",
    text: "Serene Japan https://t.co/Y6QyUkNzCz",
    user: {
      id_str: "1105945817309954055",
      name: "Japan 🌸",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484503439803625473/3m0BanQ6_normal.jpg",
      screen_name: "jxpann",
      verified: false,
    },
    photos: [
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 265,
            w: 1080,
            h: 605,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1080,
          },
          {
            x: 133,
            y: 0,
            w: 947,
            h: 1080,
          },
          {
            x: 540,
            y: 0,
            w: 540,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1080,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1378864910088699907/photo/1",
        url: "https://pbs.twimg.com/media/EyK2Q8EWYAIg_dV.jpg",
        width: 1080,
        height: 1080,
      },
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 265,
            w: 1080,
            h: 605,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 947,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 540,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1080,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1378864910088699907/photo/1",
        url: "https://pbs.twimg.com/media/EyK2Q9lWUAMgOTr.jpg",
        width: 1080,
        height: 1080,
      },
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 475,
            w: 1080,
            h: 605,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 947,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 540,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1080,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1378864910088699907/photo/1",
        url: "https://pbs.twimg.com/media/EyK2Q-IW8AQSenR.jpg",
        width: 1080,
        height: 1080,
      },
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 605,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1080,
          },
          {
            x: 94,
            y: 0,
            w: 947,
            h: 1080,
          },
          {
            x: 297,
            y: 0,
            w: 540,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1080,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1378864910088699907/photo/1",
        url: "https://pbs.twimg.com/media/EyK2Q-wWgAALMx4.jpg",
        width: 1080,
        height: 1080,
      },
    ],
    conversation_count: 20,
    news_action_type: "conversation",
  },

    // Picture 3
    {
      lang: "eu",
      favorite_count: 11788,
      created_at: "2021-03-30T18:30:52.000Z",
      display_text_range: [0, 5],
      entities: {
        hashtags: [],
        urls: [],
        user_mentions: [],
        symbols: [],
        media: [
          {
            display_url: "pic.twitter.com/qIr6ONLNHz",
            expanded_url:
              "https://twitter.com/jxpann/status/1376965163216175105/photo/1",
            indices: [6, 29],
            url: "https://t.co/qIr6ONLNHz",
          },
        ],
      },
      id_str: "1376965163216175105",
      text: "Osaka https://t.co/qIr6ONLNHz",
      user: {
        id_str: "1105945817309954055",
        name: "Japan 🌸",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1484503439803625473/3m0BanQ6_normal.jpg",
        screen_name: "jxpann",
        verified: false,
      },
      photos: [
        {
          backgroundColor: {
            red: 204,
            green: 214,
            blue: 221,
          },
          cropCandidates: [
            {
              x: 0,
              y: 51,
              w: 540,
              h: 302,
            },
            {
              x: 180,
              y: 0,
              w: 360,
              h: 360,
            },
            {
              x: 224,
              y: 0,
              w: 316,
              h: 360,
            },
            {
              x: 360,
              y: 0,
              w: 180,
              h: 360,
            },
            {
              x: 0,
              y: 0,
              w: 540,
              h: 360,
            },
          ],
          expandedUrl:
            "https://twitter.com/jxpann/status/1376965163216175105/photo/1",
          url: "https://pbs.twimg.com/media/Exv2hDjWEAgipRE.jpg",
          width: 540,
          height: 360,
        },
        {
          backgroundColor: {
            red: 204,
            green: 214,
            blue: 221,
          },
          cropCandidates: [
            {
              x: 0,
              y: 58,
              w: 540,
              h: 302,
            },
            {
              x: 0,
              y: 0,
              w: 360,
              h: 360,
            },
            {
              x: 0,
              y: 0,
              w: 316,
              h: 360,
            },
            {
              x: 0,
              y: 0,
              w: 180,
              h: 360,
            },
            {
              x: 0,
              y: 0,
              w: 540,
              h: 360,
            },
          ],
          expandedUrl:
            "https://twitter.com/jxpann/status/1376965163216175105/photo/1",
          url: "https://pbs.twimg.com/media/Exv2hDiWYAY_fpS.jpg",
          width: 540,
          height: 360,
        },
        {
          backgroundColor: {
            red: 204,
            green: 214,
            blue: 221,
          },
          cropCandidates: [
            {
              x: 0,
              y: 355,
              w: 540,
              h: 302,
            },
            {
              x: 0,
              y: 236,
              w: 540,
              h: 540,
            },
            {
              x: 0,
              y: 194,
              w: 540,
              h: 616,
            },
            {
              x: 101,
              y: 0,
              w: 405,
              h: 810,
            },
            {
              x: 0,
              y: 0,
              w: 540,
              h: 810,
            },
          ],
          expandedUrl:
            "https://twitter.com/jxpann/status/1376965163216175105/photo/1",
          url: "https://pbs.twimg.com/media/Exv2hDbWUAAhbsC.jpg",
          width: 540,
          height: 810,
        },
      ],
      conversation_count: 16,
      news_action_type: "conversation",
    },
    
  // Picture 2
  {
    lang: "cy",
    favorite_count: 12306,
    created_at: "2021-05-10T18:48:54.000Z",
    display_text_range: [0, 13],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/ezOKBYB5xh",
          expanded_url:
            "https://twitter.com/jxpann/status/1391827606018871297/photo/1",
          indices: [14, 37],
          url: "https://t.co/ezOKBYB5xh",
        },
      ],
    },
    id_str: "1391827606018871297",
    text: "Tokyo Skytree https://t.co/ezOKBYB5xh",
    user: {
      id_str: "1105945817309954055",
      name: "Japan 🌸",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484503439803625473/3m0BanQ6_normal.jpg",
      screen_name: "jxpann",
      verified: false,
    },
    photos: [
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 609,
            w: 1080,
            h: 605,
          },
          {
            x: 0,
            y: 270,
            w: 1080,
            h: 1080,
          },
          {
            x: 0,
            y: 119,
            w: 1080,
            h: 1231,
          },
          {
            x: 405,
            y: 0,
            w: 675,
            h: 1350,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1350,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1391827606018871297/photo/1",
        url: "https://pbs.twimg.com/media/E1DD1CSXMAMb79r.jpg",
        width: 1080,
        height: 1350,
      },
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 609,
            w: 1080,
            h: 605,
          },
          {
            x: 0,
            y: 270,
            w: 1080,
            h: 1080,
          },
          {
            x: 0,
            y: 119,
            w: 1080,
            h: 1231,
          },
          {
            x: 405,
            y: 0,
            w: 675,
            h: 1350,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1350,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1391827606018871297/photo/1",
        url: "https://pbs.twimg.com/media/E1DD1CIWQAILoLB.jpg",
        width: 1080,
        height: 1350,
      },
    ],
    conversation_count: 12,
    news_action_type: "conversation",
  },

  // Picture 1
  {
    lang: "en",
    favorite_count: 48552,
    created_at: "2021-05-06T20:00:15.000Z",
    display_text_range: [0, 10],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/ikSl7XTh2J",
          expanded_url:
            "https://twitter.com/jxpann/status/1390396009134571520/photo/1",
          indices: [11, 34],
          url: "https://t.co/ikSl7XTh2J",
        },
      ],
    },
    id_str: "1390396009134571520",
    text: "Mount Fuji https://t.co/ikSl7XTh2J",
    user: {
      id_str: "1105945817309954055",
      name: "Japan 🌸",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484503439803625473/3m0BanQ6_normal.jpg",
      screen_name: "jxpann",
      verified: false,
    },
    photos: [
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 421,
            w: 750,
            h: 420,
          },
          {
            x: 0,
            y: 186,
            w: 750,
            h: 750,
          },
          {
            x: 0,
            y: 81,
            w: 750,
            h: 855,
          },
          {
            x: 282,
            y: 0,
            w: 468,
            h: 936,
          },
          {
            x: 0,
            y: 0,
            w: 750,
            h: 936,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1390396009134571520/photo/1",
        url: "https://pbs.twimg.com/media/E0utzHPXoAgO6z9.jpg",
        width: 750,
        height: 936,
      },
    ],
    conversation_count: 63,
    news_action_type: "conversation",
  },

  //  Text
  {
    lang: "en",
    favorite_count: 127582,
    created_at: "2021-05-07T17:47:51.000Z",
    display_text_range: [0, 55],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1390725076996268038",
    text: "open Twitter \nclose Twitter\nopen Twitter \nclose Twitter",
    user: {
      id_str: "783214",
      name: "Twitter",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484658488294973452/IUxxyP5m_normal.jpg",
      screen_name: "Twitter",
      verified: true,
    },
    conversation_count: 5971,
    news_action_type: "conversation",
  },

  {
    lang: "en",
    favorite_count: 109,
    self_thread: {
      id_str: "1432864028842356736",
    },
    created_at: "2021-09-01T00:33:00.000Z",
    display_text_range: [0, 277],
    entities: {
      hashtags: [],
      urls: [
        {
          display_url: "swyx.io/self-provision…",
          expanded_url: "https://www.swyx.io/self-provisioning-runtime/",
          indices: [17, 40],
          url: "https://t.co/OcKHOII5II",
        },
      ],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1432864028842356736",
    text: "My latest piece: https://t.co/OcKHOII5II\n\nAdvancements in two fields — programming languages and cloud infrastructure — will converge in a single paradigm: where all resources used by a program will be automatically provisioned by the environment that runs it.\n\nTLDR in thread:",
    user: {
      id_str: "33521530",
      name: "swyx",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1456506127961640962/iM2Hf8du_normal.jpg",
      screen_name: "swyx",
      verified: false,
    },
    conversation_count: 8,
    news_action_type: "conversation",
    card: {
      card_platform: {
        platform: {
          audience: {
            name: "production",
          },
          device: {
            name: "Swift",
            version: "12",
          },
        },
      },
      name: "summary_large_image",
      url: "https://t.co/OcKHOII5II",
      binding_values: {
        photo_image_full_size_large: {
          image_value: {
            height: 419,
            width: 800,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=800x419",
          },
          type: "IMAGE",
        },
        thumbnail_image: {
          image_value: {
            height: 168,
            width: 400,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=400x400",
          },
          type: "IMAGE",
        },
        description: {
          string_value:
            'Improvements in DX in both programming languages and cloud infrastructure will eventually converge in a single paradigm, where you truly "just write business logic" and the platform mostly figures...',
          type: "STRING",
        },
        domain: {
          string_value: "www.swyx.io",
          type: "STRING",
        },
        thumbnail_image_large: {
          image_value: {
            height: 320,
            width: 762,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=800x320_1",
          },
          type: "IMAGE",
        },
        summary_photo_image_small: {
          image_value: {
            height: 202,
            width: 386,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=386x202",
          },
          type: "IMAGE",
        },
        thumbnail_image_original: {
          image_value: {
            height: 420,
            width: 1000,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=orig",
          },
          type: "IMAGE",
        },
        photo_image_full_size_small: {
          image_value: {
            height: 202,
            width: 386,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=386x202",
          },
          type: "IMAGE",
        },
        summary_photo_image_large: {
          image_value: {
            height: 419,
            width: 800,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=800x419",
          },
          type: "IMAGE",
        },
        thumbnail_image_small: {
          image_value: {
            height: 60,
            width: 144,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=144x144",
          },
          type: "IMAGE",
        },
        creator: {
          type: "USER",
          user_value: {
            id_str: "33521530",
            path: [],
          },
        },
        thumbnail_image_x_large: {
          image_value: {
            height: 420,
            width: 1000,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        photo_image_full_size_original: {
          image_value: {
            height: 420,
            width: 1000,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=orig",
          },
          type: "IMAGE",
        },
        vanity_url: {
          scribe_key: "vanity_url",
          string_value: "swyx.io",
          type: "STRING",
        },
        photo_image_full_size: {
          image_value: {
            height: 314,
            width: 600,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=600x314",
          },
          type: "IMAGE",
        },
        thumbnail_image_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 254,
                  green: 243,
                  red: 229,
                },
                percentage: 92.58,
              },
              {
                rgb: {
                  blue: 175,
                  green: 168,
                  red: 230,
                },
                percentage: 2.65,
              },
              {
                rgb: {
                  blue: 149,
                  green: 214,
                  red: 175,
                },
                percentage: 2.39,
              },
              {
                rgb: {
                  blue: 217,
                  green: 202,
                  red: 134,
                },
                percentage: 1,
              },
              {
                rgb: {
                  blue: 50,
                  green: 180,
                  red: 118,
                },
                percentage: 0.36,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        title: {
          string_value: "The Self Provisioning Runtime ∊ swyx.io",
          type: "STRING",
        },
        summary_photo_image_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 254,
                  green: 243,
                  red: 229,
                },
                percentage: 92.58,
              },
              {
                rgb: {
                  blue: 175,
                  green: 168,
                  red: 230,
                },
                percentage: 2.65,
              },
              {
                rgb: {
                  blue: 149,
                  green: 214,
                  red: 175,
                },
                percentage: 2.39,
              },
              {
                rgb: {
                  blue: 217,
                  green: 202,
                  red: 134,
                },
                percentage: 1,
              },
              {
                rgb: {
                  blue: 50,
                  green: 180,
                  red: 118,
                },
                percentage: 0.36,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        summary_photo_image_x_large: {
          image_value: {
            height: 420,
            width: 1000,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        summary_photo_image: {
          image_value: {
            height: 314,
            width: 600,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=600x314",
          },
          type: "IMAGE",
        },
        photo_image_full_size_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 254,
                  green: 243,
                  red: 229,
                },
                percentage: 92.58,
              },
              {
                rgb: {
                  blue: 175,
                  green: 168,
                  red: 230,
                },
                percentage: 2.65,
              },
              {
                rgb: {
                  blue: 149,
                  green: 214,
                  red: 175,
                },
                percentage: 2.39,
              },
              {
                rgb: {
                  blue: 217,
                  green: 202,
                  red: 134,
                },
                percentage: 1,
              },
              {
                rgb: {
                  blue: 50,
                  green: 180,
                  red: 118,
                },
                percentage: 0.36,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        photo_image_full_size_x_large: {
          image_value: {
            height: 420,
            width: 1000,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        card_url: {
          scribe_key: "card_url",
          string_value: "https://t.co/OcKHOII5II",
          type: "STRING",
        },
        summary_photo_image_original: {
          image_value: {
            height: 420,
            width: 1000,
            url: "https://pbs.twimg.com/card_img/1483052984741380103/PanYaQXR?format=jpg&name=orig",
          },
          type: "IMAGE",
        },
      },
    },
  },

  {
    lang: "en",
    favorite_count: 202976,
    created_at: "2021-10-12T19:25:48.000Z",
    display_text_range: [0, 117],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1448007008670650370",
    text: "“I’m not on Twitter” 🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩",
    user: {
      id_str: "783214",
      name: "Twitter",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484658488294973452/IUxxyP5m_normal.jpg",
      screen_name: "Twitter",
      verified: true,
    },
    conversation_count: 7483,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 273005,
    created_at: "2021-10-28T22:12:31.000Z",
    display_text_range: [0, 29],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1453847172794003473",
    text: "BIG NEWS lol jk still Twitter",
    user: {
      id_str: "783214",
      name: "Twitter",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484658488294973452/IUxxyP5m_normal.jpg",
      screen_name: "Twitter",
      verified: true,
    },
    conversation_count: 7655,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 104,
    created_at: "2021-11-05T14:17:48.000Z",
    display_text_range: [0, 129],
    entities: {
      hashtags: [],
      urls: [
        {
          display_url: "v8.dev/blog/v8-releas…",
          expanded_url: "https://v8.dev/blog/v8-release-97",
          indices: [105, 128],
          url: "https://t.co/OuXMrIJ2uo",
        },
      ],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1456626807801790467",
    text: "🔥 V8 v9.7 brings stabilized support for .findLast and .findLastIndex methods on arrays and TypedArrays!\n\nhttps://t.co/OuXMrIJ2uo",
    user: {
      id_str: "881815625441718272",
      name: "V8",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/881818234621743104/_Iegct3S_normal.png",
      screen_name: "v8js",
      verified: true,
    },
    conversation_count: 1,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 54,
    created_at: "2021-12-08T19:03:29.000Z",
    display_text_range: [0, 135],
    entities: {
      hashtags: [],
      urls: [
        {
          display_url: "dev.to/suhemparack/ye…",
          expanded_url:
            "https://dev.to/suhemparack/year-in-review-academic-research-with-the-twitter-api-v2-52mm",
          indices: [111, 134],
          url: "https://t.co/nQUrL1i5Sg",
        },
      ],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1468657503013588995",
    text: "Here is a recap of our product launches and community programs for academic researchers that happened in 2021 📊https://t.co/nQUrL1i5Sg",
    user: {
      id_str: "2244994945",
      name: "Twitter Dev",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1445764922474827784/W2zEPN7U_normal.jpg",
      screen_name: "TwitterDev",
      verified: true,
    },
    conversation_count: 2,
    news_action_type: "conversation",
    card: {
      card_platform: {
        platform: {
          audience: {
            name: "production",
          },
          device: {
            name: "Swift",
            version: "12",
          },
        },
      },
      name: "summary_large_image",
      url: "https://t.co/nQUrL1i5Sg",
      binding_values: {
        photo_image_full_size_large: {
          image_value: {
            height: 419,
            width: 800,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=800x419",
          },
          type: "IMAGE",
        },
        thumbnail_image: {
          image_value: {
            height: 149,
            width: 280,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=280x150",
          },
          type: "IMAGE",
        },
        description: {
          string_value:
            "In 2021, we launched product improvements and various community initiatives to help the academic...",
          type: "STRING",
        },
        domain: {
          string_value: "dev.to",
          type: "STRING",
        },
        thumbnail_image_large: {
          image_value: {
            height: 319,
            width: 600,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=600x600",
          },
          type: "IMAGE",
        },
        summary_photo_image_small: {
          image_value: {
            height: 202,
            width: 386,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=386x202",
          },
          type: "IMAGE",
        },
        thumbnail_image_original: {
          image_value: {
            height: 600,
            width: 1128,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=orig",
          },
          type: "IMAGE",
        },
        site: {
          scribe_key: "publisher_id",
          type: "USER",
          user_value: {
            id_str: "2735246778",
            path: [],
          },
        },
        photo_image_full_size_small: {
          image_value: {
            height: 202,
            width: 386,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=386x202",
          },
          type: "IMAGE",
        },
        summary_photo_image_large: {
          image_value: {
            height: 419,
            width: 800,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=800x419",
          },
          type: "IMAGE",
        },
        thumbnail_image_small: {
          image_value: {
            height: 77,
            width: 144,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=144x144",
          },
          type: "IMAGE",
        },
        creator: {
          type: "USER",
          user_value: {
            id_str: "857699969263964161",
            path: [],
          },
        },
        thumbnail_image_x_large: {
          image_value: {
            height: 600,
            width: 1128,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        photo_image_full_size_original: {
          image_value: {
            height: 600,
            width: 1128,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=orig",
          },
          type: "IMAGE",
        },
        vanity_url: {
          scribe_key: "vanity_url",
          string_value: "dev.to",
          type: "STRING",
        },
        photo_image_full_size: {
          image_value: {
            height: 314,
            width: 600,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=600x314",
          },
          type: "IMAGE",
        },
        thumbnail_image_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 255,
                  green: 255,
                  red: 255,
                },
                percentage: 89.06,
              },
              {
                rgb: {
                  blue: 92,
                  green: 63,
                  red: 59,
                },
                percentage: 6.28,
              },
              {
                rgb: {
                  blue: 135,
                  green: 115,
                  red: 112,
                },
                percentage: 4.62,
              },
              {
                rgb: {
                  blue: 10,
                  green: 10,
                  red: 10,
                },
                percentage: 0.25,
              },
              {
                rgb: {
                  blue: 244,
                  green: 171,
                  red: 66,
                },
                percentage: 0.15,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        title: {
          string_value:
            "Year in review: Academic Research with the Twitter API v2",
          type: "STRING",
        },
        summary_photo_image_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 255,
                  green: 255,
                  red: 255,
                },
                percentage: 89.06,
              },
              {
                rgb: {
                  blue: 92,
                  green: 63,
                  red: 59,
                },
                percentage: 6.28,
              },
              {
                rgb: {
                  blue: 135,
                  green: 115,
                  red: 112,
                },
                percentage: 4.62,
              },
              {
                rgb: {
                  blue: 10,
                  green: 10,
                  red: 10,
                },
                percentage: 0.25,
              },
              {
                rgb: {
                  blue: 244,
                  green: 171,
                  red: 66,
                },
                percentage: 0.15,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        summary_photo_image_x_large: {
          image_value: {
            height: 600,
            width: 1128,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        summary_photo_image: {
          image_value: {
            height: 314,
            width: 600,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=600x314",
          },
          type: "IMAGE",
        },
        photo_image_full_size_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 255,
                  green: 255,
                  red: 255,
                },
                percentage: 89.06,
              },
              {
                rgb: {
                  blue: 92,
                  green: 63,
                  red: 59,
                },
                percentage: 6.28,
              },
              {
                rgb: {
                  blue: 135,
                  green: 115,
                  red: 112,
                },
                percentage: 4.62,
              },
              {
                rgb: {
                  blue: 10,
                  green: 10,
                  red: 10,
                },
                percentage: 0.25,
              },
              {
                rgb: {
                  blue: 244,
                  green: 171,
                  red: 66,
                },
                percentage: 0.15,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        photo_image_full_size_x_large: {
          image_value: {
            height: 600,
            width: 1128,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        card_url: {
          scribe_key: "card_url",
          string_value: "https://t.co/nQUrL1i5Sg",
          type: "STRING",
        },
        summary_photo_image_original: {
          image_value: {
            height: 600,
            width: 1128,
            url: "https://pbs.twimg.com/card_img/1484602278464081924/CFYk1F_W?format=jpg&name=orig",
          },
          type: "IMAGE",
        },
      },
    },
  },
  {
    lang: "en",
    favorite_count: 440,
    created_at: "2021-12-17T18:12:31.000Z",
    display_text_range: [0, 212],
    entities: {
      hashtags: [
        {
          indices: [75, 85],
          text: "HeyGoogle",
        },
      ],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1471906167517585418",
    text: "📍 LIVE FROM SANTA’S VILLAGE: Only 8 more sleeps until the big night! Say, “#HeyGoogle, What’s happening at the North Pole?” to get all of the latest updates – and some tips for how to sleigh this holiday season.",
    user: {
      id_str: "20536157",
      name: "Google",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_normal.jpg",
      screen_name: "Google",
      verified: true,
    },
    conversation_count: 35,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 55,
    created_at: "2021-12-17T20:01:18.000Z",
    display_text_range: [0, 260],
    entities: {
      hashtags: [],
      urls: [
        {
          display_url: "blog.twitter.com/engineering/en…",
          expanded_url:
            "https://blog.twitter.com/engineering/en_us/topics/infrastructure/2021/how-we-built-twitter-s-highly-reliable-ads-pacing-service",
          indices: [237, 260],
          url: "https://t.co/Zycw7hhw4D",
        },
      ],
      user_mentions: [
        {
          id_str: "783214",
          indices: [75, 83],
          name: "Twitter",
          screen_name: "Twitter",
        },
        {
          id_str: "82368523",
          indices: [112, 119],
          name: "Eddie Xie",
          screen_name: "eddiex",
        },
        {
          id_str: "4135766543",
          indices: [124, 136],
          name: "yyang",
          screen_name: "YuanjunYang",
        },
      ],
      symbols: [],
    },
    id_str: "1471933543806689285",
    text: "Ever wonder how a highly reliable distributed system is designed and built @Twitter? \n\nIn our latest blog post, @Eddiex and @YuanjunYang walk through the challenges and our solutions to make the ads pacing service reliable. Link below!\n\nhttps://t.co/Zycw7hhw4D",
    user: {
      id_str: "6844292",
      name: "Twitter Engineering",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1354489861898604546/jHJN8AU0_normal.jpg",
      screen_name: "TwitterEng",
      verified: true,
    },
    conversation_count: 3,
    news_action_type: "conversation",
    card: {
      card_platform: {
        platform: {
          audience: {
            name: "production",
          },
          device: {
            name: "Swift",
            version: "12",
          },
        },
      },
      name: "summary",
      url: "https://t.co/Zycw7hhw4D",
      binding_values: {
        thumbnail_image: {
          image_value: {
            height: 144,
            width: 144,
            url: "https://pbs.twimg.com/card_img/1482858742878248966/48kLf6PZ?format=png&name=144x144_2",
          },
          type: "IMAGE",
        },
        description: {
          string_value:
            "In this blog, we describe how we separate Twitter’s pacing system from the serving stack to an independent service.",
          type: "STRING",
        },
        domain: {
          string_value: "blog.twitter.com",
          type: "STRING",
        },
        thumbnail_image_large: {
          image_value: {
            height: 288,
            width: 288,
            url: "https://pbs.twimg.com/card_img/1482858742878248966/48kLf6PZ?format=png&name=420x420_2",
          },
          type: "IMAGE",
        },
        thumbnail_image_original: {
          image_value: {
            height: 288,
            width: 768,
            url: "https://pbs.twimg.com/card_img/1482858742878248966/48kLf6PZ?format=png&name=orig",
          },
          type: "IMAGE",
        },
        thumbnail_image_small: {
          image_value: {
            height: 100,
            width: 100,
            url: "https://pbs.twimg.com/card_img/1482858742878248966/48kLf6PZ?format=png&name=100x100_2",
          },
          type: "IMAGE",
        },
        thumbnail_image_x_large: {
          image_value: {
            height: 288,
            width: 768,
            url: "https://pbs.twimg.com/card_img/1482858742878248966/48kLf6PZ?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        vanity_url: {
          scribe_key: "vanity_url",
          string_value: "blog.twitter.com",
          type: "STRING",
        },
        thumbnail_image_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 100,
                  green: 62,
                  red: 221,
                },
                percentage: 100,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        title: {
          string_value: "How pacing works at Twitter ads",
          type: "STRING",
        },
        card_url: {
          scribe_key: "card_url",
          string_value: "https://t.co/Zycw7hhw4D",
          type: "STRING",
        },
      },
    },
  },
  {
    lang: "en",
    favorite_count: 267,
    created_at: "2021-12-23T18:32:17.000Z",
    display_text_range: [0, 170],
    entities: {
      hashtags: [
        {
          indices: [129, 139],
          text: "TeamPixel",
        },
      ],
      urls: [
        {
          display_url: "goo.gle/3Ji7qtd",
          expanded_url: "https://goo.gle/3Ji7qtd",
          indices: [143, 166],
          url: "https://t.co/l43eoJp1ws",
        },
      ],
      user_mentions: [
        {
          id_str: "376502929",
          indices: [72, 81],
          name: "Snapchat",
          screen_name: "Snapchat",
        },
      ],
      symbols: [],
    },
    id_str: "1474085470011367429",
    text: "Show off your seasonal fits 👟🏀❄️ with Pixel’s new tunnel runway Lens on @Snapchat. \n\nShare your game day fashion 📹 with us using #TeamPixel. 📸 https://t.co/l43eoJp1ws",
    user: {
      id_str: "776196808909336577",
      name: "Made By Google",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1476242028723793922/-RPtXpN7_normal.jpg",
      screen_name: "madebygoogle",
      verified: true,
    },
    conversation_count: 46,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 1177,
    created_at: "2021-12-29T15:18:00.000Z",
    display_text_range: [0, 84],
    entities: {
      hashtags: [
        {
          indices: [55, 65],
          text: "HeyGoogle",
        },
      ],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1476210902366044163",
    text: "The best part of a day off?\n\nTelling Google Assistant: #HeyGoogle, cancel my alarms.",
    user: {
      id_str: "20536157",
      name: "Google",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_normal.jpg",
      screen_name: "Google",
      verified: true,
    },
    conversation_count: 111,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 100360,
    created_at: "2021-12-31T16:02:48.000Z",
    display_text_range: [0, 44],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1476946953518948358",
    text: "that’s a wrap on another totally normal year",
    user: {
      id_str: "783214",
      name: "Twitter",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484658488294973452/IUxxyP5m_normal.jpg",
      screen_name: "Twitter",
      verified: true,
    },
    conversation_count: 2523,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 2226,
    created_at: "2022-01-04T19:10:00.000Z",
    display_text_range: [0, 48],
    entities: {
      hashtags: [
        {
          indices: [5, 15],
          text: "HeyGoogle",
        },
      ],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1478443615001407490",
    text: "Try: #HeyGoogle, find my phone.\n\nYou’re welcome.",
    user: {
      id_str: "20536157",
      name: "Google",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_normal.jpg",
      screen_name: "Google",
      verified: true,
    },
    conversation_count: 212,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 46,
    created_at: "2022-01-08T09:23:02.000Z",
    display_text_range: [0, 98],
    entities: {
      hashtags: [],
      urls: [
        {
          display_url: "twitter.com/moxie/status/1…",
          expanded_url: "https://twitter.com/moxie/status/1479567493215637506",
          indices: [99, 122],
          url: "https://t.co/u257wHBOQu",
        },
      ],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1479745452417425413",
    text: "Hands down the best read on the many failure points of web3 &amp; NFTs from the founder of Signal. https://t.co/u257wHBOQu",
    user: {
      id_str: "14993649",
      name: "Tim Soret",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1422168277565022216/1A81J0Nm_normal.jpg",
      screen_name: "timsoret",
      verified: false,
    },
    conversation_count: 1,
    news_action_type: "conversation",
    quoted_tweet: {
      lang: "en",
      reply_count: 1127,
      retweet_count: 7648,
      favorite_count: 29381,
      created_at: "2022-01-07T21:35:54.000Z",
      display_text_range: [0, 82],
      entities: {
        hashtags: [],
        urls: [
          {
            display_url: "moxie.org/2022/01/07/web…",
            expanded_url:
              "https://moxie.org/2022/01/07/web3-first-impressions.html",
            indices: [59, 82],
            url: "https://t.co/16MoPROOGc",
          },
        ],
        user_mentions: [],
        symbols: [],
      },
      id_str: "1479567493215637506",
      text: "Wrote some notes summarizing my first impressions of web3: https://t.co/16MoPROOGc",
      user: {
        id_str: "76980293",
        name: "Moxie Marlinspike",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1390318592902631429/zQifJNrQ_normal.jpg",
        screen_name: "moxie",
        verified: true,
      },
    },
  },
  {
    lang: "en",
    favorite_count: 41160,
    self_thread: {
      id_str: "1481555719996456963",
    },
    created_at: "2022-01-13T09:16:24.000Z",
    display_text_range: [0, 16],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/0vg5vdsuo0",
          expanded_url:
            "https://twitter.com/jxpann/status/1481555719996456963/photo/1",
          indices: [17, 40],
          url: "https://t.co/0vg5vdsuo0",
        },
      ],
    },
    id_str: "1481555719996456963",
    text: "Japanese streets https://t.co/0vg5vdsuo0",
    user: {
      id_str: "1105945817309954055",
      name: "Japan 🌸",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484503439803625473/3m0BanQ6_normal.jpg",
      screen_name: "jxpann",
      verified: false,
    },
    photos: [
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 443,
            w: 700,
            h: 392,
          },
          {
            x: 0,
            y: 289,
            w: 700,
            h: 700,
          },
          {
            x: 0,
            y: 227,
            w: 700,
            h: 798,
          },
          {
            x: 0,
            y: 0,
            w: 513,
            h: 1025,
          },
          {
            x: 0,
            y: 0,
            w: 700,
            h: 1025,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1481555719996456963/photo/1",
        url: "https://pbs.twimg.com/media/FI-LEmKXoAEJKsf.jpg",
        width: 700,
        height: 1025,
      },
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 471,
            w: 736,
            h: 412,
          },
          {
            x: 0,
            y: 309,
            w: 736,
            h: 736,
          },
          {
            x: 0,
            y: 258,
            w: 736,
            h: 839,
          },
          {
            x: 146,
            y: 0,
            w: 590,
            h: 1179,
          },
          {
            x: 0,
            y: 0,
            w: 736,
            h: 1179,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1481555719996456963/photo/1",
        url: "https://pbs.twimg.com/media/FI-LEmMWYAcazQu.jpg",
        width: 736,
        height: 1179,
      },
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 337,
            w: 433,
            h: 242,
          },
          {
            x: 0,
            y: 242,
            w: 433,
            h: 433,
          },
          {
            x: 0,
            y: 186,
            w: 433,
            h: 494,
          },
          {
            x: 16,
            y: 0,
            w: 340,
            h: 680,
          },
          {
            x: 0,
            y: 0,
            w: 433,
            h: 680,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1481555719996456963/photo/1",
        url: "https://pbs.twimg.com/media/FI-LEmNX0AIvBA9.jpg",
        width: 433,
        height: 680,
      },
    ],
    conversation_count: 72,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 679,
    created_at: "2022-01-14T16:00:11.000Z",
    display_text_range: [0, 279],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/mbRcy8HHha",
          expanded_url:
            "https://twitter.com/googlechrome/status/1482019724124950529/photo/1",
          indices: [279, 302],
          url: "https://t.co/mbRcy8HHha",
        },
      ],
    },
    id_str: "1482019724124950529",
    text: "With the latest version of Chrome (available every 4 weeks!), find features and security improvements to make browsing more productive, helpful, and safe.\n\nOf course, updating is easier with fewer steps - so here's how Chrome Actions makes it a breeze through your address bar 👇 https://t.co/mbRcy8HHha",
    user: {
      id_str: "56505125",
      name: "Chrome",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1037025533182193664/aCWlGSZF_normal.jpg",
      screen_name: "googlechrome",
      verified: true,
    },
    photos: [],
    video: {
      aspectRatio: [1, 1],
      contentType: "gif",
      durationMs: 0,
      mediaAvailability: {
        status: "available",
      },
      poster: "https://pbs.twimg.com/tweet_video_thumb/FJExDMrXMA08Unc.jpg",
      variants: [
        {
          type: "video/mp4",
          src: "https://video.twimg.com/tweet_video/FJExDMrXMA08Unc.mp4",
        },
      ],
      videoId: {
        type: "tweet",
        id: "1482019724124950529",
      },
      viewCount: 0,
    },
    conversation_count: 57,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 2037,
    created_at: "2022-01-18T10:02:21.000Z",
    display_text_range: [0, 44],
    entities: {
      hashtags: [],
      urls: [
        {
          display_url: "twitch.tv/trashtastepodc…",
          expanded_url: "https://www.twitch.tv/trashtastepodcast",
          indices: [21, 44],
          url: "https://t.co/voqLhz2IhI",
        },
      ],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1483379222689517568",
    text: "The boys are back. \n\nhttps://t.co/voqLhz2IhI",
    user: {
      id_str: "1228527312368332800",
      name: "Trash Taste",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1250580179698642944/5oLZger-_normal.jpg",
      screen_name: "TrashTastePod",
      verified: false,
    },
    conversation_count: 25,
    news_action_type: "conversation",
    card: {
      card_platform: {
        platform: {
          audience: {
            name: "production",
          },
          device: {
            name: "Swift",
            version: "12",
          },
        },
      },
      name: "summary",
      url: "https://t.co/voqLhz2IhI",
      binding_values: {
        app_star_rating: {
          string_value: "4.73467",
          type: "STRING",
        },
        thumbnail_image: {
          image_value: {
            height: 144,
            width: 144,
            url: "https://pbs.twimg.com/card_img/1481038451239788546/UAq02udo?format=png&name=144x144_2",
          },
          type: "IMAGE",
        },
        description: {
          string_value:
            "A podcast that hits different. Hosted by Joey (@thean1meman), Garnt (@gigguk) and Connor (@cdawgva).",
          type: "STRING",
        },
        domain: {
          string_value: "www.twitch.tv",
          type: "STRING",
        },
        app_is_free: {
          string_value: "true",
          type: "STRING",
        },
        thumbnail_image_large: {
          image_value: {
            height: 300,
            width: 300,
            url: "https://pbs.twimg.com/card_img/1481038451239788546/UAq02udo?format=png&name=420x420_2",
          },
          type: "IMAGE",
        },
        thumbnail_image_original: {
          image_value: {
            height: 300,
            width: 300,
            url: "https://pbs.twimg.com/card_img/1481038451239788546/UAq02udo?format=png&name=orig",
          },
          type: "IMAGE",
        },
        site: {
          scribe_key: "publisher_id",
          type: "USER",
          user_value: {
            id_str: "309366491",
            path: [],
          },
        },
        thumbnail_image_small: {
          image_value: {
            height: 100,
            width: 100,
            url: "https://pbs.twimg.com/card_img/1481038451239788546/UAq02udo?format=png&name=100x100_2",
          },
          type: "IMAGE",
        },
        app_num_ratings: {
          string_value: "1,585,787",
          type: "STRING",
        },
        app_price_amount: {
          string_value: "0.0",
          type: "STRING",
        },
        thumbnail_image_x_large: {
          image_value: {
            height: 300,
            width: 300,
            url: "https://pbs.twimg.com/card_img/1481038451239788546/UAq02udo?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        vanity_url: {
          scribe_key: "vanity_url",
          string_value: "twitch.tv",
          type: "STRING",
        },
        app_name: {
          string_value: "Twitch: Live Game Streaming",
          type: "STRING",
        },
        thumbnail_image_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 255,
                  green: 255,
                  red: 255,
                },
                percentage: 77.62,
              },
              {
                rgb: {
                  blue: 128,
                  green: 25,
                  red: 85,
                },
                percentage: 20.61,
              },
              {
                rgb: {
                  blue: 180,
                  green: 119,
                  red: 154,
                },
                percentage: 1.77,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        title: {
          string_value: "TrashTastePodcast - Twitch",
          type: "STRING",
        },
        app_price_currency: {
          string_value: "USD",
          type: "STRING",
        },
        card_url: {
          scribe_key: "card_url",
          string_value: "https://t.co/voqLhz2IhI",
          type: "STRING",
        },
      },
    },
  },
  {
    in_reply_to_screen_name: "Twitter",
    in_reply_to_status_id_str: "1483427725499146240",
    in_reply_to_user_id_str: "783214",
    lang: "es",
    favorite_count: 93513,
    self_thread: {
      id_str: "1483427664518164485",
    },
    created_at: "2022-01-18T13:15:06.000Z",
    display_text_range: [0, 18],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/oquJcqUzkR",
          expanded_url:
            "https://twitter.com/Twitter/status/1483427731400536065/photo/1",
          indices: [18, 41],
          url: "https://t.co/oquJcqUzkR",
        },
      ],
    },
    id_str: "1483427731400536065",
    text: "📍 Los Angeles, CA https://t.co/oquJcqUzkR",
    user: {
      id_str: "783214",
      name: "Twitter",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484658488294973452/IUxxyP5m_normal.jpg",
      screen_name: "Twitter",
      verified: true,
    },
    photos: [
      {
        accessibilityLabel:
          'Image of a billboard in Los Angeles of a Tweet from Niall Horan that reads "applied for xfactor, hope it all works out" from Jan 16 2010. The Tweet is overlaid on an image of him  performing on a stage.',
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 0,
            w: 1920,
            h: 1075,
          },
          {
            x: 0,
            y: 0,
            w: 1080,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 947,
            h: 1080,
          },
          {
            x: 162,
            y: 0,
            w: 540,
            h: 1080,
          },
          {
            x: 0,
            y: 0,
            w: 1920,
            h: 1080,
          },
        ],
        expandedUrl:
          "https://twitter.com/Twitter/status/1483427731400536065/photo/1",
        url: "https://pbs.twimg.com/media/FJYviFUWUAI3kdH.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    conversation_count: 684,
    news_action_type: "conversation",
    parent: {
      in_reply_to_screen_name: "Twitter",
      in_reply_to_status_id_str: "1483427720373719046",
      in_reply_to_user_id_str: "783214",
      lang: "es",
      reply_count: 86,
      retweet_count: 1034,
      favorite_count: 13011,
      self_thread: {
        id_str: "1483427664518164485",
      },
      created_at: "2022-01-18T13:15:05.000Z",
      display_text_range: [0, 18],
      entities: {
        hashtags: [],
        urls: [],
        user_mentions: [],
        symbols: [],
        media: [
          {
            display_url: "pic.twitter.com/lqRfzPHkkQ",
            expanded_url:
              "https://twitter.com/Twitter/status/1483427725499146240/photo/1",
            indices: [18, 41],
            url: "https://t.co/lqRfzPHkkQ",
          },
        ],
      },
      id_str: "1483427725499146240",
      text: "📍 Los Angeles, CA https://t.co/lqRfzPHkkQ",
      user: {
        id_str: "783214",
        name: "Twitter",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1484658488294973452/IUxxyP5m_normal.jpg",
        screen_name: "Twitter",
        verified: true,
      },
      photos: [
        {
          accessibilityLabel:
            'Image of a billboard in Los Angeles of a Tweet from Bubba Wallace that reads "I dream of racing in the nationwide series a few times this year" from April 2014. The Tweet is overlaid on an image of him  celebrating a win. ',
          backgroundColor: {
            red: 204,
            green: 214,
            blue: 221,
          },
          cropCandidates: [
            {
              x: 0,
              y: 75,
              w: 788,
              h: 441,
            },
            {
              x: 0,
              y: 0,
              w: 630,
              h: 630,
            },
            {
              x: 0,
              y: 0,
              w: 553,
              h: 630,
            },
            {
              x: 20,
              y: 0,
              w: 315,
              h: 630,
            },
            {
              x: 0,
              y: 0,
              w: 788,
              h: 630,
            },
          ],
          expandedUrl:
            "https://twitter.com/Twitter/status/1483427725499146240/photo/1",
          url: "https://pbs.twimg.com/media/FJYvfcbXsAcuTAW.png",
          width: 788,
          height: 630,
        },
      ],
    },
  },
  {
    in_reply_to_screen_name: "Twitter",
    in_reply_to_status_id_str: "1483427731400536065",
    in_reply_to_user_id_str: "783214",
    lang: "und",
    favorite_count: 25360,
    self_thread: {
      id_str: "1483427664518164485",
    },
    created_at: "2022-01-18T13:15:10.000Z",
    display_text_range: [0, 0],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/4FoQ6qbQWn",
          expanded_url:
            "https://twitter.com/Twitter/status/1483427748500717573/video/1",
          indices: [0, 23],
          url: "https://t.co/4FoQ6qbQWn",
        },
      ],
    },
    id_str: "1483427748500717573",
    text: "https://t.co/4FoQ6qbQWn",
    user: {
      id_str: "783214",
      name: "Twitter",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484658488294973452/IUxxyP5m_normal.jpg",
      screen_name: "Twitter",
      verified: true,
    },
    photos: [],
    video: {
      aspectRatio: [16, 9],
      contentType: "media_entity",
      durationMs: 4115,
      mediaAvailability: {
        status: "available",
      },
      poster:
        "https://pbs.twimg.com/ext_tw_video_thumb/1483426943181668354/pu/img/9c9Uy9MuEhmxbgTf.jpg",
      variants: [
        {
          type: "application/x-mpegURL",
          src: "https://video.twimg.com/ext_tw_video/1483426943181668354/pu/pl/Pg2P6SJQdAN34c4D.m3u8?tag=12&container=fmp4&v=71e",
        },
        {
          type: "video/mp4",
          src: "https://video.twimg.com/ext_tw_video/1483426943181668354/pu/vid/640x360/hA1l1K8uaxIzjmUb.mp4?tag=12",
        },
        {
          type: "video/mp4",
          src: "https://video.twimg.com/ext_tw_video/1483426943181668354/pu/vid/1280x720/5dXhiQSu2RNNoXNM.mp4?tag=12",
        },
        {
          type: "video/mp4",
          src: "https://video.twimg.com/ext_tw_video/1483426943181668354/pu/vid/480x270/YFwt-pfJigxcz91I.mp4?tag=12",
        },
      ],
      videoId: {
        type: "tweet",
        id: "1483427748500717573",
      },
      viewCount: 1594643,
    },
    conversation_count: 1632,
    news_action_type: "conversation",
    parent: {
      in_reply_to_screen_name: "Twitter",
      in_reply_to_status_id_str: "1483427725499146240",
      in_reply_to_user_id_str: "783214",
      lang: "es",
      reply_count: 684,
      retweet_count: 14751,
      favorite_count: 93513,
      self_thread: {
        id_str: "1483427664518164485",
      },
      created_at: "2022-01-18T13:15:06.000Z",
      display_text_range: [0, 18],
      entities: {
        hashtags: [],
        urls: [],
        user_mentions: [],
        symbols: [],
        media: [
          {
            display_url: "pic.twitter.com/oquJcqUzkR",
            expanded_url:
              "https://twitter.com/Twitter/status/1483427731400536065/photo/1",
            indices: [18, 41],
            url: "https://t.co/oquJcqUzkR",
          },
        ],
      },
      id_str: "1483427731400536065",
      text: "📍 Los Angeles, CA https://t.co/oquJcqUzkR",
      user: {
        id_str: "783214",
        name: "Twitter",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1484658488294973452/IUxxyP5m_normal.jpg",
        screen_name: "Twitter",
        verified: true,
      },
      photos: [
        {
          accessibilityLabel:
            'Image of a billboard in Los Angeles of a Tweet from Niall Horan that reads "applied for xfactor, hope it all works out" from Jan 16 2010. The Tweet is overlaid on an image of him  performing on a stage.',
          backgroundColor: {
            red: 204,
            green: 214,
            blue: 221,
          },
          cropCandidates: [
            {
              x: 0,
              y: 0,
              w: 1920,
              h: 1075,
            },
            {
              x: 0,
              y: 0,
              w: 1080,
              h: 1080,
            },
            {
              x: 0,
              y: 0,
              w: 947,
              h: 1080,
            },
            {
              x: 162,
              y: 0,
              w: 540,
              h: 1080,
            },
            {
              x: 0,
              y: 0,
              w: 1920,
              h: 1080,
            },
          ],
          expandedUrl:
            "https://twitter.com/Twitter/status/1483427731400536065/photo/1",
          url: "https://pbs.twimg.com/media/FJYviFUWUAI3kdH.jpg",
          width: 1920,
          height: 1080,
        },
      ],
    },
  },
  {
    lang: "en",
    favorite_count: 2476,
    created_at: "2022-01-20T19:29:54.000Z",
    display_text_range: [0, 121],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1484246828619026433",
    text: "Parents                       Google\n                      🤝                                 \n           Being asked why",
    user: {
      id_str: "20536157",
      name: "Google",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_normal.jpg",
      screen_name: "Google",
      verified: true,
    },
    conversation_count: 111,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 22153,
    created_at: "2022-01-21T08:39:09.000Z",
    display_text_range: [0, 70],
    entities: {
      hashtags: [],
      urls: [
        {
          display_url: "twitter.com/TwitterBlue/st…",
          expanded_url:
            "https://twitter.com/TwitterBlue/status/1484226494708662273",
          indices: [71, 94],
          url: "https://t.co/MQp9dWDiCi",
        },
      ],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1484445449348333568",
    text: "Thank god I can tell someone to fuck off without reading their tweets. https://t.co/MQp9dWDiCi",
    user: {
      id_str: "43596071",
      name: "Connor",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1233738924058542081/Nxz2uAIb_normal.jpg",
      screen_name: "CDawgVA",
      verified: true,
    },
    conversation_count: 100,
    news_action_type: "conversation",
    quoted_tweet: {
      lang: "en",
      reply_count: 8916,
      retweet_count: 10543,
      favorite_count: 30086,
      self_thread: {
        id_str: "1484226494708662273",
      },
      created_at: "2022-01-20T18:09:06.000Z",
      display_text_range: [0, 92],
      entities: {
        hashtags: [],
        urls: [],
        user_mentions: [],
        symbols: [],
        media: [
          {
            display_url: "pic.twitter.com/HFyspS4cQW",
            expanded_url:
              "https://twitter.com/TwitterBlue/status/1484226494708662273/video/1",
            indices: [93, 116],
            url: "https://t.co/HFyspS4cQW",
          },
        ],
      },
      id_str: "1484226494708662273",
      text: "gm! \n\nYou asked (a lot), so we made it. Now rolling out in Labs: NFT Profile Pictures on iOS https://t.co/HFyspS4cQW",
      user: {
        id_str: "1399766153053061121",
        name: "Twitter Blue",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1484226604104486912/dW26JJSc_normal.jpg",
        screen_name: "TwitterBlue",
        verified: true,
      },
      photos: [],
      video: {
        aspectRatio: [16, 9],
        contentType: "media_entity",
        durationMs: 56514,
        mediaAvailability: {
          status: "available",
        },
        poster:
          "https://pbs.twimg.com/ext_tw_video_thumb/1484225773611352064/pu/img/2lLPknpoYh8OCHIO.jpg",
        variants: [
          {
            type: "application/x-mpegURL",
            src: "https://video.twimg.com/ext_tw_video/1484225773611352064/pu/pl/lZji6eirJfOGlY_-.m3u8?tag=12&container=fmp4&v=e82",
          },
          {
            type: "video/mp4",
            src: "https://video.twimg.com/ext_tw_video/1484225773611352064/pu/vid/640x360/0sf-B29fFkMuiAWP.mp4?tag=12",
          },
          {
            type: "video/mp4",
            src: "https://video.twimg.com/ext_tw_video/1484225773611352064/pu/vid/480x270/qnGBWnX4zoBSe-a9.mp4?tag=12",
          },
          {
            type: "video/mp4",
            src: "https://video.twimg.com/ext_tw_video/1484225773611352064/pu/vid/1280x720/MSj-WC8MDM-JWRlC.mp4?tag=12",
          },
        ],
        videoId: {
          type: "tweet",
          id: "1484226494708662273",
        },
        viewCount: 8194577,
      },
    },
  },
  {
    lang: "en",
    favorite_count: 94,
    created_at: "2022-01-21T16:55:03.000Z",
    display_text_range: [0, 67],
    entities: {
      hashtags: [
        {
          indices: [52, 67],
          text: "CloudflareChat",
        },
      ],
      urls: [
        {
          display_url: "speed.cloudflare.com",
          expanded_url: "https://speed.cloudflare.com/",
          indices: [28, 51],
          url: "https://t.co/ApXbuzLVYU",
        },
      ],
      user_mentions: [],
      symbols: [],
    },
    id_str: "1484570245096476675",
    text: "What’s your Internet speed? https://t.co/ApXbuzLVYU #CloudflareChat",
    user: {
      id_str: "32499999",
      name: "Cloudflare",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1313131647315910666/opulcRqc_normal.jpg",
      screen_name: "Cloudflare",
      verified: true,
    },
    conversation_count: 12,
    news_action_type: "conversation",
    card: {
      card_platform: {
        platform: {
          audience: {
            name: "production",
          },
          device: {
            name: "Swift",
            version: "12",
          },
        },
      },
      name: "summary_large_image",
      url: "https://t.co/ApXbuzLVYU",
      binding_values: {
        photo_image_full_size_large: {
          image_value: {
            height: 419,
            width: 800,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=800x419",
          },
          type: "IMAGE",
        },
        thumbnail_image: {
          image_value: {
            height: 150,
            width: 260,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=280x150",
          },
          type: "IMAGE",
        },
        description: {
          string_value:
            "Test your Internet connection. Check your network performance with our Internet speed test. Powered by Cloudflare's global edge network.",
          type: "STRING",
        },
        domain: {
          string_value: "speed.cloudflare.com",
          type: "STRING",
        },
        thumbnail_image_large: {
          image_value: {
            height: 320,
            width: 555,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=800x320_1",
          },
          type: "IMAGE",
        },
        summary_photo_image_small: {
          image_value: {
            height: 202,
            width: 386,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=386x202",
          },
          type: "IMAGE",
        },
        thumbnail_image_original: {
          image_value: {
            height: 1322,
            width: 2294,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=orig",
          },
          type: "IMAGE",
        },
        site: {
          scribe_key: "publisher_id",
          type: "USER",
          user_value: {
            id_str: "32499999",
            path: [],
          },
        },
        photo_image_full_size_small: {
          image_value: {
            height: 202,
            width: 386,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=386x202",
          },
          type: "IMAGE",
        },
        summary_photo_image_large: {
          image_value: {
            height: 419,
            width: 800,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=800x419",
          },
          type: "IMAGE",
        },
        thumbnail_image_small: {
          image_value: {
            height: 58,
            width: 100,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=100x100",
          },
          type: "IMAGE",
        },
        thumbnail_image_x_large: {
          image_value: {
            height: 1180,
            width: 2048,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        photo_image_full_size_original: {
          image_value: {
            height: 1322,
            width: 2294,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=orig",
          },
          type: "IMAGE",
        },
        vanity_url: {
          scribe_key: "vanity_url",
          string_value: "speed.cloudflare.com",
          type: "STRING",
        },
        photo_image_full_size: {
          image_value: {
            height: 314,
            width: 600,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=600x314",
          },
          type: "IMAGE",
        },
        thumbnail_image_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 255,
                  green: 255,
                  red: 255,
                },
                percentage: 85.26,
              },
              {
                rgb: {
                  blue: 39,
                  green: 138,
                  red: 243,
                },
                percentage: 8.66,
              },
              {
                rgb: {
                  blue: 151,
                  green: 197,
                  red: 249,
                },
                percentage: 3.15,
              },
              {
                rgb: {
                  blue: 51,
                  green: 171,
                  red: 240,
                },
                percentage: 1.74,
              },
              {
                rgb: {
                  blue: 235,
                  green: 220,
                  red: 211,
                },
                percentage: 0.64,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        title: {
          string_value:
            "Internet Speed Test - Measure Network Performance | Cloudflare",
          type: "STRING",
        },
        summary_photo_image_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 255,
                  green: 255,
                  red: 255,
                },
                percentage: 85.26,
              },
              {
                rgb: {
                  blue: 39,
                  green: 138,
                  red: 243,
                },
                percentage: 8.66,
              },
              {
                rgb: {
                  blue: 151,
                  green: 197,
                  red: 249,
                },
                percentage: 3.15,
              },
              {
                rgb: {
                  blue: 51,
                  green: 171,
                  red: 240,
                },
                percentage: 1.74,
              },
              {
                rgb: {
                  blue: 235,
                  green: 220,
                  red: 211,
                },
                percentage: 0.64,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        summary_photo_image_x_large: {
          image_value: {
            height: 1180,
            width: 2048,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        summary_photo_image: {
          image_value: {
            height: 314,
            width: 600,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=600x314",
          },
          type: "IMAGE",
        },
        photo_image_full_size_color: {
          image_color_value: {
            palette: [
              {
                rgb: {
                  blue: 255,
                  green: 255,
                  red: 255,
                },
                percentage: 85.26,
              },
              {
                rgb: {
                  blue: 39,
                  green: 138,
                  red: 243,
                },
                percentage: 8.66,
              },
              {
                rgb: {
                  blue: 151,
                  green: 197,
                  red: 249,
                },
                percentage: 3.15,
              },
              {
                rgb: {
                  blue: 51,
                  green: 171,
                  red: 240,
                },
                percentage: 1.74,
              },
              {
                rgb: {
                  blue: 235,
                  green: 220,
                  red: 211,
                },
                percentage: 0.64,
              },
            ],
          },
          type: "IMAGE_COLOR",
        },
        photo_image_full_size_x_large: {
          image_value: {
            height: 1180,
            width: 2048,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=png&name=2048x2048_2_exp",
          },
          type: "IMAGE",
        },
        card_url: {
          scribe_key: "card_url",
          string_value: "https://t.co/ApXbuzLVYU",
          type: "STRING",
        },
        summary_photo_image_original: {
          image_value: {
            height: 1322,
            width: 2294,
            url: "https://pbs.twimg.com/card_img/1485180114103316482/ZPP9t99O?format=jpg&name=orig",
          },
          type: "IMAGE",
        },
      },
    },
  },
  {
    lang: "und",
    favorite_count: 85785,
    created_at: "2022-01-21T23:43:00.000Z",
    display_text_range: [0, 0],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/CunQMShswG",
          expanded_url:
            "https://twitter.com/CraigWeekend/status/1484672909759111169/video/1",
          indices: [0, 23],
          url: "https://t.co/CunQMShswG",
        },
      ],
    },
    id_str: "1484672909759111169",
    text: "https://t.co/CunQMShswG",
    user: {
      id_str: "1288226864457084928",
      name: "ladies and gentlemen, the weekend 😌",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1288228561359237121/f2V_Q8-U_normal.jpg",
      screen_name: "CraigWeekend",
      verified: false,
    },
    photos: [],
    video: {
      aspectRatio: [16, 9],
      contentType: "media_entity",
      durationMs: 4040,
      mediaAvailability: {
        status: "available",
      },
      poster:
        "https://pbs.twimg.com/ext_tw_video_thumb/1484620588219965441/pu/img/Ysvf8mlh7QpHLdIY.jpg",
      variants: [
        {
          type: "video/mp4",
          src: "https://video.twimg.com/ext_tw_video/1484620588219965441/pu/vid/1280x720/ix-cRh3dwA0OK5R_.mp4?tag=12",
        },
        {
          type: "video/mp4",
          src: "https://video.twimg.com/ext_tw_video/1484620588219965441/pu/vid/640x360/aYU-mF_jY4ijey7b.mp4?tag=12",
        },
        {
          type: "application/x-mpegURL",
          src: "https://video.twimg.com/ext_tw_video/1484620588219965441/pu/pl/FUwmyNk1xbe2dNLc.m3u8?tag=12",
        },
        {
          type: "video/mp4",
          src: "https://video.twimg.com/ext_tw_video/1484620588219965441/pu/vid/480x270/LTNcDlhCYBn3EpdN.mp4?tag=12",
        },
      ],
      videoId: {
        type: "tweet",
        id: "1484672909759111169",
      },
      viewCount: 1322230,
    },
    conversation_count: 289,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 352,
    created_at: "2022-01-22T17:00:00.000Z",
    display_text_range: [0, 143],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [
        {
          indices: [9, 14],
          text: "ATVI",
        },
        {
          indices: [34, 39],
          text: "MSFT",
        },
      ],
    },
    id_str: "1484933882180943878",
    text: "When the $ATVI deal goes through, $MSFT will own the Call of Duty, World of Warcraft, Candy Crush, StarCraft, Overwatch &amp; Diablo franchises",
    user: {
      id_str: "817007725666242561",
      name: "Market Rebellion",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1341148213957550080/9-iJlrt-_normal.jpg",
      screen_name: "MarketRebels",
      verified: true,
    },
    conversation_count: 30,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 20,
    created_at: "2022-01-22T19:30:10.000Z",
    display_text_range: [0, 34],
    entities: {
      hashtags: [],
      urls: [
        {
          display_url: "twitter.com/TwitterBlue/st…",
          expanded_url:
            "https://twitter.com/TwitterBlue/status/1484226494708662273",
          indices: [11, 34],
          url: "https://t.co/oVNlePhd0g",
        },
      ],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/HTEoldtaT5",
          expanded_url:
            "https://twitter.com/tripleafrog/status/1484971670565752835/photo/1",
          indices: [35, 58],
          url: "https://t.co/HTEoldtaT5",
        },
      ],
    },
    id_str: "1484971670565752835",
    text: "woman 3450 https://t.co/oVNlePhd0g https://t.co/HTEoldtaT5",
    user: {
      id_str: "3378788015",
      name: "Jonas Q",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1445963228161396737/78HvSs1j_normal.png",
      screen_name: "tripleafrog",
      verified: false,
    },
    photos: [
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 276,
            w: 613,
            h: 343,
          },
          {
            x: 0,
            y: 6,
            w: 613,
            h: 613,
          },
          {
            x: 0,
            y: 0,
            w: 543,
            h: 619,
          },
          {
            x: 46,
            y: 0,
            w: 310,
            h: 619,
          },
          {
            x: 0,
            y: 0,
            w: 613,
            h: 619,
          },
        ],
        expandedUrl:
          "https://twitter.com/tripleafrog/status/1484971670565752835/photo/1",
        url: "https://pbs.twimg.com/media/FJut2O_XMAMiuYO.png",
        width: 613,
        height: 619,
      },
    ],
    conversation_count: 2,
    news_action_type: "conversation",
    quoted_tweet: {
      lang: "en",
      reply_count: 8916,
      retweet_count: 10543,
      favorite_count: 30086,
      self_thread: {
        id_str: "1484226494708662273",
      },
      created_at: "2022-01-20T18:09:06.000Z",
      display_text_range: [0, 92],
      entities: {
        hashtags: [],
        urls: [],
        user_mentions: [],
        symbols: [],
        media: [
          {
            display_url: "pic.twitter.com/HFyspS4cQW",
            expanded_url:
              "https://twitter.com/TwitterBlue/status/1484226494708662273/video/1",
            indices: [93, 116],
            url: "https://t.co/HFyspS4cQW",
          },
        ],
      },
      id_str: "1484226494708662273",
      text: "gm! \n\nYou asked (a lot), so we made it. Now rolling out in Labs: NFT Profile Pictures on iOS https://t.co/HFyspS4cQW",
      user: {
        id_str: "1399766153053061121",
        name: "Twitter Blue",
        profile_image_url_https:
          "https://pbs.twimg.com/profile_images/1484226604104486912/dW26JJSc_normal.jpg",
        screen_name: "TwitterBlue",
        verified: true,
      },
      photos: [],
      video: {
        aspectRatio: [16, 9],
        contentType: "media_entity",
        durationMs: 56514,
        mediaAvailability: {
          status: "available",
        },
        poster:
          "https://pbs.twimg.com/ext_tw_video_thumb/1484225773611352064/pu/img/2lLPknpoYh8OCHIO.jpg",
        variants: [
          {
            type: "application/x-mpegURL",
            src: "https://video.twimg.com/ext_tw_video/1484225773611352064/pu/pl/lZji6eirJfOGlY_-.m3u8?tag=12&container=fmp4&v=e82",
          },
          {
            type: "video/mp4",
            src: "https://video.twimg.com/ext_tw_video/1484225773611352064/pu/vid/640x360/0sf-B29fFkMuiAWP.mp4?tag=12",
          },
          {
            type: "video/mp4",
            src: "https://video.twimg.com/ext_tw_video/1484225773611352064/pu/vid/480x270/qnGBWnX4zoBSe-a9.mp4?tag=12",
          },
          {
            type: "video/mp4",
            src: "https://video.twimg.com/ext_tw_video/1484225773611352064/pu/vid/1280x720/MSj-WC8MDM-JWRlC.mp4?tag=12",
          },
        ],
        videoId: {
          type: "tweet",
          id: "1484226494708662273",
        },
        viewCount: 8194462,
      },
    },
  },
  {
    lang: "en",
    favorite_count: 7390,
    created_at: "2022-01-22T20:16:02.000Z",
    display_text_range: [0, 58],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [
        {
          id_str: "783214",
          indices: [22, 30],
          name: "Twitter",
          screen_name: "Twitter",
        },
      ],
      symbols: [],
    },
    id_str: "1484983213105852418",
    text: '"Feds" is trending on @Twitter because the FBI is corrupt.',
    user: {
      id_str: "18266688",
      name: "Tom Fitton",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/964235516794171392/ktAX5u2i_normal.jpg",
      screen_name: "TomFitton",
      verified: true,
    },
    conversation_count: 150,
    news_action_type: "conversation",
  },
  {
    lang: "in",
    favorite_count: 9591,
    self_thread: {
      id_str: "1485285067492630530",
    },
    created_at: "2022-01-23T16:15:30.000Z",
    display_text_range: [0, 13],
    entities: {
      hashtags: [],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/kuu4cxn9C6",
          expanded_url:
            "https://twitter.com/jxpann/status/1485285067492630530/photo/1",
          indices: [14, 37],
          url: "https://t.co/kuu4cxn9C6",
        },
      ],
    },
    id_str: "1485285067492630530",
    text: "Sakura Season https://t.co/kuu4cxn9C6",
    user: {
      id_str: "1105945817309954055",
      name: "Japan 🌸",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1484503439803625473/3m0BanQ6_normal.jpg",
      screen_name: "jxpann",
      verified: false,
    },
    photos: [
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 1131,
            w: 1638,
            h: 917,
          },
          {
            x: 0,
            y: 410,
            w: 1638,
            h: 1638,
          },
          {
            x: 0,
            y: 181,
            w: 1638,
            h: 1867,
          },
          {
            x: 153,
            y: 0,
            w: 1024,
            h: 2048,
          },
          {
            x: 0,
            y: 0,
            w: 1638,
            h: 2048,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1485285067492630530/photo/1",
        url: "https://pbs.twimg.com/media/FJzK40LWQAwXOlI.jpg",
        width: 1638,
        height: 2048,
      },
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 386,
            w: 1366,
            h: 765,
          },
          {
            x: 0,
            y: 85,
            w: 1366,
            h: 1366,
          },
          {
            x: 0,
            y: 0,
            w: 1366,
            h: 1557,
          },
          {
            x: 342,
            y: 0,
            w: 1024,
            h: 2048,
          },
          {
            x: 0,
            y: 0,
            w: 1366,
            h: 2048,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1485285067492630530/photo/1",
        url: "https://pbs.twimg.com/media/FJzK40QXsAAAZgC.jpg",
        width: 1366,
        height: 2048,
      },
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 219,
            w: 2048,
            h: 1147,
          },
          {
            x: 289,
            y: 0,
            w: 1366,
            h: 1366,
          },
          {
            x: 373,
            y: 0,
            w: 1198,
            h: 1366,
          },
          {
            x: 631,
            y: 0,
            w: 683,
            h: 1366,
          },
          {
            x: 0,
            y: 0,
            w: 2048,
            h: 1366,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1485285067492630530/photo/1",
        url: "https://pbs.twimg.com/media/FJzK40LXIAArZlQ.jpg",
        width: 2048,
        height: 1366,
      },
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 0,
            y: 0,
            w: 1227,
            h: 687,
          },
          {
            x: 130,
            y: 0,
            w: 783,
            h: 783,
          },
          {
            x: 178,
            y: 0,
            w: 687,
            h: 783,
          },
          {
            x: 325,
            y: 0,
            w: 392,
            h: 783,
          },
          {
            x: 0,
            y: 0,
            w: 1227,
            h: 783,
          },
        ],
        expandedUrl:
          "https://twitter.com/jxpann/status/1485285067492630530/photo/1",
        url: "https://pbs.twimg.com/media/FJzK40LXoAI2vCr.jpg",
        width: 1227,
        height: 783,
      },
    ],
    conversation_count: 14,
    news_action_type: "conversation",
  },
  {
    lang: "en",
    favorite_count: 630,
    created_at: "2022-01-23T19:01:25.000Z",
    display_text_range: [0, 118],
    entities: {
      hashtags: [
        {
          indices: [109, 118],
          text: "shingeki",
        },
      ],
      urls: [],
      user_mentions: [],
      symbols: [],
      media: [
        {
          display_url: "pic.twitter.com/Ct2LONsj94",
          expanded_url:
            "https://twitter.com/donttakeabreak/status/1485326823139725312/photo/1",
          indices: [119, 142],
          url: "https://t.co/Ct2LONsj94",
        },
      ],
    },
    id_str: "1485326823139725312",
    text: "MAPPA goat for adding an anime additional shot of Yelena just chilling in the background of absolute chaos. \n#shingeki https://t.co/Ct2LONsj94",
    user: {
      id_str: "746271386973442048",
      name: "Neil 🕸 (not etwas)",
      profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1480592916250697730/j3jPIqFM_normal.jpg",
      screen_name: "donttakeabreak",
      verified: false,
    },
    photos: [
      {
        backgroundColor: {
          red: 204,
          green: 214,
          blue: 221,
        },
        cropCandidates: [
          {
            x: 73,
            y: 0,
            w: 1513,
            h: 847,
          },
          {
            x: 406,
            y: 0,
            w: 847,
            h: 847,
          },
          {
            x: 458,
            y: 0,
            w: 743,
            h: 847,
          },
          {
            x: 617,
            y: 0,
            w: 424,
            h: 847,
          },
          {
            x: 0,
            y: 0,
            w: 1659,
            h: 847,
          },
        ],
        expandedUrl:
          "https://twitter.com/donttakeabreak/status/1485326823139725312/photo/1",
        url: "https://pbs.twimg.com/media/FJzwWYpaUAEzrlT.jpg",
        width: 1659,
        height: 847,
      },
    ],
    conversation_count: 3,
    news_action_type: "conversation",
  },
];
