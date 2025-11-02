import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const DEFAULT_VALUES = {
  name: '',
  email: '',
  message: '',
};

const isConfigMissing = !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY;

async function sendContactMessage({ name, email, message }) {
  if (isConfigMissing) {
    throw new Error('Missing EmailJS environment variables.');
  }

  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: name,
      reply_to: email,
      message,
    },
    {
      publicKey: EMAILJS_PUBLIC_KEY,
    },
  );
}

export default function useContactForm() {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: DEFAULT_VALUES });

  const onSubmit = handleSubmit(async (values) => {
    setStatus({ state: 'loading', message: 'Mengirim pesan…' });

    try {
      await sendContactMessage(values);
      setStatus({ state: 'success', message: 'Terima kasih! Pesan kamu sudah terkirim.' });
      reset();
    } catch (error) {
      console.error('Failed to send contact form', error);
      setStatus({
        state: 'error',
        message: isConfigMissing
          ? 'Konfigurasi EmailJS belum lengkap. Periksa variabel lingkungan.'
          : 'Gagal mengirim pesan. Silakan coba lagi atau hubungi lewat tautan sosial.',
      });
    }
  });

  return {
    register,
    errors,
    onSubmit,
    status,
    isSubmitting,
  };
}
