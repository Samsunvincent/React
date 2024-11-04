import { useEffect, useState } from "react";

export default function UseEffectComponent1() {
    const [datas, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const parsed_datas = await response.json();
                console.log("parsed_datas", parsed_datas);
                setData(parsed_datas);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <h1>UseEffectComponent1</h1>
            {datas ? (
                <ul>
                    {datas.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
