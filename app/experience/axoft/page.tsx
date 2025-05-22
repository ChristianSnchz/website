import { ThemeSwitcher } from '@/components/theme-switcher';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import data from '@/data.json';

export default function UniversityPage() {
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
            {data.history.find((h) => h.key === 'axoft')?.position}
          </h2>
        </div>

        <div className="text-sm text-muted-foreground">
          {data.history.find((h) => h.key === 'axoft')?.startDate} -{' '}
          {data.history.find((h) => h.key === 'axoft')?.endDate}
        </div>

        <div className="space-y-4 text-left">
          <p>{data.history.find((h) => h.key === 'axoft')?.description}</p>

          <h3 className="font-medium mt-6">Áreas de estudio:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Programación orientada a objetos</li>
            <li>Desarrollo web frontend y backend</li>
            <li>Bases de datos relacionales y NoSQL</li>
            <li>Arquitectura de software</li>
            <li>Inteligencia artificial y aprendizaje automático</li>
            <li>Seguridad informática</li>
            <li>Gestión de proyectos de software</li>
          </ul>

          <h3 className="font-medium mt-6">Proyectos académicos destacados:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Sistema de gestión hospitalaria:</strong> Aplicación web
              para la administración de pacientes, médicos y citas
            </li>
            <li>
              <strong>Algoritmo de recomendación:</strong> Sistema basado en
              machine learning para recomendar productos según preferencias de
              usuarios
            </li>
            <li>
              <strong>Aplicación móvil educativa:</strong> Plataforma de
              aprendizaje interactivo para estudiantes de primaria
            </li>
            <li>
              <strong>Tesis:</strong> "Implementación de interfaces de usuario
              accesibles en aplicaciones web modernas"
            </li>
          </ul>

          <h3 className="font-medium mt-6">Logros:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Graduado con honores (9.2/10)</li>
            <li>Beca de excelencia académica durante 3 años consecutivos</li>
            <li>Participación en hackathon universitario (2º puesto)</li>
            <li>Representante estudiantil en el departamento de Ingeniería</li>
          </ul>
        </div>

        <div className="pt-4">
          <Button asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
