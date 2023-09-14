export const productos = [
  {
    id: 1,
    nombre: "Procesador AMD RYZEN 5 3400g",
    precio: 85000,
    imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/sERhHXQaSrVoa7WsqNpd/imagen",
    categoria:"procesador"
  },
  {
    id: 2,
    nombre: "Procesador Intel Core i5 10400 4.3GHz",
    precio: 70000,
    imagen:"https://mexx-img-2019.s3.amazonaws.com/37557_1.jpeg",
    categoria:"procesador"
  },
  {
    id: 3,
    nombre: "Memoria 8gb",
    precio: 7000,
    imagen:"https://www.fullh4rd.com.ar/img/productos/4/memoria-8gb-ddr4-2666-kingston-value-0.jpg",
    categoria:"memoria"
  },
  {
    id: 4,
    nombre: "Memoria 4gb",
    precio: 5000,
    imagen:"https://http2.mlstatic.com/D_NQ_NP_827188-MLA54980150448_042023-O.webp",
    categoria:"memoria"
  },
  {
    id: 5,
    nombre: "Disco Solido 240gb",
    precio: 10000,
    imagen:"https://diamondsystemar.vtexassets.com/arquivos/ids/155464-1200-auto?v=638013502797700000&width=1200&height=auto&aspect=true",
    categoria:"disco"
  },
  {
    id: 6,
    nombre: "Disco Solido 480gb",
    precio: 17000,
    imagen:"https://www.comeros.com.ar/wp-content/uploads/2019/05/disco-solido-ssd-kingston-sa400s37-480gb-sata-sa400s37480g-S_644810-MLM26701089664_012018-F.jpg",
    categoria:"disco"
  },
  {
    id: 7,
    nombre: "Placa Mother Asus Z490-P Prime 1200",
    precio: 90000,
    imagen:"https://www.asus.com/media/global/products/rrlkpegpwheufjes/P_setting_xxx_0_90_end_500.png",
    categoria:"placa"
  },
  {
    id: 8,
    nombre: "Placa de Video Asrock AMD Radeon RX 550",
    precio: 100000,
    imagen:"https://app.contabilium.com/files/explorer/7026/Productos-Servicios/concepto-7981793.jpg",
    categoria:"placa"
  }
];


JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));

