// src/components/buyer/ContactFarmerButton.tsx
import { Button } from '../../components/ui/button';
import { Phone, MessageCircle, Smartphone } from 'lucide-react';
import { useContactFarmer } from '../../hooks/useContactFarmer';
import { useTranslation } from 'react-i18next';

interface ContactFarmerButtonProps {
  phone: string;
  showLabel?: boolean;
}

export const ContactFarmerButton = ({ phone, showLabel = true }: ContactFarmerButtonProps) => {
  const { t } = useTranslation();
  const { openWhatsApp, openCall, openSMS, message } = useContactFarmer(phone);

  return (
    <div className="flex flex-col gap-3 mt-4">
      <p className="text-sm text-muted-foreground">{message}</p>

      <div className="flex flex-wrap gap-3">
        <Button onClick={openCall} size={showLabel ? 'default' : 'icon'} variant="default">
          <Phone className="w-4 h-4 mr-2" />
          {showLabel && t('contact.call')}
        </Button>

        <Button onClick={openWhatsApp} size={showLabel ? 'default' : 'icon'} variant="default" className="bg-green-600 hover:bg-green-700">
          <MessageCircle className="w-4 h-4 mr-2" />
          {showLabel && t('contact.whatsapp')}
        </Button>

        <Button onClick={openSMS} size={showLabel ? 'default' : 'icon'} variant="outline">
          <Smartphone className="w-4 h-4 mr-2" />
          {showLabel && t('contact.sms')}
        </Button>
      </div>
    </div>
  );
};