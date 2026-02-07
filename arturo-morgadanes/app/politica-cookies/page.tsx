import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/content/business";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: `Política de cookies de ${business.name}. Información sobre las cookies que utilizamos y cómo gestionarlas.`,
};

export default function PoliticaCookiesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-lg max-w-none">
          <p>
            <strong>Última actualización:</strong> Febrero 2026
          </p>

          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su
            dispositivo (ordenador, tablet o móvil) cuando visita un sitio web.
            Sirven para que el sitio web recuerde información sobre su visita,
            como su idioma preferido y otras opciones, lo que puede facilitar
            su próxima visita y hacer que el sitio le resulte más útil.
          </p>

          <h2>2. ¿Qué tipos de cookies utilizamos?</h2>

          <h3>2.1. Cookies necesarias (técnicas)</h3>
          <p>
            Son esenciales para el funcionamiento básico del sitio web. Sin
            estas cookies, el sitio no funcionaría correctamente.
          </p>
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Cookie</th>
                <th className="border p-2 text-left">Finalidad</th>
                <th className="border p-2 text-left">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">cookie_consent</td>
                <td className="border p-2">
                  Almacena sus preferencias de cookies
                </td>
                <td className="border p-2">1 año</td>
              </tr>
            </tbody>
          </table>

          <h3>2.2. Cookies de análisis</h3>
          <p>
            Nos permiten reconocer y contar el número de visitantes, así como
            ver cómo navegan por el sitio web. Esto nos ayuda a mejorar el
            funcionamiento del sitio.
          </p>
          <table className="min-w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Cookie</th>
                <th className="border p-2 text-left">Proveedor</th>
                <th className="border p-2 text-left">Finalidad</th>
                <th className="border p-2 text-left">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">_ga</td>
                <td className="border p-2">Google Analytics</td>
                <td className="border p-2">
                  Distinguir usuarios únicos
                </td>
                <td className="border p-2">2 años</td>
              </tr>
              <tr>
                <td className="border p-2">_ga_*</td>
                <td className="border p-2">Google Analytics</td>
                <td className="border p-2">Mantener estado de sesión</td>
                <td className="border p-2">2 años</td>
              </tr>
            </tbody>
          </table>

          <h3>2.3. Cookies de marketing</h3>
          <p>
            Se utilizan para mostrar anuncios relevantes y medir la efectividad
            de las campañas publicitarias. Actualmente no utilizamos este tipo
            de cookies, pero si en el futuro las implementamos, se lo
            comunicaremos.
          </p>

          <h2>3. ¿Cómo gestionar las cookies?</h2>

          <h3>3.1. A través de nuestro sitio web</h3>
          <p>
            Puede gestionar sus preferencias de cookies en cualquier momento
            haciendo clic en el enlace &quot;Configuración de Cookies&quot; en el pie de
            página de nuestro sitio web.
          </p>

          <h3>3.2. A través de su navegador</h3>
          <p>
            También puede configurar su navegador para que bloquee o elimine
            las cookies. A continuación le indicamos cómo hacerlo en los
            navegadores más comunes:
          </p>
          <ul>
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h2>4. ¿Qué ocurre si desactivo las cookies?</h2>
          <p>
            Si desactiva las cookies necesarias, es posible que algunas
            funciones del sitio web no funcionen correctamente. Si desactiva
            las cookies de análisis, seguirá pudiendo utilizar el sitio web con
            normalidad, pero no podremos mejorar su experiencia basándonos en
            datos de uso.
          </p>

          <h2>5. Transferencias internacionales</h2>
          <p>
            Algunas de las cookies de terceros que utilizamos (como Google
            Analytics) pueden transferir datos a servidores situados fuera de
            la Unión Europea. Google cumple con el marco de protección de datos
            EU-US Data Privacy Framework.
          </p>

          <h2>6. Base legal</h2>
          <p>
            La base legal para el tratamiento de datos a través de cookies es:
          </p>
          <ul>
            <li>
              <strong>Cookies necesarias:</strong> Interés legítimo (Art. 6.1.f
              RGPD)
            </li>
            <li>
              <strong>Cookies de análisis y marketing:</strong> Consentimiento
              del usuario (Art. 6.1.a RGPD)
            </li>
          </ul>

          <h2>7. Actualizaciones de esta política</h2>
          <p>
            Podemos actualizar esta política de cookies periódicamente. Le
            recomendamos que revise esta página de vez en cuando para estar
            informado de cualquier cambio.
          </p>

          <h2>8. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre nuestra política de cookies, puede
            contactarnos en:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> {business.email}
            </li>
            <li>
              <strong>Teléfono:</strong> {business.phone}
            </li>
          </ul>

          <h2>9. Más información</h2>
          <p>
            Para más información sobre cómo tratamos sus datos personales,
            consulte nuestra{" "}
            <Link
              href="/politica-privacidad"
              className="text-blue-600 underline"
            >
              Política de Privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
