'use client'

import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ErrorPage = () => {
  const handleReload = () => {
    window.location.reload()
  }

  return (
    <main className="flex h-screen w-full items-center justify-center bg-background p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex items-center justify-center">
          <AlertCircle className="text-destructive w-12 h-12" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">Something went wrong!</h1>
        <p className="text-muted-foreground">
          We couldn&apos;t load the page due to an unexpected error. Please try refreshing the page or come back later.
        </p>
        <Button onClick={handleReload} variant="default">
          Refresh Page
        </Button>
      </div>
    </main>
  )
}

export default ErrorPage
