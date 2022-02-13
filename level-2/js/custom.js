$(document).ready(function () {
    $('[data-toggle="tooltip"]').attr('title', () => {
        const wordsArray = ["Click me!", "Check me!", "I\'m the Button!"];
        return wordsArray[Math.floor(Math.random() * wordsArray.length)];
    }).tooltip('toggle').tooltip('hide');
});