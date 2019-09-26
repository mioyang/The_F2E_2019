let roomURL = "https://challenge.thef2e.com/api/thef2e2019/stage6/rooms";
let singelRoomURL = "https://challenge.thef2e.com/api/thef2e2019/stage6/room/"

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer CGgGz2y5DZ3xFQ5ubOt5S268uvKONejWTDZn5v2ISewAWaGdGWsA2vq07pPQ'
}

var app = new Vue({
    el: '#main',
    data: {
        flexCenter: ['d-flex', 'justify-content-center', 'align-items-center'],
        sectionMinheight: { minHeight: '100vh' },
        headerSetion: {
            headerImg: {
                bannerBg: '/static/images/bg_01.png',
                siteLogo: '/static/images/logo.svg',
            },
            siteTitle: "I don't want to work",
            logoTxt: '<span>不 想</span> <span>上 班</span>',
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



