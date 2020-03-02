'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BOTTOM_FONT_GAP = 20;
var TOP_FONT_GAP = 10;
var FIRST_GAP = 40;
var REGULAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
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
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);
  var firstColumnX = CLOUD_X + FIRST_GAP;
  var regularWidth = BAR_WIDTH + REGULAR_GAP;
  var ColumnY = CLOUD_Y + CLOUD_HEIGHT - BOTTOM_FONT_GAP;
  var resultColumn = (BAR_HEIGHT * times[i]) / maxTime;

  ctx.fillText('Ура вы победили!', CLOUD_X + 20, CLOUD_Y + 30);
  ctx.fillText('Список результатов:', CLOUD_X + 20, CLOUD_Y + 50);

  for (var i = 0; i < players.length; ++i) {
    ctx.fillText(players[i], firstColumnX + ((regularWidth) * i), ColumnY);
    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(' + 240 + ',' + 100 * Math.random() + '%, 50%)';
    ctx.fillRect(firstColumnX + ((regularWidth) * i), ColumnY - BOTTOM_FONT_GAP - resultColumn, BAR_WIDTH, resultColumn);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.ceil(times[i]), firstColumnX + ((regularWidth) * i), ColumnY - BOTTOM_FONT_GAP - TOP_FONT_GAP - resultColumn);
  }
};
