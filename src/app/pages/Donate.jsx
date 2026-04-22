import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Donate = () => {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-blue-950 mb-4">
          Donation Details
        </h2>

        <InfoRow label="Bank Name" value="Sonali Bank" />
        <InfoRow label="Account Type" value="Current Account" />
        <InfoRow label="Account Name" value="TEAM BLACK PEARL" />
        <InfoRow label="Account Number" value="4404002001132" />
        <InfoRow label="Routing Number" value="200270522" />
        <InfoRow label="SWIFT Code" value="BSONBDDHLOD" />

        <button
          onClick={() =>
            copyToClipboard(`Bank Name: Sonali Bank
Account Type: Current Account
Account Name: TEAM BLACK PEARL
Account Number: 4404002001132
Routing Number: 200270522
SWIFT Code: BSONBDDHLOD`)
          }
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Copy All Details
        </button>

      </div>
    </div>
  );
};

export default Donate;