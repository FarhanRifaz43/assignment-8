import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "./localstorage";
import DonationCard from "./DonationCard";

const Donations = () => {
    const donations = useLoaderData();
    const [showDonations, setShowDonations] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            const doneDonations = donations.filter(donation => storedDonationIds.includes(donation.id))
            setShowDonations(doneDonations)
        }
    }, [donations])
    const handleShowAll = () => {
        setDataLength(showDonations.length)
    }
    return (
        <div className="flex flex-col items-center gap-8">
            <div className="grid gap-5 md:grid-cols-2 w-fit mx-auto mt-5">
                {
                    showDonations.slice(0, dataLength).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
            </div>
            <div className={dataLength === showDonations.length && "hidden"}>
                <button onClick={handleShowAll} className="btn btn-success w-fit text-white">Show All</button>
            </div>
        </div>
    );
};

export default Donations;