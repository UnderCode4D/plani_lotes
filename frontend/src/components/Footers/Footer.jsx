const Footer = () => {
  return (
    <footer className="bg-blueGray-200 py-4">
      <div className="container mx-auto text-center text-sm text-blueGray-500">
        Copyright © {new Date().getFullYear()} Plani Lotes.
      </div>
    </footer>
  );
};

export default Footer;
