export default {
    methods: {
        saveCard(key=null, name=null,  val=null){
                this.$root.form[key].value = val
                this.$root.form[key].name = name
        },
        nextPanel(next){
            let prev = this.$root.activepanel
            console.log(next, prev, 'np');
            this.$root.transition = prev<next? 'component-slide-fade' : 'component-slide-out'
            if(next == 2){this.$root.compositionPanel = 'kwatery'}
            if(next == 6){this.$root.grillesPanel = 'rodzaj'}
            this.$root.activepanel = next
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