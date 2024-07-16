"use client";

import Layout from '../components/layout/layout';
import GroceryList from '../components/GroceryList';

export default function AccountPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
            <div>
                <div>
                  List of lists
                </div>
            </div>
            <div>
              <div>
                <h1>List Name</h1>
              </div>
              <GroceryList />
            </div>
        </div>
      </div>

    </Layout>
  );
}