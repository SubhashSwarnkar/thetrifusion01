export const esService = {
  title:
    "Sistema de gestión de carga para vehículos eléctricos (CMS) para CPO y eMSP",
  metaTitle: "CMS de carga EV para CPO y eMSP | OCPP y OCPI | TheTriFusion",
  description:
    "CMS de carga para CPO y eMSP, hecho en Jaipur, India. Integramos OCPP 1.6J/2.0.1 y OCPI 2.2.1 en una plataforma. Pida un alcance por escrito.",
  breadcrumb: "CMS de carga EV",
  serviceType: "Sistema de gestión de carga EV (CMS) para CPO y eMSP",
  content: `
    <p>TheTriFusion, en Jaipur, construye un sistema de gestión de carga para operadores de puntos de carga y para proveedores de servicio de movilidad eléctrica: OCPP hacia sus cargadores, OCPI cuando hay roaming, y un solo CMS cuando hace las dos cosas. El equipo entrega a distancia en India y en otros países. Un mapa de conductores sin conexión al cargador se vuelve falso en el momento en que cambia el estado del conector. El lado CPO del CMS conecta hardware compatible con OCPP. El lado eMSP suma OCPI cuando sus conductores usan otra red, o cuando los conductores de otra red usan la suya. La app móvil se trata en <a href="/services/mobile-app-development">desarrollo de apps móviles</a>. Las pantallas, en <a href="/services/ui-ux-design">diseño UI/UX</a>. El hosting y los pipelines, en <a href="/services/devops">DevOps y nube</a>. Si la carga es un módulo de una plataforma más amplia, empiece por <a href="/services/software-development">desarrollo de software a medida</a>. No hay una página aparte de IoT: la conectividad del cargador forma parte de este trabajo. Esta página no vende un paquete cerrado.</p>

    <h2 id="cms-for-cpo-emsp">CMS para CPO y eMSP: una plataforma, dos roles</h2>
    <p>Un sistema de gestión de carga (CMS) es el producto que una red opera de verdad. Del lado del operador de puntos de carga es el CPMS; OCPP 2.0.1 llama a ese servidor CSMS. Del lado del proveedor de servicio de movilidad eléctrica es la plataforma a la que pertenece el conductor. TheTriFusion los construye como dos roles de un mismo CMS de carga, no como dos productos sueltos que comparten un logo.</p>
    <p>Se puede lanzar un solo rol. Un CPO que todavía no hace roaming igual necesita OCPP. Un eMSP que no tiene cargadores necesita OCPI y una app de conductor, no un patio de hardware. Una empresa que es las dos cosas guarda estaciones y tokens de conductor en el mismo CMS, así el segundo rol es una fase, no una reescritura. El roaming con un socio es OCPI 2.2.1. Eso no es lo mismo que operar un hub público de roaming para todas las redes del país.</p>
    <h3 id="cpo-cms">CMS de CPO (Charge Point Operator)</h3>
    <p>El software de CPO es el sistema de gestión de las estaciones que usted opera. Los cargadores se dan de alta por OCPP 1.6J o 2.0.1. Los operadores arrancan y detienen en remoto cuando el firmware lo permite, guardan valores del medidor y ven una alerta cuando se corta el heartbeat. Las tarifas viven en el sitio. La carga inteligente envía un perfil solo si el cargador lo acepta. Los comandos de firmware y el diagnóstico se limitan a los mensajes que ese modelo respondió en la prueba de protocolo. Un eMSP socio, si hay roaming, es un negocio al que usted publica ubicaciones. No es una segunda copia de su cargador.</p>
    <ul>
      <li>Alta de cargadores por OCPP</li>
      <li>Arranque y parada remotos</li>
      <li>Firmware y diagnóstico de los mensajes que el cargador implementa</li>
      <li>Tarifas por sitio</li>
      <li>Gestión de carga y carga inteligente dentro del límite del sitio</li>
      <li>Disponibilidad y alertas a partir de heartbeats y de estado</li>
      <li>Sitios que opera y socios con los que hace roaming</li>
      <li>Registros de liquidación y campos de factura GST (la declaración la presenta usted)</li>
    </ul>
    <h3 id="emsp-cms">Plataforma eMSP (e-Mobility Service Provider)</h3>
    <p>Una plataforma eMSP es con quién tiene cuenta el conductor. El token de la app o de la tarjeta RFID es lo que autoriza un CPO socio. OCPI 2.2.1 lleva las ubicaciones, tarifas, tokens, actualizaciones de sesión y registros de detalle de carga (CDR) de ese socio. El precio que el conductor acepta es el precio del recibo. UPI y tarjetas pasan por una pasarela que usted contrata. Un saldo en la app puede pagar la carga en su plataforma; si ese saldo se puede retirar, su asesor legal confirma la posición antes de que le demos forma. El soporte ve la sesión y el CDR. Llega a un cargador socio solo por los comandos OCPI que ese socio implementa.</p>
    <ul>
      <li>Cuentas de conductor</li>
      <li>Tokens de app y tokens RFID</li>
      <li>Roaming OCPI 2.2.1 hacia CPO socios</li>
      <li>Autorización de sesión con el token que el socio acepta</li>
      <li>Precio y cobro al conductor</li>
      <li>UPI, tarjetas y un saldo de carga en la app</li>
      <li>CDR para liquidar con el CPO socio</li>
      <li>Una vista de soporte de la sesión, no un botón oculto de hardware</li>
    </ul>
    <h3>CPO, eMSP y un montaje combinado</h3>
    <p>El mismo CMS puede tener un rol o los dos. La tercera columna es un montaje combinado con roaming. No es la afirmación de que operamos un hub nacional de OCPI.</p>
    <table>
      <thead>
        <tr><th>Pregunta</th><th>CMS de CPO</th><th>Plataforma eMSP</th><th>CMS combinado</th></tr>
      </thead>
      <tbody>
        <tr><td>Para quién es</td><td>Usted opera cargadores</td><td>Atiende conductores, con su marca</td><td>Hace las dos cosas, o hace roaming con socios</td></tr>
        <tr><td>Enlace con el cargador</td><td>OCPP 1.6J y 2.0.1 al hardware que opera</td><td>Ninguno propio. El CPO socio corre OCPP</td><td>OCPP en sus sitios</td></tr>
        <tr><td>Roaming</td><td>Opcional. Publica ubicaciones cuando un eMSP debe verlas</td><td>OCPI 2.2.1 hacia los CPO que firma</td><td>Las dos direcciones, módulo por módulo. No un hub público automático</td></tr>
        <tr><td>Qué cobra</td><td>Tarifas del sitio, liquidación al anfitrión, campos de factura GST</td><td>El precio del conductor, UPI o tarjetas, los CDR que recibe</td><td>Sus tarifas más CDR de entrada y de salida</td></tr>
        <tr><td>Primera versión sensata</td><td>Alta, arranque y parada remotos, una tarifa</td><td>Cuentas, tokens y las ubicaciones de un socio</td><td>Un rol primero, salvo que el descubrimiento incluya los dos</td></tr>
      </tbody>
    </table>

    <h2 id="cpms">Sistema de gestión de carga, CPMS y CSMS</h2>
    <p>El software de estación de carga es el sistema de registro de los sitios que opera. Un charge point management system, abreviado CPMS, es ese producto: qué estaciones existen, qué conector está libre, qué sesión corre y qué falla necesita a una persona. OCPP 2.0.1 llama al servidor Charging Station Management System (CSMS). OCPP 1.6 lo llama Central System. El trabajo es el mismo. Los conductores no entran al CPMS. Los operadores sí.</p>
    <p>Un CPMS útil guarda la estación una vez y la muestra en todos lados: el mapa del conductor, la tarifa, la factura y el registro de roaming si publica el sitio. Modelamos sitio, cargador, conector y sesión como registros separados para que un cargador de dos pistolas no se aplaste en un solo pin. Los valores del medidor quedan pegados a la sesión que los produjo. Sin ese corte, la facturación y los reportes de disponibilidad se contradicen.</p>

    <h2 id="ocpp-backend">Backend OCPP para 1.6J y 2.0.1</h2>
    <p>El backend OCPP es el servidor al que marcan los cargadores. OCPP 1.6J es JSON sobre un WebSocket. Los mensajes de los que dependen los operadores son BootNotification, Heartbeat, StatusNotification, Authorize, StartTransaction, StopTransaction, MeterValues, RemoteStartTransaction y RemoteStopTransaction. La configuración, los disparos de firmware y los perfiles de carga están en la misma especificación, y cada cargador implementa un subconjunto. Anotamos qué subconjunto responde cada modelo.</p>
    <p>OCPP 2.0.1 no es un cambio de nombre de 1.6. Usa un modelo de dispositivo, TransactionEvent en lugar del par antiguo de inicio y fin, y opciones de seguridad más fuertes, incluidas conexiones con certificado. También es el camino práctico cuando más adelante quiere que pasen mensajes ISO 15118 a través del cargador. Muchos cargadores ya instalados en India solo hablan 1.6J. Un backend de flota mixta implementa los dos y mantiene el mismo modelo de sesión, para que la facturación no dependa de qué protocolo empezó el flujo de energía.</p>

    <h2 id="ocpi-roaming">Roaming OCPI 2.2.1</h2>
    <p>El roaming OCPI es cómo dos empresas comparten carga sin fusionar sus apps. OCPI 2.2.1, mantenido por la EVRoaming Foundation, es una interfaz entre negocios, no entre un cargador y un servidor. Los módulos que implementamos cuando están en alcance son credentials, locations, tariffs, tokens, commands, sessions y charge detail records (CDR). Los perfiles de carga existen en la especificación para límites de carga inteligente en una sesión de roaming. Encendemos un módulo solo cuando el socio de verdad lo soporta.</p>
    <p>Un despliegue práctico es un socio, no un hub teórico de todas las redes. Se intercambian credenciales, el operador publica ubicaciones y tarifas, el eMSP muestra esos pines en la app del conductor, un token autoriza al conductor y un CDR es el registro con el que los dos lados liquidan. Las implementaciones parciales son habituales. Separamos módulos para que un socio que todavía no envía comandos igual pueda publicar ubicaciones. La <a href="/blog/ev-charging-app-ocpi-ocpp-guide">guía de OCPP y OCPI</a> recorre el mismo corte con más detalle.</p>

    <h2 id="ocpp-vs-ocpi">OCPP y OCPI, en lenguaje llano</h2>
    <p>OCPP y OCPI resuelven enlaces distintos, por eso los dos nombres aparecen en los encargos de apps de carga. OCPP (Open Charge Point Protocol) es el cargador hablando con su backend: estoy en línea, el conector se prepara, empiece esta transacción, aquí van los valores del medidor, pare. Si ese enlace cae, el hardware puede seguir entregando energía según sus reglas locales, pero la app no lo ve y no debe fingir que el pin está vivo.</p>
    <p>OCPI (Open Charge Point Interface) es su empresa hablando con otra empresa. Responde: aquí están mis ubicaciones públicas, este es el precio, este token es de su conductor, esta sesión ocurrió, este CDR es lo que vamos a liquidar. OCPI no reemplaza a OCPP. Un operador de puntos de carga sigue necesitando OCPP, o una nube del fabricante que hable OCPP, para controlar sus propios cargadores. Un eMSP sin cargadores puede necesitar solo OCPI, más una app de conductor. Poner los dos protocolos en una frase de una diapositiva de ventas no los convierte en una sola integración.</p>

    <h2 id="emsp-cpo">Registros de CPO y de eMSP en el CMS</h2>
    <p>El CMS de CPO y la plataforma eMSP de arriba comparten un sistema de gestión, y los registros siguen separados. Una estación, un token de conductor y una sesión no son la misma tabla. El lado CPO guarda la conexión OCPP, las tarifas del sitio y el ticket de falla. El lado eMSP guarda la cuenta del conductor, el medio de pago y la factura que recibe el conductor. Muchas redes empiezan con un solo rol.</p>
    <p>Mantenemos los roles en el modelo de datos aunque la primera versión tenga una sola marca. Un conductor, un token, una sesión y una estación no deberían ser la misma tabla. Si más adelante hay roaming, el lado eMSP ya sabe guardar un token que no está atado a un cargador suyo, y el lado CPO ya sabe aceptar un token que no nació en su app. Es una decisión de estructura el día uno, no una reescritura el día doscientos.</p>

    <h2 id="driver-app">App del conductor para iOS y Android</h2>
    <p>La app del conductor es el mapa, la sesión y el recibo. En iOS y Android mostramos los cargadores que el backend de verdad conoce, con filtros que un conductor usa en India: conector, banda de potencia y si el conector está disponible. Un pin sin estado fresco se etiqueta con el último heartbeat, no se dibuja como libre. La navegación se entrega a la app de mapas que el teléfono ya tiene. No inventamos una capa de tráfico.</p>
    <p>El inicio puede ser un arranque remoto en la app, un código QR que identifica el conector, o una tarjeta RFID que el cargador autoriza por OCPP. La reserva entra solo cuando ese cargador la implementa. Muchas unidades 1.6J no lo hacen. Los pagos son UPI, tarjetas o un saldo en la app, por una pasarela que usted contrata. Integramos la pasarela. No somos la empresa de pagos y no tenemos una licencia de instrumento prepago por usted. Si un saldo guardado se puede retirar o gastar fuera de la carga, su asesor confirma la posición del RBI antes de dar forma a esa billetera. Los flujos de pantalla se diseñan con el mismo cuidado que nuestro trabajo de <a href="/services/ui-ux-design">UI/UX</a>, y las builds de tienda siguen el <a href="/services/mobile-app-development">desarrollo de apps móviles</a>.</p>

    <h2 id="operator-dashboard">Panel del operador del CMS</h2>
    <p>El panel de administración y de operación es una app web, no una pantalla de teléfono estirada. Despacho ve qué conectores están en falla. Finanzas ve qué sesiones tienen CDR y qué pagos siguen abiertos. Un anfitrión de sitio, como un centro comercial o un hotel, puede limitarse a sus ubicaciones. La casa matriz ve la red. Son roles, no tres productos.</p>
    <p>Ponemos en la página del cargador las acciones que el protocolo soporta: arranque remoto, parada remota, reinicio cuando el cargador lo implementa, y un cambio de configuración que queda registrado. Una acción que el firmware no soporta se oculta, no se muestra como un botón que falla delante de un cliente. Las exportaciones cubren sesiones y facturas para el contador. El panel no reemplaza sus libros.</p>

    <h2 id="smart-charging">Gestión de carga y carga inteligente</h2>
    <p>La gestión de carga y la carga inteligente mantienen un sitio dentro de la potencia que permite el diseño eléctrico. La entrada es un límite que su electricista o el equipo de instalaciones declara para un tablero, un alimentador o un sitio. El backend mira las sesiones activas y envía un perfil de carga OCPP, en 1.6J mediante SetChargingProfile cuando el cargador lo soporta, para que la suma de límites de conectores quede bajo ese tope. Si un cargador ignora los perfiles, lo decimos en la prueba de hardware. No fingimos que un control de software puede superar el interruptor.</p>
    <p>Aquí la carga inteligente no es una promesa de comercio con el mercado eléctrico. Las API de respuesta a la demanda de la utility son otra integración, en alcance solo cuando usted tiene ese contrato y un documento que podamos leer. Para un edificio, la versión útil es más quieta: pausar o bajar las sesiones que pueden esperar, y dejar quieta una sesión cuando el conductor o la regla de flota dicen que no puede esperar. La regla está escrita. No es un puntaje oculto.</p>

    <h2 id="hardware-integration">Integración de hardware compatible con OCPP</h2>
    <p>Integrar hardware compatible con OCPP significa que el cargador habla OCPP 1.6J o 2.0.1 lo bastante cerca como para arrancar, autorizar, medir y parar. Los nombres de marca no son una lista de compatibilidad. Dos unidades del mismo fabricante pueden salir con firmware distinto. Pedimos el modelo, la versión de OCPP y una forma de alcanzar un cargador físico o un simulador del fabricante que coincida con ese firmware. La prueba es un guion: boot, heartbeat, authorize, start, valores del medidor, stop, y los comandos remotos que necesita el primer día.</p>
    <p>Los conectores son otra pregunta, distinta del protocolo. Los cargadores de auto más nuevos en India suelen usar Type 2 en corriente alterna y CCS2 en corriente continua. Sitios públicos más viejos pueden seguir con Bharat AC-001 o Bharat DC-001. AC-001 es una especificación pública de corriente alterna con tres salidas de 230 V, cerca de 3,3 kW cada una, y conectores IEC 60309. DC-001 es la especificación de corriente continua de baja tensión para paquetes de unos 48 V, 60 V y 72 V, del orden de 15 kW, con OCPP hacia el sistema de gestión en los cargadores construidos según esa especificación. Mostramos el conector que reporta el hardware. No dibujamos un pin CCS2 en una toma Bharat AC. La conectividad del cargador es la parte de IoT de este trabajo. Vive en esta página, no en un producto de IoT aparte.</p>

    <h2 id="billing-tariffs">Facturación, tarifas y facturas GST</h2>
    <p>La facturación parte de una tarifa que una persona puede explicar. Los elementos que modelamos son energía (por kWh), tiempo (por minuto mientras carga), una cuota fija por sesión y una cuota de ocio cuando la carga terminó y el vehículo sigue ocupando el conector. Un sitio puede tener más de una tarifa según la hora del día. El precio que el conductor vio al empezar es el precio del recibo, salvo que haya escrito otra regla. El módulo de tarifas de OCPI es cómo se publica ese precio a un socio de roaming. No es un segundo precio secreto.</p>
    <p>Facturar con GST significa que el documento puede llevar su GSTIN, el lugar de suministro, el SAC, el valor gravable y el desglose de impuesto que indique su contador. No elegimos su tasa impositiva y no presentamos declaraciones. El operador sigue siendo responsable del registro y de la presentación. Las liquidaciones a un anfitrión de sitio, como un hotel o un centro comercial, son un reparto que usted define en el contrato. El software registra el reparto. No reemplaza el contrato. El rango inicial publicado de un MVP está en la <a href="/pricing">página de precios</a>. No es una tarifa de electricidad.</p>

    <h2 id="fleet-charging">Carga de flotas</h2>
    <p>La carga de flota es más a menudo un problema de depósito que de mapa público. Los vehículos se conocen, el sitio es privado o se comparte con un arrendador, y la pregunta es qué vehículo tiene que salir a qué hora. Atamos un RFID o un registro de vehículo a la sesión para que la energía se reporte por vehículo, no solo por conector. Un despachador puede marcar una prioridad de salida. La gestión de carga prefiere entonces el autobús o la van que tiene que moverse, y baja el que puede esperar, dentro del límite del tablero.</p>
    <p>Una flota puede usar el mismo CPMS que un sitio público. Los pines públicos simplemente no se publican para el depósito, o se publican solo en las bahías que marque como públicas. Los conductores de autos de pool pueden usar la misma app con un grupo que no ve precios públicos. No asumimos que una flota quiere OCPI el primer día. El roaming puede esperar hasta que un vehículo cargue fuera del depósito.</p>

    <h2 id="white-label">CMS de carga EV de marca blanca</h2>
    <p>Un CMS de carga de marca blanca es su nombre en la ficha de la tienda, sus colores, su dirección de soporte y su dominio en el panel. El comportamiento del protocolo no cambia porque cambió el logo. Igual necesitamos saber de quién son los cargadores, de quién es la pasarela de pago y de quién es el GSTIN de la factura. La marca blanca es una elección de marca y de publicación. No es un atajo para saltarse la prueba OCPP.</p>
    <p>Las agencias que quieren que construyamos bajo la relación con su cliente también pueden usar el encargo de <a href="/white-label-development">desarrollo de marca blanca</a>. En esta página el producto es la pila de carga. Usted recibe los repositorios de la app y del backend que nombra el alcance. No guardamos un candado oculto de producción. Las políticas de App Store y de Play siguen aplicando a la persona jurídica que publica la app.</p>

    <h2 id="plug-and-charge">ISO 15118 y preparación para Plug &amp; Charge</h2>
    <p>ISO 15118 es el estándar de comunicación entre el vehículo y el cargador. Plug &amp; Charge es el caso en el que el auto presenta un certificado de contrato y la sesión puede empezar sin un toque en la app ni una tarjeta RFID, cuando el auto, el cargador y un ecosistema de certificados lo soportan. OCPP 2.0.1 es el camino de backend que transporta esos intercambios de forma más completa que 1.6J. Preparación significa dejar un lugar en el modelo de datos para contratos y estado de certificados, y no pintar el producto en una esquina que solo entiende un token de app.</p>
    <p>Preparación no es una red de Plug &amp; Charge en vivo. No operamos una infraestructura de clave pública de vehículo a red, y no afirmamos que sus autos actuales se enchufarán y arrancarán sin otro paso. Eso depende del vehículo, del firmware del cargador y de un certificado de contrato que usted tenga derecho a emitir o a comprar. Cuando esas tres cosas existen, el trabajo de OCPP 2.0.1 del alcance es lo que conectamos. Hasta que existan, los conductores arrancan con la app, el QR o el RFID.</p>

    <h2 id="analytics">Analítica de carga</h2>
    <p>La analítica de una red de vehículos eléctricos es operativa, no un tablero de vanidad. Las cifras que cambian una decisión son sesiones iniciadas, sesiones que entregaron energía, kWh por sitio y conector, tiempo en que un conector estuvo en falla, e ingresos por tarifa. La disponibilidad se deriva de heartbeats y de notificaciones de estado. Si un cargador deja de enviar heartbeats, el gráfico debe mostrar un hueco, no una línea sana y plana.</p>
    <p>No publicamos porcentajes de referencia de su red antes de que exista, y no inventamos un promedio de la industria en esta página. Los filtros cubren sitio, conector y día. Hay exportaciones para que finanzas concilie pagos fuera de la herramienta. Un mapa de India con demanda adivinada no es una función de analítica. Si más adelante quiere un modelo encima del historial real de sesiones, es otra conversación de <a href="/services/software-development">software a medida</a> con los datos que de verdad tiene.</p>

    <h2 id="india-context">Software de carga EV para India</h2>
    <p>El contexto de India aparece en la lista de conectores, en el medio de pago y en la factura, no en una foto de stock de una ciudad. Los sitios públicos y de flota de aquí son una mezcla. Los autos cargan cada vez más en Type 2 y CCS2. Motos y triciclos siguen encontrando equipo Bharat AC-001 y Bharat DC-001. La app tiene que filtrar por el conector que el vehículo puede usar. A un conductor de auto no hay que mandarlo a una bahía de corriente continua de baja tensión. A un motociclista no hay que mandarlo solo a una pistola CCS2.</p>
    <p>Los pagos en India significan que UPI es una opción de primera clase junto a las tarjetas, por una pasarela que usted contrata. Las facturas necesitan campos GST, como se describe en la sección de facturación. No citamos un conteo oficial de estaciones, un subsidio ni una tasa impositiva en esta página. Eso cambia, y no es nuestro producto. El equipo que construye el software está en Jaipur. La entrega es remota para el resto de India y para equipos fuera de India. Su cargador igual tiene que ser alcanzable por el backend, esté donde esté el sitio.</p>

    <h2 id="who-its-for">Para quién es este sistema de gestión de carga</h2>
    <p>Los operadores de puntos de carga llegan cuando la nube del fabricante es demasiado cerrada, o cuando varias marcas de cargador tienen que vivir en un solo CPMS. Los eMSP llegan cuando quieren una app de conductor y OCPI hacia redes que no poseen. Las flotas llegan por una vista de depósito, identidad del vehículo y prioridad de salida. El software es la misma familia de componentes. La primera versión no lo es.</p>
    <p>El sector inmobiliario y los centros comerciales suelen alojar cargadores más que convertirse en un eMSP nacional. Necesitan un panel a nivel de sitio, una forma de que el visitante pague y una nota de liquidación para el operador o la marca del cargador. Los hoteles son parecidos, con la pregunta extra de si la estancia debe cargar al folio de la habitación o a un pago UPI directo. Las startups llegan por un producto de marca blanca que puedan poner en el mercado con su nombre. Diremos si el brief es solo un sitio de marketing. Ese trabajo pertenece al desarrollo de sitios, no aquí.</p>

    <h2 id="cost-and-timeline">Qué cambia el costo y el plazo</h2>
    <p>El costo sigue al alcance. Una app de conductor sobre una red que ya existe es más chica que un CPMS más OCPP para varios modelos de cargador más OCPI con más de un socio. Otros factores son iOS y Android juntos, un panel de operador, UPI y tarjetas, la profundidad de la factura GST, reglas de flota, gestión de carga, publicaciones de tienda de marca blanca, y si la preparación ISO 15118 entra en la primera fase o después. Hardware al que no podemos llegar, o una nube de fabricante que no expone OCPP, suma tiempo que no se comprime con más pantallas.</p>
    <p>La <a href="/pricing">página de precios</a> publica un rango inicial de ₹4,50,000, sin GST, después del descubrimiento. La etiqueta de esa página es un MVP de eMSP o de CPO con mapas en vivo, sesiones de carga y OCPP/OCPI. Esa cifra es un rango inicial, no un paquete que se pueda pedir sin cambios. Nuestra <a href="/blog/ev-charging-app-ocpi-ocpp-guide">guía técnica</a> describe un primer CSMS y una app de conductor, un puñado de modelos de cargador y un método de pago como algo que a menudo lleva de 10 a 14 semanas cuando el acceso y el hardware están listos. Una app de eMSP sin cargadores propios puede ser más corta. Un despliegue de varios modelos más roaming es más largo. No cerramos un número de semanas en el primer correo.</p>

    <h2 id="ev-first-release">Qué suele incluir una primera versión de carga EV</h2>
    <p>La primera versión es el sistema más chico que un conductor real y un operador real pueden usar. Se cotiza. No es un paquete gratis y no es el catálogo completo de roaming.</p>
    <ul>
      <li><strong>Una conexión de cargador que sea real:</strong> OCPP 1.6J o 2.0.1 contra el firmware que va a instalar, no una diapositiva de logos.</li>
      <li><strong>Un camino de conductor:</strong> mapa, estado, inicio, parada y un recibo en iOS, Android o la plataforma que elija primero.</li>
      <li><strong>Un camino de operador:</strong> estado del cargador, la lista de sesiones y una falla que una persona pueda ver.</li>
      <li><strong>Una forma de pagar:</strong> UPI o tarjetas por su pasarela, o un solo método que ya opere.</li>
      <li><strong>Una tarifa:</strong> un precio que el conductor pueda leer antes de que empiece la sesión.</li>
      <li><strong>Notas de entrega:</strong> cómo agregar un cargador, quién tiene las cuentas y cómo leer un arranque fallido.</li>
    </ul>
    <p>Socios OCPI, modelos extra de cargador, prioridad de flota y preparación de Plug &amp; Charge son fases posteriores, salvo que el descubrimiento los meta en el primer alcance. Pida ese alcance en el formulario de contacto.</p>

    <h2 id="process">Cómo corre un proyecto de sistema de gestión de carga</h2>
    <ol>
      <li><strong>Descubrimiento.</strong> Anotamos el rol que juega: CPO, eMSP, flota, anfitrión de sitio o una mezcla. Listamos modelos de cargador, versiones de OCPP, si ya hay una nube de fabricante en el medio, y si pagos y facturas GST entran en la primera versión. Recibe un alcance, no un eslogan.</li>
      <li><strong>Prueba de protocolo.</strong> Un cargador, o un simulador que coincida con su firmware, completa boot, authorize, start, valores del medidor y stop. Los comandos remotos del primer día van en la misma prueba. Los modelos que fallan quedan fuera de la promesa.</li>
      <li><strong>Diseño de producto.</strong> Los flujos del conductor y el panel del operador se dibujan antes de que el build se extienda. Filtros de conector, estados de error y el precio mostrado antes de empezar forman parte del diseño, no de un pase de pulido. UI/UX e ingeniería están en el mismo equipo.</li>
      <li><strong>Construcción.</strong> El backend, las apps, las tarifas y el panel se construyen contra la prueba de protocolo. Las sesiones guardan energía y dinero como hechos separados. Hay un entorno de pruebas mientras el trabajo avanza.</li>
      <li><strong>Despliegue de hardware y de roaming.</strong> Otros modelos de cargador repiten la prueba de protocolo. OCPI, si está en alcance, empieza con un socio y los módulos que ese socio implementa. No abrimos todos los módulos el primer día.</li>
      <li><strong>Salida y entrega.</strong> Fichas de tienda, un backend vigilado y notas para agregar un sitio. Las cuentas y los repositorios quedan a su nombre. El hosting continuo puede pasar a DevOps y nube, o su equipo puede operar lo que entregamos.</li>
    </ol>

    <h2 id="tech-stack">Pila técnica del CMS de carga EV</h2>
    <p>OCPP 1.6J, OCPP 2.0.1, OCPI 2.2.1, WebSockets, React Native, Node.js, PostgreSQL, Redis, MQTT, preparación ISO 15118, UPI, QR y RFID. La pila se confirma en el alcance. No es una lista de logos que promete compatibilidad.</p>

    <h2>Por qué este equipo</h2>
    <ul>
      <li><strong>Con base en Jaipur.</strong> Quienes diseñan la app y el backend OCPP están en Jaipur, Rajasthan. Hay una conversación con nombre. La entrega es remota en India y en otros países.</li>
      <li><strong>Pila completa, un equipo.</strong> App de conductor, panel de operador y backend de carga se construyen juntos. El trabajo de protocolo no se entrega a un grupo sin nombre.</li>
      <li><strong>Un producto en vivo que se puede abrir.</strong> PlugOne es un producto de carga que enviamos. Puede abrir plugone.in y el caso de estudio. No le pegamos cifras de uso inventadas.</li>
      <li><strong>Alcance antes de construir.</strong> Recibe un alcance escrito después del descubrimiento. La página de precios muestra un rango inicial. Esta página no finge que ese rango es un paquete cerrado.</li>
    </ul>
    <p>Producto en vivo: <a href="https://plugone.in/" target="_blank" rel="noopener noreferrer">plugone.in</a> y el <a href="/portfolio/plugone-ev-charging-platform">caso PlugOne</a>. Guía: <a href="/blog/ev-charging-app-ocpi-ocpp-guide">OCPP y OCPI</a>.</p>

    <h2 id="faq">Preguntas frecuentes (FAQ)</h2>
    <h3>¿Qué es un CMS para un CPO?</h3>
    <p>Un CMS para un CPO (charge point operator) es el software que opera los cargadores que usted opera. Los equipos también lo llaman CPMS, y OCPP 2.0.1 llama al servidor CSMS. Da de alta cargadores por OCPP, muestra el estado del conector, envía arranque y parada remotos, guarda valores del medidor, guarda tarifas y levanta una alerta cuando se cortan los heartbeats. Por sí solo no deja que sus conductores usen los cargadores de otra empresa. Ese enlace es OCPI, del lado eMSP.</p>
    <h3>¿Qué es una plataforma eMSP y en qué se diferencia de un CMS de CPO?</h3>
    <p>Una plataforma eMSP es el producto al que pertenece el conductor: la cuenta, el token de app o RFID, el precio, el pago y la factura. Un CMS de CPO es el producto al que pertenece el cargador. El eMSP llega a cargadores socios por OCPI 2.2.1 (ubicaciones, tokens, sesiones y registros de detalle de carga). El CPO llega a su propio hardware por OCPP 1.6J o 2.0.1. Pueden vivir en un mismo sistema de gestión de carga. No son la misma pantalla.</p>
    <h3>¿Un solo CMS puede servir los roles de CPO y de eMSP?</h3>
    <p>Sí. Las estaciones y los tokens de conductor siguen siendo registros separados, así un CMS de carga puede operar sus cargadores y también dejar que sus conductores hagan roaming en CPO socios. No tiene que lanzar los dos roles el primer día. El roaming igual necesita un socio que implemente los módulos OCPI que usted usa. Un CMS combinado no es automáticamente un hub público de roaming.</p>
    <h3>¿Ofrecen un CMS de carga EV de marca blanca?</h3>
    <p>Sí. Marca blanca significa su marca, sus cuentas de tienda, su dominio y su pasarela de pago sobre el CMS. La prueba de OCPP y de OCPI no cambia porque cambió el logo. Recibe los repositorios nombrados en el alcance. Esta página no vende un paquete cerrado. La página de precios lista un rango inicial para un MVP.</p>
    <h3>¿Cuánto cuesta desarrollar una app de carga EV en India?</h3>
    <p>La página de precios publica un rango inicial de ₹4,50,000, sin GST, después del descubrimiento. Etiqueta ese rango como un MVP de eMSP o de CPO con mapas en vivo, sesiones de carga y OCPP/OCPI. Es un rango inicial, no un paquete cerrado. El costo se mueve con una app de conductor frente a un sistema completo de gestión de puntos de carga, OCPP 1.6J y 2.0.1, roaming OCPI, cuántos modelos de cargador hay que probar, pagos con UPI y tarjeta, facturas GST, reglas de flota, y si envía iOS y Android juntos. Mandamos un alcance escrito antes de construir.</p>
    <h3>¿Qué es OCPP?</h3>
    <p>OCPP es el Open Charge Point Protocol. Es cómo un cargador de vehículo eléctrico habla con un backend central. La versión 1.6J es JSON sobre un WebSocket y cubre boot, heartbeat, authorize, start, valores del medidor y stop. La versión 2.0.1 usa un modelo de dispositivo y TransactionEvent, y es el mejor camino cuando más adelante necesita mensajes ISO 15118. OCPP, por sí solo, no deja que dos empresas hagan roaming en las redes de la otra.</p>
    <h3>¿Cuál es la diferencia entre OCPP y OCPI?</h3>
    <p>OCPP conecta un cargador con su backend para que vea el estado y arranque o pare una sesión. OCPI conecta su negocio con otro negocio de carga para intercambiar ubicaciones, tarifas, tokens, sesiones y registros de detalle de carga. Un operador de puntos de carga suele necesitar OCPP para su propio hardware. Un eMSP que no tiene cargadores puede necesitar solo OCPI. No son sustitutos.</p>
    <h3>¿Pueden integrar cualquier marca de cargador?</h3>
    <p>Integramos cargadores que hablan OCPP 1.6J o 2.0.1 lo bastante cerca como para arrancar, autorizar, medir y parar. Los logos de marca no son una lista de compatibilidad, porque el firmware cambia dentro de una marca. El descubrimiento incluye una prueba de protocolo del modelo que va a instalar. Si una nube de fabricante no expone OCPP, lo decimos y no fingimos que la app puede controlar ese hardware.</p>
    <h3>¿Construyen apps de carga EV de marca blanca?</h3>
    <p>Sí. Una build de marca blanca usa su marca, sus cuentas de tienda, su dominio y su pasarela de pago. La prueba OCPP u OCPI es la misma que en una build de una sola marca. Recibe los repositorios nombrados en el alcance. Publicar sigue las reglas de App Store y de Play para la persona jurídica de la ficha.</p>
    <h3>¿Qué es un CPMS o charge point management system?</h3>
    <p>Un CPMS es el software de operador de las estaciones: sitios, cargadores, conectores, sesiones, fallas y tarifas. OCPP 2.0.1 llama al lado servidor CSMS, y OCPP 1.6 lo llama Central System. Los conductores usan la app móvil. Los operadores usan el CPMS. Construimos los dos cuando el alcance incluye los dos.</p>
    <h3>¿Construyen software de eMSP y de CPO?</h3>
    <p>Sí, incluida una empresa que es las dos cosas. El lado CPO es el CPMS y la conexión OCPP. El lado eMSP es la cuenta del conductor, el token, la app y la factura. El modelo de datos mantiene esos roles separados para que el roaming no exija una reescritura.</p>
    <h3>¿Cuánto tarda el desarrollo de una app de carga EV?</h3>
    <p>Nuestra guía técnica describe un primer CSMS y una app de conductor, un puñado de modelos de cargador y un método de pago como algo que a menudo lleva de 10 a 14 semanas cuando el acceso al hardware está listo. Una app de eMSP que no posee cargadores puede ser más corta. Varios modelos de cargador más OCPI con más de un socio tarda más. No prometemos un número de semanas antes del descubrimiento.</p>
    <h3>¿Qué es el roaming OCPI?</h3>
    <p>El roaming OCPI deja que un conductor de una red use un cargador de otra, con un registro que las dos empresas pueden liquidar. Los módulos de OCPI 2.2.1 cubren credentials, locations, tariffs, tokens, commands, sessions y charge detail records. Empezamos con un socio y los módulos que ese socio implementa, en lugar de asumir que todas las redes hablan la especificación completa.</p>
    <h3>¿La app del conductor puede usar UPI, tarjetas, RFID y QR?</h3>
    <p>Sí, cuando están en alcance. UPI y tarjetas pasan por una pasarela de pago que usted contrata. Somos el proveedor de software, no la institución de pago. El RFID es una etiqueta de identificación OCPP que el cargador autoriza. Un código QR identifica el conector para que la app pida un arranque remoto. Se puede construir un saldo en la app usado solo para cargar; si ese saldo se puede retirar, su asesor confirma primero la posición regulatoria.</p>
    <h3>¿Soportan ISO 15118 Plug &amp; Charge?</h3>
    <p>Podemos preparar el backend para ISO 15118 Plug &amp; Charge sobre OCPP 2.0.1, incluido un lugar para la autorización por contrato. No afirmamos una red de Plug &amp; Charge en vivo, y no operamos una autoridad de certificados de vehículos. Hasta que existan el auto, el cargador y un certificado de contrato, los conductores arrancan con la app, el QR o el RFID.</p>
    <h3>¿Solo trabajan en Jaipur?</h3>
    <p>El equipo tiene base en Jaipur, Rajasthan. Los proyectos se entregan a distancia en India y en otros países. Los sitios de cargadores pueden estar en cualquier lugar donde el hardware alcance el backend. Su ubicación puede cambiar la región de nube que recomendamos. No cambia quién construye el software.</p>
  `,
};
