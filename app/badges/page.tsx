import Image from "next/image";
import React from "react";

const transformedStates = [
    {
        name: "Andhra Pradesh",
        imageSrc: "/badges/andhrapradesh.jpg"
    },
    {
        name: "Arunachal Pradesh",
        imageSrc: "/badges/arunachalpradesh.jpg"
    },
    {
        name: "Assam",
        imageSrc: "/badges/assam.jpg"
    },
    {
        name: "Bihar",
        imageSrc: "/badges/bihar.jpg"
    },
    {
        name: "Chhattisgarh",
        imageSrc: "/badges/chhattisgarh.jpg"
    },
    {
        name: "Goa",
        imageSrc: "/badges/goa.jpg"
    },
    {
        name: "Gujarat",
        imageSrc: "/badges/gujarat.jpg"
    },
    {
        name: "Haryana",
        imageSrc: "/badges/haryana.jpg"
    },
    {
        name: "Himachal Pradesh",
        imageSrc: "/badges/himachalpradesh.jpg"
    },
    {
        name: "Jharkhand",
        imageSrc: "/badges/jharkhand.jpg"
    },
    {
        name: "Karnataka",
        imageSrc: "/badges/karnataka.jpg"
    },
    {
        name: "Kerala",
        imageSrc: "/badges/kerala.jpg"
    },
    {
        name: "Madhya Pradesh",
        imageSrc: "/badges/madhyapradesh.jpg"
    },
    {
        name: "Maharashtra",
        imageSrc: "/badges/maharashtra.jpg"
    },
    {
        name: "Manipur",
        imageSrc: "/badges/manipur.jpg"
    },
    {
        name: "Meghalaya",
        imageSrc: "/badges/meghalaya.jpg"
    },
    {
        name: "Mizoram",
        imageSrc: "/badges/mizoram.jpg"
    },
    {
        name: "Nagaland",
        imageSrc: "/badges/nagaland.jpg"
    },
    {
        name: "Odisha",
        imageSrc: "/badges/odisha.jpg"
    },
    {
        name: "Punjab",
        imageSrc: "/badges/punjab.jpg"
    },
    {
        name: "Rajasthan",
        imageSrc: "/badges/rajasthan.jpg"
    },
    {
        name: "Sikkim",
        imageSrc: "/badges/sikkim.jpg"
    },
    {
        name: "Tamil Nadu",
        imageSrc: "/badges/tamilnadu.jpg"
    },
    {
        name: "Telangana",
        imageSrc: "/badges/telangana.jpg"
    },
    {
        name: "Tripura",
        imageSrc: "/badges/tripura.jpg"
    },
    {
        name: "Uttar Pradesh",
        imageSrc: "/badges/uttarpradesh.jpg"
    },
    {
        name: "Uttarakhand",
        imageSrc: "/badges/uttarakhand.jpg"
    },
    {
        name: "West Bengal",
        imageSrc: "/badges/west-bengal.jpg"
    }
];


const page = () => {
	return (
		<div className="min-h-screen flex flex-col items-center pt-36 px-24">
            <div className="text-[#4d1414] font-semibold text-3xl">Collect our badges and showcase on your profile</div>
            <div className="grid grid-cols-7 gap-4 my-4 h-[55vh] overflow-scroll scrollbar-hide px-2 py-2">
                {
                    transformedStates.map((state)=>{
                        return (<div key={state.imageSrc} className="rounded-md shadow-md px-4 py-4 flex flex-col justify-center items-center gap-4 bg-white bg-opacity-90 hover:scale-110 duration-300 transition-all">
                            <div className="font-semibold">{state.name}</div>
                            <div>
                                <Image src={state.imageSrc} width={100} height={100} alt="state badges" className="rounded-full"/>
                            </div>
                        </div>)
                    })
                }
            </div>
        </div>
	);
};

export default page;
