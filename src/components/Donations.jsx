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
        <div>
            {
                showDonations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

export default Donations;