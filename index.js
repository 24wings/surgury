function dragDoctor(doctorDom) {
    var doctorInfo = $(doctorDom).data('doctorInfo');
    event.dataTransfer.setData("text/plain", JSON.stringify(doctorInfo));
    console.log(doctorInfo);
}

function dropDoctor(ev) {
    ev.preventDefault();
    var doctorInfo = ev.dataTransfer.getData("doctorInfo");
    console.log(doctorInfo);
}

function allowDrop(ev) {
    ev.preventDefault();
}


$(function () {
    $.ajax('data/getSurgery.json', {
        method: 'GET',
        success: function (rtn) {
            var surgerys = rtn.data;
            surgerys.forEach(function (surgery) {
                $.tmpl('<tr draggable="true" ondragstart="dragDoctor(this)" >' +
                    '    <td>${time}</td>' +
                    '   <td>${department}</td>' +
                    '    <td>${doctor}</td>' +
                    '    <td>${surgery}</td>' +
                    '</tr>', surgery).appendTo('#surgerys tbody');
            });
        }
    })
});