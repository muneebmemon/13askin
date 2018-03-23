$(document).ready(function () {
    //for colorpicker on add page 
    $('#color').colorpicker({});
    $('#color2').colorpicker({});
    $(function () {
        $(":file").change(function () {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = imageIsLoaded;
                reader.readAsDataURL(this.files[0]);
            }
        });
    });

    function imageIsLoaded(e) {
        $('#myImg').attr('src', e.target.result);
    };

    // $("#scoopFill").css({
    //     fill: "#db5858"
    // });

    $('#color').colorpicker().on('changeColor', function (ev) {
        // var fillColor = ev.color;
        $("#scoopFill").css({
            fill: ev.color
        });
    });
    $('#color2').colorpicker().on('changeColor', function (ev) {
        // var fillColor = ev.color;
        $("#coneFill").css({
            fill: ev.color
        });
    });
    //for saving icecream to database 
  //console.log($("#color"));
  //console.log($("#save"));
    $("#save").click(function (event) {
        event.preventDefault();
        // console.log("save");
        var icecreamName = $("#icecreamName")
        var coneColor = $("#color");
        var scoopColor = $("#color2");
        var desc = $("#desc")
        //save canvas to URL 
        var canvas = $("#canvas")
        console.log('canvas pass')
        var dataURL = canvas[0].toDataURL();
        console.log('dataurl: ', dataURL)
        //console.log(icecream_nameInput.val());
        var icecreamData = {
            icecream_name: icecreamName.val().trim(),
            cone_color: coneColor.val().trim(),
            scoop_color: scoopColor.val().trim(),
            description: desc.val().trim(),
            canvas: dataURL
        };
        console.log(icecreamData)
        //console.log('loginform submit icecreamData: ', icecreamData)
        // console.log(icecreamData.icecream_name);
        // console.log(icecreamData);
        if (!icecreamData.icecream_name || !icecreamData.cone_color || !icecreamData.scoop_color || !icecreamData.description || !icecreamData.canvas) {
            return;
        }

        //If we have an icecream_name and cone_color we run the loginUser function and clear the form
        saveIcecream(icecreamData.icecream_name, icecreamData.cone_color, icecreamData.scoop_color, icecreamData.description, icecreamData.canvas);
        icecreamName.val("");
        coneColor.val("");
        scoopColor.val("");
        desc.val("");
    });

    //loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function saveIcecream(icecream_name, cone_color, scoop_color, description, canvas) {

        $.post("/api/createicecreams", {
            icecream_name: icecream_name,
            cone_color: cone_color,
            scoop_color: scoop_color,
            description: description,
            canvas: canvas,
        })
            .then(function (data) {
            // console.log(data)
            window.location.replace('/profile');
            // If there's an error, log the error
            })
        .error(function(err) {
        console.log(err);
        });
        }
})