<template>
       <g id="skrzydlo">
            <rect :width="width" :height="height - 2* 0" :x="0" :y="0" fill="#ffffff" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect>
            <rect :width="width - 2* (sashThickness)" :height="height - 2* (sashThickness)" :x="sashThickness" :y="sashThickness" fill="#0195af" stroke="#000000" style="fill-opacity: 0.6; stroke-width: 1;"></rect>
            <line :x1="0" :x2="sashThickness" :y1="0" :y2="sashThickness" stroke="#000000" style="stroke-width: 0.2;"></line>
            <line :x1="width-0" :x2="width-(sashThickness)" :y1="0" :y2="sashThickness" stroke="#000000" style="stroke-width: 0.2;"></line>
            <line :x1="0" :x2="sashThickness" :y1="height-0" :y2="height-(sashThickness)" stroke="#000000" style="stroke-width: 0.2;"></line>
            <line :x1="width-0" :x2="width-(sashThickness)" :y1="height-0" :y2="height-(sashThickness)" stroke="#000000" style="stroke-width: 0.2;"></line>
            <g v-if="otwieranie.indexOf('U')>=0">   
                <line :x1="sashThickness" :y1="height-sashThickness" :x2="width/ 2" :y2="sashThickness" stroke="#0033">  </line>
                <line :x1="width/ 2" :y1="sashThickness" :x2="width - sashThickness" :y2="height - sashThickness" stroke="#0033" >  </line>
            </g>    
            <g v-if="otwieranie.indexOf('R')>=0">
                <line :x1="sashThickness" :y1="sashThickness" :x2="width - sashThickness" :y2="height/2" stroke="#0033">  </line>
                <line :x1="sashThickness" :y1="height-sashThickness" :x2="width - sashThickness" :y2="height/2" stroke="#0033" >  </line>
            </g>    
        </g>
    

 

</template>

<script>
export default {
    props:[
        'sashThickness','width','height','otwieranie'
    ]
    
}
</script>