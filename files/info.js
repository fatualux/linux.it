jQuery(document).ready(function($) {
    for(var i = 0; i < associations.length; i++) {
        var e = associations[i];
        var marker = L.marker(e.coords, {icon: associationIcon}).addTo(mymap);
        marker.bindPopup('<a href="' + e.url + '"><img class="img-fluid" src="' + e.image + '" loading="lazy"></a>');
    }

    for(var i = 0; i < sections.length; i++) {
        var e = sections[i];
        var marker = L.marker(e.coords, {icon: sectionIcon}).addTo(mymap);
        marker.setZIndexOffset(1000 + i);
        marker.bindPopup('<a href="/sezionilocali/' + e.city + '">Italian Linux Society - Sezione Locale di ' + e.label + '</a>');
    }
});
