// REMOVE BRAIN
$('#dissect-button').click(_ => {
    $('#brain-container').hide(400)
})
// JQCLOUD WORD CUSTOMIZATION
var words = [
    {
        text: "Physics ⚛", weight: 10,
        handlers: {
            click: _ => { openPhysicsPopup() }
        },
        html: { class: 'has-popup' }
    },
    {
        text: "Coding 💻", weight: 9,
        handlers: {
            click: _ => { openCodePopup() }
        },
        html: { class: 'has-popup' }
    },
    { text: "Music 🎹", weight: 8.5 },
    { text: "Kerala 🌴", weight: 8.5, link: 'https://en.wikipedia.org/wiki/Kerala' },
    { text: "Astronomy 🔭", weight: 8 },
    { text: "Web dev 🕸", weight: 7.9 },
    { text: "Star Watching 🌌", weight: 7.1 },
    { text: "Cycling 🚴", weight: 7.1 },
    { text: "Bazinga 💥", weight: 6.4, link: 'https://en.wikipedia.org/wiki/The_Big_Bang_Theory' },
    { text: "Sleep 💤", weight: 6.4 },
    { text: "Mollywood 😘", weight: 6.3 },
    { text: "School 😋", weight: 6.2 },
];
// RENDER CLOUD
const renderCloud = _ => {
    $('#cloud').jQCloud(words, {
        autoResize: true
    });
}
// OPENING POPUPS
const openPhysicsPopup = _ => { $('.popup-physics').removeClass('closed') }
const openCodePopup = _ => { $('.popup-coding').removeClass('closed') }
const openTravelPopup = _ => { $('.popup-travel').removeClass('closed') }
// CLOSING POPUPS
const closePopup = i => { $(i.parentNode).addClass('closed') }
renderCloud()