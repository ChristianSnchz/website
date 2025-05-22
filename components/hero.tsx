'use client';

import { useEffect, useState } from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import data from '@/data.json';

export function Hero() {
  const [text, setText] = useState('');
  const fullText = 'FRONTEND DEVELOPER';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [text, fullText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="py-12 border-b border-border min-h-screen flex flex-col relative overflow-hidden"
    >
      <Header />
      <div className="space-y-4 flex-1 flex flex-col items-center justify-center px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-arcade tracking-tight">
          {data.name} {data.lastname}
        </h1>
        <h2 className="text-xl md:text-2xl font-arcade">
          {text}
          <span
            className={`inline-block w-3 h-8 bg-secondary ml-1 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          ></span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Creando experiencias digitales con un toque retro y moderno.
          Especializado en desarrollo web creativo y funcional con enfoque
          minimalista.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button
            size="lg"
            className="font-arcade text-lg px-8 py-6 border-2 border-primary"
            onClick={scrollToProjects}
          >
            VER PROYECTOS
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="font-arcade text-lg px-8 py-6 border-2"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            CONTACTO
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={scrollToProjects}
        >
          <ChevronDown className="h-8 w-8" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="border border-primary/20 dark:border-primary/10"
          ></div>
        ))}
      </div>
    </section>
  );
}
