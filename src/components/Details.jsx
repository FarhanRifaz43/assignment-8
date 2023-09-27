import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    const donation = useLoaderData();
    const { id } = useParams();
    const donate = donation.find(donate => donate.id === id);
    const notify = () => toast("Wow so easy!");

    return (
        <div className="w-fit mx-auto mb-20 mt-3">
            <div>
                <img className="w-[60vw]" src={donate.image} alt="donation_image" />
                <div className="relative bottom-20 bg-black bg-opacity-50 h-20">
                    <button onClick={() => setIsDonated(true)} style={{ background: donate.text_color }} className="mt-5 ml-5 px-2 py-2 rounded-md text-white">Donate $290</button>
                </div>
            </div>
            <div className="relative bottom-20">
                <h2 className="font-bold mt-5 mb-3 text-xl">{donate.title}</h2>
                <p className="w-[60vw] text-sm font-light">{donate.description}</p>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Details;