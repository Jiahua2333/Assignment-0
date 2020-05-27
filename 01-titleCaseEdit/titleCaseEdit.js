function titleCaseEdit(title) {
    // Insert code here;
    title = title.split(" ");

    for (let i = 0, x = title.length; i < x; i++) {
        title[i] = title[i][0].toUpperCase() + title[i].substr(1);
    }

    return title.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;