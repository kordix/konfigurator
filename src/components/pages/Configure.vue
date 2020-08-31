<template>
<div class="container getheight pt-3">

    <div class="row">
        <div class="col">
            <stepper></stepper>
        </div>
    </div>
    <div class="row" style="height:100%; background:white">
        <div class="col-7">
            <transition :name="$root.transition" mode="out-in">
                <component v-bind:is="view"></component>
            </transition>
        </div>
        <div class="col-5">
            <sidesummary></sidesummary>
        </div>
    </div>
</div>
</template>
<script>
import stepper from '../elements/Stepper'
import systems from '../pages/Systems'
import composition from '../pages/Composition'
import glazing from '../pages/Glazing'
import color from '../pages/Color'
import accessories from '../pages/Accessories'
import total from '../pages/Summary'
import sidesummary from '../pages/Sidesummary'
import size from '../pages/Size'
export default {
    components:{stepper, systems, composition, glazing, color, accessories, total, sidesummary, size},
    data(){
        return {

        }
    },
    computed:{
        view(){
            switch (this.$root.activepanel) {
            case 1:
                return 'systems';
                break;
            case 2:
                return 'composition';
                break;
            case 3:
                return 'size';
                break;
            case 4:
                return 'glazing';
                break;
            case 5:
                return 'color';
                break;
            case 6:
                return 'accessories';
                break;
            case 7:
                return 'total';
                break;
            default:
                return 'systems'
            }
        }
    }
}
</script>
<style scoped>

</style>