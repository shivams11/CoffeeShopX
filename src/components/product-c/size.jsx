import React from "react";

function size({ handelSize, size }) {
    let text = ["S", "M", "L", "XL"];
    // Change the background color of the size selected
    let style;
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold max-cd:text-3xl">Size</h1>
            <div
                className="flex gap-2  flex-wrap"
                onChange={(e) => {
                    handelSize(e);
                }}
            >
                {text.map((value, index) => {
                    {
                        if (value === size) {
                            style = "bg-black text-white text-2xl px-6 py-2 mx-2 max-md:text-xl ";
                        } else {
                            style = "border text-2xl px-6 bg-gray-200 py-2 mx-2 max-md:text-xl";
                        }
                    }
                    return (
                        <div key={index} className="my-4">
                            <input
                                type="radio"
                                name="size"
                                id={value}
                                value={value}
                                className=" hidden"
                            />
                            <label htmlFor={value} className={style}>
                                {value}
                            </label>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default size;
