
import { useState, useEffect } from 'react';

//types (interface)

type FilterPriceProps = {
    onPriceChange: (selectedPrices: string[]) => void;
};

export default function FilterPrice({ onPriceChange }: FilterPriceProps) {
    const [active, setActive] = useState(false);
    const [visibleCount, setVisibleCount] = useState(5);
    const [selectedPrices, setSelectedPrices] = useState<string[]>([]);

    //data for price list
    const prices = [
        '$1', '$2', '$3', '$4', '$5',
        '$6', '$7', '$8', '$9', '$10',
        'More than $10'
    ];

      //handle the chechbox change (checked or unchecked)
    const handleCheckboxChange = (price: string) => {
        setSelectedPrices((prevSelected) =>
            prevSelected.includes(price)
                ? prevSelected.filter((item) => item !== price)
                : [...prevSelected, price]
        );
    };

    // Send selected prices to parent on every change
    useEffect(() => {
        onPriceChange(selectedPrices);
    }, [selectedPrices]);

      //handle see more button click

    const handleSeeMoreClick = () => {
        setVisibleCount((prev) => Math.min(prev + 5, prices.length));
    };

    return (
        <div>
            <div
                onClick={() => setActive(!active)}
                className="cursor-pointer font-semibold text-mainTextColor pb-4 pt-5"
            >
                <h6>Tour Price</h6>
            </div>

            {active && (
                <div>
                    <ul>
                        {prices.slice(0, visibleCount).map((price, index) => (
                            <li key={index} className="flex items-center pb-1">
                                <input
                                    id={`price-${index}`}
                                    type="checkbox"
                                    className="me-2 w-4 h-4"
                                    checked={selectedPrices.includes(price)}
                                    onChange={() => handleCheckboxChange(price)}
                                />
                                <label htmlFor={`price-${index}`}>{price}</label>
                            </li>
                        ))}
                    </ul>

                    {visibleCount < prices.length && (
                        <div
                            className="cursor-pointer pt-3 text-bgButtonOrange"
                            onClick={handleSeeMoreClick}
                        >
                            See More
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
