// src/components/Projects.jsx
const projects = [
  { title: 'Project 1', desc: 'A brief description of project 1' },
  { title: 'Project 2', desc: 'A brief description of project 2' },
  { title: 'Project 2', desc: 'A brief description of project 2' },
];

export default function Projects() {
  return (
    <section id="projects" className="py-12 px-4 md:px-12">
      <h3 className="text-xl font-semibold mb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="bg-gray-100 h-32 mb-4 rounded"></div>
            <h4 className="text-lg font-medium">{project.title}</h4>
            <p className="text-sm text-gray-600">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}