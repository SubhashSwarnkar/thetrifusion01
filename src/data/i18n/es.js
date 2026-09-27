import { localeShell } from "./ui";
import { esPostsRest } from "./es/posts-rest";
import { esPostsRest2 } from "./es/posts-rest2";
import { esService } from "./es/service";

const ui = {
  language: "Idioma",
  home: "Inicio",
  blog: "Blog",
  services: "Servicios",
  contact: "Contacto",
  privacy: "Privacidad",
  siteNav: "Navegación del sitio",
  breadcrumbsLabel: "Ruta de navegación",
  published: "Publicado",
  updated: "Actualizado",
  readTime: "{n} min de lectura",
  author: "Equipo de TheTriFusion",
  ctaKicker: "Siguiente paso",
  ctaTitle: "¿Quiere esto para su empresa?",
  ctaBody:
    "Trifusion Infotech Private Limited trabaja desde Jaipur y entrega a distancia en India y en otros países. Hay facturación con GST. Cuéntenos el alcance y le respondemos por escrito.",
  ctaContact: "Contactar",
  ctaDiscuss: "Hablar del proyecto",
  categories: {
    webdev: "Desarrollo web",
    mobile: "Móvil",
    casestudy: "Caso de estudio",
    ai: "Inteligencia artificial",
  },
};

const posts = {
  "ev-charging-app-ocpi-ocpp-guide": {
    title:
      "Guía de desarrollo de apps de carga para vehículos eléctricos: OCPI, OCPP y arquitectura de roaming eMSP",
    metaTitle: "App de carga EV | Guía OCPI y OCPP | TheTriFusion",
    description:
      "Guía técnica de apps de carga para vehículos eléctricos: conectividad OCPP 1.6J/2.0.1, roaming OCPI 2.2.1 y arquitectura eMSP, con lo aprendido en PlugOne (plugone.in).",
    content: `
      <h2>Por qué una app de carga falla si no tiene arquitectura OCPP y OCPI</h2>
      <p>Una app de carga para vehículos eléctricos es mucho más que un mapa de pines. El cargador habla con el servidor mediante <strong>OCPP (Open Charge Point Protocol 1.6J / 2.0.1)</strong> para telemetría, arranque y parada remotos, reparto de potencia y valores del medidor. El roaming y la sincronización de tarifas entre redes de eMSP y de CPO dependen de <strong>OCPI (Open Charge Point Interface 2.2.1)</strong>. Sin esos dos protocolos no hay disponibilidad en tiempo real, reserva en vivo ni facturación automática: el directorio se queda viejo en cuanto cambia el estado real del conector.</p>
      <h3>PlugOne: un producto en producción</h3>
      <p>TheTriFusion construyó <a href="https://plugone.in/" target="_blank" rel="noopener noreferrer">PlugOne</a>, una plataforma de carga en India con descubrimiento de estaciones, estado del conector (disponible, preparando, cargando, en falla), reservas de horario, telemetría unificada de CPO y eMSP y una billetera en la app. El <a href="/portfolio/plugone-ev-charging-platform">caso PlugOne</a> muestra la arquitectura. No es una ficha hipotética: el sitio está en línea y se puede abrir.</p>
      <h3>OCPP en la práctica: qué hace el sistema central</h3>
      <p>OCPP viaja por un WebSocket persistente entre cada punto de carga y el software central (CSMS). Ese servidor mantiene la conexión abierta, procesa BootNotification y Heartbeat para saber que el equipo sigue vivo, envía RemoteStartTransaction y RemoteStopTransaction desde la app del conductor y registra MeterValues para cobrar la energía con precisión. OCPP 1.6-J sigue siendo la versión más común en el hardware instalado en India. OCPP 2.0.1 añade el modelo de dispositivo y perfiles de carga inteligente, útiles cuando la red crece. Un CSMS hecho para una sola versión no entiende la otra en silencio: la negociación tiene que ser explícita.</p>
      <h3>OCPI en la práctica: cómo se liquida el roaming</h3>
      <p>El conductor no debería necesitar cinco apps para cinco redes. OCPI permite que un CPO (Charge Point Operator) publique estaciones, estado y tarifas a los eMSP (e-Mobility Service Provider) con los que tiene acuerdo, y define cómo vuelven los registros de detalle de carga (CDR) y los tokens para la liquidación. Si eso sale mal, o se cobra dos veces al conductor o el CPO no cobra la energía que entregó a un cliente de otra red. Implementamos OCPI 2.1.1 y 2.2.1 módulo por módulo (locations, sessions, CDRs, tariffs, tokens), no como un bloque único, para que una red socia con una implementación parcial no frene todo el roaming.</p>
      <h3>Piezas de un software de carga llave en mano</h3>
      <ul>
        <li><strong>CSMS OCPP 1.6-J y 2.0.1:</strong> WebSockets, arranque y parada remotos, gestión de firmware y telemetría de medidor de alta frecuencia.</li>
        <li><strong>Roaming OCPI 2.1.1 / 2.2.1:</strong> credenciales, tarifas, CDR y autorización por token entre redes de CPO distintas.</li>
        <li><strong>Apps de conductor para el eMSP:</strong> iOS y Android, mapa, filtro de conectores (CCS2, Type 2, GB/T, Bharat DC-001), seguimiento de potencia (kW/h y SOC%) y pasarelas de pago.</li>
        <li><strong>Consola web del CPO:</strong> analítica, reparto de ingresos, tarifas en hora punta y valle, y vigilancia de disponibilidad.</li>
        <li><strong>Billetera y liquidación:</strong> saldo prepago, recarga automática y un informe que ata cada sesión a un pago.</li>
      </ul>
      <h3>Modelos de cobro que armamos para CPO y eMSP</h3>
      <p>La mayoría de los negocios de carga en India usa uno de tres modelos: pago por sesión con una tarifa fija por kWh, precio por tiempo de estacionamiento más carga en estaciones urbanas muy demandadas, o suscripción y billetera para flotas que cargan a diario. El software tiene que programar tarifas (punta y valle) y comisiones por red si el conductor usa un CPO socio. Eso es lógica de negocio, no una pantalla, y se define antes de escribir el motor de comisiones.</p>
      <h3>Plazo habitual</h3>
      <p>Un primer CSMS más la app del conductor, con unos pocos modelos de cargador y un método de pago, suele llevar de 10 a 14 semanas. El plazo depende de cuántas versiones de OCPP hay en la flota y de si el roaming OCPI entra el primer día o después. Una app solo de flota o de eMSP, sin cargadores propios, se entrega antes que una consola completa de gestión de estaciones.</p>
      <h3>Cómo encargar el proyecto</h3>
      <p>En la página de <a href="/services/ev-charging-app-development">desarrollo de apps de carga EV</a> está el alcance técnico. El equipo de ingeniería está en Jaipur y puede hablar de cantidad de cargadores, protocolos y plan de salida.</p>
      <h2>FAQ: desarrollo de apps de carga, OCPP y OCPI</h2>
      <h3>¿Soportan OCPP 1.6-J y 2.0.1 en la misma plataforma?</h3>
      <p>Sí. El CSMS negocia la versión para que convivan cargadores antiguos 1.6-J y equipos 2.0.1 en una sola plataforma.</p>
      <h3>¿Se puede integrar una red CPO existente por OCPI, sin construir cargadores propios?</h3>
      <p>Sí. Muchos clientes empiezan como eMSP y hacen roaming sobre redes ya instaladas mediante OCPI, y más adelante suman hardware propio.</p>
      <h3>¿Qué medios de pago usan para la carga?</h3>
      <p>UPI, tarjetas y una billetera prepago en la app con recarga automática son el estándar. Se pueden sumar otras pasarelas si ya tienen un proveedor de pagos.</p>
      <h3>¿Dónde se ve esto en producción?</h3>
      <p>En el <a href="/portfolio/plugone-ev-charging-platform">caso PlugOne</a> o directamente en <a href="https://plugone.in/" target="_blank" rel="noopener noreferrer">plugone.in</a>.</p>
    `,
  },
  "ecommerce-website-development-cost-india": {
    title:
      "Costo de un sitio de comercio electrónico en India: funciones, plazos y qué mueve el precio",
    metaTitle: "Costo de un sitio ecommerce en India | Factores de alcance | TheTriFusion",
    description:
      "Qué hace variar el costo de un sitio de comercio electrónico en India: catálogo, pagos, logística, diseño y plazo. Sin un precio único inventado.",
    content: `
      <h2>Por qué el costo de un sitio de ecommerce en India cambia tanto</h2>
      <p>Si pidió tres cotizaciones de <strong>desarrollo de un sitio de comercio electrónico en India</strong>, es probable que haya visto tres cifras distintas, a veces el triple, por lo que suena “la misma tienda”. Es normal. El costo sigue al alcance: cuántos productos y variantes vende, qué tan a medida es el checkout, qué socios de pago y de envío necesita, y cuánto diseño y panel de administración espera el primer día. Esta guía sirve para pedir un presupuesto realista a cualquier proveedor, incluido el nuestro.</p>
      <h3>Un mapa aproximado de precios en India</h3>
      <ul>
        <li><strong>Tienda de un solo vendedor, catálogo simple (menos de 200 SKU), checkout estándar:</strong> nuestros paquetes empiezan cerca de ₹25,000. El sitio queda en línea 48 horas después de un brief cerrado.</li>
        <li><strong>Marketplace de varios vendedores</strong> (comisiones, KYC de vendedores, reportes de liquidación): el paquete empieza cerca de ₹35,000.</li>
        <li><strong>Catálogo a medida con precios B2B por niveles, inventario en varios almacenes o integración con un ERP:</strong> se cotiza por módulo después del descubrimiento. Es trabajo a medida, no un paquete configurable.</li>
        <li><strong>Apps móviles (Android + iOS)</strong> sobre la misma tienda y el mismo checkout: se cotizan junto con la web para que catálogo y pedidos nazcan sincronizados.</li>
      </ul>
      <p>Las cifras están en rupias indias (INR). Un lakh equivale a 100.000 rupias; aquí los paquetes publicados están por debajo de un lakh.</p>
      <h3>Los factores que más pesan</h3>
      <p>El alcance funcional y la complejidad del catálogo dominan el número. Una tienda de 50 SKU con talla y color no es el mismo trabajo que un catálogo multi-almacén con precios B2B por niveles y mínimos de pedido. Pasarelas de pago, reglas de envío, cupones, facturas compatibles con GST y sincronización de inventario entre canales son lógica de backend: el dinero y el stock tienen que cuadrar el primer día. La profundidad del diseño —una plantilla bien hecha frente a un sistema visual a medida— también mueve el esfuerzo. Si reemplaza una tienda existente, la migración de contenido y el mapa de redirecciones SEO protegen el posicionamiento. Saltarse ese paso es un error caro de corregir después.</p>
      <h3>Plazos que vemos con más frecuencia</h3>
      <p>Un MVP de ecommerce ajustado suele caer en unas 4 a 10 semanas cuando el alcance está claro y el catálogo llega a tiempo. El riesgo más grande suele ser esperar fotos y textos del cliente, no la velocidad de desarrollo. Un marketplace y la operación pesada (comisiones multi-vendedor, zonas de envío complejas) tardan más y conviene partirlos: un primer lanzamiento y un alcance inmediato posterior. Los plazos urgentes suben el costo porque exigen más trabajo en paralelo y una ventana de pruebas más estrecha.</p>
      <h3>Cómo pedir un presupuesto de verdad</h3>
      <p>Comparta lo imprescindible y lo deseable, un tamaño aproximado de catálogo, preferencias de pago y de envío, uno o dos sitios de referencia y una fecha realista de salida. Con eso, el <a href="/solutions/ecommerce-website-development">equipo de ecommerce de TheTriFusion</a> puede proponer opciones con números, no un rango vago que cambia tres veces. Quien cotiza al instante sin preguntar nada suele estar cotizando una plantilla, no su negocio.</p>
      <h3>Lecturas relacionadas</h3>
      <p>También: <a href="/blog/ecommerce-app-development-cost-india">costo de la app de ecommerce (web + Android + iOS)</a>, <a href="/blog/multi-vendor-marketplace-website-cost-india-2026">costo de un marketplace multi-vendedor en 2026</a> y <a href="/blog/grocery-ecommerce-website-app-development-india">guía de ecommerce para abarrotes</a>.</p>
      <h2>FAQ: costo de un sitio de ecommerce en India</h2>
      <h3>¿Cuál es el presupuesto mínimo realista para un sitio de ecommerce en India?</h3>
      <p>El paquete de un solo vendedor empieza en ₹25,000 para un catálogo simple con checkout estándar, en línea dentro de las 48 horas de un brief cerrado.</p>
      <h3>¿El precio incluye apps móviles?</h3>
      <p>El encuadre web + Android + iOS está disponible en los paquetes de ecommerce. El alcance exacto de las apps se confirma en el brief, porque la revisión de las tiendas corre aparte del lanzamiento del sitio.</p>
      <h3>¿Por qué un marketplace multi-vendedor cuesta más que una tienda de un solo vendedor?</h3>
      <p>Hace falta alta y KYC de vendedores, un motor de comisiones y reportes de liquidación. Nada de eso existe en una tienda de un solo vendedor, así que la lógica adicional cuesta más si se construye bien.</p>
      <h3>¿Cuál es el siguiente paso?</h3>
      <p>Los <a href="/ecommerce-development">paquetes de ecommerce</a> cubren un solo vendedor (₹25,000) o varios (₹35,000), con el sitio en línea en 48 horas o la devolución del 50%. Para un alcance a medida, <a href="/appointment">reserve una llamada de descubrimiento</a>. Los catálogos complejos siguen necesitando un brief: el paquete cubre las plataformas y funciones listadas, no trabajo a medida ilimitado.</p>
    `,
  },
  ...esPostsRest,
  ...esPostsRest2,
};

export default localeShell({
  code: "es",
  htmlLang: "es",
  dir: "ltr",
  ogLocale: "es_MX",
  dateLocale: "es",
  ui,
  posts,
  service: esService,
});
