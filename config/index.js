module.exports = {
  //-- SITE SETTINGS -----
  author: "@konstantinmuenster",
  siteTitle: "Portfólio Patrick Vasconcelos",
  siteShortTitle: "PV", // Used as logo text in header, footer, and splash screen
  siteDescription: "Portfólio de ciência e análise de dados.",
  siteUrl: "https://patrickvasconcelos.com/",
  siteLanguage: "pt_BR",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Portfolio Patrick Vasconcelos", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  useCookieBar: true, // If you use Google Analytics and want to be GDPR-compliant, set it to true
  googleAnalyticsTrackingId: "", // e.g. UA-XXXXXX-X

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#FFF4D9",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#C25E00",
      tertiary: "#CC7E00",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#070D1C",
      card: "#0c1630",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(7, 13, 28, 0.16)",
      boxShadowHover: "rgba(7, 13, 28, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40patrickvasconcelos",
  // rssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.theguardian.com%2Finternational%2Frss",

  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
  socialMedia: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/patrickvasconcelos/",
    },
    {
      name: "Medium",
      url: "https://patrickvasconcelos.medium.com/",
    },
    {
      name: "Github",
      url: "https://github.com/patrickvasconcelos",
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/patrickvs",
    },
    // {
    //   name: "Mail",
    //   url: "mailto:mail@konstantin.digital",
    // },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Quem Sou",
        url: "/#about",
      },
      {
        name: "Projetos",
        url: "/#projects",
      },
      {
        name: "Contato",
        url: "/#contact",
      },
    ],
    button: {
      useFileName: true,
      name: "Resume",
      fileName: "resume.pdf", // the file has to be placed inside the static folder at the root level
      url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
    },
  },
  footerLinks: [
    {
      name: "Privacidade",
      url: "/privacy",
    },
    // {
    //   name: "Imprint",
    //   url: "/imprint",
    // },
  ],
}
