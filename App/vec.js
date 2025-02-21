const parameters = {
  "prerelease": false,
  "width": 800,
  "height": 600,
  "showToolBar": false, // Ocultar la barra de herramientas
  "borderColor": null,
  "showMenuBar": false, // Ocultar la barra de menú
  "showAlgebraInput": false, // Ocultar la barra de entrada algebraica
  "showResetIcon": true,
  "enableLabelDrags": false,
  "enableShiftDragZoom": true,
  "enableRightClick": false,
  "capturingThreshold": null,
  "showToolBarHelp": false,
  "errorDialogsActive": true,
  "useBrowserForJS": false,
  "material_id": "fqxvrxb5" // ID de tu archivo de GeoGebra
};

// Crear la aplicación GeoGebra
const applet = new GGBApplet(parameters, true);

// Inyectar la aplicación en el contenedor cuando la página se cargue
window.onload = function () {
  applet.inject('vec');
};