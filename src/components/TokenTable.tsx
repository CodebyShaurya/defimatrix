import React from "react";

interface TokenData {
  allocation: string;
  totalSupplyPercentage: string;
  amountOfTokens: string;
  tgePercentageOfAllocation: string;
  supplyUnlockedAtTGE: string;
  cliffInMonths: string;
  vestingInMonths: string;
  totalVestingInMonths: string;
}

const tokenData = [
  {
    allocation: "Angel Round",
    totalSupplyPercentage: "5%",
    amountOfTokens: "2,500,000",
    tgePercentageOfAllocation: "100.00%",
    supplyUnlockedAtTGE: "100.00%",
    cliffInMonths: "1",
    vestingInMonths: "9",
    totalVestingInMonths: "10",
  },
  {
    allocation: "LBP",
    totalSupplyPercentage: "15%",
    amountOfTokens: "7,500,000",
    tgePercentageOfAllocation: "100.00%",
    supplyUnlockedAtTGE: "100.00%",
    cliffInMonths: "0",
    vestingInMonths: "0",
    totalVestingInMonths: "0",
  },
  {
    allocation: "Development",
    totalSupplyPercentage: "15%",
    amountOfTokens: "7,500,000",
    tgePercentageOfAllocation: "50.00%",
    supplyUnlockedAtTGE: "50.00%",
    cliffInMonths: "3",
    vestingInMonths: "3",
    totalVestingInMonths: "6",
  },
  {
    allocation: "Liquidity Pool",
    totalSupplyPercentage: "10%",
    amountOfTokens: "5,000,000",
    tgePercentageOfAllocation: "0.00%",
    supplyUnlockedAtTGE: "0.00%",
    cliffInMonths: "0",
    vestingInMonths: "0",
    totalVestingInMonths: "0",
  },
  {
    allocation: "Marketing",
    totalSupplyPercentage: "10%",
    amountOfTokens: "5,000,000",
    tgePercentageOfAllocation: "30.00%",
    supplyUnlockedAtTGE: "30.00%",
    cliffInMonths: "1",
    vestingInMonths: "3",
    totalVestingInMonths: "0",
  },
  {
    allocation: "KOL Round",
    totalSupplyPercentage: "5%",
    amountOfTokens: "2,500,000",
    tgePercentageOfAllocation: "0.00%",
    supplyUnlockedAtTGE: "0.00%",
    cliffInMonths: "3",
    vestingInMonths: "12",
    totalVestingInMonths: "15",
  },
  {
    allocation: "Partnerships",
    totalSupplyPercentage: "5%",
    amountOfTokens: "2,500,000",
    tgePercentageOfAllocation: "0.00%",
    supplyUnlockedAtTGE: "0.00%",
    cliffInMonths: "3",
    vestingInMonths: "12",
    totalVestingInMonths: "15",
  },
  {
    allocation: "Advisors",
    totalSupplyPercentage: "5%",
    amountOfTokens: "2,500,000",
    tgePercentageOfAllocation: "0.00%",
    supplyUnlockedAtTGE: "0.00%",
    cliffInMonths: "3",
    vestingInMonths: "12",
    totalVestingInMonths: "15",
  },
  {
    allocation: "Core Contributors",
    totalSupplyPercentage: "15%",
    amountOfTokens: "7,500,000",
    tgePercentageOfAllocation: "0.00%",
    supplyUnlockedAtTGE: "0.00%",
    cliffInMonths: "6",
    vestingInMonths: "24",
    totalVestingInMonths: "30",
  },
  {
    allocation: "Ecosystem Rewards",
    totalSupplyPercentage: "10%",
    amountOfTokens: "5,000,000",
    tgePercentageOfAllocation: "0.00%",
    supplyUnlockedAtTGE: "0.00%",
    cliffInMonths: "0",
    vestingInMonths: "36",
    totalVestingInMonths: "36",
  },
  {
    allocation: "Reserve Fund",
    totalSupplyPercentage: "5%",
    amountOfTokens: "2,500,000",
    tgePercentageOfAllocation: "0.00%",
    supplyUnlockedAtTGE: "0.00%",
    cliffInMonths: "12",
    vestingInMonths: "12",
    totalVestingInMonths: "24",
  },
  {
    allocation: "TOTAL",
    totalSupplyPercentage: "100%",
    amountOfTokens: "50,000,000",
    tgePercentageOfAllocation: "",
    supplyUnlockedAtTGE: "",
    cliffInMonths: "",
    vestingInMonths: "",
    totalVestingInMonths: "",
  },
];


const TokenTable: React.FC = () => {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex w-full items-center justify-between divide-x divide-purple-500 border border-purple-500 bg-purple-900">
        <p className="w-full px-3 py-1.5 text-center text-base font-medium uppercase tracking-widest text-white">
          DEFIMATRIX TOKEN ECONOMY
        </p>
      </div>
      <div className="flex w-full items-center justify-between divide-x divide-purple-500 border border-purple-500 bg-purple-900">
        <p className="w-[50rem] px-3 py-1.5 text-center text-sm font-medium uppercase tracking-widest text-white">
          TOKEN ALLOCATION
        </p>
        <p className="w-full px-3 py-1.5 text-center text-sm font-medium uppercase tracking-widest text-white">
          VESTING SCHEDULES
        </p>
      </div>
      <table className="min-w-full divide-y border border-purple-800 divide-gray-800 rounded-2xl shadow sm:rounded-lg">
        <thead className="rounded-2xl border border-purple-800 bg-purple-950">
          <tr className="divide-x divide-purple-800">
            <th className="px-3 py-1.5 text-left text-[10px] font-medium uppercase tracking-wider text-white">
              Allocation
            </th>
            <th className="px-3 py-1.5 text-left text-[10px] font-medium uppercase tracking-wider text-white">
              % of Total Supply
            </th>
            <th className="px-3 py-1.5 text-left text-[10px] font-medium uppercase tracking-wider text-white">
              Amount of Tokens
            </th>
            <th className="px-3 py-1.5 text-left text-[10px] font-medium uppercase tracking-wider text-white">
              TGE % of Allocation
            </th>
            <th className="px-3 py-1.5 text-left text-[10px] font-medium uppercase tracking-wider text-white">
              % of Supply Unlocked at TGE
            </th>
            <th className="px-3 py-1.5 text-left text-[10px] font-medium uppercase tracking-wider text-white">
              Cliff (in months)
            </th>
            <th className="px-3 py-1.5 text-left text-[10px] font-medium uppercase tracking-wider text-white">
              Vesting (in months)
            </th>
            <th className="px-3 py-1.5 text-left text-[10px] font-medium uppercase tracking-wider text-white">
              Total Vesting (in months)
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-x divide-purple-800 bg-[#2B233E]/50">
          {tokenData.map((row, index) => (
            <tr key={index}>
              <td className="whitespace-nowrap border border-purple-800 px-6 py-4 text-sm font-medium text-white">
                {row.allocation}
              </td>
              <td className="whitespace-nowrap border-r border-purple-800 px-6 py-4 text-sm text-white/80">
                {row.totalSupplyPercentage}
              </td>
              <td className="whitespace-nowrap border-r border-purple-800 px-6 py-4 text-sm text-white/80">
                {row.amountOfTokens}
              </td>
              <td className="whitespace-nowrap border-r border-purple-800 px-6 py-4 text-sm text-white/80">
                {row.tgePercentageOfAllocation}
              </td>
              <td className="whitespace-nowrap border-r border-purple-800 px-6 py-4 text-sm text-white/80">
                {row.supplyUnlockedAtTGE}
              </td>
              <td className="whitespace-nowrap border-r border-purple-800 px-6 py-4 text-sm text-white/80">
                {row.cliffInMonths}
              </td>
              <td className="whitespace-nowrap border-r border-purple-800 px-6 py-4 text-sm text-white/80">
                {row.vestingInMonths}
              </td>
              <td className="whitespace-nowrap border-r border-purple-800 px-6 py-4 text-sm text-white/80">
                {row.totalVestingInMonths}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenTable;
