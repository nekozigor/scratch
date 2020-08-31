<template>
  <svg :viewBox="map.viewBox" xmlns="http://www.w3.org/2000/svg" :aria-label="map.label">
    <svg-country v-for="(location) in map.locations" :key="location.id" :location="location" />
  </svg>
</template>

<script>
import { mapActions } from "vuex";
import SvgCountry from "./SvgCountry";

export default {
  components: { SvgCountry },
  props: ["map"],
  methods: {
    ...mapActions({
      getActions: "user/getActions",
    }),
  },
  mounted() {
    this.getActions().then((response) => {
      if (response.status != 200) {
        console.log("error");
      }
    });
  },
};
</script>