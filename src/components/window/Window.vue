<template>
<div>
    <div>
        <!-- <label for="">Wysokość</label> -->
        <!-- <input v-model="height" type="number" step="50" min="300"> -->
        <!-- <label for="">Szerokość</label> -->
        <!-- <input v-model="width" type="number" step="50" min="300"> -->
        <!-- <label for="">Grubość słupka</label> -->
        <!-- <input v-model="transomThickness" type="number" step="1"> -->

        <p></p>
        <!-- <button @click="unproportionalSashes = !unproportionalSashes" style="margin:5px"> nieproporcjonalne skrzydła</button>
    <div v-if="unproportionalSashes" style="margin-top:20px;margin-bottom:20px">
        <label for="">Szerokość pierwszego skrzydła</label>
        <input type="number" v-model="sash1WidthManual" step="50" >
           <label for="">Szerokość drugiego skrzydła</label>
        <input type="number" v-model="sash2WidthManual" step="50" >

    </div> -->

        <!-- <select name="" id="" v-model="otwieranie">
        <option value="RU">RU</option>
        <option value="R">R</option>
        <option value="U">U</option>
        <option value="FIXS">FIX w skrzydle</option>
        <option value="FIX">FIX w ramie</option>
    </select>
    <select name="" id="" v-model="kierunek">
        <option value="L">L</option>
        <option value="R">R</option>
    </select> -->
    </div>

    <svg :width="parseInt(width)+200" :height="parseInt(height)+100">
        <g id="wymiargorny">
            <GrotL :x="0" :y="20"></GrotL>
            <GrotP :x="width" :y="20"></GrotP>
            <text :x="width/2-10" y="15">{{parseInt($root.form.size.value.w)}}</text>
            <line id="pozioma" x1="0" y1="25" :x2="width" y2="25" stroke="#000000" style="stroke-width: .3;"> </line>
            <line id="lewa" :x1="width" y1="20" :x2="width" y2="50" stroke="#000000" style="stroke-width: .3;"> </line>
            <line id="prawa" x1="0" y1="20" x2="0" y2="50" stroke="#000000" style="stroke-width: .3;"> </line>
        </g>

        <!-- <polyline points="0,5,10,0,10,10"></polyline> -->

        <g transform="translate(0,55)" id="okno">
            <rect :width="width" :height="height" :fill="$root.profileColor" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect>
            <sash :transform="'translate('+sash1.x+','+sash1.y+')'" :width="sash1.width" :height="sash1.height" :sashThickness="sashThickness" :otwieranie="otwieranie" :kierunek="kierunek"></sash>
        </g>

        <g id="wymiarprawy">
            <GrotG :x="width + 30" :y="50"></GrotG>
            <text :x="width/2-10" y="15">{{parseInt($root.form.size.value.w)}}</text>
            <line id="gorna" :x1="width + 5" y1="50" :x2="width + 50" y2="50" stroke="#000000" style="stroke-width: .3;"> </line>
            <line id="pionowa" :x1="width + 30" y1="50" :x2="width + 30" :y2="parseInt(height) + 55" stroke="#000000" style="stroke-width: .3;"> </line>
            <line id="dolna" :x1="parseInt(width) + 5" :y1="height + 55" :x2="width + 50" :y2="height + 55" stroke="#000000" style="stroke-width: .3;"> </line>
            <text :x="width+32" :y="parseInt(height)/2+55">{{parseInt($root.form.size.value.h)}}</text>

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
    components: {
        Sash,
        GrotL,
        GrotP,
        GrotG,
        GrotD
    },
    watch: {
        width() {
            this.calculateWindow()
        },
        height() {
            this.calculateWindow()
        },
        transomThickness() {
            this.calculateWindow();
        },
        sash1WidthManual() {
            this.calculateWindow()
        },
        sash2WidthManual() {
            this.calculateWindow()
        }
    },

    data() {
        return {
            y: 50,
            // height: 300,
            // width: 300,
            OFthickness: 40,
            transomThickness: 10,
            sashDiff: 10,
            sash1: {
                x: 0,
                y: 0,
                width: 200,
                height: 300,
                thickness: 30
            },
            sash2: {
                x: 0,
                y: 0,
                width: 200,
                height: 300,
                thickness: 30
            },
            sashThickness: 30,
            unproportionalSashes: false,
            sash1WidthManual: 0,
            sash2WidthManual: 0,
            otwieranie: 'RU',
            kierunek: 'L'
        }
    },
    methods: {
        calculateWindow() {
            this.width = parseInt(this.width);
            this.height = parseInt(this.height);
            this.transomThickness = parseInt(this.transomThickness);
            this.sash1WidthManual = parseInt(this.sash1WidthManual);

            this.sash1.x = this.sashDiff;
            this.sash1.y = this.sashDiff;
            this.sash1.height = this.height - 2 * this.sashDiff;
            this.sash1.width = (this.width) - 2 * this.sashDiff

            // this.sash2.x = this.sash1.x + this.sash1.width;
        }
    },
    mounted() {
        this.calculateWindow()
        // this.baywatch(['width','height'],this.calculateWindow)
    },
    computed: {
        width(){
            //return parseInt(this.$root.form.size.value.w)
            let h =parseInt(this.$root.form.size.value.h)
            let w = parseInt(this.$root.form.size.value.w)
            let height = 700 -200
            let width = 500 -100
            let ratio = h/w
            let expwidth = 1/ratio * height
            let perc = 0
            if(expwidth>width){
                let expheight = ratio * width
                perc = Math.floor((expheight/h) * 100)
            }
            else{
                perc = Math.floor((expwidth/w) * 100)
            }
            console.log((perc/100)*w);
            return (perc/100)*w
            
        },
        height(){
            //return parseInt(this.$root.form.size.value.h)
            let h =parseInt(this.$root.form.size.value.h)
            let w = parseInt(this.$root.form.size.value.w)
            let height = 700 -200
            let width = 500 -100
            let ratio = h/w
            let expwidth = 1/ratio * height
            let perc = 0
            if(expwidth>width){
                let expheight = ratio * width
                perc = Math.floor((expheight/h) * 100)
            }
            else{
                perc = Math.floor((expwidth/w) * 100)
            }
            console.log((perc/100)*h);
            return (perc/100)*h
        }
    }

}
</script>
