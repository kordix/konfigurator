<template>
    <div class="container-fluid getheight pt-3">
        <div class="row">
            <div class="col">
                <stepper></stepper>
            </div>
        </div>
        <div class="row" style="height:100%;">
            <div class="col-2 pa-0" id="filters" style="padding:0">
                <filters></filters>

            </div>
            <div class="col-7" id="main-content" style="background:white; padding:0 1px">
                <transition :name="$root.transition" mode="out-in">
                    <component v-bind:is="view"></component>
                </transition>
            </div>
            <div class="col-3" id="side-summary" style="padding:0">
                <sidesummary></sidesummary>
            </div>
        </div>
    </div>
</template>
<script>
import stepper from '../elements/Stepper'
import systems from '../panels/Systems'
import composition from '../panels/Composition'
import glazing from '../panels/Glazing'
import color from '../panels/Color'
import grilles from '../panels/Grilles'
import accessories from '../panels/Accessories'
import total from '../panels/Summary'
import sidesummary from '../panels/Sidesummary'
import size from '../panels/Size'
import filters from '../elements/Filters'
export default {
    components:{stepper, systems, composition, glazing, color, accessories, total, sidesummary, size, grilles, filters},
    data(){
        return {

        }
    },
    computed:{
        summary(){
            if(this.$root.activepanel == 3){
                return false
            } else {
                return true
            }
        },
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
                return 'grilles';
                break;
            case 7:
                return 'accessories';
                break;
            case 8:
                return 'total';
                break;
            default:
                return 'systems'
            }
        }
    },
    mounted(){
        $(document).ready(function(){
        $("#modalCenter").modal('show');
    });
    }
}
</script>
<style scoped>

</style>