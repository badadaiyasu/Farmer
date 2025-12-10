// src/hooks/useContactFarmer.ts
import { useTranslation } from 'react-i18next';

export const useContactFarmer = (phone: string) => {
  const { t } = useTranslation();

  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    t('contact.message_whatsapp')
  )}`;
  const telUrl = `tel:${cleanPhone}`;
  const smsUrl = `sms:${cleanPhone}?body=${encodeURIComponent(
    t('contact.message_sms')
  )}`;

  const openWhatsApp = () => window.open(whatsappUrl, '_blank');
  const openCall = () => window.open(telUrl);
  const openSMS = () => window.open(smsUrl);

  return {
    openWhatsApp,
    openCall,
    openSMS,
    message: t('contact.reveal_message', { phone }),
  };
};