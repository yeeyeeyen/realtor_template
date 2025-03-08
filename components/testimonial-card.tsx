import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
}

export function TestimonialCard({ quote, author, location, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
            />
          ))}
        </div>

        <blockquote className="text-lg italic mb-6 flex-grow">"{quote}"</blockquote>

        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </CardContent>
    </Card>
  )
}

