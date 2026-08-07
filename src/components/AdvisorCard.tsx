import { Linkedin, GraduationCap } from "lucide-react";

interface AdvisorCardProps {
  name: string;
  role: string;
  image: string;
  scholar: string;
  linkedin: string;
}

export function AdvisorCard({
  name,
  role,
  image,
  scholar,
  linkedin,
}: AdvisorCardProps) {
  return (
    <div className="flex flex-col items-center text-center">

      <img
        src={image}
        alt={name}
        className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-xl"
      />

      <h3 className="mt-6 text-2xl font-semibold">
        {name}
      </h3>

      <p className="text-muted-foreground mt-1">
        {role}
      </p>

      <div className="flex gap-6 mt-5">

        <a
          href={scholar}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GraduationCap className="w-6 h-6 hover:text-primary transition-colors" />
        </a>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
        </a>

      </div>

    </div>
  );
}
