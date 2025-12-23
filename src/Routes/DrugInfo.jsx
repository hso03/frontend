import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function DrugInfo() {

    const [drugInfo, setDrugInfo] = useState([]);

    useEffect(()=>{
        axios.get("http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList",{
            params: {
                "ServiceKey": "anOR0hKUj8UiQTCTcgxvw0YSa/qYx5MHXIuLJo8h2Q9vM7JQQge32wzijSjtlH+t8e/REWrKgxVcsIgETz4ARQ==",
                "pageNo": "1",
                "numOfRows": "10",
                "type": "json"
            }
        })
            .then(res => {
                const drugList = res.data.body.items;
                setDrugInfo(drugList);
            })
    }, []);

    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                { drugInfo.length === 0 ? "로딩중....":drugInfo[0].entpName }
                <ul role="list" className="divide-y divide-white/5">
                    {drugInfo.map((drug) => (
                        <li key={drug.entpName} className="flex justify-between gap-x-6 py-5">
                            <label>{drug.entpName}</label>
                            <p>entpName, itemName, itemSeq, efcyQesitm, useMethodQesitm, atpnWarnQesitm, atpnQesitm, intrcQesitm, seQesitm, depositMethodQesitm, openDe, updateDe, itemImage, bizrno</p>
                            <div className="flex min-w-0 gap-x-4">
                                <img
                                    alt=""
                                    src={drug.itemImage}
                                    className="size-12 flex-none rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                                />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm/6 font-semibold text-white">{drug.name}</p>
                                    <p className="mt-1 truncate text-xs/5 text-gray-400">{drug.email}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm/6 text-white">{drug.role}</p>
                                {drug.lastSeen ? (
                                    <p className="mt-1 text-xs/5 text-gray-400">
                                        Last seen <time dateTime={drug.lastSeenDateTime}>{drug.lastSeen}</time>
                                    </p>
                                ) : (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/30 p-1">
                                            <div className="size-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-xs/5 text-gray-400">Online</p>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}