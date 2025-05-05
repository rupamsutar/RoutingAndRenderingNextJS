import Link from "next/link";

const MainHeader = (props) => {
  return (
    <>
        <header>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/news'>News</Link></li>
            </ul>
        </header>
    </>
  )
};

export default MainHeader;
