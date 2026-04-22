import { Building2 } from "lucide-react";

const Donate = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const banks = [
    {
      bankName: "Sonali Bank",
      accountType: "Current Account",
      details: [
        { label: "Account Name", value: "TEAM BLACK PEARL" },
        { label: "Account Number", value: "4404002001132" },
        { label: "Routing Number", value: "200270522" },
        { label: "SWIFT Code", value: "BSONBDDHLOD" },
      ],
    },
    {
      bankName: "Second Bank",
      accountType: "Add Account Type",
      details: [
        { label: "Account Name", value: "ADD ACCOUNT NAME" },
        { label: "Account Number", value: "ADD ACCOUNT NUMBER" },
        { label: "Routing Number", value: "ADD ROUTING NUMBER" },
        { label: "SWIFT Code", value: "ADD SWIFT CODE" },
      ],
    },
  ];

  const InfoRow = ({ label, value }) => (
    <div className="flex justify-between items-center bg-gray-100 px-4 py-3 rounded-lg mb-3">
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
      <button
        onClick={() => copyToClipboard(value)}
        className="bg-blue-600 text-white px-3 py-1 rounded text-xs hover:bg-blue-700"
      >
        Copy
      </button>
    </div>
  );

  const buildAllDetailsText = (bank) =>
    `${bank.bankName}\n${bank.accountType}\n${bank.details
      .map((item) => `${item.label}: ${item.value}`)
      .join("\n")}`;

  return (
    <div className="min-h-screen bg-blue-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banks.map((bank) => (
            <div
              key={bank.bankName}
              className="bg-white shadow-2xl rounded-2xl p-6 w-full"
            >
              <div className="flex flex-col items-center text-center mb-5">
                <Building2 className="w-10 h-10 text-blue-700 mb-2" />
                <h2 className="text-2xl font-bold text-blue-950">
                  {bank.bankName}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{bank.accountType}</p>
              </div>

              {bank.details.map((item) => (
                <InfoRow key={item.label} label={item.label} value={item.value} />
              ))}

              <button
                onClick={() => copyToClipboard(buildAllDetailsText(bank))}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Copy All Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Donate;