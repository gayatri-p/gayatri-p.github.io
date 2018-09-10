// REMOVE BRAIN
$('#dissect-button').click(_ => {
    $('#brain-container').hide(400)
})
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
    { text: "Kerala 🌴", weight: 8.5, link: 'https://en.wikipedia.org/wiki/Kerala', html: { class: 'linked' } },
    { text: "Astronomy 🔭", weight: 8 },
    { text: "Web dev 🕸", weight: 7.9 },
    { text: "Star Watching 🌌", weight: 7.1 },
    { text: "Cycling 🚴", weight: 7.1 },
    { text: "Reading 🤓", weight: 7 },
    { text: "Bazinga 💥", weight: 6.4, link: 'https://en.wikipedia.org/wiki/The_Big_Bang_Theory',html: { class: 'linked' } },
    { text: "Sleep 💤", weight: 6.4 },
    { text: "Mollywood 😘", weight: 6.3 },
];
// RENDER CLOUD
const renderCloud = _ => {
    $('#cloud').jQCloud(words, {
        autoResize: true
    });
}
// OPENING N CLOSINGPOPUP
const openPopup = _ => {
    $('.popup').addClass('show')
    $('.skill').addClass('show')
}
const closePopup = _ => { 
    $('.popup').removeClass('show')
    $('.skill').removeClass('show')
}
renderCloud() // LET IT RAIN ☁