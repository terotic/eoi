$( document ).ready(function() {
    var len = 100;
    dataArr = [];
    for (var i = 0; i < len; i++) {
        dataArr.push(0);
    }
    var socket = io('http://ehd2016.azurewebsites.net');
    console.log(socket);
    socket.on('connection', function() {
        socket.emit('subscribe', 'muse0');
    })
    socket.on('data', function (data) {
        if(data.room === 'muse0') {
            //console.log("DAT");
            dataArr.push(parseInt(data.data[0]*100));
            dataArr.shift();
            //console.log(dataArr);
//        document.getElementById('log').innerHTML = JSON.stringify(data);
        }
    });
//document.getElementById('log').innerHTML();

    function line() {
        //console.log("line");
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.moveTo(0,0);
        ctx.beginPath();
        for (var i = 0; i < len; i++) {
            //console.log(dataArr[i]);
            ctx.lineTo(i*10, dataArr[i]);
        }
        ctx.stroke();
        setTimeout(line, 200);
        //console.log("line-end");
    }

    line();
});

