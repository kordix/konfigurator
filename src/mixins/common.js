export default {
    methods: {
        changePanel(next, type, key=null, name=null,  val=null){
            let prev = this.$root.activepanel
            this.$root.transition = prev<next? 'component-slide-fade' : 'component-slide-out'
            this.$root.activepanel = next
            if(type== 'choice'){
                this.$root.form[key].value = val
                this.$root.form[key].name = name
            }
        },
        bgcard(val, key){
            if(this.$root.form[key].value == val){
                return '#007bff46'
            } else {
                return 'white'
            }
        },
        getPic(folder, name){
            return '../images/'+ folder +'/' + name
        }
    }
  };