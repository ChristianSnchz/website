import { ThemeSwitcher } from '@/components/theme-switcher';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import data from '@/data.json';

export default function UglycashPage() {
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
              <span className="sr-only">Volver</span>
            </Link>
          </Button>
          <h2 className="text-xl font-arcade">
            {data.history.find((h) => h.key === 'uglycash')?.position}
          </h2>
        </div>

        <div className="text-sm text-muted-foreground">
          {data.history.find((h) => h.key === 'uglycash')?.startDate} -{' '}
          {data.history.find((h) => h.key === 'uglycash')?.endDate}
        </div>

        <div className="space-y-4 text-left">
          <p>{data.history.find((h) => h.key === 'uglycash')?.description}</p>

          <h3 className="font-medium mt-6">Responsabilities</h3>
          <ul className="list-disc pl-5 space-y-2">
            {data.history
              .find((h) => h.key === 'uglycash')
              ?.responsabilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
          </ul>
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
