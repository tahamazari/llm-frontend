"use client";

import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import axios from "axios";

import { Button, Sidebar, Input, Table } from "./components";
import { API_URL } from "./constants";

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const getOutput = async () => {
    setMessage('')
    setError('')
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/query`, {
          query: prompt
      });
      const { data = {} } = response || {};
      const { rows = [], columns = [], message = "" } = data;
      setColumns(columns);
      setRows(rows);
      setMessage(message)
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Sorry something went wrong!")
    }
  };

  const resetOutput = () => {
    setColumns([]);
    setRows([]);
    setPrompt('');
    setMessage('');
    setError('');
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Sidebar>
        <div className="w-full px-4 py-2">
          <div className="flex w-full">
            <div className="w-[90%]">
              <Input
                placeholder="Search database"
                icon={MagnifyingGlassIcon}
                className="py-[10px]"
                value={prompt}
                onEnterPress={getOutput}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div className="w-[10%] ml-[8px]">
              <Button title="Search" className="w-full h-full" onClick={getOutput} />
            </div>
            <div className="ml-2">
              <Button title="Reset" className="bg-gray-200 text-gray-800 hover:bg-gray-300 w-full h-full" onClick={resetOutput} />
            </div>
          </div>
          <div className="w-full pt-8">
            { message &&
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
                <p className="font-bold">Warning</p>
                <p>{message}</p>
              </div>
            }
            { error &&
              <div class="bg-red-100 mb-6 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Error:</strong>
                <span class="block sm:inline">{error}</span>
              </div>
            }
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
              </div>
            ) : (
              (columns.length && rows.length) ? 
              <Table columns={columns} rows={rows}/> : 
              !error && !message &&
              <div class="bg-blue-100 border-t-4 border-blue-500 rounded-b text-blue-900 px-4 py-3 shadow-md" role="alert">
                <div class="flex">
                  <div class="py-1">
                    <svg class="fill-current h-6 w-6 text-blue-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-7a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm0-4a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z"/></svg>
                  </div>
                  <div>
                    <p class="font-bold">Type above to check database for information in Natural Language</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Sidebar>
    </main>
  );
}
