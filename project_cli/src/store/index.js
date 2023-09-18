export default { 
    state: {
        blogCards: [
            { id: 1, 
              tag: 'Kitchen Design', 
              img: '../images/Photo_5.png', 
              text: 'Let’s Get Solution For Building Construction Work',
              date: '26 December, 2022',
           },
            { id: 2, 
              tag: 'Living Design', 
              img: '../images/Photo_6.png', 
              text: 'Low Cost Latest Invented Interior Designing Ideas.',
              date: '22 December, 2022'
           },
            { id: 3, 
              tag: 'Interior Design', 
              img: '../images/Photo_7.png', 
              text: 'Best For Any Office & Business Interior Solution',
              date: '25 December, 2022'
           },
            { id: 4, 
              tag: 'Kitchen Design', 
              img: '../images/Photo_8.png', 
              text: 'Let’s Get Solution For Building Construction Work',
              date: '26 December, 2022',
           },
            { id: 5, 
              tag: 'Interior Design', 
              img: '../images/Photo_9.png', 
              text: 'Low Cost Latest Invented Interior Designing Ideas.',
              date: '22 December, 2022'
           },
            { id: 6, 
              tag: 'Interior Design', 
              img: '../images/Photo_10.png', 
              text: 'Best For Any Office & Business Interior Solution',
              date: '25 December, 2022'
           }
        ],
        cards: [
            {
                id: 1,
                cardTitle: 'Minimal Bedroom',
                cardSubtitle: 'Decor / Artchitecture',
                cardImg: '../images/Photo_17.png',
                tag: 'bedroom'
            },
            {
                id: 2,
                cardTitle: 'Minimal Bedroom, tag: bathroom',
                cardSubtitle: 'Decor / Artchitecture',
                cardImg: '../images/Photo_19.png',
                tag: 'bathroom'
            },
            {
                id: 3,
                cardTitle: 'Classic Bedroom, tag: kitchen',
                cardSubtitle: 'Decor / Artchitecture',
                cardImg: '../images/Photo_21.png',
                tag: 'kitchen'
            },
            {
                id: 4,
                cardTitle: 'Modern Bedroom, tag: living_area',
                cardSubtitle: 'Decor / Artchitecture',
                cardImg: '../images/Photo_23.png',
                tag: 'living_area'
            },
            {
                id: 5,
                cardTitle: 'Minimal Bedroom table, tag: living_area',
                cardSubtitle: 'Decor / Artchitecture',
                cardImg: '../images/Photo_18.png',
                tag: 'living_area'
            },
            {
                id: 6,
                cardTitle: 'System Table, tag: bedroom',
                cardSubtitle: 'Decor / Artchitecture',
                cardImg: '../images/Photo_20.png',
                tag: 'bedroom'
            },
            {
                id: 7,
                cardTitle: 'Modern Bedroom, tag: living_area',
                cardSubtitle: 'Decor / Artchitecture',
                cardImg: '../images/Photo_22.png',
                tag: 'living_area'
            },
            {
                id: 8,
                cardTitle: 'Modern Bedroom',
                cardSubtitle: 'Decor / Artchitecture',
                cardImg: '../images/Photo_24.png',
                tag: 'bedroom'
            },
        ],
        tags: [
            {id: 0, tag: 'bathroom', title:'Bathroom'},
            {id: 1, tag: 'bedroom', title:'Bedroom'},
            {id: 2, tag: 'kitchen', title:'Kitchen'},
            {id: 3, tag: 'living_area', title:'Living area'}
        ],
        sliderItems: [
            {id: 1, name: 'img1', img: 'SliderPhoto_1.png'},
            {id: 2, name: 'img2', img: 'SliderPhoto.png'},
            {id: 3, name: 'img3', img: 'SliderPhoto_1.png'},
            {id: 4, name: 'img4', img: 'SliderPhoto.png'},
            {id: 5, name: 'img5', img: 'SliderPhoto.png'},
        ],
    },
    getters: {
        allBlogCards(state) {
            return state.blogCards;
        },
        allCards(state) {
            return state.cards;
        },
        allTags(state) {
            return state.tags;
        },
        getCards(getters, button) {
            return getters.allCards.filter((elem) => elem.tag === button.tag);
        },
        allSliderItems(state) {
            return state.sliderItems;
        },
    },
    mutations: {
    },
    actions:{
       
}
}
