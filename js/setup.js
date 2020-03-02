'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var getRandomElement = function (array) {
  return array[getRandomInt(array.length)];
};

var getWizards = function (amount) {
  var wizards = [];

  for (var i = 0; i < amount; ++i) {
    wizards.push({
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS),
    });
  }

  return wizards;
};

var renderWizard = function (wizard, similarWizardTemplate) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var placeWizards = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var wizards = getWizards(WIZARDS_AMOUNT);

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i], similarWizardTemplate));
  }
  similarListElement.appendChild(fragment);

  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

placeWizards();
