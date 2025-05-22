import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import data from '@/data.json';

export function Footer() {
  return (
    <footer className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <div className="text-xl font-bold tracking-tighter font-arcade mb-2">
            {data.name} {data.lastname}
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors"
          >
            <Github className="w-4 h-4" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors"
          >
            <Twitter className="w-4 h-4" />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full bg-muted hover:bg-foreground hover:text-background transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
