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
    >
    </path>
</template>

<script>
const countryColors = {
    visited: 'country-visited',
    over: 'country-on-over',
    overVisited: 'country-on-over-visited',
    withoutAction: 'country-without-action'
}

export default {
    props: ['location'],
    methods: {
        visited(){
            this.pClass = countryColors.visited
            this.isVisited = true
        },
        over(){
            if (this.isVisited)  this.pClass = countryColors.overVisited
            else this.pClass = countryColors.over
        },
        leave(){
            if(this.isVisited)  this.pClass = countryColors.visited
            else this.pClass = countryColors.withoutAction
        },
    },
    data(){
        return {
            isVisited: false,
            pClass: countryColors.withoutAction
        }
    }
}
</script>