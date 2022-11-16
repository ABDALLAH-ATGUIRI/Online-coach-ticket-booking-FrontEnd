import React from "react";

const FiliedOfTableTravel = () => {
  return (
    <tr className="hover:bg-gray-100 w-full text-center">
      <td className="p-4 w-4">
        <div className="flex items-center"></div>
      </td>
      <td className="p-4 whitespace-nowrap w-1/6 text-sm font-normal text-gray-500">
        <div className="text-base font-semibold text-gray-900">
          {element.bus}
        </div>
        {/* <div className="text-sm font-normal text-gray-500">#</div> */}
      </td>
      <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
        {element.busNumber}
      </td>
      <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
        {element.seatsNumber}
      </td>
      <td className="p-4 whitespace-nowrap text-base w-1/6 font-medium text-gray-900">
        {element.statut == "inMaintenance"
          ? "en maintenance"
          : element.statut == "Hors service"
          ? "OutOfService"
          : "En service"}
      </td>
      <td className="flex p-4  whitespace-nowrap space-x-2 w-auto">
        <div
          onClick={() => {
            open
              ? setOpen(false) && setUpdateField(true)
              : setUpdateField(false);
          }}
        >
          <Button info={update} className="bg-blue-800"></Button>
        </div>
        <div onClick={deleteBus}>
          <Button info={del} className="bg-red-800"></Button>
        </div>
      </td>
    </tr>
  );
};

export default FiliedOfTableTravel;
