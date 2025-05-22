import { ThemeSwitcher } from '@/components/theme-switcher';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import data from '@/data.json';

export default function AboutPage() {
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
          <h2 className="text-xl font-arcade">ABOUT ME</h2>
        </div>

        <div className="space-y-4 text-left">
          <p>{data.description}</p>

          <p>
            I'm a results-driven software engineer with experience building
            products from the ground up in fast-paced startup environments. I
            thrive when working on impactful features, particularly in fintech
            and crypto applications, where attention to security, UX, and
            performance is key. I’ve contributed to scalable systems at both
            early-stage startups and large corporations, adapting quickly to
            evolving business needs
          </p>

          <p>
            What drives me is the balance between clean architecture and
            delightful user experiences. I enjoy building reusable components,
            maintaining design systems, and improving codebases through
            thoughtful refactors. My favorite stack includes React Native,
            TypeScript, Node.js, and NestJS, but I'm always experimenting with
            new technologies—from Reanimated for smooth animations to GraphQL
            and Docker for robust backend services.
          </p>

          <p>
            Beyond development, I value strong collaboration and product
            thinking. I like being close to users and helping teams deliver
            features that truly matter. Whether it's optimizing payment flows,
            integrating third-party APIs, or contributing to a new cashback
            program, I approach every task with curiosity and care. I'm also
            passionate about mentoring junior devs and helping shape inclusive,
            high-performing engineering cultures.
          </p>

          <p>
            I enjoy learning across disciplines, whether it’s reading about
            behavioral science, exploring the outdoors, or digging into the
            latest tools in design and development. Living in Buenos Aires, I
            balance the intensity of engineering work with moments of
            stillness—long walks with my dog, sharing ideas with friends, or
            simply watching how people interact with the world around them.
          </p>
        </div>

        <div className="pt-4">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>

      <footer className="text-left text-sm text-muted-foreground pt-6 border-t border-border">
        © {new Date().getFullYear()} {data.name} {data.lastname}. All rights
        reserved.
      </footer>
    </main>
  );
}
