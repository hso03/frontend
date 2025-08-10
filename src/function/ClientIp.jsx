import React, { useEffect, useState } from "react";
import axios  from "axios";

export default function ClientIp(){

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/ip")
            .then((res) => {
                setData(res.data);
            })
    }, []);

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        내 아이피
                    </h2>
                    <p className="mb-8 font-light text-gray-900 dark:text-white">
                        IP : { data }
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a href="/function"
                           className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            돌아가기
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}