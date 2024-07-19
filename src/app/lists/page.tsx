"use client";

import Layout from '../components/layout/layout';
import GroceryList from '../components/GroceryList';
import ListBar from '../components/ListBar';

export default function ListPage() {
  return (
    <Layout>
      <div className="min-h-screen flex">
        <div className="flex flex-grow w-full">
          <div className="w-1/5 h-full p-4 backdrop-blur-md bg-slate-200">
            <ListBar />
          </div>
          <div className="w-4/5 h-full p-4 bg-white">
            <GroceryList />
          </div>
        </div>
      </div>
    </Layout>
  );
}
