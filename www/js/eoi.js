$( document ).ready(function() {
    var len = 100;
    dataArr0 = [];
    dataArr1 = [];
    for (var i = 0; i < len; i++) {
        dataArr0.push(0);
        dataArr1.push(0);
    }

    var socket = io('http://ehd2016.azurewebsites.net');
    console.log(socket);
    socket.on('connection', function() {
        socket.emit('subscribe', 'muse0');
        socket.emit('subscribe', 'muse1');
    })
    socket.on('data', function (data) {
        if(data.room === 'muse0') {
            dataArr0.push(parseInt(data.data[0]*100+300));
            dataArr0.shift();
        }
        if(data.room === 'muse1') {
            dataArr1.push(parseInt(data.data[0]*100+300));
            dataArr1.shift();
        }
    });
//document.getElementById('log').innerHTML();

    function line() {
        //console.log("line");
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = "#FF0000";
        ctx.moveTo(0,0);
        ctx.beginPath();
        for (var i = 0; i < len; i++) {
            //console.log(dataArr[i]);
            ctx.lineTo(i*10, dataArr0[i]);
        }
        ctx.stroke();

        ctx.strokeStyle = "#0000FF";
        ctx.moveTo(0,0);
        ctx.beginPath();
        for (var i = 0; i < len; i++) {
            ctx.lineTo(i*10, dataArr1[i]);
        }
        ctx.stroke();
        setTimeout(line, 100);
        //console.log("line-end");
    }

    line();
});

