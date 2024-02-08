// app/components/AnimatedNavigationEvents.js
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ExtendedDocument } from '@/types/extendedDocument';

export function AnimatedNavigationEvents() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [extendedDocument, setExtendedDocument] = useState<ExtendedDocument | null>(null);

  useEffect(() => {
    setExtendedDocument(document as ExtendedDocument);
  }, []);

  useEffect(() => {
    const currentUrl = `${pathname}?${searchParams}`;
    // Aquí se implementaría la lógica de transición animada
    animatedRoute(currentUrl);
  }, [pathname, searchParams]);

  const animatedRoute = async (url: string) => {
    if (!extendedDocument) return;
        
    console.log(url)

    try {
      if (extendedDocument.startViewTransition) {
        extendedDocument.startViewTransition(() => {
          router.push(url);
        });
      } else {
        router.push(url);
      }
    } catch (error) {
      console.error("Error al navegar:", error);
    }
  };

  return null; // Este componente no renderiza nada visualmente
}
