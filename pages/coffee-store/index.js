import Head from "next/head";
import { useRouter } from "next/router";

const coffeeStoreHome = () => {

    const router = useRouter();
    console.log(router);

    return ( <div>
        <Head>
            <title>Coffee Store</title>
        </Head>
        <div>Coffee Store index page</div>
    </div>
    )
};

export default coffeeStoreHome;