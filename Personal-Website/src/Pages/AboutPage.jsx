import Line from "../assets/Images/LINE.svg";
import TitleWithLine from "../Components/TitleWithLine.jsx";
function AboutPage() {
  return (
    <div>
      <div className="flex justify-center items-start gap-10 p-10 mt-20">
        <img src={Line} alt="Line" />
        <div>
          <h2 className="rubik-h2 text-white text-[58px]">
            From complex requirements to clean interfaces
          </h2>
          <span className="flex justify-between items-start mt-10">
            <p className="rubik-p w-[600px]">
              I’m a software engineer specializing in JavaScript, React.js,
              HTML, and CSS, focused on building responsive, accessible web
              applications and translating designs into high-quality, functional
              interfaces within agile teams.
            </p>
            <p className="rubik-p w-[600px]">
              I also have backend experience with Node.js, Express.js, Next.js,
              and relational databases such as PostgreSQL and MySQL, enabling me
              to work comfortably across the full stack.
            </p>
          </span>
        </div>
      </div>
      <span className="flex justify-around items-start mx-15 pb-30 gap-10">
        <span>
      <TitleWithLine title="Software Engineering" />
        <p className="rubik-ps w-[550px]">
          Completed a Software Engineering major with strong foundations in
          programming, OOP, design patterns, data structures, and algorithms,
          complemented by hands-on experience in software architecture, UML
          modeling, requirements analysis, and building scalable, maintainable
          systems.
        </p>
        </span>
        <span>
      <TitleWithLine title="Business Administration"/>
        <p className="rubik-ps w-[550px]">
          Completed a minor in Business Administration with foundations in
          business management, human resources, economics, accounting, and
          business statistics, emphasizing organizational operations, financial
          principles, and data-driven decision-making.
        </p>
        </span>
      </span>
    </div>
  );
}
export default AboutPage;
