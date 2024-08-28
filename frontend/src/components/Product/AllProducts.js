import React from "react";
import qrcodeimg from '../../image/qrcode.png'
const AllProducts = () => {
  return (
    <div className="m-10">
      <div className="container px-4">
        <div className="border border-[gray] p-6">
          <table className="w-full">
              <tr className="text-[#13328C] p-4 font-bold text-md bg-[#F2F2F2]">
                <th className="p-4">Name</th>
                <th>Date Received/Quantity</th>
                <th>Date Dispatched/Quantity</th>
                <th>Pending Items</th>
                <th>Status</th>
                <th>QR Code (Click to download)</th>
                <th>Admin Panel</th>
              </tr>
              <tr className="text-md ">
                <td className="p-4">C1</td>
                <td>2024-06-04T00:00:00.000Z/120</td>
                <td>2024-06-04T00:00:00.000Z/120</td>
                <td>6</td>
                <td>Pending</td>
                <td className=""><img src={qrcodeimg} alt="" srcset="" className="w-[210px]" /></td>
                <td>
                  <span>✏️</span>
                  <span>🗑️</span>
                </td>
              </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
