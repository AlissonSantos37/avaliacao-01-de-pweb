function converterMedidas(metros) {
    const centimetros = metros * 100;
    const milimetros = metros * 1000;
    const quilometros = metros / 1000;

    console.log(`Metros: ${metros}`);
    console.log(`Centímetros: ${centimetros}`);
    console.log(`Milímetros: ${milimetros}`);
    console.log(`Quilômetros: ${quilometros.toLocaleString('pt-BR')}`);
}
const valorEmMetros = 1200;
converterMedidas(valorEmMetros);
