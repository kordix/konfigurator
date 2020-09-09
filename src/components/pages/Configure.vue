<template>
    <div class="container getheight pt-3">
        <div class="row">
            <div class="col">
                <stepper></stepper>
            </div>
        </div>
        <div class="row" style="height:100%; background:white">
            <div :class="{'col-8': summary, 'col-12': !summary}">
                <transition :name="$root.transition" mode="out-in">
                    <component v-bind:is="view"></component>
                </transition>
            </div>
            <div :class="{'col-4': summary}" v-if="summary">
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
export default {
    components:{stepper, systems, composition, glazing, color, accessories, total, sidesummary, size, grilles},
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