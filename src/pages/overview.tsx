/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardLayout from "../components/dashboard-layout"
import { areaData } from "../Data/data";

const summary = [
    {
        title: "Total No. of Referrals",
        value: 5000,
    },
    {
        title: "Total No. of Registration",
        value: 1546,
    },
    {
        title: "Total No. of Patners",
        value: 22,
    },
    {
        title: "Total No. of Boroughs",
        value: 52,
    }
];

type Borough = { label?: string } | string;
type LDP = { name?: string; boroughs?: Borough[] };
type Area = { label?: string; ldps?: LDP[] };

const tableData = areaData.flatMap((area: Area, areaIndex: number) => {
    if (!Array.isArray(area.ldps)) return [];
    return area.ldps.map((ldp: LDP, ldpIndex: number) => {
        const boroughs = Array.isArray(ldp.boroughs)
            ? ldp.boroughs.map((borough: Borough) =>
                typeof borough === "object" && borough !== null
                    ? (borough.label ?? "")
                    : String(borough)
            ).join(", ")
            : " ";
        // We'll use a static variable to keep track of the serial number across all regions
        if (typeof (globalThis as any)._serialNumber === "undefined") {
            (globalThis as any)._serialNumber = 1;
        }
        const id = (globalThis as any)._serialNumber++;
        return {
            id,
            region: area.label ?? `Region ${areaIndex + 1}`,
            organization: ldp.name ?? `org ${ldpIndex + 1}`,
            boroughs,
        };
    });
});

const Overview: React.FC = () => {
  return (
    <div>
      <DashboardLayout pageName="Overview">
      <main className=" p-0 md:p-6 w-screen md:w-full">
          {/* Summary cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-8 align-center ">
            {summary.map((card) => (
              <div key={card.title} className="bg-white rounded-lg shadow p-2 md:p-4">
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className="text-2xl font-semibold mt-2">{card.value}</p>
              </div>
            ))}
          </div>

          {/* Data table */}
          <div className="bg-white rounded-lg shadow overflow-x-auto max-w-full max-h-800">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-50">
                <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">S/N</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Region</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Organization</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Areas Covered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 cursor-pointer">
                    <td className="px-4 py-3">{row.id}</td>
                    <td className="px-4 py-3">{row.region}</td>
                    <td className="px-4 py-3">{row.organization}</td>
                    <td className="px-4 py-3">{row.boroughs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </DashboardLayout>
    </div>
  )
}

export default Overview
