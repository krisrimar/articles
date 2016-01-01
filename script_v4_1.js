//v4.1 release notes:
//Reduced code size for adding html elements
//Added 0s to date and time stamps
//Added image URL validation (not completed yet)

var id = 0;

function createArticle() {

    //get values

    'use strict';
    
    var artTitle = document.getElementById('artTitle').value,
        artText = document.getElementById('artText').value,
        artImage = document.getElementById('artImage').value;

    //set date

    function addDate() {
        var stamp = new Date(),
            date = stamp.getDate().toString();
        date.length === 1 ? date = '0' + date : date;
        var month = (stamp.getMonth() + 1).toString();
        month.length === 1 ? month = '0' + month : month;
        var year = stamp.getFullYear().toString();
        var hours = stamp.getHours().toString();
        hours.length === 1 ? hours = '0' + hours : hours;
        var minutes = stamp.getMinutes().toString();
        minutes.length === 1 ? minutes = '0' + minutes : minutes;

        return '<p>' + date + '.' + month + '.' + year + ' at ' + hours + ':' + minutes + '</p>';
    }

    //if value of article title 0 - error

    if (artTitle === "" || artTitle === null) {
        window.alert("Please enter the title of the article");
        return false;
    }

    //if value of article text 0 - error

    if (artText === "" || artText === null) {
        window.alert("Please enter the text of the article");
        return false;
    }

    //validate image input

    var image = '';

    if (artImage !== '') {
        var ext = /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|gif|png)$/;
        if (!artImage.match(ext)) {
            window.alert("Please enter correct image URL");
            return false;
        } else {
            image = '<img style="width:100%; max-width:500px;" src=\"' + artImage + '\" />';
        }
    }

    //create text nodes for elments

    var article = '<div id=\"article_' + id + '\" ><h1>' + artTitle + '</h1><p>' + addDate() + '</p><p>' + artText + '</p>' + image + '<br /><button onclick=\"deleteArticle(article_' + id + ')\" >Delete</button>';

    id++;

    document.getElementById('articles').innerHTML += article;

    document.getElementById('artTitle').value = "";
    document.getElementById('artText').value = "";
    document.getElementById('artImage').value = "";
}

function deleteArticle(id) {
    'use strict';
    document.getElementById('articles').removeChild(id);
}













