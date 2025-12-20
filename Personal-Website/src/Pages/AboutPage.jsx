import Line from '../assets/Images/LINE.svg';
function AboutPage() {
    return (
        <div className="flex justify-center items-start gap-10 p-10 mt-20">
            <img src={Line} alt="Line" />
            <div>
                <h2 className="rubik-h2 text-white text-[58px]">From complex requirements to clean interfaces</h2>
                <span className='flex justify-between items-start mt-10'>
                    <p className="rubik-p w-[600px]">I’m a software engineer specializing in JavaScript, React.js, HTML, and CSS, focused on building responsive, accessible web applications and translating designs into high-quality, functional interfaces within agile teams.</p>
                    <p className="rubik-p w-[600px]">I also have backend experience with Node.js, Express.js, Next.js, and relational databases such as PostgreSQL and MySQL, enabling me to work comfortably across the full stack.</p>
                </span>
            </div>
        </div>
    );
}
export default AboutPage;