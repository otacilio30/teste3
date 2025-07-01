"use client"

import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Button onClick={() => alert("Botão clicado!")} className="px-6 py-2">
        Clique aqui
      </Button>
    </div>
  )
}
