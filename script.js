new Vue({
    el: '#conteneur',
    data: {
        fenetre: true
    },
    methods: {
        fermer: function() {
            this.fenetre = false
        }
    }
});