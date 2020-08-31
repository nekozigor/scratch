<template>
    <div class="container">
        <svg-container :map="World"></svg-container>
    </div>
</template>

<script>
import World from "@svg-maps/world";
import SvgContainer from "../components/map/SvgContainer";

export default {
    components: {SvgContainer},
    data(){
        return {World}
    }
}
</script>