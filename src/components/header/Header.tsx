import Logo from '@components/button/Logo';
import SearchInput from '@components/input/SearchInput';
import HeaderIconBox from '@components/header/HeaderIconBox';

const Header = () => {
  return (
    <header className="shadow-[0_3px_4px_rgba(0,0,0,0.1)] fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="flex justify-between items-center gap-[3rem] max-w-[138rem] px-16 py-[1.8rem] mx-auto">
        <div className="flex items-center">
          <Logo logoSize="small" />
          <SearchInput />
        </div>
        <HeaderIconBox />
      </div>
    </header>
  );
};

export default Header;
