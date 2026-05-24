"use client"; 
import { useEffect } from "react";
import Tank from "@/components/Tank";

export default function ProductPage() {
  useEffect(() => {
    document.title = "Montre Cadré de Aeterna - Petit modèle | Lucienne Studio";
  }, []);

  return <Tank />;
}