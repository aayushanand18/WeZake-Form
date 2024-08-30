import React from "react";
import { useState } from "react";
const Address = () => {
  const [addLine, setAddLine] = useState(false);

  function addNewField(event) {
    event.preventDefault();
    console.log("Button or Icon Clicked!");
    setAddLine(true);
  }

  function delNewField(event) {
    event.preventDefault();
    console.log("Button or Icon Clicked!");
    setAddLine(false);
  }

  function handleAddressChange(event) {
    if (event.target.value.length > 20) {
      addNewField(event);
    }else if (event.target.value.length < 20) {
      delNewField(event);
    }
  }

  


  return (
    <div>
        
            <input
            type="text" id="text"
            placeholder="Address Line 1"
            className=" rounded-lg border text-neutral-600 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-auto lg:w-11/12 h-max p-1.5 md:w-9/12 relative z-10 mt-2 bg-neutral-950 placeholder:text-neutral-700" onChange={handleAddressChange}/>

          {addLine && (
                <input
                  type="text"
                  placeholder="Address Line 2"
                  className="address-field lg:w-11/12 text-neutral-600 mt-4 p-2 rounded-lg border border-neutral-800 bg-neutral-950 placeholder:text-neutral-700"
                />
              )}
    </div>
  )
}

export default Address;