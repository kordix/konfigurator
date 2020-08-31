<template>
           <!-- <polyline points="507,110,502,100,497,110"></polyline> -->
        <g>   
        <!-- <polyline :points="punkt1x+',23,'+x+',28,50,33'"></polyline> -->
        <polyline :points="`${x},${y1},${x2},${y2},${x3},${y3}`" ></polyline>
        </g>
</template>


<script>

export default {
    props:['x','y','direction'],
    data(){
        return {
            gruboscx:10,
            gruboscy:10,
        }
    },
    computed:{
        y1(){
            return this.y ;
        },
        x2(){
            return this.x - (this.gruboscx/2)
        },
        y2(){
            return this.y - (this.gruboscy)
        },
        x3(){
            return this.x + (this.gruboscx/2)
        },
        y3(){
            return this.y - (this.gruboscy)
        }

    }
}

</script>