const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donations')
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id =>{
    const stored = getStoredDonation();
    const exists = stored.find(donationId => donationId === id)
    if(!exists){
        stored.push(id);
        localStorage.setItem('donations', JSON.stringify(stored))
    }
}

export {getStoredDonation, saveDonation}