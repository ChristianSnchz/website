import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "ARCADE SHOP",
    description: "E-commerce de videojuegos retro con carrito de compras y pasarela de pagos.",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "PIXEL WEATHER",
    description: "Aplicación del clima con visualización de datos en estilo pixel art.",
    tags: ["React", "OpenWeather API", "CSS Modules"],
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "RETRO NOTES",
    description: "Aplicación de notas con interfaz inspirada en consolas de los 90s.",
    tags: ["Vue.js", "Firebase", "SCSS"],
    github: "https://github.com",
    demo: "https://example.com",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-12 border-b border-border">
      <h2 className="text-2xl font-arcade mb-8">PROYECTOS</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="border border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-arcade mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm hover:underline"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
