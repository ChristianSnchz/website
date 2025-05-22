'use client';

import type React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 border-b border-border">
      <h2 className="text-2xl font-arcade mb-8">CONTACTO</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-muted-foreground mb-8">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Completa
            el formulario o contáctame directamente a través de los siguientes
            medios.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">
                  alex@arcadeportfolio.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Teléfono</h4>
                <p className="text-muted-foreground">+34 123 456 789</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium">Ubicación</h4>
                <p className="text-muted-foreground">Madrid, España</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="p-6 border border-border rounded">
              <h3 className="font-arcade mb-2">MENSAJE ENVIADO</h3>
              <p className="text-muted-foreground">
                Gracias por contactarme. Te responderé lo antes posible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nombre
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="border"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="border"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px] border"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-arcade"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
