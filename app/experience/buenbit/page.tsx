import { ThemeSwitcher } from '@/components/theme-switcher';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import data from '@/data.json';

export default function BuenbitPage() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-arcade">
          {data.name} {data.lastname}
        </h1>
        <ThemeSwitcher />
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h2 className="text-xl font-arcade">
            {data.history.find((h) => h.key === 'buenbit')?.position}
          </h2>
        </div>

        <div className="text-sm text-muted-foreground">2020-2021</div>

        <div className="space-y-4 text-left">
          <p>{data.history.find((h) => h.key === 'buenbit')?.description}</p>

          <h3 className="font-medium mt-6">Servicios ofrecidos:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Desarrollo de sitios web personalizados</li>
            <li>Diseño de interfaces de usuario</li>
            <li>Implementación de tiendas online</li>
            <li>Optimización de rendimiento y SEO</li>
            <li>Mantenimiento y soporte técnico</li>
          </ul>

          <h3 className="font-medium mt-6">Proyectos destacados:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Portfolio para fotógrafo:</strong> Sitio web con galería
              de imágenes optimizada y sistema de reservas
            </li>
            <li>
              <strong>Tienda online para artesano:</strong> E-commerce con
              catálogo de productos y sistema de pagos integrado
            </li>
            <li>
              <strong>Blog para escritor:</strong> Plataforma de contenidos con
              sistema de suscripción y newsletter
            </li>
            <li>
              <strong>Sitio web para restaurante:</strong> Con menú digital,
              reservas online y integración con redes sociales
            </li>
          </ul>

          <h3 className="font-medium mt-6">Tecnologías utilizadas:</h3>
          <p>
            HTML, CSS, JavaScript, React, Gatsby, WordPress, WooCommerce,
            Shopify, Firebase, Netlify
          </p>
        </div>

        <div className="pt-4">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
