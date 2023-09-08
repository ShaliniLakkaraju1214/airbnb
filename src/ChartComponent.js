import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchData } from './DataFetcher';

const ChartComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const listings = await fetchData();
      setData(listings);
    };

    fetchDataFromAPI();
  }, []);

  const listingsCount = data.length;
  const reviewsCount = data.reduce((total, listing) => total + listing.reviews, 0);

  const chartData = {
    labels: ['Listings', 'Reviews'],
    datasets: [
      {
        label: 'Asheville, NC, USA',
        data: [listingsCount, reviewsCount],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>Listings vs. Reviews in Asheville, NC, USA</h1>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default ChartComponent;

