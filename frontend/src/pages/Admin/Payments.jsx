import CardTable from "../../components/Cards/CardTable";
import CardStats from "../../components/Cards/CardStats";

const Payments = () => {
  return (
    <div className="p-8 mt-16 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Payments Page</h1>
      <p className="mb-6">This page will display payment-related information.</p>
      
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardTable />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardStats />
        </div>
      </div>
    </div>
  );
};

export default Payments;
