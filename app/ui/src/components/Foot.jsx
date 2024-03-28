'use client';
import { Footer } from 'flowbite-react';

{/*Footer which contains links to restaurant information.*/ }
function Foot() {
  return (
    <Footer container className="bg-cherry border-t-4 border-lemon">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src="/images/OaxacaLogo.png"
            name="Oaxaca"
          />
          <Footer.LinkGroup className="text-lemon">
            <Footer.Link href="/AboutUs">About Us</Footer.Link>
            <Footer.Link href="/FoodMenu">Menu</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright className="text-lemon" href="/" by="Oaxaca" year={2024} />
      </div>
    </Footer>
  );
}

export default Foot
