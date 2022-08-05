import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
//for ipfs checking
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");

export default function EnrolledCourse({ id, title, desc, price }) {
  const [{ user }, dispatch] = useStateValue();
  //ipfs
  const [CID, setCID] = useState(``);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const handleComplete = async (e) => {
    e.preventDefault();
    // a request to ipfs is sent
    const str =
      user.name +
      " | " +
      user.email +
      " | " +
      date +
      " | " +
      user.account +
      "| Title: " +
      title +
      " | Issued by: Courszila";
    try {
      // ipfs returns cid
      const added = await client.add(str);
      const cid = added.path;
      //console.log("cid is ",cid);
      setCID(cid);
      //give cid to smart contract
      //   var res = await  Contract.depositFund( { value: ethers.utils.parseEther(price.toString()) },);
      //  await res.wait(1);

      //here user is  paid back the ethers verifying that the cid exists in the smart contract
      //   var res = await  Contract.depositFund( );
      //  await res.wait(1);
      dispatch({
        type: "REMOVE FROM ENROLLED",
        id: id,
      });
      dispatch({
        type: "ADD TO CERTIFICATES",
        item: {
          id: id,
          title: title,
          name: user.name,
          email: user.email,
          date: date,
          cid: cid,
          account: user.account,
        },
      });
    } catch (error) {
      console.log("Error happened ", error);
    }
  };
  return (
    <div class="p-4 md:w-1/3">
      <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div class="flex items-center mb-3">
          <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <h2>{id}</h2>
          </div>
          <h2 class="text-gray-900 text-lg title-font font-medium">{title}</h2>
        </div>
        <div class="flex-grow">
          <p class="leading-relaxed text-base">{desc}</p>
          <a
            class="mt-3 text-indigo-500 inline-flex items-center cursor-pointer"
            onClick={handleComplete}
          >
            Complete
          </a>
        </div>
      </div>
    </div>
  );
}
