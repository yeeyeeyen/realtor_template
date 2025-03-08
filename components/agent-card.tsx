import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Home } from "lucide-react"

interface AgentCardProps {
  image: string
  name: string
  title: string
  phone: string
  email: string
  listings: number
}

export function AgentCard({ image, name, title, phone, email, listings }: AgentCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-muted-foreground mb-4">{title}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2 text-primary" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2 text-primary" />
            <span>{email}</span>
          </div>
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-2 text-primary" />
            <span>{listings} Active Listings</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline">Contact</Button>
          <Button>View Listings</Button>
        </div>
      </CardContent>
    </Card>
  )
}

