import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin, BedDouble, Bath, SquareIcon as SquareFeet } from "lucide-react"

interface PropertyCardProps {
  image: string
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: number
  featured?: boolean
}

export function PropertyCard({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  featured = false,
}: PropertyCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
        {featured && <Badge className="absolute top-4 left-4">Featured</Badge>}
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1 shrink-0" />
          <span className="text-sm truncate">{location}</span>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <BedDouble className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm">{beds} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm">{baths} Baths</span>
            </div>
            <div className="flex items-center">
              <SquareFeet className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-sm">{sqft} sqft</span>
            </div>
          </div>
        </div>

        <div className="text-2xl font-bold text-primary">${price}</div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link href="#" className="text-primary hover:underline font-medium">
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}

