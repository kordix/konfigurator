<template>
<div>
<div>
    <!-- <label for="">Wysokość</label>
    <input v-model="height" type="number" step="50" min="300">
        <label for="">Szerokość</label>
    <input v-model="width" type="number" step="50" min="300"> -->
    <!-- <label for="">Grubość słupka</label> -->
    <!-- <input v-model="transomThickness" type="number" step="1"> -->
    <p></p>
     <select name="" id="" v-model="otwieranie1">
        <option value="RU">RU</option>
        <option value="R">R</option>
        <option value="U">U</option>
        <option value="FIXS">FIX w skrzydle</option>
        <option value="FIX">FIX w ramie</option>
    </select>

       <select name="" id="" v-model="otwieranie2">
        <option value="RU">RU</option>
        <option value="R">R</option>
        <option value="U">U</option>
        <option value="FIXS">FIX w skrzydle</option>
        <option value="FIX">FIX w ramie</option>
    </select>

    <p></p>
    <!-- <button @click="unproportionalSashes = !unproportionalSashes" style="margin:5px"> nieproporcjonalne skrzydła</button> -->
    <div v-if="unproportionalSashes" style="margin-top:20px;margin-bottom:20px">
        <label for="">Szerokość pierwszego skrzydła</label>
        <input type="number" v-model="sash1WidthManual" step="50" >
           <label for="">Szerokość drugiego skrzydła</label>
        <input type="number" v-model="sash2WidthManual" step="50" >

    </div>
</div>

<svg :width="width+200" :height="parseInt(height)+100">
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
        <rect :width="width" :height="height" fill="#ffffff" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect>
        <sash :transform="'translate('+sash1.x+','+sash1.y+')'" :width="sash1.width" :height="sash1.height" :sashThickness="sashThickness" :otwieranie="otwieranie1" :kierunek="'L'"></sash>
        <sash :transform="'translate('+sash2.x+','+sash2.y+')'" :width="sash2.width" :height="sash2.height" :sashDiff="sashDiff" :sashThickness="sashThickness" :otwieranie="otwieranie2" :kierunek="'R'" v-if="!unproportionalSashes"></sash>       
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
        },
        sash2WidthManual(){
            this.calculateWindow()
        }
    },
   
    data() {
        return {
            otwieranie1:'RU',
            otwieranie2:'R',
            y: 50,
            OFthickness:40,
            transomThickness:10,
            sashDiff: 10,
            sash1:{x:0,y:0, width:200,height:300, thickness:30},
            sash2: {x:0,y:0, width:200,height:300, thickness:30},
            sashThickness: 30,
            unproportionalSashes:false,
            sash1WidthManual:0,
            sash2WidthManual:0
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
            let defaultSashWidth = (this.width / 2) - ((this.transomThickness) / 2) - this.sashDiff
            if (!this.unproportionalSashes){
                this.sash1.width = defaultSashWidth;
            }else if(this.sash1WidthManual)
            {
                this.sash1.width = this.sash1WidthManual
            }else if (this.sash2WidthManual){
                this.sash1.width = this.width - this.sash2WidthManual - 2*(this.sashDiff) - (this.transomThickness)
            }

            this.sash2.x = this.sash1.x + this.sash1.width + this.transomThickness;
            this.sash2.y = this.sashDiff;
            this.sash2.height = this.height - 2* this.sashDiff;
            this.sash2.width = this.width - this.sash1.width - 2*(this.sashDiff) - (this.transomThickness)

            // this.sash2.x = this.sash1.x + this.sash1.width;
        }
    },
    mounted(){
        this.calculateWindow()
        // this.baywatch(['width','height'],this.calculateWindow)
    },
    computed: {
        width(){
            return this.$root.form.size.value.w
        },
        height(){
            return this.$root.form.size.value.h
        }
    }

}

</script>
