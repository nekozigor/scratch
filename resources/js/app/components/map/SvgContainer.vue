<template>
    <svg
        :viewBox="map.viewBox"
        xmlns="http://www.w3.org/2000/svg"
        :aria-label="map.label"
    >
        <svg-country
            v-for="(location) in map.locations" :key="location.id"
            :location="location"
        >
        </svg-country>
    </svg>
</template>

<script>
import SvgCountry from "./SvgCountry"

export default {
    components: {SvgCountry},
    props: ['map']
}
</script>