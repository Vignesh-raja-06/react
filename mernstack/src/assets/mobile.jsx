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
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
        id: 3,
        name: "OnePlus",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/OnePlus_logo.svg",
    },
    {
        id: 4,
        name: "Xiaomi",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg",
    },
    ];

    const Mobile = () => {
    return (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {mobile.map((brand) => (
            <div
            key={brand.id}
            style={{
                border: "1px solid #ddd",
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
    );
    };

    export default Mobile;