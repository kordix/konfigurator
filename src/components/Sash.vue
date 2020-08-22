<template>
       <g id="skrzydlo">
            <rect :width="width - 2* sashDiff" :height="height - 2* sashDiff" :x="sashDiff" :y="sashDiff" fill="#ffffff" stroke="#000000" style="fill-opacity: 1; stroke-width: 1;"></rect>
            <rect :width="width - 2* (sashDiff+sashThickness)" :height="height - 2* (sashDiff+sashThickness)" :x="sashDiff+sashThickness" :y="sashDiff+sashThickness" fill="#0195af" stroke="#000000" style="fill-opacity: 0.6; stroke-width: 1;"></rect>
            <line :x1="sashDiff" :x2="sashDiff+sashThickness" :y1="sashDiff" :y2="sashDiff+sashThickness" stroke="#000000" style="stroke-width: 0.2;"></line>
            <line :x1="width-sashDiff" :x2="width-(sashDiff+sashThickness)" :y1="sashDiff" :y2="sashDiff+sashThickness" stroke="#000000" style="stroke-width: 0.2;"></line>
            <line :x1="sashDiff" :x2="sashDiff+sashThickness" :y1="height-sashDiff" :y2="height-(sashDiff+sashThickness)" stroke="#000000" style="stroke-width: 0.2;"></line>
            <line :x1="width-sashDiff" :x2="width-(sashDiff+sashThickness)" :y1="height-sashDiff" :y2="height-(sashDiff+sashThickness)" stroke="#000000" style="stroke-width: 0.2;"></line>
        </g>
    

 

</template>

<script>
export default {
    props:[
        'sashDiff','sashThickness','width','height'
    ]
    
}
</script>