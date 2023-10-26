import { Button } from "antd";
import { jsPDF } from "jspdf";
import 'jspdf-autotable'

export default function PDF() {

    const crearPDF = () => {
        var doc = new jsPDF();

        // Configura el tamaño de fuente deseado
        doc.setFontSize(8);

        // Define el ancho y alto de la caja
        var cajaWidth = 80; // Ancho de la caja en puntos
        var cajaWidth2 = 60; // Ancho de la caja en puntos
        // var cajaHeight = 20; // Alto de la caja en puntos
        var texto = "INSUMOS HOSPITALARIOS ALPHA SA DE CV IHA1807204Z6 7A PONIENTE 336 LOCAL A COLONIA CENTRO, CP:29000, TUXTLA GUTIERREZ, CHIAPAS, México.";

        // Divide el texto en líneas que quepan dentro de la caja
        var lineas = doc.splitTextToSize(texto, cajaWidth);
        var lineas2 = doc.splitTextToSize(texto, cajaWidth2);

        doc.addImage("/Logo.png", "PNG", 10, 10, 42, 16);

        doc.text("Emisor:", 53, 10);
        doc.setFontSize(7);
        doc.text(lineas, 53, 14)

        doc.setFontSize(8);
        doc.text("Lugar de Expedición:", 53, 30);
        doc.setFontSize(7);
        doc.text("29000  Ziltlaltépec de Trinidad Sánchez Santos", 81, 30);

        doc.setFontSize(8);
        doc.text("Fecha:", 53, 35);
        doc.setFontSize(7);
        doc.text("28/12/2020", 63, 35);

        doc.setFontSize(8);
        doc.text("Cliente:", 140, 10);
        doc.text(lineas2, 140, 14)
        // doc.text("This is times italic.", 146, 14);

        const colums = ['CANTIDAD', 'UNIDAD', 'PRODUCTO', 'PRECIO', 'IMPORTE'];
        const data = Array.from({ length: 1000 }).map((_, i) => ({
        i
        }));

        doc.autoTable({
            startY: 39,
            head: [colums],
            body: data
        })

        // doc.save(`Remisiones_ALPHA.pdf`);
        window.open(doc.output('bloburl'), '_blank');

    }
    return (
        <Button onClick={crearPDF} >PDF</Button>
    )
}