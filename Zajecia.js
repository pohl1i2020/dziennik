const form = document.querySelector('form');
const data = document.querySelector('#data');
const tematy = document.querySelector('#tematy');
const sprawozdanie = document.querySelector('#sprawozdanie');
const iloscgodzin = document.querySelector('#ilosc_godzin');
const finished = document.querySelector('#finished');
const skillLevel = document.querySelector('#skill-level');
const display = document.querySelector('#display-dziennik');
const greenBtn = document.querySelector('#green-button');
const redBtn = document.querySelector('#red-button');
greenBtn.addEventListener('click', (evt) => {
	evt.preventDefault();
	const opiekun = document.querySelector('input[name="opiekun"]:checked');
	const completed = document.querySelector('#completed:checked');
	if (completed == null) {
		complete = '';
	} else {
		complete = completed.value;
	}
	const displayDziennik = `
  <fieldset>
  <legend>Dane Ucznia i Praktyk</legend>
  <p>Praktyki odbyte w dniu: <strong><font color="#00FF00">${data.value}</font></strong>.</p>
  <p>Tego dnia opracowany zosotał temat: <strong><font color="#00FF00">${tematy.value}</font></strong>.</p>
  <p>Praktyki nadzorował: <strong><font color="#00FF00">${opiekun.value}</font></strong>.</p>
  <p>Liczba zrealizowanych godzin: <strong><font color="#00FF00">${iloscgodzin.value}</font></strong>.</p>
  <p>Czy praktyka została zrealizowana: <strong><font color="#00FF00">${complete}</font></strong>.</p>
  <p>Materiał opanowany na: <strong><font color="#00FF00">${skillLevel.value}</font></strong>.</p>
  <p>Sprawozdanie: <strong><font color="#00FF00">${sprawozdanie.value}</font></strong>.</p>
  </fieldset>
  `;
	display.innerHTML = displayDziennik;
});

redBtn.addEventListener('click', (evt) => {
	evt.preventDefault();
	const displayDziennik = `
  <fieldset>
  <legend>Dane Ucznia i Praktyk</legend>
  <p>Praktyki odbyte w dniu: <strong><font color="#00FF00"></font></strong>.</p>
  <p>Tego dnia opracowany zosotał temat: <strong><font color="#00FF00"></font></strong>.</p>
  <p>Praktyki nadzorował: <strong><font color="#00FF00"></font></strong>.</p>
  <p>Liczba zrealizowanych godzin: <strong><font color="#00FF00"></font></strong>.</p>
  <p>Czy praktyka została zrealizowana: <strong><font color="#00FF00"></font></strong>.</p>
  <p>Materiał opanowany na: <strong><font color="#00FF00"></font></strong>.</p>
  <p>Sprawozdanie: <strong><font color="#00FF00"></font></strong>.</p>
  </fieldset>
  `;
	display.innerHTML = displayDziennik;
});
