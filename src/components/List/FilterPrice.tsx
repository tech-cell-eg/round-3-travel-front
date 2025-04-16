import { useState, useEffect } from 'react';

//types (interface)
type FilterPriceProps = {
    onPriceChange: (minPrice: number | null, maxPrice: number | null) => void;
};

export default function FilterPrice({ onPriceChange }: FilterPriceProps) {
    const [active, setActive] = useState(false);
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);

    //handle the inputs change (checked or unchecked)
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value ? parseInt(e.target.value) : null;
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value ? parseInt(e.target.value) : null;
        setMaxPrice(value);
    };

    //send selected price to parent on every change
    useEffect(() => {
        onPriceChange(minPrice, maxPrice);
    }, [minPrice, maxPrice]);

    const clearFilters = () => {
        setMinPrice(null);
        setMaxPrice(null);
    };

    return (
        <div>
            <div
                onClick={() => setActive(!active)}
                className="cursor-pointer font-semibold text-mainTextColor pb-4 pt-5"
            >
                <h6>Tour Price Range</h6>
            </div>

            {active && (
                <div className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="minPrice" className="mb-1 text-sm text-gray-600">
                            Minimum Price ($)
                        </label>
                        <input
                            id="minPrice"
                            type="number"
                            min="0"
                            placeholder="Min"
                            className="p-2 border rounded"
                            value={minPrice || ''}
                            onChange={handleMinPriceChange}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="maxPrice" className="mb-1 text-sm text-gray-600">
                            Maximum Price ($)
                        </label>
                        <input
                            id="maxPrice"
                            type="number"
                            min="0"
                            placeholder="Max"
                            className="p-2 border rounded"
                            value={maxPrice || ''}
                            onChange={handleMaxPriceChange}
                        />
                    </div>

                    {(minPrice !== null || maxPrice !== null) && (
                        <button
                            onClick={clearFilters}
                            className="text-sm text-bgButtonOrange hover:underline"
                        >
                            Clear filters
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}