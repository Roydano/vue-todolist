
const app = new Vue({

    el: '#app',

    data: {

        inputToBo: '',

        toBoStart: [
            'Fare la spesa',
            'Portare il cane a passeggio',
            'Rubare i soldi al vicino quando dorme',
            'Studiare per aumentare le skills'
        ]
    },


    methods: {

        addInputInList(){
            if(!this.inputToBo == ''){
                this.toBoStart.push(this.inputToBo);
                this.inputToBo = " ";
            }
        },

        removeElementList(index){
            this.toBoStart.splice(index, 1)

        }
    }

});