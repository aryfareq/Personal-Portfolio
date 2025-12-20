import Ari from '../assets/Images/Ari.png';
import Navbar from '../Components/Navbar.jsx';
function LandingPage() {
  return (
    <>
      <Navbar />
    <div  style={{
        minHeight: '100vh',
        backgroundImage: `url(${Ari})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
<h1 className="rubik-h1 text-white text-[128px] absolute bottom-0 left-4">
  Hiwa Fareeq
        </h1>
    </div>
    </>
    )
}
export default LandingPage;