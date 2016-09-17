function toggleChevron(e) {
    $(e.target)
        .prev('.publication-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
}
$('#publicationContainer').on('hidden.bs.collapse', toggleChevron);
$('#publicationContainer').on('shown.bs.collapse', toggleChevron);
