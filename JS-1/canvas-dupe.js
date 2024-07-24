{/* <canvas id="myCanvas" width="300" height="150" style="border:1px solid #000000;"></canvas> */}

  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');

  // Draw a line with miter join and butt cap
  ctx.lineWidth = 10;
  ctx.lineJoin = 'miter';
  ctx.lineCap = 'butt';
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(100, 100);
  ctx.lineTo(10, 100);
  ctx.stroke();

  // Draw a line with round join and round cap
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(110, 10);
  ctx.lineTo(200, 100);
  ctx.lineTo(110, 100);
  ctx.stroke();

  // Draw a line with bevel join and square cap
  ctx.lineJoin = 'bevel';
  ctx.lineCap = 'square';
  ctx.beginPath();
  ctx.moveTo(210, 10);
  ctx.lineTo(300, 100);
  ctx.lineTo(210, 100);
  ctx.stroke();
