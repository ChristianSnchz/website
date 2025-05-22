import type React from 'react';
import { ThemeSwitcher } from '@/components/theme-switcher';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import data from '@/data.json';

interface LayoutWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const LayoutWrapper = ({
  children,
  title,
  subtitle,
}: LayoutWrapperProps) => {
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
          <h2 className="text-xl font-arcade">{title}</h2>
        </div>

        {subtitle && (
          <div className="text-sm text-muted-foreground">{subtitle}</div>
        )}

        <div className="space-y-4 text-left">{children}</div>

        <div className="pt-4">
          <Button asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};
