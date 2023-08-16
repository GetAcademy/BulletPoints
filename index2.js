let lastHeader = '';
addBulletPoint('JavaScript', 'variabler');
addBulletPoint('JavaScript', 'if');
addBulletPoint('JavaScript', 'funksjoner');
addBulletPoint('Nøkkelkompetanser', 'styrker');
addBulletPoint('Nøkkelkompetanser', 'trygghet');
addBulletPoint('Nøkkelkompetanser', 'growth mindset');
addBulletPoint('Terje', 'blablab');
function addBulletPoint(header, text) {
    document.getElementById('app').innerHTML += `
        ${getHeader(header)}
        <li>${text}</li>
        `;
    lastHeader = header;
}

function getHeader(header) {
    if (header != lastHeader) {
        return `<b>${header}</b><br/>`;
    }
    return '';
}
