new Vue({
  el:"#app",

  data: {
    teams: {
      away: "New York Mets",
      home: "Washington Nationals"
    },
    game: {
      inning:0,
      part:'To Begin',
      outs:0,
      strikes:0,
      balls:0
    },
    score: {
      home: {
        runs:0,
        hits:0,
        errors:0,
        lob:0
      },
      away: {
        runs:0,
        hits:0,
        errors:0,
        lob:0
      }
    },
    bases: {
      first_base:false,
      second_base:false,
      third_base:false,
      home:false,
      homerun:false
    }
  },
  methods: {
    homeRun: function() {
        this.bases.first_base = true;
        this.bases.second_base = true;
        this.bases.third_base = true;
        this.bases.home = true;
    },

    clearBases: function() {
      this.bases.first_base = false;
      this.bases.second_base = false;
      this.bases.third_base = false;
      this.bases.home = false;
    },


    firstBase: function() {
      if(this.bases.first_base == true) {
        this.bases.first_base = false;
      }
      else {
        this.bases.first_base = true;
      }
    },
    secondBase: function() {
      if(this.bases.second_base == true) {
        this.bases.second_base = false;
      }
      else {
        this.bases.second_base = true;
      }
    },
    thirdBase: function() {
      if(this.bases.third_base == true) {
        this.bases.third_base = false;
      }
      else {
        this.bases.third_base = true;
      }
    }
  }
});
