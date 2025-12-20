import Logo from '../assets/Images/Logo.svg';

function Navbar() {
    return (
        <>
            <nav className='flex justify-between items-center p-10 z-10 absolute w-full'>
                <img src={Logo} alt="Logo" className="logo" />
                <ul className='flex justify-center items-center gap-2'>
                    <li><button className='text-white bg-neutral-primary border-2 border-white hover:bg-gray-200/25 font-medium leading-5 rounded-full text-m px-4 py-1'>About</button></li>
                    <li><button className='text-white bg-neutral-primary border-2 border-white hover:bg-gray-200/25 font-medium leading-5 rounded-full text-m px-4 py-1'>Projects</button></li>
                    <li><button className='text-white bg-neutral-primary border-2 border-white hover:bg-gray-200/25 font-medium leading-5 rounded-full text-m px-4 py-1'>Skills</button></li>
                    <li><button className='text-white bg-neutral-primary border-2 border-white hover:bg-gray-200/25 font-medium leading-5 rounded-full text-m px-4 py-1'>Contact</button></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;