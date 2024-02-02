"use client";
import { ExtendedDocument } from "@/types/extendedDocument";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

export default function useAnimatedRouter() {
  const router = useRouter();
  const [extendedDocument, setExtendedDocument] = useState<ExtendedDocument | null>(null);

  useEffect(() => {
    // Este código se ejecutará solo en el lado del cliente
    setExtendedDocument(document as ExtendedDocument);
  }, []);

  const viewTransitionsStatus = () => {
    if (!extendedDocument) return "Cargando..."; // o algún otro mensaje de espera
    return extendedDocument?.startViewTransition 
           ? "Yess, Your browser support View Transitions API" 
           : "Opss, Your browser doesn't support View Transitions API";
  };

  const animatedRoute = async (url: string) => {
    if (!extendedDocument) return;
    try {
      if (extendedDocument.startViewTransition) {
        extendedDocument.startViewTransition(() => {
         /*  router.push(url); */
        });
      } else {
        router.push(url);
      }
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  return { animatedRoute, viewTransitionsStatus };
}
