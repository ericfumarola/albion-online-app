import NavBar from '../comps/NavBar';
import Head from 'next/head';

//npx kill-port 3000
const Index = () => (
    <div>
        <Head>
            <title>AlbionOnline App</title>
            <link href="../static/index.css" rel="stylesheet" />
        </Head>
        <NavBar value={0}/>
        <p>Home</p>
    </div>
);

export default Index