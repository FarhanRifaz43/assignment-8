import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation} from "./localstorage";
import DonationCard from "./DonationCard";

const Donations = () => {
    const donations = useLoaderData();
    const [showDonations, setShowDonations] = useState([])
    useEffect(()=>{
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0){
            const doneDonations = donations.filter(donation => storedDonationIds.includes(donation.id))
            setShowDonations(doneDonations)
        }
    }, [])
    return (
        <div className="grid gap-5 md:grid-cols-2 w-fit mx-auto">
            {
                showDonations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Donations;