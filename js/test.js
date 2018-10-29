// JQCLOUD WORD CUSTOMIZATION
var words = [
    {text: "Physics ⚛", weight: 10},
    {
        text: "Coding 💻", weight: 9,
        handlers: {
            click: _ => { openPopup() }
        },
        html: { class: 'linked' }
    },
    { text: "Music 🎹", weight: 8.5 },
    { text: "Kerala 🌴", weight: 8.5, link: 'https://en.wikipedia.org/wiki/Kerala', html: {class: 'linked'} },
    { text: "Astronomy 🔭", weight: 8 },
    { text: "Web dev 🕸", weight: 7.9 },
    { text: "Star Watching 🌌", weight: 7.1 },
    { text: "Cycling 🚴", weight: 7.1 },
    { text: "Reading 🤓", weight: 7 },
    { text: "Bazinga 💥", weight: 6.4, link: 'https://twitter.com/bigbangtheory', html: {class: 'linked'} },
    { text: "Sleep 💤", weight: 6.4 },
    { text: "Mollywood 😘", weight: 6.3 },
]

// RENDER CLOUD
const renderCloud = _ => {
    $('#cloud').jQCloud(words, {
        autoResize: true
    });
}

renderCloud() // LET IT RAIN ☁

const values = {
    html: 80,
    css: 70,
    py: 25,
    js: 35
}

let arrow = anime.timeline() 

const fallDown = _ => {
    for (const lang of Object.keys(values)) {
        let skill = anime.timeline()
        let perc = values[lang]
        let val = (perc / 100) * 280
        let dur = perc < 40 ? perc * 50 : perc * 25
        let delay = perc < 40 ? 200 : 0
        skill
            .add({
                targets: `.skill-${lang} .skill-path`,
                d: [
                    { value: `M 10 10 L 10 10 L 290 10` },
                    { value: `M 10 10 L ${val} 45 L 290 10` }
                ],
                easing: [0.55, 0.085, 0.68, 0.53],
                duration: dur,
                delay: delay
            })
            .add({
                targets: `.skill-${lang} .skill-path`,
                d: [
                    { value: `M 10 10 L ${val} 50 L 290 10` },
                    { value: `M 10 10 L ${val} 40 L 290 10` },
                    { value: `M 10 10 L ${val} 50 L 290 10` },
                    { value: `M 10 10 L ${val} 43 L 290 10` },
                    { value: `M 10 10 L ${val} 53 L 290 10` },
                    { value: `M 10 10 L ${val} 51 L 290 10` },
                    { value: `M 10 10 L ${val} 50 L 290 10` }
                ],
                easing: [0, 0, .58, 1],
                duration: dur + 200,
                delay: delay
            })
    }
}
// fallDown()


arrow
    .add({
        targets: '.arrow',
        duration: 1600,
        left: '224px',
        top: '50px',
        easing: [0.55, 0.085, 0.68, 0.53],
        delay: 800
    })
    /*.add ({
        targets: '.arrow',
        duration: 2200,
        easing: [0, 0, .58, 1],
        transform: [
            {value: 'translateY(0px) rotate(0deg)'},
            {value: 'translateY(-10px) rotate(150deg)'},
            {value: 'translateY(10px) rotate(20deg)'},
            {value: 'translateY(-7px) rotate(165deg)'},
            {value: 'translateY(3px) rotate(170deg)'},
            {value: 'translateY(1px) rotate(175deg)'},
            {value: 'translateY(0px) rotate(179deg)'}
        ]
    })*/

const btnClose = document.querySelector('#close')
const popup = document.querySelector('.popup')
const popupContent = popup.querySelector('.popup-content')
const backgroundSVG = document.querySelector('.background-svg')
const common = {
    targets: '.popup-background',
    easing: 'easeInQuad',
    duration: 500,
    loop: false
}

const openPopup = _ => {
    popup.classList.add('active')
    backgroundSVG.style.zIndex = '2'
    anime({
        ...common,
        points: [
            // {value: '123,70 109,48 73,53 137,18'},
            { value: '200,100 0,100 0,0 200,0' }
        ]
    })
    fallDown()
}

btnClose.addEventListener('click', _ => {
    popup.classList.remove('active')
    let thePromise = anime({
        ...common,
        points: [
            // {value: '123,70 109,48 73,53 137,18'},
            { value: '100,50 100,50 100,50 100,50' }
        ]
    })
    let afterFinish = thePromise.finished.then(_ => {
        backgroundSVG.style.zIndex = '-1'
    })
})

document.querySelector('#dissect-button').addEventListener('click', _ => {
    document.querySelector('#brain-container').style.transform = 'scale(0)'
})