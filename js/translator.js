$(document).ready(function () {

    var language = sessionStorage.getItem('language');

    $('#english').on('click', function () {
        sessionStorage.setItem('language', 'enUS');
        window.location.reload();
    });

    $('#spanish').on('click', function () {
        sessionStorage.setItem('language', 'esES');
        window.location.reload();
    });

    if (language != undefined) {
        setLanguageByLang(language)
    }
    else {
        sessionStorage.setItem('language', 'esES');
        language = sessionStorage.getItem('language');
        setLanguageByLang(language);
    }
});

function setLanguageByLang(lang) {

    var dictionary = '{'
        + '"translations": ['
        + '{'
        + '"class": "trl-webTitle",'
        + '"enUS": "Adri\u00E1n Quir\u00F3s Pascual - Portfolio",'
        + '"esES": "Adri\u00E1n Quir\u00F3s Pascual - Portafolio"'
        + '},'
        + '{'
        + '"class": "nothing",'
        + '"enUS": "",'
        + '"esES": ""'
        + '}'
        + ']'
        + '}';

    var data = JSON.parse(dictionary);

    for (var i in data.translations) {
        if (lang === "enUS") {
            $('.' + data.translations[i].class).text(data.translations[i].enUS);
        }
        else {
            $('.' + data.translations[i].class).text(data.translations[i].esES);
        }
    }
}
