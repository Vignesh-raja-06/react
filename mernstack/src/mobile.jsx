import React from "react";

const mobile = [
    {
        id: 1,
        name: "Apple",
        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
        id: 2,
        name: "Samsung",
        logo: "https://tse4.mm.bing.net/th/id/OIP.WfEmMWIV_I5jxZVCDMo7ZwHaD2?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
        id: 3,
        name: "Realmi",
        logo: "https://static.vecteezy.com/system/resources/previews/019/956/208/non_2x/realme-transparent-realme-free-free-png.png",
    },
    {
        id: 4,
        name: "Xiaomi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
    },
    ];

    const Mobile = () => {
    return (
        <>
        <h1>Reward :</h1>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {mobile.map((brand) => (
            <div
            key={brand.id}
            style={{
                border: "9px solid #ddd",
                borderRadius: "10px",
                padding: "10px",
                width: "150px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
            >
            <img
                src={brand.logo}
                alt={brand.name}
                style={{ width: "80px", marginBottom: "10px" }}
            />
            <h3>{brand.name}</h3>
            </div>
        ))}
        </div>
        </>
    );
    };

    export default Mobile;