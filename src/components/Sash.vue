<template>
       <g id="skrzydlo">
            <rect :width="width" :height="height - 2* 0" :x="0" :y="0" fill="#ffffff" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect>
            <rect :width="width - 2* (sashThickness)" :height="height - 2* (sashThickness)" :x="sashThickness" :y="sashThickness" fill="#0195af" stroke="#000000" style="fill-opacity: 0.6; stroke-width: 1;"></rect>
            <line :x1="0" :x2="sashThickness" :y1="0" :y2="sashThickness" stroke="#000000" style="stroke-width: 0.2;"></line>
            <line :x1="width-0" :x2="width-(sashThickness)" :y1="0" :y2="sashThickness" stroke="#000000" style="stroke-width: 0.2;"></line>
            <line :x1="0" :x2="sashThickness" :y1="height-0" :y2="height-(sashThickness)" stroke="#000000" style="stroke-width: 0.2;"></line>
            <line :x1="width-0" :x2="width-(sashThickness)" :y1="height-0" :y2="height-(sashThickness)" stroke="#000000" style="stroke-width: 0.2;"></line>
        </g>
    

 

</template>

<script>
export default {
    props:[
        'sashThickness','width','height'
    ]
    
}
</script>