export function formatDate(dateString: string): string {
  const [year, month] = dateString.split("-");
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  return `${months[parseInt(month) - 1]} de ${year}`;
}
