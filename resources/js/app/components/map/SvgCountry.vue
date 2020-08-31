<template>
  <path
    :id="location.id"
    :name="location.name"
    :d="location.path"
    :aria-label="location.name"
    class="svg-country"
    :class="pClass"
    v-on:click="visited"
    v-on:mouseover="over"
    v-on:mouseleave="leave"
  ></path>
</template>

<script>
import { mapGetters } from "vuex";

const countryColors = {
  visited: "country-visited",
  over: "country-on-over",
  overVisited: "country-on-over-visited",
  withoutAction: "country-without-action",
};

export default {
  props: ["location"],
  computed: {
    ...mapGetters({
      actions: "user/actions",
    }),
  },
  watch: {
    actions(actions) {
      let self = this;
      let a = actions.find(function (action) {
        if (typeof action[self.location.id] != "undefined") {
          self.pClass = countryColors.visited;
          self.isVisited = true;
          return true;
        }
      });
    },
  },
  methods: {
    visited() {
      this.pClass = countryColors.visited;
      this.isVisited = true;
      axios
        .post("/api/user/action", {
          country: {
            short_name: this.location.id,
            name: this.location.name,
          },
          action: "visited",
        })
        .then((response) => console.log(response))
        .catch((response) => {
          this.visited = false;
          alert("server error");
        });
    },
    over() {
      if (this.isVisited) this.pClass = countryColors.overVisited;
      else this.pClass = countryColors.over;
    },
    leave() {
      if (this.isVisited) this.pClass = countryColors.visited;
      else this.pClass = countryColors.withoutAction;
    },
  },
  data() {
    return {
      isVisited: false,
      pClass: countryColors.withoutAction,
    };
  },
};
</script>