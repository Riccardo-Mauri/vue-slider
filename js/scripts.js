const { createApp } = Vue;
createApp({
    data() {
        return {
            //creo il mio array di oggetti, in questo caso 5 immagini con le loro titoli e descrizioni
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            slideAttiva: 0,
        }

    },
    methods: {
        //creo una funzione per il bottone slide successiva
        nextSlide() {
            for (let i = 0; i < this.slides.length; i++) {
                if (this.slideAttiva === i) {
                    // Se siamo all'ultima slide, torniamo alla prima
                    if (i === this.slides.length - 1) {
                        this.slideAttiva = 0;
                    } else {
                        // Altrimenti passiamo alla slide successiva
                        this.slideAttiva++;
                    }
                   break
                }
            }
        },
        //creo una funzione per il bottone slide precedente 
        prevSlide() {
            for (let i = 0; i < this.slides.length; i++) {
                if (this.slideAttiva === i) {
                    // Se siamo alla prima slide, torniamo all'ultima
                    if (i === 0) {
                        this.slideAttiva = this.slides.length - 1;
                    } else {
                        // Altrimenti passiamo alla slide precedente
                        this.slideAttiva--;
                    }
                    break
                }
            }
        }
    }
    
}).mount('#app');
