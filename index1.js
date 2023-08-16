let lastHeader = '';
addBulletPoint('JavaScript', 'variabler');
addBulletPoint('JavaScript', 'if');
addBulletPoint('JavaScript', 'funksjoner');
addBulletPoint('Nøkkelkompetanser', 'styrker');
addBulletPoint('Nøkkelkompetanser', 'trygghet');
addBulletPoint('Nøkkelkompetanser', 'growth mindset');
addBulletPoint('Terje', 'blablab');
function addBulletPoint(header, text) {
    let headerHtml = '';
    if (header != lastHeader) {
        headerHtml = `<b>${header}</b><br/>`;
    }
    document.getElementById('app').innerHTML += `
        ${headerHtml}
        <li>${text}</li>
        `;
    lastHeader = header;
}