let roomURL = "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms";
let singelRoomURL = "https://challenge.thef2e.com/api/thef2e2019/stage6/room/"

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer CGgGz2y5DZ3xFQ5ubOt5S268uvKONejWTDZn5v2ISewAWaGdGWsA2vq07pPQ'
}


Vue.component('card-rooms', {
    props: ['roomLists'],
    template: '#cardElement',
});

Vue.component("footer-component", {
    props: ['siteLogo', 'sitePhone', 'siteAdd', 'siteIg'],
    template:
        `<div id="footer" class="row justify-content-end">
            <div class="col-12 col-xl-4 d-flex justify-content-end align-items-center p-3 mr-5">
                <div class="f-logo pr-5 mr-5"><img :src="siteLogo" alt="" srcset=""></div>
                <ul>
                    <li><i class="fas fa-phone"></i>{{sitePhone}}</li>
                    <li><i class="fas fa-map-marker-alt"></i>{{siteAdd}}</li>
                    <li><i class="fab fa-instagram"></i>{{siteIg}}</li>
                </ul>
            </div>
        </div>`,
});


var app = new Vue({
    el: '#main',
    data: {
        show: true,
        flexCenter: ['d-flex', 'justify-content-center', 'align-items-center'],
        sectionMinheight: { minHeight: '100vh' },
        siteInfos: {
            siteImgs: {
                bannerBg: "assets/images/bg_01.png",
                siteLogo: "assets/images/logo.svg",
                footerLogo: "assets/images/logo_white.svg",
                scrollBtn: "assets/images/slide_btn.svg",
            },
            siteName: "不 想 │ 上 班",
            siteTitle: "I don't want to work",
            sitePhone: "07-536-0000",
            siteAdd: "香港銅鑼灣興發街1號",
            siteIg: "I_dont_wank_to_work",
        },
        rooms: [],
        Singleroom: [],

    },
    created() {
        axios.get(roomURL, { headers })
            .then((res) => this.rooms = res.data.items)
            .catch(function (error) {
                console.log('連線異常');
            })

        // axios.get(singelRoomURL + '3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu', {
        //     headers: {
        //         authorization: "Bearer " + roomKey,
        //         accept: "application/json",
        //     }
        // }).then((res) => console.log(res.data))
        //     .catch(function (error) {
        //         console.log('連線異常');
        //     });
    },
    methods: {
        // scrollDown: function () {
        //     let event = window.addEventListener('scroll', e => console.log(e.target), true);
        //     console.log(event);
        // },
    },
});


//ScrollReveal.js
let siteAnimate = ScrollReveal({
    reset: false,
    origin: 'right',
    distance: '500px',
    easing: 'ease-in-out'
});
// ScrollReveal().reveal('.bg', { duration: 2000, origin: 'top' });
ScrollReveal().reveal('.logo', { duration: 2000, origin: 'left', delay: 325 });
ScrollReveal().reveal('.title', { duration: 2000, origin: 'right', delay: 500 });

Vue.use(VueScrollTo, {
    container: "body",
    duration: 1200,
    easing: "linear",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});