
import { useState, useEffect } from 'react';

//types (interface)

type DurationList = {
    onDurationChange: (selectedDuration: string[]) => void;
};

export default function DurationList({ onDurationChange }: DurationList) {
    const [active, setActive] = useState(false);
    const [visibleCount, setVisibleCount] = useState(5);
    const [selectedDuration, setSelectedDuration] = useState<string[]>([]);

    //data for duration list
    const duration = [
        '1 day', '2 days', '3 days', '4 days', '5 days',
        '6 days', '7 days', '8 days', '9 days', '10 days',
        'More than 10 days'
    ];

      //handle the chechbox change (checked or unchecked)
    const handleCheckboxChange = (price: string) => {
        setSelectedDuration((prevSelected) =>
            prevSelected.includes(price)
                ? prevSelected.filter((item) => item !== price)
                : [...prevSelected, price]
        );
    };

    // Send selected duration to parent on every change
    useEffect(() => {
        onDurationChange(selectedDuration);
    }, [selectedDuration]);

      //handle see more button click

    const handleSeeMoreClick = () => {
        setVisibleCount((prev) => Math.min(prev + 5, duration.length));
    };

    return (
        <div>
            <div
                onClick={() => setActive(!active)}
                className="cursor-pointer font-semibold text-mainTextColor pb-4 pt-5"
            >
                <h6>Duration</h6>
            </div>

            {active && (
                <div>
                    <ul>
                        {duration.slice(0, visibleCount).map((duration, index) => (
                            <li key={index} className="flex items-center pb-1">
                                <input
                                    id={`duration-${index}`}
                                    type="checkbox"
                                    className="me-2 w-4 h-4"
                                    checked={selectedDuration.includes(duration)}
                                    onChange={() => handleCheckboxChange(duration)}
                                />
                                <label htmlFor={`duration-${index}`}>{duration}</label>
                            </li>
                        ))}
                    </ul>

                    {visibleCount < duration.length && (
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
