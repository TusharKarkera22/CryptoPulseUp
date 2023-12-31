import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
    if(prices2){
        setChartData({
            labels: prices1.map((price) => convertDate(price[0])),
            datasets: [
                {
                    label: "Crypto 1",
                    data: prices1.map((price) => price[1]),
                    borderColor: "#3a80e9",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.25,
                    pointRadius: 0,
                    yAxisID: 'crypto1',
                },
                {
                    label: "Crypto 2",
                    data: prices2.map((price) => price[1]),
                    borderColor: "#61c96f",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.25,
                    pointRadius: 0,
                    yAxisID: 'crypto2',
                },
                // Additional datasets if needed
            ],
        });
    }else{
        setChartData({
            labels: prices1.map((price) => convertDate(price[0])),
            datasets: [
                {
                    label: "Price",
                    data: prices1.map((price) => price[1]),
                    borderColor: "#3a80e9",
                    borderWidth: 2,
                    fill: false,
                    tension: 0.25,
                    pointRadius: 0,
                    yAxisID: 'crypto1',
                },
                // Additional datasets if needed
            ],
        });
    }
}