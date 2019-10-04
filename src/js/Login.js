import barba from '@barba/core';
import {TweenMax, Power4, Power3} from 'gsap';
import image from '../media/logo.png';


export default class Login {

    constructor(){

        this.props = {

        }
        this.init();
    }


    init(){

        console.log('en login automatico ...');
        // const img = document.getElementById('image2');
        // // console.log('img ==> ', img);
        // console.log('image **** ' ,image);
        // img.src = image;


        

    }

    transitionPage(){

        // const link = document.getElementById('linkPage');
        // let timer = setTimeout(() => link.click(), 1000);
        // clearTimeout(timer);


        // barba.init({
        //     transitions: [{
        //         name: 'appHoteles',
        //         leave: function(data) {
        //             // do something with `current.container` for your leave transition
        //             // then return a promise or use `this.async()`
        //             console.log('1...', data);
        //             console.log('data.current.container: ',data.current.container);
        //             var done = this.async();            
        //             TweenMax.to(data.current.container, 0.5, {
        //                 onComplete: done
        //             });
                    
        //         },
        //         enter: function(data) {
        //             console.log('2...', data);
        //             console.log('data.current.container: ',data.next.container);
        //             var done = this.async();
        //             TweenMax.from(data.next.container, 0.5, {
        //                 left: '100%',
        //                 ease: Expo.easeOut,
        //             onComplete: done
        //             });

        //             // do something with `next.container` for your enter transition
        //             // then return a promise or use `this.async()`
        //         }
        //     }]
        // });

    }

}