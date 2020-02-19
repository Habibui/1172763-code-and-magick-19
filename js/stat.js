'use strict';

var renderStatisticsCloud = function (ctx, x, y, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 420, 270);
  ctx.restore();
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderStatisticsCloud(ctx, 100 + 10, 10 + 10, 'rgba(0, 0, 0, 0.3)');
  renderStatisticsCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  ctx.fillText('Ура вы победили!', 100 + 20, 10 + 30);
  ctx.fillText('Список результатов:', 100 + 20, 10 + 50);

  for (var i = 0; i < players.length; ++i) {
    ctx.fillText(players[i], 100 + 40 + ((40 + 50) * i), 10 + 270 - 20);
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(' + 240 + ',' + 100 * Math.random() + '%, 50%)';
    ctx.fillRect(100 + 40 + ((40 + 50) * i), 10 + 270 - 20 - 20 - (150 * times[i]) / maxTime, 40, (150 * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.ceil(times[i]), 100 + 40 + ((40 + 50) * i), 10 + 270 - 20 - 20 - 10 - (150 * times[i]) / maxTime);
  }
};
