import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad de ${business.name}. Información sobre el tratamiento de datos personales conforme al RGPD.`,
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-lg max-w-none">
          <p>
            <strong>Última actualización:</strong> Febrero 2026
          </p>

          <p>
            En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo
            y del Consejo, de 27 de abril de 2016, relativo a la protección de
            las personas físicas en lo que respecta al tratamiento de datos
            personales y a la libre circulación de estos datos (RGPD), y de la
            Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
            Personales y garantía de los derechos digitales (LOPDGDD), le
            informamos de lo siguiente:
          </p>

          <h2>1. Responsable del tratamiento</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="mb-2">
              <strong>Identidad:</strong> {business.name}
            </p>
            <p className="mb-2">
              <strong>NIF/NIE:</strong> [Número a completar]
            </p>
            <p className="mb-2">
              <strong>Dirección:</strong> {business.address}
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${business.email}`} className="text-blue-600">
                {business.email}
              </a>
            </p>
            <p className="mb-0">
              <strong>Teléfono:</strong>{" "}
              <a href={`tel:${business.phone}`} className="text-blue-600">
                {business.phone}
              </a>
            </p>
          </div>

          <h2>2. Datos personales que recopilamos</h2>
          <p>Recopilamos los siguientes tipos de datos personales:</p>

          <h3>2.1. Datos proporcionados directamente por usted</h3>
          <p>
            A través del formulario de contacto de esta web, recopilamos:
          </p>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Número de teléfono</li>
            <li>Dirección de correo electrónico (opcional)</li>
            <li>Descripción del servicio solicitado</li>
            <li>Dirección del inmueble donde se requiere el servicio</li>
          </ul>

          <h3>2.2. Datos recopilados automáticamente</h3>
          <p>
            Si ha dado su consentimiento, podemos recopilar datos de navegación
            a través de cookies analíticas. Para más información, consulte
            nuestra{" "}
            <Link
              href="/politica-cookies"
              className="text-blue-600 underline"
            >
              Política de Cookies
            </Link>
            .
          </p>

          <h2>3. Finalidad del tratamiento</h2>
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Finalidad</th>
                <th className="border p-2 text-left">Base legal</th>
                <th className="border p-2 text-left">Conservación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">
                  Responder a solicitudes de presupuesto
                </td>
                <td className="border p-2">
                  Ejecución de contrato (Art. 6.1.b RGPD)
                </td>
                <td className="border p-2">Hasta finalizar el servicio</td>
              </tr>
              <tr>
                <td className="border p-2">
                  Gestionar la prestación de servicios
                </td>
                <td className="border p-2">
                  Ejecución de contrato (Art. 6.1.b RGPD)
                </td>
                <td className="border p-2">
                  Duración de la relación + plazos legales
                </td>
              </tr>
              <tr>
                <td className="border p-2">
                  Cumplir obligaciones fiscales y contables
                </td>
                <td className="border p-2">
                  Obligación legal (Art. 6.1.c RGPD)
                </td>
                <td className="border p-2">
                  5 años (facturas) / 4 años (obligaciones fiscales)
                </td>
              </tr>
              <tr>
                <td className="border p-2">
                  Análisis de uso del sitio web
                </td>
                <td className="border p-2">
                  Consentimiento (Art. 6.1.a RGPD)
                </td>
                <td className="border p-2">
                  Según política de cookies
                </td>
              </tr>
            </tbody>
          </table>

          <h2>4. Destinatarios de los datos</h2>
          <p>Sus datos podrán ser comunicados a:</p>
          <ul>
            <li>
              <strong>Administraciones Públicas:</strong> Para el cumplimiento
              de obligaciones legales (Agencia Tributaria, etc.)
            </li>
            <li>
              <strong>Proveedores de servicios (encargados del tratamiento):</strong>
              <ul>
                <li>
                  <strong>Resend</strong> (envío de emails) - Datos tratados en
                  EE.UU. bajo cláusulas contractuales tipo
                </li>
                <li>
                  <strong>Vercel</strong> (alojamiento web) - Datos tratados en
                  EE.UU. bajo cláusulas contractuales tipo
                </li>
                <li>
                  <strong>Google Analytics</strong> (análisis web, si consiente)
                  - Datos tratados en EE.UU. bajo el EU-US Data Privacy Framework
                </li>
              </ul>
            </li>
          </ul>

          <h2>5. Transferencias internacionales</h2>
          <p>
            Algunos de nuestros proveedores de servicios están ubicados fuera
            del Espacio Económico Europeo (EEE). En estos casos, garantizamos
            que las transferencias se realizan con las garantías adecuadas:
          </p>
          <ul>
            <li>
              Cláusulas contractuales tipo aprobadas por la Comisión Europea
            </li>
            <li>
              EU-US Data Privacy Framework para proveedores certificados en
              EE.UU.
            </li>
          </ul>

          <h2>6. Derechos del interesado</h2>
          <p>
            Conforme al RGPD, usted tiene los siguientes derechos sobre sus
            datos personales:
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <ul className="mb-0">
              <li>
                <strong>Derecho de acceso:</strong> Conocer qué datos tenemos
                sobre usted
              </li>
              <li>
                <strong>Derecho de rectificación:</strong> Corregir datos
                inexactos o incompletos
              </li>
              <li>
                <strong>Derecho de supresión:</strong> Solicitar la eliminación
                de sus datos
              </li>
              <li>
                <strong>Derecho de oposición:</strong> Oponerse a determinados
                tratamientos
              </li>
              <li>
                <strong>Derecho de limitación:</strong> Solicitar que se limite
                el tratamiento
              </li>
              <li>
                <strong>Derecho de portabilidad:</strong> Recibir sus datos en
                formato estructurado
              </li>
              <li>
                <strong>Derecho a retirar el consentimiento:</strong> En
                cualquier momento, sin efecto retroactivo
              </li>
              <li>
                <strong>Derecho a no ser objeto de decisiones automatizadas:</strong>{" "}
                No realizamos perfilado automatizado
              </li>
            </ul>
          </div>

          <h3>¿Cómo ejercer sus derechos?</h3>
          <p>
            Puede ejercer sus derechos enviando una solicitud a{" "}
            <a href={`mailto:${business.email}`} className="text-blue-600">
              {business.email}
            </a>{" "}
            indicando:
          </p>
          <ul>
            <li>Nombre y apellidos</li>
            <li>Copia del DNI/NIE u otro documento identificativo</li>
            <li>Derecho que desea ejercer</li>
            <li>Dirección para notificaciones</li>
          </ul>
          <p>
            Responderemos en un plazo máximo de un mes desde la recepción de su
            solicitud.
          </p>

          <h2>7. Seguridad de los datos</h2>
          <p>
            Aplicamos medidas técnicas y organizativas apropiadas para
            garantizar un nivel de seguridad adecuado, incluyendo:
          </p>
          <ul>
            <li>Cifrado de datos en tránsito (HTTPS/TLS)</li>
            <li>Acceso restringido a los datos personales</li>
            <li>Copias de seguridad periódicas</li>
            <li>Evaluación regular de las medidas de seguridad</li>
          </ul>

          <h2>8. Menores de edad</h2>
          <p>
            Este sitio web no está dirigido a menores de 18 años. No recopilamos
            conscientemente datos de menores. Si es padre o tutor y cree que su
            hijo nos ha proporcionado datos personales, contacte con nosotros.
          </p>

          <h2>9. Enlaces a terceros</h2>
          <p>
            Este sitio web puede contener enlaces a otros sitios. No somos
            responsables de las prácticas de privacidad de esos sitios. Le
            recomendamos leer las políticas de privacidad de cada sitio que
            visite.
          </p>

          <h2>10. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política de privacidad periódicamente. La
            fecha de &quot;última actualización&quot; al inicio indica cuándo se
            realizaron los últimos cambios. Le recomendamos revisar esta página
            regularmente.
          </p>

          <h2>11. Autoridad de control</h2>
          <p>
            Si considera que el tratamiento de sus datos personales no es
            adecuado, o si no ha obtenido satisfacción en el ejercicio de sus
            derechos, puede presentar una reclamación ante la:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="mb-2">
              <strong>Agencia Española de Protección de Datos (AEPD)</strong>
            </p>
            <p className="mb-2">C/ Jorge Juan, 6 - 28001 Madrid</p>
            <p className="mb-2">
              Web:{" "}
              <a
                href="https://www.aepd.es"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                www.aepd.es
              </a>
            </p>
            <p className="mb-0">Teléfono: 901 100 099</p>
          </div>

          <h2>12. Contacto</h2>
          <p>
            Para cualquier cuestión relacionada con el tratamiento de sus datos
            personales, puede contactarnos en:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${business.email}`} className="text-blue-600">
                {business.email}
              </a>
            </li>
            <li>
              <strong>Teléfono:</strong>{" "}
              <a href={`tel:${business.phone}`} className="text-blue-600">
                {business.phone}
              </a>
            </li>
            <li>
              <strong>Dirección:</strong> {business.address}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
