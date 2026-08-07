import { GraduationCap, Globe } from "lucide-react";

// Import the faculty photos
// Replace these with your actual image imports
//import madhuPhoto from "@/assets/madhu.jpg";
//import shajiPhoto from "@/assets/shaji.jpg";

const facultyAdvisors = [
  {
    name: "Prof. Anil Shaji",
    role: "Faculty Advisor",
    //image: shajiPhoto,
    scholar: "https://scholar.google.com/citations?user=Pp5t7VsAAAAJ&hl=en",
    website: "https://www.iisertvm.ac.in/faculty/shaji",
  },
  {
    name: "Prof. Madhu Thalakulam",
    role: "Faculty Advisor",
    //image: madhuPhoto,
    scholar: "https://scholar.google.com/citations?user=3--YLbIAAAAJ&hl=en",
    website: "https://www.iisertvm.ac.in/faculty/madhu",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Hero Section */}

      <section className="pt-36 pb-20 text-center">

        <div className="container mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            Organizing Committee
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Meet the faculty members, student organizers and volunteers
            working together to make IBM Qiskit Fall Fest 2026 at
            IISER Thiruvananthapuram a memorable experience.
          </p>

        </div>

      </section>

      {/* Faculty Advisors */}

      <section className="pb-24">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-4">
            Faculty Advisors
          </h2>

          <p className="text-center text-muted-foreground mb-16">
            Academic guidance and mentorship for the organizing committee.
          </p>

          <div className="grid md:grid-cols-2 gap-16">

            {facultyAdvisors.map((advisor) => (

              <div
                key={advisor.name}
                className="flex flex-col items-center text-center"
              >

                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-xl"
                />

                <h3 className="mt-8 text-3xl font-semibold">
                  {advisor.name}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {advisor.role}
                </p>

                <div className="flex gap-4 mt-7">

                  <a
                    href={advisor.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2 hover:bg-primary/10 transition"
                  >
                    <GraduationCap className="w-5 h-5" />
                    Google Scholar
                  </a>

                  <a
                    href={advisor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-primary/30 px-5 py-2 hover:bg-primary/10 transition"
                  >
                    <Globe className="w-5 h-5" />
                    Website
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Placeholder for Student Organizing Committee */}

      <section className="pb-24">

        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-6">
            Student Organizing Committee
          </h2>

          <p className="text-center text-muted-foreground">
            Coming Soon...
          </p>

        </div>

      </section>

    </div>
  );
}
