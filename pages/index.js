import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Next.js App</h1>
      <Link href="/products">Products</Link>
      <br />
      <Link href="/controls">Controls</Link>
    </div>
  );
};

export default Home;
