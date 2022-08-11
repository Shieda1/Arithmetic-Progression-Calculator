// https://calculator.swiftutors.com/arithmetic-progression-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const arithmeticProgressionRadio = document.getElementById('arithmeticProgressionRadio');
const firstTermintheSeriesRadio = document.getElementById('firstTermintheSeriesRadio');
const lastTermintheSeriesnthtermRadio = document.getElementById('lastTermintheSeriesnthtermRadio');
const commonDifferenceRadio = document.getElementById('commonDifferenceRadio');

let arithmeticProgression;
let firstTermintheSeries = v1;
let lastTermintheSeriesnthterm = v2;
let commonDifference = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

arithmeticProgressionRadio.addEventListener('click', function() {
  variable1.textContent = '(a) First Term in the Series';
  variable2.textContent = '(n) Last Term in the Series, nth term';
  variable3.textContent = '(d) Common Difference';
  firstTermintheSeries = v1;
  lastTermintheSeriesnthterm = v2;
  commonDifference = v3;
  result.textContent = '';
});

firstTermintheSeriesRadio.addEventListener('click', function() {
  variable1.textContent = 'Arithmetic Progression';
  variable2.textContent = '(n) Last Term in the Series, nth term';
  variable3.textContent = '(d) Common Difference';
  arithmeticProgression = v1;
  lastTermintheSeriesnthterm = v2;
  commonDifference = v3;
  result.textContent = '';
});

lastTermintheSeriesnthtermRadio.addEventListener('click', function() {
  variable1.textContent = 'Arithmetic Progression';
  variable2.textContent = '(a) First Term in the Series';
  variable3.textContent = '(d) Common Difference';
  arithmeticProgression = v1;
  firstTermintheSeries = v2;
  commonDifference = v3;
  result.textContent = '';
});

commonDifferenceRadio.addEventListener('click', function() {
  variable1.textContent = 'Arithmetic Progression';
  variable2.textContent = '(a) First Term in the Series';
  variable3.textContent = '(n) Last Term in the Series, nth term';
  arithmeticProgression = v1;
  firstTermintheSeries = v2;
  lastTermintheSeriesnthterm = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(arithmeticProgressionRadio.checked)
    result.textContent = `Arithmetic Progression = ${computeArithmeticProgression().toFixed(2)}`;

  else if(firstTermintheSeriesRadio.checked)
    result.textContent = `First Term in the Series = ${computeFirstTermintheSeries().toFixed(2)}`;

  else if(lastTermintheSeriesnthtermRadio.checked)
    result.textContent = `Last Term in the Series, nth term = ${computeLastTermintheSeriesnthterm().toFixed(2)}`;

  else if(commonDifferenceRadio.checked)
    result.textContent = `Common Difference = ${computeCommonDifference().toFixed(2)}`;
})

// calculation

function computeArithmeticProgression() {
  return Number(firstTermintheSeries.value) + (Number(lastTermintheSeriesnthterm.value) - 1) * Number(commonDifference.value);
}

function computeFirstTermintheSeries() {
  return Number(arithmeticProgression.value) - ((Number(lastTermintheSeriesnthterm.value) - 1) * Number(commonDifference.value));
}

function computeLastTermintheSeriesnthterm() {
  return ((Number(arithmeticProgression.value) - Number(firstTermintheSeries.value)) / Number(commonDifference.value)) + 1;
}

function computeCommonDifference() {
  return (Number(arithmeticProgression.value) - Number(firstTermintheSeries.value)) / (Number(lastTermintheSeriesnthterm.value) - 1);
}