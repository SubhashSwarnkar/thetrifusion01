/**
 * Shared EV charging architecture flow (charger → OCPP → CMS → driver app + OCPI).
 * Used on the EV service page and the PlugOne case study.
 */
export default function EvArchitectureDiagram({
  markerId = "evArrow",
  brandLabel = "Your brand",
}) {
  const nodes = [
    { id: "charger", label: "Charger", sub: "EVSE" },
    { id: "ocpp", label: "OCPP", sub: "1.6J / 2.0.1" },
    { id: "cms", label: "CMS / CSMS", sub: brandLabel },
    { id: "app", label: "Driver app", sub: "Pay · UPI" },
    { id: "ocpi", label: "OCPI roaming", sub: "Partners / hubs" },
  ];

  return (
    <figure
      className="rounded-3xl border border-theme-purple/15 bg-gradient-to-br from-light-theme-purple/40 via-white to-cyan-50 p-5 sm:p-8"
      aria-label="EV charging software architecture: charger to OCPP to CMS to driver app and OCPI roaming"
    >
      <figcaption className="sr-only">
        Flow: Charger connects over OCPP to the CMS. The CMS powers the driver
        app and payments, and connects to partner networks over OCPI for roaming.
      </figcaption>
      {/* Mobile: vertical stack */}
      <ol className="flex flex-col gap-3 sm:hidden list-none m-0 p-0">
        {nodes.map((node, idx) => (
          <li key={node.id} className="flex flex-col items-stretch gap-2">
            <div className="rounded-2xl border border-white bg-white px-4 py-3 shadow-sm text-center">
              <span className="block text-sm font-bold text-theme-blue">
                {node.label}
              </span>
              <span className="block text-xs text-gray-500 font-medium mt-0.5">
                {node.sub}
              </span>
            </div>
            {idx < nodes.length - 1 ? (
              <div
                className="flex justify-center text-theme-purple"
                aria-hidden="true"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            ) : null}
          </li>
        ))}
      </ol>
      {/* Desktop: horizontal flow SVG */}
      <div className="hidden sm:block overflow-x-auto">
        <svg
          viewBox="0 0 920 140"
          className="w-full min-w-[640px] h-auto"
          role="img"
          aria-label="Charger to OCPP to CMS to driver app and payments, with OCPI roaming to partners"
        >
          {[
            { x: 20, label: "Charger", sub: "EVSE" },
            { x: 200, label: "OCPP", sub: "1.6J / 2.0.1" },
            { x: 380, label: "CMS / CSMS", sub: brandLabel },
            { x: 560, label: "Driver app", sub: "UPI · RFID · QR" },
            { x: 740, label: "OCPI roaming", sub: "Partners / hubs" },
          ].map((box, i, arr) => (
            <g key={box.label}>
              <rect
                x={box.x}
                y={28}
                width={140}
                height={72}
                rx={16}
                fill="white"
                stroke="#6610f2"
                strokeOpacity="0.25"
              />
              <text
                x={box.x + 70}
                y={58}
                textAnchor="middle"
                fill="#152C5B"
                fontSize="14"
                fontWeight="700"
              >
                {box.label}
              </text>
              <text
                x={box.x + 70}
                y={78}
                textAnchor="middle"
                fill="#64748b"
                fontSize="11"
              >
                {box.sub}
              </text>
              {i < arr.length - 1 ? (
                <path
                  d={`M${box.x + 140} 64 H${arr[i + 1].x - 4}`}
                  stroke="#6610f2"
                  strokeWidth="2"
                  markerEnd={`url(#${markerId})`}
                />
              ) : null}
            </g>
          ))}
          <defs>
            <marker
              id={markerId}
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 Z" fill="#6610f2" />
            </marker>
          </defs>
        </svg>
      </div>
      <p className="mt-4 text-sm text-gray-600 font-light leading-relaxed max-w-3xl">
        Charger ⇄ OCPP ⇄ CMS ⇄ driver app and payments. Separately, CMS ⇄ OCPI ⇄
        partner networks. OCPP is hardware; OCPI is roaming between businesses.
      </p>
    </figure>
  );
}
