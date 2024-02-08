'use client';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ExtendedDocument } from '@/types/extendedDocument';

export default function useAnimatedRouter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [extendedDocument, setExtendedDocument] = useState<ExtendedDocument | null>(null);

  useEffect(() => {
    // Asigna el documento extendido una vez que el componente se haya montado en el cliente
    setExtendedDocument(document as ExtendedDocument);
  }, []);

  useEffect(() => {
    // Construye la URL actual basándote en el pathname y los searchParams
    const currentUrl = `${pathname}?${searchParams}`;

    // Invoca a animatedRoute solo si la URL actual es diferente a la última URL navegada
    // Esto evita la re-ejecución de animaciones cuando la URL no ha cambiado realmente
    if (currentUrl !== `${pathname}?${searchParams}`) {
      animatedRoute(currentUrl);
    }
  }, [pathname, searchParams]); // Escucha los cambios en pathname y searchParams

  const viewTransitionsStatus = () => {
    if (!extendedDocument) return "Cargando...";
    return extendedDocument?.startViewTransition 
           ? "Sí, tu navegador soporta la API de View Transitions" 
           : "Oops, tu navegador no soporta la API de View Transitions";
  };

  const animatedRoute = async (url: string) => {
    // Verifica si el documento extendido está disponible antes de proceder
    if (!extendedDocument) return;
    
    try {
      // Intenta usar la API de transiciones de vista si está disponible
      if (extendedDocument.startViewTransition) {
        console.log("Navegando a:", url);
        extendedDocument.startViewTransition(() => {
          // Utiliza router.navigate en lugar de router.push para reflejar los cambios en Next.js 14
          router.push(url);
        });
      } else {
        // Si la API de transiciones de vista no está disponible, navega directamente
        router.push(url);
      }
    } catch (error) {
      console.error("Error al navegar:", error);
    }
  };

  return { animatedRoute, viewTransitionsStatus };
}
