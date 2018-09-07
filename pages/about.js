import Head from "next/head";
import NavBar from "../comps/NavBar";

export default () => (
    <div>
        <Head>
            <title>AlbionOnline App</title>
            <link href="../static/index.css" rel="stylesheet" />
        </Head>
        <NavBar value={1}/>
        <p>About</p>
    </div>
)