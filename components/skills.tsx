const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Next.js", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "Tailwind CSS", level: 85 },
  { name: "UI/UX Design", level: 65 },
  { name: "Node.js", level: 60 },
]

export function Skills() {
  return (
    <section id="skills" className="py-12 border-b border-border">
      <h2 className="text-2xl font-arcade mb-8">HABILIDADES</h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-arcade text-sm">{skill.name}</h3>
              <span className="font-arcade text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-sm overflow-hidden">
              <div className="h-full bg-foreground" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-arcade text-lg mb-4">EDUCACIÓN</h3>
          <ul className="space-y-4">
            <li>
              <div className="font-medium">Ingeniería en Sistemas</div>
              <div className="text-sm text-muted-foreground">Universidad Tecnológica, 2018-2022</div>
            </li>
            <li>
              <div className="font-medium">Bootcamp Desarrollo Web Full Stack</div>
              <div className="text-sm text-muted-foreground">Coding Academy, 2022</div>
            </li>
            <li>
              <div className="font-medium">Certificación en Diseño de Interfaces</div>
              <div className="text-sm text-muted-foreground">Design Institute, 2023</div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-arcade text-lg mb-4">EXPERIENCIA</h3>
          <ul className="space-y-4">
            <li>
              <div className="font-medium">Frontend Developer</div>
              <div className="text-sm text-muted-foreground">Tech Solutions Inc., 2022-Presente</div>
            </li>
            <li>
              <div className="font-medium">UI/UX Designer</div>
              <div className="text-sm text-muted-foreground">Creative Studio, 2021-2022</div>
            </li>
            <li>
              <div className="font-medium">Desarrollador Web Freelance</div>
              <div className="text-sm text-muted-foreground">Proyectos Independientes, 2020-2021</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
