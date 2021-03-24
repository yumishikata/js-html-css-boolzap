var path = 'img/avatar';
var ext = '.jpg';
var app = new Vue({
    el: '#root',
    data: {

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: false,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: false,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: false,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        utente: {
            name: "Yumi",
            avatar: '_io'
        },
        indice: 0,
        mioMess: ''
        
    },

    methods: {
        messaggio: function(index){
            this.contacts.forEach(element => {
                element.visible = false;
            });
            var contatto = this.contacts[index];
            contatto.visible = true;
            this.indice=index;
        },
        mioMessaggio: function(indice) {
            var newMessage = {};
            var contatto = this.contacts[indice];
            var currentdate = new Date();
            newMessage.date = currentdate.getDate() + "/" + (currentdate.getMonth()+1) 
            + "/" + currentdate.getFullYear() + " " 
            + currentdate.getHours() + ":" 
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();
            newMessage.text = this.mioMess;
            newMessage.status= 'sent';
            contatto.messages.push(newMessage);
            this.mioMess = '';
            setTimeout(function(){
                var newReply = {};
                newReply.date = currentdate.getDate() + "/" + (currentdate.getMonth()+1) 
                + "/" + currentdate.getFullYear() + " " 
                + currentdate.getHours() + ":" 
                + currentdate.getMinutes() + ":" + currentdate.getSeconds();
                newReply.text = 'Ok';
                newReply.status= 'received';
                contatto.messages.push(newReply);
            }, 1000)
            
        }
    }
});

