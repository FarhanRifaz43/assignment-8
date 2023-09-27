import { getStoredDonation } from './localstorage';
import { PieChart } from 'react-minimal-pie-chart';
const Statistics = () => {
    const totalDonations = getStoredDonation();
    const donatedPercentage = (totalDonations.length / 12) * 100;
    return (
        <div className="w-fit mx-auto mt-20">
            <PieChart
                data={[
                    { title: 'One', value: 100 - donatedPercentage, color: 'rgba(255, 0, 0, 0.2)' },
                    { title: 'Two', value: donatedPercentage, color: '#C13C37' },
                ]}
            />
        <div className='flex justify-between mt-10'>
        <div className='flex items-center gap-2'>
            <div className='bg-red-800 w-8 h-3'></div>
            <h2>Donated</h2>
        </div><div className='flex items-center gap-2'>
            <div className='bg-red-200 w-8 h-3'></div>
            <h2>Not Donated</h2>
        </div>
        </div>
        </div>
    );
};

export default Statistics;