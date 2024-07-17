"use client";

import Layout from '../components/layout/layout';
import GroceryList from '../components/GroceryList';

export default function AccountPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 flex justify-center">
        <div className="grid grid-cols-5 gap-4 h-96">
          <div className="col-span-1 bg-slate-100 rounded-md p-4 h-full backdrop-blur-md border-4">
            <div className="font-sans">
              <div className="">
                <h1 className="font-bold antialiased text-base md:text-2xl text-center m-2 md:m-3">Your Lists</h1>
              </div>
              <ul className="flex flex-col text-center gap-4">
                <li className="font-normal antialiased md:font-medium">List 1</li>
                <li className="font-normal antialiased md:font-medium">List 2</li>
              </ul>
            </div>
          </div>
          <div className="col-span-4 bg-slate-100 rounded-md p-4 border-4">
            <GroceryList />
          </div>
        </div>
      </div>
    </Layout>
  );
}
