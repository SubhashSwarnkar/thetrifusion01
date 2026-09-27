export const ptService = {
  title:
    "Sistema de gestão de recarga para veículos elétricos (CMS) para CPO e eMSP",
  metaTitle: "CMS de recarga EV para CPO e eMSP | OCPP e OCPI | TheTriFusion",
  description:
    "CMS de recarga para CPO e eMSP, feito em Jaipur, Índia. Integramos OCPP 1.6J/2.0.1 e OCPI 2.2.1 numa plataforma. Peça um escopo por escrito.",
  breadcrumb: "CMS de recarga EV",
  serviceType: "Sistema de gestão de recarga EV (CMS) para CPO e eMSP",
  content: `
    <p>TheTriFusion, em Jaipur, constrói um sistema de gestão de recarga para operadores de ponto de recarga e para provedores de serviço de mobilidade elétrica: OCPP na direção dos seus carregadores, OCPI quando há roaming, e um CMS só quando você faz as duas coisas. A equipe entrega à distância na Índia e em outros países. Um mapa de motoristas sem ligação com o carregador vira mentira no instante em que o estado do conector muda. O lado CPO do CMS liga hardware compatível com OCPP. O lado eMSP soma OCPI quando os seus motoristas usam outra rede, ou quando motoristas de outra rede usam a sua. O aplicativo de celular está em <a href="/services/mobile-app-development">desenvolvimento de aplicativos para celular</a>. As telas, em <a href="/services/ui-ux-design">design de UI/UX</a>. A hospedagem e as esteiras de publicação, em <a href="/services/devops">DevOps e nuvem</a>. Se a recarga é um módulo de uma plataforma maior, comece por <a href="/services/software-development">desenvolvimento de software sob medida</a>. Não existe uma página separada de IoT: a conectividade do carregador faz parte deste trabalho. Esta página não vende um pacote fechado.</p>

    <h2 id="cms-for-cpo-emsp">CMS para CPO e eMSP: uma plataforma, dois papéis</h2>
    <p>Um sistema de gestão de recarga (CMS) é o produto que uma rede opera de verdade. Do lado do operador de ponto de recarga, é o CPMS; o OCPP 2.0.1 chama esse servidor de CSMS. Do lado do provedor de serviço de mobilidade elétrica, é a plataforma à qual o motorista pertence. TheTriFusion constrói os dois como papéis de um mesmo CMS de recarga, não como dois produtos soltos que compartilham um logo.</p>
    <p>Dá para lançar um papel só. Um CPO que ainda não faz roaming mesmo assim precisa de OCPP. Um eMSP sem carregador precisa de OCPI e de um aplicativo de motorista, não de um pátio de hardware. Uma empresa que é as duas coisas guarda estações e tokens de motorista no mesmo CMS, então o segundo papel vira uma fase, não uma reescrita. O roaming com um parceiro é OCPI 2.2.1. Isso não é a mesma coisa que operar um hub público de roaming para todas as redes do país.</p>
    <h3 id="cpo-cms">CMS de CPO (Charge Point Operator)</h3>
    <p>O software de CPO é o sistema de gestão das estações que você opera. Os carregadores entram por OCPP 1.6J ou 2.0.1. Os operadores iniciam e param à distância quando o firmware permite, guardam valores do medidor e veem um alerta quando o heartbeat cai. As tarifas moram no local. A recarga inteligente manda um perfil só se o carregador aceita. Comandos de firmware e diagnóstico ficam limitados às mensagens que aquele modelo respondeu no teste de protocolo. Um eMSP parceiro, se houver roaming, é um negócio para o qual você publica locais. Não é uma segunda cópia do seu carregador.</p>
    <ul>
      <li>Cadastro de carregadores por OCPP</li>
      <li>Início e parada remotos</li>
      <li>Firmware e diagnóstico das mensagens que o carregador implementa</li>
      <li>Tarifas por local</li>
      <li>Gestão de carga e recarga inteligente dentro do limite do local</li>
      <li>Disponibilidade e alertas a partir de heartbeats e de estado</li>
      <li>Locais que você opera e parceiros com os quais faz roaming</li>
      <li>Registros de liquidação e campos de fatura GST (a declaração quem apresenta é você)</li>
    </ul>
    <h3 id="emsp-cms">Plataforma eMSP (e-Mobility Service Provider)</h3>
    <p>Uma plataforma eMSP é com quem o motorista tem conta. O token do aplicativo ou do cartão RFID é o que autoriza um CPO parceiro. O OCPI 2.2.1 leva locais, tarifas, tokens, atualizações de sessão e registros de detalhe de carga (CDR) desse parceiro. O preço que o motorista aceitou é o preço do recibo. UPI e cartões passam por um gateway que você contrata. Um saldo no aplicativo pode pagar a recarga na sua plataforma; se esse saldo puder ser sacado, o seu assessor jurídico confirma a posição antes de modelarmos esse saque. O suporte vê a sessão e o CDR. O suporte chega a um carregador parceiro só pelos comandos OCPI que esse parceiro implementa.</p>
    <ul>
      <li>Contas de motorista</li>
      <li>Tokens de aplicativo e tokens RFID</li>
      <li>Roaming OCPI 2.2.1 para CPO parceiros</li>
      <li>Autorização de sessão com o token que o parceiro aceita</li>
      <li>Preço e cobrança do motorista</li>
      <li>UPI, cartões e um saldo de recarga no aplicativo</li>
      <li>CDR para liquidar com o CPO parceiro</li>
      <li>Uma visão de suporte da sessão, não um botão escondido de hardware</li>
    </ul>
    <h3>CPO, eMSP e uma montagem combinada</h3>
    <p>O mesmo CMS pode ter um papel ou os dois. A terceira coluna é uma montagem combinada com roaming. Não é a afirmação de que operamos um hub nacional de OCPI.</p>
    <table>
      <thead>
        <tr><th>Pergunta</th><th>CMS de CPO</th><th>Plataforma eMSP</th><th>CMS combinado</th></tr>
      </thead>
      <tbody>
        <tr><td>Para quem é</td><td>Você opera carregadores</td><td>Atende motoristas, com a sua marca</td><td>Faz as duas coisas, ou faz roaming com parceiros</td></tr>
        <tr><td>Ligação com o carregador</td><td>OCPP 1.6J e 2.0.1 no hardware que você opera</td><td>Nenhum próprio. O CPO parceiro roda OCPP</td><td>OCPP nos seus locais</td></tr>
        <tr><td>Roaming</td><td>Opcional. Publica locais quando um eMSP precisa vê-los</td><td>OCPI 2.2.1 para os CPO com os quais você fecha acordo</td><td>As duas direções, módulo por módulo. Não um hub público automático</td></tr>
        <tr><td>O que cobra</td><td>Tarifas do local, liquidação ao anfitrião, campos de fatura GST</td><td>O preço do motorista, UPI ou cartões, os CDR que recebe</td><td>As suas tarifas mais CDR de entrada e de saída</td></tr>
        <tr><td>Primeira versão sensata</td><td>Cadastro, início e parada remotos, uma tarifa</td><td>Contas, tokens e os locais de um parceiro</td><td>Um papel primeiro, salvo se a descoberta incluir os dois</td></tr>
      </tbody>
    </table>

    <h2 id="cpms">Sistema de gestão de recarga, CPMS e CSMS</h2>
    <p>O software da estação de recarga é o sistema de registro dos locais que você opera. Um charge point management system, abreviado CPMS, é esse produto: quais estações existem, qual conector está livre, qual sessão está correndo e qual falha precisa de uma pessoa. O OCPP 2.0.1 chama o servidor de Charging Station Management System (CSMS). O OCPP 1.6 chama de Central System. O trabalho é o mesmo. Motorista não entra no CPMS. Operador entra.</p>
    <p>Um CPMS útil guarda a estação uma vez e mostra em todo lugar: o mapa do motorista, a tarifa, a fatura e o registro de roaming, se você publica o local. Modelamos local, carregador, conector e sessão como registros separados, para que um carregador de duas saídas não vire um marcador só. Os valores do medidor ficam presos à sessão que os gerou. Sem essa separação, faturamento e relatório de disponibilidade se contradizem.</p>

    <h2 id="ocpp-backend">Backend OCPP para 1.6J e 2.0.1</h2>
    <p>O backend OCPP é o servidor ao qual os carregadores se conectam. OCPP 1.6J é JSON sobre um WebSocket. As mensagens das quais os operadores dependem são BootNotification, Heartbeat, StatusNotification, Authorize, StartTransaction, StopTransaction, MeterValues, RemoteStartTransaction e RemoteStopTransaction. Configuração, disparo de firmware e perfil de carga estão na mesma especificação, e cada carregador implementa um subconjunto. Anotamos qual subconjunto cada modelo responde.</p>
    <p>OCPP 2.0.1 não é uma troca de nome do 1.6. Usa um modelo de dispositivo, TransactionEvent no lugar do par antigo de início e fim, e opções de segurança mais fortes, inclusive conexão com certificado. Também é o caminho prático quando, mais adiante, você quer que mensagens ISO 15118 passem pelo carregador. Muitos carregadores já instalados na Índia só falam 1.6J. Um backend de frota mista implementa os dois e mantém o mesmo modelo de sessão, para que o faturamento não dependa de qual protocolo começou o fluxo de energia.</p>

    <h2 id="ocpi-roaming">Roaming OCPI 2.2.1</h2>
    <p>O roaming OCPI é o jeito de duas empresas compartilharem recarga sem fundir os aplicativos. O OCPI 2.2.1, mantido pela EVRoaming Foundation, é uma interface entre negócios, não entre um carregador e um servidor. Os módulos que implementamos quando estão no escopo são credentials, locations, tariffs, tokens, commands, sessions e charge detail records (CDR). Perfis de carga existem na especificação para limites de recarga inteligente numa sessão de roaming. Ligamos um módulo só quando o parceiro de fato suporta.</p>
    <p>Um uso prático é um parceiro, não um hub teórico de todas as redes. Trocam-se credenciais, o operador publica locais e tarifas, o eMSP mostra esses marcadores no aplicativo do motorista, um token autoriza o motorista e um CDR é o registro com o qual os dois lados liquidam. Implementação parcial é comum. Separamos módulos para que um parceiro que ainda não envia comandos mesmo assim publique locais. O <a href="/blog/ev-charging-app-ocpi-ocpp-guide">guia de OCPP e OCPI</a> percorre o mesmo recorte com mais detalhe.</p>

    <h2 id="ocpp-vs-ocpi">OCPP e OCPI, em linguagem simples</h2>
    <p>OCPP e OCPI resolvem ligações diferentes, por isso os dois nomes aparecem nos projetos de aplicativo de recarga. OCPP (Open Charge Point Protocol) é o carregador falando com o seu backend: estou online, o conector está se preparando, comece esta transação, aqui vão os valores do medidor, pare. Se essa ligação cai, o hardware pode continuar entregando energia pelas regras locais, mas o aplicativo não vê e não deve fingir que o marcador está vivo.</p>
    <p>OCPI (Open Charge Point Interface) é a sua empresa falando com outra empresa. Responde: aqui estão os meus locais públicos, este é o preço, este token é do seu motorista, esta sessão aconteceu, este CDR é o que vamos liquidar. OCPI não substitui OCPP. Um operador de ponto de recarga continua precisando de OCPP, ou de uma nuvem do fabricante que fale OCPP, para controlar os próprios carregadores. Um eMSP sem carregador pode precisar só de OCPI, mais um aplicativo de motorista. Colocar os dois protocolos numa frase de slide de venda não os transforma numa integração só.</p>

    <h2 id="emsp-cpo">Registros de CPO e de eMSP no CMS</h2>
    <p>O CMS de CPO e a plataforma eMSP acima compartilham um sistema de gestão, e os registros continuam separados. Uma estação, um token de motorista e uma sessão não são a mesma tabela. O lado CPO guarda a conexão OCPP, as tarifas do local e o chamado de falha. O lado eMSP guarda a conta do motorista, o meio de pagamento e a fatura que o motorista recebe. Muitas redes começam com um papel só.</p>
    <p>Mantemos os papéis no modelo de dados mesmo quando a primeira versão tem uma marca só. Um motorista, um token, uma sessão e uma estação não deveriam ser a mesma tabela. Se mais tarde houver roaming, o lado eMSP já sabe guardar um token que não está preso a um carregador seu, e o lado CPO já sabe aceitar um token que não nasceu no seu aplicativo. É uma decisão de estrutura no dia um, não uma reescrita no dia duzentos.</p>

    <h2 id="driver-app">Aplicativo do motorista para iOS e Android</h2>
    <p>O aplicativo do motorista é o mapa, a sessão e o recibo. No iOS e no Android mostramos os carregadores que o backend de fato conhece, com filtros que um motorista usa na Índia: conector, faixa de potência e se o conector está disponível. Um marcador sem estado fresco leva a hora do último heartbeat, e não é desenhado como livre. A navegação vai para o aplicativo de mapas que o celular já tem. Não inventamos uma camada de trânsito.</p>
    <p>O início pode ser um comando remoto no aplicativo, um código QR que identifica o conector, ou um cartão RFID que o carregador autoriza por OCPP. Reserva só entra quando aquele carregador implementa. Muitas unidades 1.6J não implementam. Os pagamentos são UPI, cartões ou um saldo no aplicativo, por um gateway que você contrata. Integramos o gateway. Não somos a empresa de pagamento e não temos uma licença de instrumento pré-pago no seu lugar. Se um saldo guardado puder ser sacado ou gasto fora da recarga, o seu assessor jurídico confirma a posição perante o RBI antes de desenharmos essa carteira. Os fluxos de tela são desenhados com o mesmo cuidado do nosso trabalho de <a href="/services/ui-ux-design">UI/UX</a>, e as versões de loja seguem o <a href="/services/mobile-app-development">desenvolvimento de aplicativos para celular</a>.</p>

    <h2 id="operator-dashboard">Painel do operador do CMS</h2>
    <p>O painel de administração e de operação é um aplicativo web, não uma tela de celular esticada. A operação vê quais conectores estão em falha. O financeiro vê quais sessões têm CDR e quais pagamentos continuam em aberto. Um anfitrião de local, como um shopping ou um hotel, pode ficar limitado aos próprios locais. A matriz vê a rede. São papéis, não três produtos.</p>
    <p>Na página do carregador colocamos as ações que o protocolo suporta: início remoto, parada remota, reinício quando o carregador implementa, e uma mudança de configuração que fica registrada. Uma ação que o firmware não suporta fica escondida, e não aparece como um botão que falha na frente do cliente. As exportações entregam um arquivo de sessões e de faturas para o contador. O painel não substitui a sua escrituração.</p>

    <h2 id="smart-charging">Gestão de carga e recarga inteligente</h2>
    <p>Gestão de carga e recarga inteligente mantêm um local dentro da potência que o projeto elétrico permite. A entrada é um limite que o seu eletricista ou a equipe de instalação declara para um quadro, um alimentador ou um local. O backend olha as sessões ativas e envia um perfil de carga OCPP, no 1.6J por meio de SetChargingProfile quando o carregador suporta, de modo que a soma dos limites dos conectores fique abaixo desse teto. Se um carregador ignora perfil, dizemos isso no teste de hardware. Não fingimos que um controle de software passa por cima do disjuntor.</p>
    <p>Aqui, recarga inteligente não é promessa de comércio com o mercado de energia. API de resposta à demanda da concessionária é outra integração, no escopo só quando você tem esse contrato e um documento que possamos ler. Para um prédio, a versão útil é mais quieta: pausar ou baixar as sessões que podem esperar, e deixar quieta uma sessão quando o motorista ou a regra de frota diz que não pode esperar. A regra está escrita. Não é uma pontuação escondida.</p>

    <h2 id="hardware-integration">Integração de hardware compatível com OCPP</h2>
    <p>Integrar hardware compatível com OCPP significa que o carregador fala OCPP 1.6J ou 2.0.1 perto o bastante para iniciar, autorizar, medir e parar. Nome de marca não é lista de compatibilidade. Duas unidades do mesmo fabricante podem sair com firmware diferente. Pedimos o modelo, a versão de OCPP e um jeito de alcançar um carregador físico ou um simulador do fabricante que coincida com esse firmware. O teste é um roteiro: boot, heartbeat, authorize, start, valores do medidor, stop, e os comandos remotos de que o primeiro dia precisa.</p>
    <p>Conector é outra pergunta, diferente do protocolo. Os carregadores de carro mais novos na Índia costumam usar Type 2 em corrente alternada e CCS2 em corrente contínua. Locais públicos mais antigos podem continuar com Bharat AC-001 ou Bharat DC-001. AC-001 é uma especificação pública de corrente alternada com três saídas de 230 V, cerca de 3,3 kW cada uma, e conectores IEC 60309. DC-001 é a especificação de corrente contínua de baixa tensão para pacotes de cerca de 48 V, 60 V e 72 V, da ordem de 15 kW, com OCPP na direção do sistema de gestão nos carregadores construídos segundo essa especificação. Mostramos o conector que o hardware reporta. Não desenhamos um marcador CCS2 numa tomada Bharat AC. A conectividade do carregador é a parte de IoT deste trabalho. Fica nesta página, não num produto de IoT separado.</p>

    <h2 id="billing-tariffs">Faturamento, tarifas e faturas GST</h2>
    <p>O faturamento parte de uma tarifa que uma pessoa consegue explicar. Os elementos que modelamos são energia (por kWh), tempo (por minuto enquanto carrega), uma taxa fixa por sessão e uma taxa de ociosidade quando a recarga terminou e o veículo continua ocupando o conector. Um local pode ter mais de uma tarifa conforme a hora do dia. O preço que o motorista viu ao começar é o preço do recibo, salvo se houver outra regra escrita. O módulo de tarifas do OCPI é como esse preço se publica para um parceiro de roaming. Não é um segundo preço secreto.</p>
    <p>Faturar com GST significa que o documento pode levar o seu GSTIN, o local de fornecimento, o SAC, o valor tributável e o detalhamento de imposto que o seu contador indicar. Não escolhemos a sua alíquota e não apresentamos declaração. O operador continua responsável pelo registro e pela entrega. Liquidações para um anfitrião de local, como um hotel ou um shopping, são um rateio que você define no contrato. O software registra o rateio. Não substitui o contrato. A faixa inicial publicada de um MVP está na <a href="/pricing">página de preços</a>. Não é uma tarifa de energia elétrica.</p>

    <h2 id="fleet-charging">Recarga de frota</h2>
    <p>Recarga de frota é, na maior parte das vezes, um problema de pátio, não de mapa público. Os veículos são conhecidos, o local é privado ou compartilhado com um locador, e a pergunta é qual veículo precisa sair a que horas. Amarramos um RFID ou um registro de veículo à sessão para a energia ser reportada por veículo, não só por conector. Um despachante pode marcar uma prioridade de saída. A gestão de carga então prefere o ônibus ou a van que precisa se mover, e baixa o que pode esperar, dentro do limite do quadro.</p>
    <p>Uma frota pode usar o mesmo CPMS de um local público. Os marcadores públicos simplesmente não se publicam para o pátio, ou se publicam só nas vagas que você marcar como públicas. Motoristas de carro compartilhado da frota podem usar o mesmo aplicativo com um grupo que não vê preço público. Não assumimos que uma frota quer OCPI no primeiro dia. O roaming pode esperar até um veículo recarregar fora do pátio.</p>

    <h2 id="white-label">CMS de recarga EV em white-label</h2>
    <p>Um CMS de recarga em white-label é o seu nome na ficha da loja, as suas cores, o seu endereço de suporte e o seu domínio no painel. O comportamento do protocolo não muda porque o logo mudou. Mesmo assim precisamos saber de quem são os carregadores, de quem é o gateway de pagamento e de quem é o GSTIN da fatura. White-label é uma escolha de marca e de publicação. Não é um atalho para pular o teste OCPP.</p>
    <p>Agências que querem que a gente construa sob a relação com o cliente delas também podem usar o contrato de <a href="/white-label-development">desenvolvimento white-label</a>. Nesta página o produto é a pilha de recarga. Você recebe os repositórios do aplicativo e do backend que o escopo nomeia. Não guardamos uma trava escondida de produção. As políticas da App Store e da Play continuam valendo para a pessoa jurídica que publica o aplicativo.</p>

    <h2 id="plug-and-charge">ISO 15118 e preparação para Plug &amp; Charge</h2>
    <p>ISO 15118 é o padrão de comunicação entre o veículo e o carregador. Plug &amp; Charge é o caso em que o carro apresenta um certificado de contrato e a sessão pode começar sem um toque no aplicativo e sem cartão RFID, quando o carro, o carregador e um ecossistema de certificados suportam isso. OCPP 2.0.1 é o caminho de backend que transporta essas trocas de forma mais completa do que o 1.6J. Preparação significa deixar um lugar no modelo de dados para contratos e estado de certificado, e não pintar o produto num canto que só entende token de aplicativo.</p>
    <p>Preparação não é uma rede de Plug &amp; Charge no ar. Não operamos uma infraestrutura de chave pública de veículo para a rede, e não afirmamos que os seus carros atuais vão plugar e partir sem outro passo. Isso depende do veículo, do firmware do carregador e de um certificado de contrato que você tenha direito de emitir ou de comprar. Quando essas três coisas existem, o trabalho de OCPP 2.0.1 do escopo é o que conectamos. Até existirem, os motoristas começam pelo aplicativo, pelo QR ou pelo RFID.</p>

    <h2 id="analytics">Análise de recarga</h2>
    <p>A análise de uma rede de veículos elétricos é operacional, não um painel para enfeitar relatório. Os números que mudam uma decisão são sessões iniciadas, sessões que entregaram energia, kWh por local e conector, tempo em que um conector ficou em falha, e receita por tarifa. A disponibilidade deriva de heartbeats e de notificações de estado. Se um carregador para de mandar heartbeat, o gráfico deve mostrar um buraco, não uma linha saudável e reta.</p>
    <p>Não publicamos percentual de referência da sua rede antes de ela existir, e não inventamos uma média do setor nesta página. Os filtros cobrem local, conector e dia. Há exportação para o financeiro conciliar pagamento fora da ferramenta. Um mapa da Índia com demanda adivinhada não é função de análise. Se mais adiante você quiser um modelo em cima do histórico real de sessões, é outra conversa de <a href="/services/software-development">software sob medida</a>, com os dados que você de fato tem.</p>

    <h2 id="india-context">Software de recarga EV para a Índia</h2>
    <p>O contexto da Índia aparece na lista de conectores, no meio de pagamento e na fatura, não numa foto de banco de imagens de uma cidade. Os locais públicos e de frota daqui são uma mistura. Os carros recarregam cada vez mais em Type 2 e CCS2. Motos e triciclos ainda encontram equipamento Bharat AC-001 e Bharat DC-001. O aplicativo precisa filtrar pelo conector que o veículo consegue usar. Um motorista de carro não deve ser mandado para uma vaga de corrente contínua de baixa tensão. Um motociclista não deve ser mandado só para um conector CCS2.</p>
    <p>Pagamento na Índia significa que UPI é uma opção de primeira classe ao lado dos cartões, por um gateway que você contrata. As faturas precisam de campos GST, como a seção de faturamento descreve. Não citamos uma contagem oficial de estações, um subsídio nem uma alíquota nesta página. Isso muda, e não é o nosso produto. A equipe que constrói o software está em Jaipur. A entrega é remota para o resto da Índia e para equipes fora da Índia. O seu carregador mesmo assim precisa ser alcançável pelo backend, esteja o local onde estiver.</p>

    <h2 id="who-its-for">Para quem é este sistema de gestão de recarga</h2>
    <p>Operadores de ponto de recarga chegam quando a nuvem do fabricante é fechada demais, ou quando várias marcas de carregador precisam viver num CPMS só. Os eMSP chegam quando querem um aplicativo de motorista e OCPI para redes que não possuem. As frotas chegam por uma visão de pátio, identidade do veículo e prioridade de saída. O software é a mesma família de componentes. A primeira versão não é.</p>
    <p>O setor imobiliário e os shoppings em geral hospedam carregadores, mais do que viram um eMSP nacional. Precisam de um painel no nível do local, de um jeito de o visitante pagar e de uma nota de liquidação para o operador ou para a marca do carregador. Hotéis são parecidos, com a pergunta extra de a estadia ir para a conta do quarto ou para um pagamento UPI direto. Startups chegam por um produto white-label que possam colocar no mercado com o próprio nome. Diremos se o briefing é só um site de marketing. Esse trabalho pertence ao desenvolvimento de sites, não aqui.</p>

    <h2 id="cost-and-timeline">O que muda o custo e o prazo</h2>
    <p>O custo segue o escopo. Um aplicativo de motorista sobre uma rede que já existe é menor do que um CPMS mais OCPP para vários modelos de carregador mais OCPI com mais de um parceiro. Outros fatores são iOS e Android juntos, um painel de operador, UPI e cartões, a profundidade da fatura GST, regras de frota, gestão de carga, publicações de loja em white-label, e se a preparação ISO 15118 entra na primeira fase ou depois. Hardware que não conseguimos alcançar, ou uma nuvem de fabricante que não expõe OCPP, soma tempo que não se comprime com mais telas.</p>
    <p>A <a href="/pricing">página de preços</a> publica uma faixa inicial de ₹4,50,000 ex-GST, depois da descoberta. O rótulo dessa página é um MVP de eMSP ou de CPO com mapas ao vivo, sessões de recarga e OCPP/OCPI. Esse número é uma faixa inicial, não um pacote que se pede sem mudança. O nosso <a href="/blog/ev-charging-app-ocpi-ocpp-guide">guia técnico</a> descreve um primeiro CSMS e um aplicativo de motorista, um punhado de modelos de carregador e um método de pagamento como algo que muitas vezes leva de 10 a 14 semanas quando o acesso e o hardware estão prontos. Um aplicativo de eMSP sem carregadores próprios pode ser mais curto. Um uso com vários modelos mais roaming é mais longo. Não fechamos um número de semanas no primeiro e-mail.</p>

    <h2 id="ev-first-release">O que uma primeira versão de recarga EV costuma incluir</h2>
    <p>A primeira versão é o sistema menor que um motorista real e um operador real conseguem usar. Ela tem preço. Não é um pacote grátis e não é o catálogo completo de roaming.</p>
    <ul>
      <li><strong>Uma conexão de carregador que seja real:</strong> OCPP 1.6J ou 2.0.1 contra o firmware que você vai instalar, não um slide de logos.</li>
      <li><strong>Um caminho de motorista:</strong> mapa, estado, início, parada e um recibo em iOS, Android ou a plataforma que você escolher primeiro.</li>
      <li><strong>Um caminho de operador:</strong> estado do carregador, a lista de sessões e uma falha que uma pessoa consiga ver.</li>
      <li><strong>Uma forma de pagar:</strong> UPI ou cartões pelo seu gateway, ou um único método que você já opere.</li>
      <li><strong>Uma tarifa:</strong> um preço que o motorista consiga ler antes de a sessão começar.</li>
      <li><strong>Notas de entrega:</strong> como acrescentar um carregador, quem tem as contas e como ler um início que falhou.</li>
    </ul>
    <p>Parceiros OCPI, modelos extras de carregador, prioridade de frota e preparação de Plug &amp; Charge são fases seguintes, salvo se a descoberta os colocar no primeiro escopo. Peça esse escopo no formulário de contato.</p>

    <h2 id="process">Como corre um projeto de sistema de gestão de recarga</h2>
    <ol>
      <li><strong>Descoberta.</strong> Anotamos o papel que você joga: CPO, eMSP, frota, anfitrião de local ou uma mistura. Listamos modelos de carregador, versões de OCPP, se já existe uma nuvem de fabricante no meio, e se pagamento e fatura GST entram na primeira versão. Você recebe um escopo, não uma frase de efeito.</li>
      <li><strong>Teste de protocolo.</strong> Um carregador, ou um simulador que coincida com o seu firmware, completa boot, authorize, start, valores do medidor e stop. Os comandos remotos do primeiro dia vão no mesmo teste. Os modelos que falham ficam fora da promessa.</li>
      <li><strong>Design de produto.</strong> Os fluxos do motorista e o painel do operador são desenhados antes de a construção se espalhar. Filtro de conector, estado de erro e o preço mostrado antes de começar fazem parte do design, não de uma passada de polimento. UI/UX e engenharia estão na mesma equipe.</li>
      <li><strong>Construção.</strong> O backend, os aplicativos, as tarifas e o painel são construídos contra o teste de protocolo. As sessões guardam energia e dinheiro como fatos separados. Existe um ambiente de testes enquanto o trabalho anda.</li>
      <li><strong>Implantação de hardware e de roaming.</strong> Outros modelos de carregador repetem o teste de protocolo. OCPI, se estiver no escopo, começa com um parceiro e com os módulos que esse parceiro implementa. Não abrimos todos os módulos no primeiro dia.</li>
      <li><strong>Saída e entrega.</strong> Fichas de loja, um backend monitorado e notas para acrescentar um local. As contas e os repositórios ficam no seu nome. A hospedagem contínua pode passar para DevOps e nuvem, ou a sua equipe pode operar o que entregamos.</li>
    </ol>

    <h2 id="tech-stack">Pilha técnica do CMS de recarga EV</h2>
    <p>OCPP 1.6J, OCPP 2.0.1, OCPI 2.2.1, WebSockets, React Native, Node.js, PostgreSQL, Redis, MQTT, preparação para ISO 15118, UPI, QR e RFID. A pilha se confirma no escopo. Não é uma lista de logos que promete compatibilidade.</p>

    <h2>Por que esta equipe</h2>
    <ul>
      <li><strong>Base em Jaipur.</strong> Quem desenha o aplicativo e o backend OCPP está em Jaipur, Rajasthan. Existe uma conversa com nome. A entrega é remota na Índia e em outros países.</li>
      <li><strong>Pilha completa, uma equipe.</strong> Aplicativo de motorista, painel de operador e backend de recarga são construídos juntos. O trabalho de protocolo não vai para um grupo sem nome.</li>
      <li><strong>Um produto no ar que dá para abrir.</strong> PlugOne é um produto de recarga que publicamos. Você pode abrir plugone.in e o estudo de caso. Não atribuímos números de uso inventados.</li>
      <li><strong>Escopo antes de construir.</strong> Você recebe um escopo escrito depois da descoberta. A página de preços mostra uma faixa inicial. Esta página não finge que essa faixa é um pacote fechado.</li>
    </ul>
    <p>Produto no ar: <a href="https://plugone.in/" target="_blank" rel="noopener noreferrer">plugone.in</a> e o <a href="/portfolio/plugone-ev-charging-platform">caso PlugOne</a>. Guia: <a href="/blog/ev-charging-app-ocpi-ocpp-guide">OCPP e OCPI</a>.</p>

    <h2 id="faq">Perguntas frequentes (FAQ)</h2>
    <h3>O que é um CMS para um CPO?</h3>
    <p>Um CMS para um CPO (charge point operator) é o software que opera os carregadores que você opera. As equipes também chamam de CPMS, e o OCPP 2.0.1 chama o servidor de CSMS. Ele cadastra carregadores por OCPP, mostra o estado do conector, envia início e parada remotos, guarda valores do medidor, guarda tarifas e levanta um alerta quando os heartbeats caem. Sozinho, não deixa os seus motoristas usarem os carregadores de outra empresa. Essa ligação é OCPI, do lado eMSP.</p>
    <h3>O que é uma plataforma eMSP e no que ela difere de um CMS de CPO?</h3>
    <p>Uma plataforma eMSP é o produto ao qual o motorista pertence: a conta, o token de aplicativo ou RFID, o preço, o pagamento e a fatura. Um CMS de CPO é o produto ao qual o carregador pertence. O eMSP chega a carregadores parceiros por OCPI 2.2.1 (locais, tokens, sessões e registros de detalhe de carga). O CPO chega ao próprio hardware por OCPP 1.6J ou 2.0.1. Podem viver num mesmo sistema de gestão de recarga. Não são a mesma tela.</p>
    <h3>Um CMS só pode servir os papéis de CPO e de eMSP?</h3>
    <p>Sim. Estações e tokens de motorista continuam registros separados, então um CMS de recarga pode operar os seus carregadores e também deixar os seus motoristas fazerem roaming em CPO parceiros. Você não precisa lançar os dois papéis no primeiro dia. O roaming mesmo assim precisa de um parceiro que implemente os módulos OCPI que você usa. Um CMS combinado não é automaticamente um hub público de roaming.</p>
    <h3>Vocês oferecem um CMS de recarga EV em white-label?</h3>
    <p>Sim. White-label significa a sua marca, as suas contas de loja, o seu domínio e o seu gateway de pagamento sobre o CMS. O teste de OCPP e de OCPI não muda porque o logo mudou. Você recebe os repositórios nomeados no escopo. Esta página não vende um pacote fechado. A página de preços lista uma faixa inicial para um MVP.</p>
    <h3>Quanto custa desenvolver um aplicativo de recarga EV na Índia?</h3>
    <p>A página de preços publica uma faixa inicial de ₹4,50,000 ex-GST, depois da descoberta. Ela rotula essa faixa como um MVP de eMSP ou de CPO com mapas ao vivo, sessões de recarga e OCPP/OCPI. É uma faixa inicial, não um pacote fechado. O custo se move com um aplicativo de motorista diante de um sistema completo de gestão de pontos de recarga, OCPP 1.6J e 2.0.1, roaming OCPI, quantos modelos de carregador precisam de teste, pagamento com UPI e cartão, faturas GST, regras de frota, e se você publica iOS e Android juntos. Mandamos um escopo escrito antes de construir.</p>
    <h3>O que é OCPP?</h3>
    <p>OCPP é o Open Charge Point Protocol. É como um carregador de veículo elétrico fala com um backend central. A versão 1.6J é JSON sobre um WebSocket e cobre boot, heartbeat, authorize, start, valores do medidor e stop. A versão 2.0.1 usa um modelo de dispositivo e TransactionEvent, e é o melhor caminho quando mais adiante você precisa de mensagens ISO 15118. OCPP, sozinho, não deixa duas empresas fazerem roaming nas redes uma da outra.</p>
    <h3>Qual é a diferença entre OCPP e OCPI?</h3>
    <p>OCPP liga um carregador ao seu backend para você ver o estado e iniciar ou parar uma sessão. OCPI liga o seu negócio a outro negócio de recarga para trocar locais, tarifas, tokens, sessões e registros de detalhe de carga. Um operador de ponto de recarga em geral precisa de OCPP para o próprio hardware. Um eMSP que não tem carregador pode precisar só de OCPI. Não são substitutos.</p>
    <h3>Vocês integram qualquer marca de carregador?</h3>
    <p>Integramos carregadores que falam OCPP 1.6J ou 2.0.1 perto o bastante para iniciar, autorizar, medir e parar. Logo de marca não é lista de compatibilidade, porque o firmware muda dentro de uma marca. A descoberta inclui um teste de protocolo do modelo que você vai instalar. Se uma nuvem de fabricante não expõe OCPP, dizemos isso e não fingimos que o aplicativo consegue controlar esse hardware.</p>
    <h3>Vocês constroem aplicativos de recarga EV em white-label?</h3>
    <p>Sim. Uma versão white-label usa a sua marca, as suas contas de loja, o seu domínio e o seu gateway de pagamento. O teste OCPP ou OCPI é o mesmo de uma versão de uma marca só. Você recebe os repositórios nomeados no escopo. Publicar segue as regras da App Store e da Play para a pessoa jurídica da ficha.</p>
    <h3>O que é um CPMS ou charge point management system?</h3>
    <p>Um CPMS é o software de operador das estações: locais, carregadores, conectores, sessões, falhas e tarifas. O OCPP 2.0.1 chama o lado servidor de CSMS, e o OCPP 1.6 chama de Central System. Os motoristas usam o aplicativo de celular. Os operadores usam o CPMS. Construímos os dois quando o escopo inclui os dois.</p>
    <h3>Vocês constroem software de eMSP e de CPO?</h3>
    <p>Sim, inclusive para uma empresa que é as duas coisas. O lado CPO é o CPMS e a conexão OCPP. O lado eMSP é a conta do motorista, o token, o aplicativo e a fatura. O modelo de dados mantém esses papéis separados para o roaming não exigir uma reescrita.</p>
    <h3>Quanto tempo leva o desenvolvimento de um aplicativo de recarga EV?</h3>
    <p>O nosso guia técnico descreve um primeiro CSMS e um aplicativo de motorista, um punhado de modelos de carregador e um método de pagamento como algo que muitas vezes leva de 10 a 14 semanas quando o acesso ao hardware está pronto. Um aplicativo de eMSP que não possui carregadores pode ser mais curto. Vários modelos de carregador mais OCPI com mais de um parceiro levam mais tempo. Não prometemos um número de semanas antes da descoberta.</p>
    <h3>O que é o roaming OCPI?</h3>
    <p>O roaming OCPI deixa um motorista de uma rede usar um carregador de outra, com um registro que as duas empresas conseguem liquidar. Os módulos do OCPI 2.2.1 cobrem credentials, locations, tariffs, tokens, commands, sessions e charge detail records. Começamos com um parceiro e com os módulos que esse parceiro implementa, em vez de assumir que todas as redes falam a especificação inteira.</p>
    <h3>O aplicativo do motorista pode usar UPI, cartões, RFID e QR?</h3>
    <p>Sim, quando estão no escopo. UPI e cartões passam por um gateway de pagamento que você contrata. Somos o fornecedor de software, não a instituição de pagamento. O RFID é uma etiqueta de identificação OCPP que o carregador autoriza. Um código QR identifica o conector para o aplicativo pedir um início remoto. Dá para construir um saldo no aplicativo usado só para recarregar; se esse saldo puder ser sacado, o seu assessor confirma primeiro a posição regulatória.</p>
    <h3>Vocês suportam ISO 15118 Plug &amp; Charge?</h3>
    <p>Podemos preparar o backend para ISO 15118 Plug &amp; Charge sobre OCPP 2.0.1, inclusive um lugar para a autorização por contrato. Não afirmamos uma rede de Plug &amp; Charge no ar, e não operamos uma autoridade de certificados de veículos. Até existirem o carro, o carregador e um certificado de contrato, os motoristas começam pelo aplicativo, pelo QR ou pelo RFID.</p>
    <h3>Vocês só trabalham em Jaipur?</h3>
    <p>A equipe tem base em Jaipur, Rajasthan. Os projetos são entregues à distância na Índia e em outros países. Os locais de carregador podem estar em qualquer lugar em que o hardware alcance o backend. A sua localização pode mudar a região de nuvem que recomendamos. Não muda quem constrói o software.</p>
  `,
};
