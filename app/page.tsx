import { ThemeSwitcher } from '@/components/theme-switcher';
import { Avatar } from '@/components/ui/avatar';
import { Github, Twitter, Linkedin, Mail, TimerIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import data from '@/data.json';
export default function Home() {
  return (
    <main className="min-h-screen max-w-2xl mx-auto px-4 py-8 space-y-12">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-arcade">
          {data.name} {data.lastname}
        </h1>
        <ThemeSwitcher />
      </div>

      <div className="flex justify-center">
        <Avatar className="w-32 h-32 border-2 border-foreground">
          <img src={data.image} alt={`${data.name} ${data.lastname}`} />
        </Avatar>
      </div>

      <div className="space-y-2 text-left">
        <h2 className="text-xl font-arcade">{data.profession}</h2>
        <p className="text-muted-foreground">{data.description}</p>
        <div className="pt-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/about">More...</Link>
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <TimerIcon className="w-4 h-4 mr-2" />

        <div className="space-y-4">
          {data.history.map((history) => (
            <Link
              href={`/experience/${history.key}`}
              className="block group"
              key={history.key}
            >
              <div className="flex items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-foreground mr-3 group-hover:bg-muted-foreground transition-colors"></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium group-hover:underline">
                      {history.company}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {history.startDate} - {history.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground ">
                    {history.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Contacto */}
      <div className="space-y-6">
        <h2 className="text-xl font-arcade">CONTACT</h2>

        <div className="flex justify-start space-x-6">
          <a
            href="https://github.com/ChristianSnchz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground transition-colors"
          >
            <Github className="w-6 h-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://x.com/christianasrn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground transition-colors"
          >
            <Twitter className="w-6 h-6" />
            <span className="sr-only">X</span>
          </a>
          <a
            href="www.linkedin.com/in/christian-s-09419114a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground transition-colors"
          >
            <Linkedin className="w-6 h-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href={`mailto:${data.email}`}
            className="hover:text-muted-foreground transition-colors"
          >
            <Mail className="w-6 h-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>

      <footer className="text-left text-sm text-muted-foreground pt-6 border-t border-border">
        © {new Date().getFullYear()} {data.name} {data.lastname}. All rights
        reserved.
      </footer>
    </main>
  );
}
