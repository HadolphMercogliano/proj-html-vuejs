const myApp = Vue.createApp({
  data() {
    return {
      links: [
        {
          text: "",
          img: "",
        },
        {
          text: "",
          img: "",
        },
        {
          text: "",
          img: "",
        },
        {
          text: "",
          img: "",
        },
        {
          text: "",
          img: "",
        },
        {
          text: "",
          img: "",
        },
        {
          text: "",
          img: "",
        },
        {
          text: "",
          img: "",
        },
      ],
      image: "",
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
