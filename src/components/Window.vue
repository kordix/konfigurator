<template>
<div>
<svg :width="width" :height="height">
    <g transform="translate(0,0)">
        <g>
            <rect :width="width" :height="height" fill="#ffffff" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect>
            <rect :transform="'translate('+OFthickness/2+','+OFthickness/2+')'"  :width="width-OFthickness" :height="height-OFthickness" fill="#ffffff" stroke="#000000" style="fill-opacity: 1; stroke-width: 0.6;"></rect>
        </g>
        <g>
            <!-- <rect :width="20" :height="height-40" transform="translate(190,20)" fill="#ffffff" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect> -->
        </g>
        <!-- <sash v-for="el in sashes" :transform="'translate('+el.x+','+el.y+')'" :width="el.width" :height="el.height" :sashDiff="sashDiff" :sashThickness="sashThickness"></sash> -->
        <sash :transform="'translate('+sash1.x+','+sash1.y+')'" :width="sash1.width" :height="sash1.height" :sashDiff="sashDiff" :sashThickness="sashThickness"></sash>
        <sash :transform="'translate('+sash2.x+','+sash2.y+')'" :width="sash2.width" :height="sash2.height" :sashDiff="sashDiff" :sashThickness="sashThickness"></sash>


    </g>
</svg>
<br>
<button @click="calculateWindow()">oblicz</button>

</div>
</template>



<script>
import Sash from './Sash.vue'
export default {
    components:{Sash},
    data() {
        return {
            y: 50,
            height: 300,
            width: 400,
            OFthickness:40,
            transomThickness:10,
            sashDiff: 10,
            sash1:{x:10,y:10, width:200,height:280, thickness:30},
            sash2: {x:0,y:10, width:185,height:280, thickness:30},
            sashThickness: 30
        }
    },
    methods:{
        calculateWindow(){
            this.sash2.x = this.sash1.x + this.sash1.width;
        }
    },
    mounted(){
        this.calculateWindow()
    }

}

</script>
