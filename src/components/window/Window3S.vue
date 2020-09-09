<template>
<div>
<div>
    <label for="">Wysokość</label>
    <input v-model="height" type="number" step="50" min="300">
        <label for="">Szerokość</label>
    <input v-model="width" type="number" step="50" min="300">
    <!-- <label for="">Grubość słupka</label> -->
    <!-- <input v-model="transomThickness" type="number" step="1"> -->

    <p></p>
    <button @click="unproportionalSashes = !unproportionalSashes" style="margin:5px"> nieproporcjonalne skrzydła</button>
    <div v-if="unproportionalSashes" style="margin-top:20px;margin-bottom:20px">
        <label for="">Szerokość pierwszego skrzydła</label>
        <input type="number" v-model="sash1WidthManual" step="50" >

    </div>
</div>

<svg :width="parseInt(width)+200" :height="parseInt(height)+100">
    <g id="wymiargorny">
        <GrotL :x="0" :y="20"></GrotL>
        <GrotP :x="width" :y="20"></GrotP>
        <text :x="width/2-10" y="15">{{width}}</text>
        <line id="pozioma" x1="0" y1="25" :x2="width" y2="25" stroke="#000000" style="stroke-width: .3;"> </line>  
        <line id="lewa" :x1="width" y1="20" :x2="width" y2="50" stroke="#000000" style="stroke-width: .3;"> </line> 
        <line id="prawa" x1="0" y1="20" x2="0" y2="50" stroke="#000000" style="stroke-width: .3;"> </line> 
    </g>


    <!-- <polyline points="0,5,10,0,10,10"></polyline> -->

    <g transform="translate(0,55)" id="okno">
        <rect :width="width" :height="height" :fill="$root.profileColor" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect>
        <sash :transform="'translate('+sash1.x+','+sash1.y+')'" :width="sash1.width" :height="sash1.height" :sashThickness="sashThickness" :otwieranie="'RU'"></sash>
        <sash :transform="'translate('+sash2.x+','+sash2.y+')'" :width="sash2.width" :height="sash2.height" :sashDiff="sashDiff" :sashThickness="sashThickness" :otwieranie="'R'"></sash>
        <sash :transform="'translate('+sash3.x+','+sash3.y+')'" :width="sash3.width" :height="sash3.height" :sashDiff="sashDiff" :sashThickness="sashThickness" :otwieranie="'R'"></sash>


        <g id="klamka1">
            <rect :x="(sash1.width) - 16" :y="height / 2" width="18.823529411764802" height="18.823529411764802" stroke="#999999" stoke-width="0.2" style="fill-opacity: 0;"></rect>
            <rect :x="(sash1.width) - 12.4" :y="height / 2 + 4" width="11.3" height="56.5" :fill="$root.handleColor" stroke="#999999" stoke-width="0.2" style="fill-opacity: 1;"></rect>
        </g>
        <g id="klamka2">
            <rect :x="sash1.width + 25" :y="height / 2" width="18.823529411764802" height="18.823529411764802" stroke="#999999" stoke-width="0.2" style="fill-opacity: 0;"></rect>
            <rect :x="sash1.width + 28.6" :y="height / 2 + 4" width="11.3" height="56.5" :fill="$root.handleColor" stroke="#999999" stoke-width="0.2"  style="fill-opacity: 1;"></rect>
        </g>
       
    </g>

    <g id="wymiarprawy">
        <GrotG :x="width + 30" :y="50"></GrotG>
        <text :x="width/2-10" y="15">{{width}}</text>
        <line id="gorna" :x1="width + 5" y1="50" :x2="width + 50" y2="50" stroke="#000000" style="stroke-width: .3;"> </line>  
        <line id="pionowa" :x1="width + 30" y1="50" :x2="width + 30" :y2="parseInt(height) + 55" stroke="#000000" style="stroke-width: .3;"> </line> 
        <line id="dolna" :x1="parseInt(width) + 5" :y1="height + 55" :x2="width + 50" :y2="height + 55" stroke="#000000" style="stroke-width: .3;"> </line>
        <text :x="width+32" :y="parseInt(height)/2+55">{{height}}</text>

        <GrotD :x="width + 30" :y="parseInt(height) + 55"></GrotD>

    </g>
</svg>
<br>
<!-- <button @click="calculateWindow()">oblicz</button> -->

</div>
</template>





<script>
import Sash from './Sash.vue'
import GrotL from './GrotL.vue'
import GrotP from './GrotP.vue'
import GrotG from './GrotG.vue'
import GrotD from './GrotD.vue'



export default {
    components:{Sash,GrotL,GrotP,GrotG,GrotD},
    watch:{
        width(){
            this.calculateWindow()
        },
        height(){
            this.calculateWindow()
        },
        transomThickness(){
            this.calculateWindow();
        },
        sash1WidthManual(){
            this.calculateWindow()
        }
    },
   
    data() {
        return {
            y: 50,
            height: 300,
            width: 800,
            OFthickness:40,
            transomThickness:10,
            sashDiff: 10,
            sash1:{x:0,y:0, width:200,height:300, thickness:30},
            sash2: {x:0,y:0, width:200,height:300, thickness:30},
            sash3: {x:0,y:0, width:200,height:300, thickness:30},
            sashThickness: 30,
            unproportionalSashes:false,
            sash1WidthManual:0

        }
    },
    methods:{
        calculateWindow(){
            this.width = parseInt(this.width);this.height = parseInt(this.height); 
            this.transomThickness = parseInt(this.transomThickness);
            this.sash1WidthManual = parseInt(this.sash1WidthManual);

            this.sash1.x = this.sashDiff;
            this.sash1.y = this.sashDiff;
            this.sash1.height = this.height - 2* this.sashDiff;
            let defaultSashWidth = (this.width / 3) - ((this.transomThickness) / 2) - this.sashDiff
            if (!this.unproportionalSashes){
                this.sash1.width = defaultSashWidth;
            }else{
                this.sash1.width = this.sash1WidthManual
            }
            this.sash2.x = this.sash1.x + this.sash1.width + this.transomThickness;
            this.sash2.y = this.sashDiff;
            this.sash2.height = this.height - 2* this.sashDiff;
            this.sash2.width = defaultSashWidth;
            // this.sash2.width = this.width - this.sash1.width - 2*(this.sashDiff) - (this.transomThickness)

            this.sash3.x = this.sash2.x + this.sash2.width + this.transomThickness;
            this.sash3.y = this.sashDiff;
            this.sash3.height = this.height - 2* this.sashDiff;
            this.sash3.width = defaultSashWidth;

            // this.sash2.x = this.sash1.x + this.sash1.width;
        }
    },
    mounted(){
        this.calculateWindow()
        // this.baywatch(['width','height'],this.calculateWindow)
    }

}

</script>
