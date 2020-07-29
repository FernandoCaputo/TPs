/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let CantLamparas;
    let PrecioLampara = 35;
    let PrecioFinal;
    let PrecioParcial;
    let TipoLampara;
    let Descuento;
    let ImpuestoIIBB;

    ///////////Ejercicio A////////////////////////////////////////////////////////
    CantLamparas = parseFloat(document.getElementById("txtIdCantidad").value);
    TipoLampara = document.getElementById("Marca").value;

    if (CantLamparas >= 6) {
        PrecioParcial = (CantLamparas * PrecioLampara)
        Descuento = 0.50;
        PrecioFinal = (PrecioParcial - (PrecioParcial * Descuento)).toFixed(2);

        document.getElementById("txtIdprecioDescuento").value = `$${PrecioFinal}`;

    }
    /////////////Ejercicio B////////////////////////////////////////////////////////

    if (CantLamparas == 5 && TipoLampara == "ArgentinaLuz") {
        PrecioParcial = (CantLamparas * PrecioLampara)
        Descuento = 0.40;
        PrecioFinal = (PrecioParcial - (PrecioParcial * Descuento)).toFixed(2);

        document.getElementById("txtIdprecioDescuento").value = `$${PrecioFinal}`;
    }
    else if (CantLamparas == 5 && TipoLampara != "ArgentinaLuz") {
        PrecioParcial = (CantLamparas * PrecioLampara)
        Descuento = 0.30;
        PrecioFinal = (PrecioParcial - (PrecioParcial * Descuento)).toFixed(2);

        document.getElementById("txtIdprecioDescuento").value = `$${PrecioFinal}`;
    }
    //////////Ejercicio C//////////////////////////////////////////////////////////
    switch (CantLamparas) {
        case 4:
            if (TipoLampara == "ArgentinaLuz" || TipoLampara == "FelipeLamparas") {
                PrecioParcial = (CantLamparas * PrecioLampara)
                Descuento = 0.25;
                PrecioFinal = (PrecioParcial - (PrecioParcial * Descuento)).toFixed(2);

                document.getElementById("txtIdprecioDescuento").value = `$${PrecioFinal}`;
            }
            else {
                PrecioParcial = (CantLamparas * PrecioLampara)
                Descuento = 0.20;
                PrecioFinal = (PrecioParcial - (PrecioParcial * Descuento)).toFixed(2);

                document.getElementById("txtIdprecioDescuento").value = `$${PrecioFinal}`;
            }
            break;

    }
    ///////////////Ejercicio D /////////////////////////////////////////////////////////
    if (CantLamparas == 3 && TipoLampara == "ArgentinaLuz") {
        PrecioParcial = (CantLamparas * PrecioLampara)
        Descuento = 0.15;
        PrecioFinal = (PrecioParcial - (PrecioParcial * Descuento)).toFixed(2);

        document.getElementById("txtIdprecioDescuento").value = `$${PrecioFinal}`;
    }
    else if (CantLamparas == 3 && TipoLampara == "FelipeLamparas") {
        PrecioParcial = (CantLamparas * PrecioLampara)
        Descuento = 0.10;
        PrecioFinal = (PrecioParcial - (PrecioParcial * Descuento)).toFixed(2);

        document.getElementById("txtIdprecioDescuento").value = `$${PrecioFinal}`;
    }
    else if (CantLamparas == 3 && TipoLampara != "FelipeLamparas" && TipoLampara != "ArgentinaLuz") {
        PrecioParcial = (CantLamparas * PrecioLampara)
        Descuento = 0.5;
        PrecioFinal = (PrecioParcial - (PrecioParcial * Descuento)).toFixed(2);

        document.getElementById("txtIdprecioDescuento").value = `$${PrecioFinal}`;
    }
    ///////////Ejercicio E ////////////////////////////////////////////////////////    
    if (PrecioFinal > 120) {
        ImpuestoIIBB = (PrecioFinal * 0.10);
        PrecioFinal = (PrecioFinal + ImpuestoIIBB); //ACA SI AGREGO EL  se frena y no me muestra la alerta!
        alert(`Usted pago $${PrecioFinal}, siendo $${ImpuestoIIBB} el impuesto que se pagó.`);

    }

    if (CantLamparas > 0 && CantLamparas <= 2) {
        PrecioParcial = (CantLamparas * PrecioLampara);
        document.getElementById("txtIdprecioDescuento").value = `$${PrecioParcial}`;

    }





}
