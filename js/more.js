// JQCLOUD WORD CUSTOMIZATION
var words = [
    { text: "Physics⚛", weight: 10 },
    {
        text: "Coding💻", weight: 9,
        handlers: {
            click: _ => { openPopup() }
        },
        html: { class: 'linked', title: 'Click Me' }
    },
    { text: "Music🎹", weight: 8.5, html: { class: 'linked image' }  },
    { text: "Kerala🌴", weight: 8.5, html: { class: 'linked image' } },
    { text: "Astronomy🔭", weight: 8 },
    { text: "Star Gazing ☄", weight: 7.1 },
    { text: "Books🤓", weight: 7.5, html: { class: 'linked image' } },
    { text: 'Star Wars🌌', weight: 7.1, html: { class: 'linked image' } },
    { text: 'Harry Potter⚡', weight: 7.5, html: { class: 'linked image' } },
    { text: 'Marvel🦸‍', weight: 6.8, html: { class: 'linked image' } },
    { text: "Bazinga💥", weight: 6.4, html: { class: 'linked image' } },
    
    
    // { text: "Web dev🕸", weight: 7.9 },
    // { text: "Cycling 🚴", weight: 7.1, html: { class: 'linked image' } },
    // { text: "Sleep💤", weight: 6.4 },
    // { text: "Mollywood😘", weight: 6.3 },
]

// RENDER CLOUD
const renderCloud = _ => {
    $('#cloud').jQCloud(words, {
        autoResize: true
    });
}

renderCloud() // LET IT RAIN ☁

const values = {
    py: 55,
    html: 95,
    css: 90,
    js: 30
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
    backgroundSVG.style.zIndex = '1000'
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

const navOpen = document.getElementById('nav-open')
const navClose = document.getElementById('nav-close')

navOpen.addEventListener('click', _ => {
    document.querySelector('.small-nav-links').classList.add('show')
    document.querySelector('.small-nav').classList.add('open')
})
navClose.addEventListener('click', _ => {
    document.querySelector('.small-nav-links').classList.remove('show')
    document.querySelector('.small-nav').classList.remove('open')
})