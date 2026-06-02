const DEFAULT_WHATSAPP = "1234567890";

export function getWhatsAppNumber(): string {
  const raw =
    import.meta.env.VITE_WHATSAPP_NUMBER?.trim() || DEFAULT_WHATSAPP;
  return raw.replace(/\D/g, "");
}

export function buildWhatsAppUrl(message: string): string {
  const phone = getWhatsAppNumber();
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
