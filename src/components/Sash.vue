<template>
       <g id="skrzydlo">
           <g v-if="otwieranie !== 'FIX'">
                <rect :width="width" :height="height - 2* 0" :x="0" :y="0" fill="#ffffff" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect>
                <rect :width="width - 2* (sashThickness)" :height="height - 2* (sashThickness)" :x="sashThickness" :y="sashThickness" fill="#0195af" stroke="#000000" style="fill-opacity: 0.6; stroke-width: 1;"></rect>
                <line :x1="0" :x2="sashThickness" :y1="0" :y2="sashThickness" stroke="#000000" style="stroke-width: 0.2;"></line>
                <line :x1="width-0" :x2="width-(sashThickness)" :y1="0" :y2="sashThickness" stroke="#000000" style="stroke-width: 0.2;"></line>
                <line :x1="0" :x2="sashThickness" :y1="height-0" :y2="height-(sashThickness)" stroke="#000000" style="stroke-width: 0.2;"></line>
                <line :x1="width-0" :x2="width-(sashThickness)" :y1="height-0" :y2="height-(sashThickness)" stroke="#000000" style="stroke-width: 0.2;"></line>
            </g>
            <g v-if="otwieranie == 'FIX'">
                <!-- <rect :width="width" :height="height - 2* 0" :x="0" :y="0" fill="#ffffff" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect> -->
                <rect :width="width - 2* (sashThickness/2)" :height="height - (sashThickness)" :x="sashThickness/2" :y="sashThickness/2" fill="#0195af" stroke="#000000" style="fill-opacity: 0.6; stroke-width: 1;"></rect>
            </g>
            <g v-if="otwieranie.indexOf('U')>=0">   
                <line :x1="sashThickness" :y1="height-sashThickness" :x2="width/ 2" :y2="sashThickness" stroke="#0033">  </line>
                <line :x1="width/ 2" :y1="sashThickness" :x2="width - sashThickness" :y2="height - sashThickness" stroke="#0033" >  </line>
            </g>    
            <g v-if="otwieranie.indexOf('R')>=0 && kierunek == 'L'">
                <line :x1="sashThickness" :y1="sashThickness" :x2="width - sashThickness" :y2="height/2" stroke="#0033">  </line>
                <line :x1="sashThickness" :y1="height-sashThickness" :x2="width - sashThickness" :y2="height/2" stroke="#0033" >  </line>
            </g>    
            <g v-if="otwieranie.indexOf('R')>=0 && kierunek == 'R'">
                <line :x1="sashThickness" :y1="height/2" :x2="width - sashThickness" :y2="sashThickness" stroke="#0033">  </line>
                <line :x1="sashThickness" :y1="height/2" :x2="width - sashThickness" :y2="height-sashThickness" stroke="#0033" >  </line>
            </g>    
            <g id="klamkaP" v-if="kierunek=='L' && klamkaBocznaBool">
                <rect :x="width - 25" :y="height / 2" width="18.82" height="18.82" stroke="#999999" stoke-width="0.2" style="fill-opacity: 0;"></rect>
                <rect :x="width - 21.4" :y="height / 2 + 4" width="11.3" height="56.5" fill="#ffffff" stroke="#999999" stoke-width="0.2" style="fill-opacity: 1;"></rect>
            </g>
            <g id="klamkaL" v-if="kierunek=='R' && klamkaBocznaBool">
                <rect :x="7" :y="height / 2" width="18.82" height="18.82" stroke="#999999" stoke-width="0.2" style="fill-opacity: 0;"></rect>
                <rect :x="10.6" :y="height / 2 + 4" width="11.3" height="56.5" fill="#ffffff" stroke="#999999" stoke-width="0.2" style="fill-opacity: 1;"></rect>
            </g>
            <g id="klamkaG" v-if="otwieranie=='U'">
                <rect :x="width/2" :y="5" width="18.82" height="18.82" stroke="#999999" stoke-width="0.2" style="fill-opacity: 0;"></rect>
                <rect :x="(width/2)+3.6" :y="9" height="11.3" width="56.5" fill="#ffffff" stroke="#999999" stoke-width="0.2" style="fill-opacity: 1;"></rect>
            </g>
        </g>
    

 

</template>

<script>
export default {
    props:[
        'sashThickness','width','height','otwieranie','kierunek'
    ],
    computed:{
        klamkaBocznaBool(){
            if(['FIX','FIXS','U'].indexOf(this.otwieranie) >= 0){
                return false
            }else{
                return true
            }
        }
    }
    
}
</script>