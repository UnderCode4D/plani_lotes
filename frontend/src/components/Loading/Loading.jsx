const Loading = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-500"></div>
        <p className="ml-4 text-lg font-semibold text-gray-700">Cargando...</p>
      </div>
    );
  };
  
  export default Loading;
  