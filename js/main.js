const myApp = Vue.createApp({
  data() {
    return {
      links: [
        {
          text: "HOME",
          img: "",
          logo: true,
          logoPath: "./img/svg/svg-0.svg",
          href: "#root",
        },
        {
          text: "PAGES",
          img: "",
          logo: false,
          href: "#",
        },
        {
          text: "MENU'",
          img: "",
          logo: false,
          href: "#menu",
        },
        {
          logoPath: "./img/h5-logo-divided-header.png",
          logoDivider: true,
          href: "#root",
        },
        {
          text: "EVENT",
          img: "",
          logo: false,
          href: "#events",
        },
        {
          text: "BLOG",
          img: "",
          logo: false,
          href: "#",
        },
        {
          text: "LANDING",
          img: "",
          logo: false,
          margin: "separator",
          href: "#",
        },
        // {
        //   text: "CART",
        //   logoPath: "./img/svg/svg-1.svg",
        //   logo: true,
        // },
        // {
        //   text: "SEARCH",
        //   img: "",
        //   logo: true,
        // },
      ],

      restaurants: [
        {
          road: "1614 E. Bell Rd #104",
          city: "Salerno, AZ 85022",
          telephone: "(602)867-1010",
        },
        {
          road: "204 Piazzetta Tommaso",
          city: "Sorrento, AZ 85022",
          telephone: "(358)867-1010",
        },
        {
          road: "Viale Puglia 54",
          city: "Torre Del Greco, AZ 85022",
          telephone: "(359)867-1010",
        },
        {
          road: "Corso Italia AA",
          city: "Naples, AZ 85022 ",
          telephone: "(989)867-1010",
        },
      ],
      message:
        "THE DON PEPPE CREW FIRST AND FOREMOST VALUES AN AUTHENTIC, WELL BAKED SLICE OF PIZZA.",
    };
  },
});
myApp.mount("#root");
