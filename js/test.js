// JQCLOUD WORD CUSTOMIZATION
var words = [
    { text: "Physics ⚛", weight: 10 },
    {
        text: "Coding 💻", weight: 9,
        handlers: {
            click: _ => { openPopup() }
        },
        html: { class: 'linked' }
    },
    { text: "Music 🎹", weight: 8.5 },
    { text: "Kerala 🌴", weight: 8.5, link: 'https://en.wikipedia.org/wiki/Kerala', html: { class: 'linked' } },
    { text: "Astronomy 🔭", weight: 8 },
    { text: "Web dev 🕸", weight: 7.9 },
    { text: "Star Watching 🌌", weight: 7.1 },
    { text: "Cycling 🚴", weight: 7.1 },
    { text: "Reading 🤓", weight: 7 },
    { text: "Bazinga 💥", weight: 6.4, link: 'https://twitter.com/bigbangtheory', html: { class: 'linked' } },
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

const fallDown = _ => {
    for (const lang of Object.keys(values)) {
        let skill = anime.timeline()
        let arrow = anime.timeline()
        let perc = values[lang]
        let val = (perc / 100) * 280
        let dur = perc < 40 ? perc * 50 : perc * 25
        let delay = perc < 40 ? 200 : 0
        
        // ANIME THE BAR
        skill
            .add({
                targets: `.skill-${lang} .skill-path`,
                easing: [0.55, 0.085, 0.68, 0.53],
                duration: dur,
                delay: delay,
                d: [
                    { value: `M 10 10 L 10 10 L 290 10` },
                    { value: `M 10 10 L ${val} 45 L 290 10` }
                ]
            })
            .add({
                targets: `.skill-${lang} .skill-path`,
                easing: [0, 0, .58, 1],
                duration: dur + 200,
                delay: delay,
                d: [
                    { value: `M 10 10 L ${val} 50 L 290 10` },
                    { value: `M 10 10 L ${val} 40 L 290 10` },
                    { value: `M 10 10 L ${val} 50 L 290 10` },
                    { value: `M 10 10 L ${val} 43 L 290 10` },
                    { value: `M 10 10 L ${val} 53 L 290 10` },
                    { value: `M 10 10 L ${val} 51 L 290 10` },
                    { value: `M 10 10 L ${val} 50 L 290 10` }
                ]
            })
        // ANIME THE LABEL
        arrow
            .add({
                targets: `.skill-${lang} .arrow`,
                duration: dur,
                delay: delay,
                easing: [0.55, 0.085, 0.68, 0.53],
                left: [
                    { value: '10px' },
                    { value: `${val}px` }
                ],
                top: [
                    { value: '10px' },
                    { value: '50px' }
                ],
            })
            .add({
                targets: `.skill-${lang} .arrow`,
                duration: dur + 200,
                easing: [0, 0, .58, 1],
                delay: delay,
                top: [
                    { value: '+=0px' },
                    { value: '+=-10px' },
                    { value: '+=10px' },
                    { value: '+=-7px' },
                    { value: '+=3px' },
                    { value: '+=1px' },
                    { value: '+=0px' },
                ]
            })

    }
}
// fallDown()

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