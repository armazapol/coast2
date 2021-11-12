import Link from 'next/link';

const Header = () => (
  <div className="h-20 fixed bg-header w-full flex items-center px-6 border-solid shadow-lg border-b-2 lg:h-24 lg:px-10">
    <div className="w-44 h-14 lg:h-16 lg:w-52 relative">
      <Link href="/#" passHref>
        
      </Link>
    </div>
  </div>
);

export default Header;
