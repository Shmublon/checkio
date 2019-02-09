function betweenMarkers(text, begin, end) {
    if (text.indexOf(end) !== -1 && text.indexOf(begin) > text.indexOf(end)) {
        return '';
    }
    begin = begin.replace("[", "\\[");
    begin = begin.replace("]", "\\]");
    end = end.replace("[", "\\[");
    end = end.replace("]", "\\]");

    let regex = new RegExp('.*' + begin + '(.*)' + end + '.*');
    let regex1 = new RegExp('.*' + begin + '(.*).*');
    let regex2 = new RegExp('(.*)' + end + '.*');
    text = text.replace(regex, "$1");
    text = text.replace(regex1, "$1");
    text = text.replace(regex2, "$1");
    return text;
}

console.log(betweenMarkers("No [b]hi","[b]","[/b]"));