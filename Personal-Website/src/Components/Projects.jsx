// Projects.jsx
import VerticalLine from "./VerticalLine.jsx";

function Projects({ title, points, name }) {
  return (
<div className="flex items-center justify-around text-white gap-10 h-full px-16">


      {/* LEFT TITLE */}
      <h1 className="rubik-h1 text-7xl font-bold w-1/4">
        {title}
      </h1>

      {/* RIGHT COLUMN */}
      <div className="flex flex-col justify-around h-[65vh]">

        <span className="flex flex-col relative pl-6">
          <VerticalLine />
          {points.map((p, i) => (
            <p key={i} className="rubik-p">
              {p}
            </p>
          ))}
        </span>

        <h2 className="rubik-h2 text-6xl font-semibold">
          {name}
        </h2>

      </div>
    </div>
  );
}

export default Projects;
