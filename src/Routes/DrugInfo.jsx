import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function DrugInfo() {

    const [drugInfo, setDrugInfo] = useState([]);
    const [page, setPage] = useState(1);        // 현재 페이지
    const [totalCount, setTotalCount] = useState(0);  // API 전체 데이터 개수
    const rows = 10; // numOfRows

    const fetchDrugList = (pageNo) => {
        axios.get("http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/getDrbEasyDrugList",{
            params: {
                "ServiceKey": "anOR0hKUj8UiQTCTcgxvw0YSa/qYx5MHXIuLJo8h2Q9vM7JQQge32wzijSjtlH+t8e/REWrKgxVcsIgETz4ARQ==",
                "pageNo": pageNo,
                "numOfRows": rows,
                "type": "json"
            }
        })
            .then(res => {
                const body = res.data.body;
                setDrugInfo(body.items || []);
                setTotalCount(body.totalCount || 0);
            })
    };

    useEffect(()=>{
        fetchDrugList(page);
    }, [page]);

    const totalPage = Math.ceil(totalCount / rows);

    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-2xl font-semibold mb-6">약품 리스트</h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white rounded-lg">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">entpName</th>
                            <th className="px-4 py-2 border">itemName</th>
                            <th className="px-4 py-2 border">itemSeq</th>
                            <th className="px-4 py-2 border">efcyQesitm</th>
                            <th className="px-4 py-2 border">useMethodQesitm</th>
                            {/*<th className="px-4 py-2 border">atpnWarnQesitm</th>*/}
                            {/*<th className="px-4 py-2 border">atpnQesitm</th>*/}
                            {/*<th className="px-4 py-2 border">intrcQesitm</th>*/}
                            {/*<th className="px-4 py-2 border">seQesitm</th>*/}
                            {/*<th className="px-4 py-2 border">depositMethodQesitm</th>*/}
                            {/*<th className="px-4 py-2 border">openDe</th>*/}
                            {/*<th className="px-4 py-2 border">updateDe</th>*/}
                            <th className="px-4 py-2 border">itemImage</th>
                            {/*<th className="px-4 py-2 border">bizrno</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {drugInfo.map((drug, idx) =>
                            <tr key={idx}>
                                <td className="px-4 py-2 border">{drug.entpName}</td>
                                <td className="px-4 py-2 border">{drug.itemName}</td>
                                <td className="px-4 py-2 border">{drug.itemSeq}</td>
                                <td className="px-4 py-2 border">{drug.efcyQesitm}</td>
                                <td className="px-4 py-2 border">{drug.useMethodQesitm}</td>
                                {/*<td className="px-4 py-2 border">{drug.atpnWarnQesitm}</td>*/}
                                {/*<td className="px-4 py-2 border">{drug.atpnQesitm}</td>*/}
                                {/*<td className="px-4 py-2 border">{drug.intrcQesitm}</td>*/}
                                {/*<td className="px-4 py-2 border">{drug.seQesitm}</td>*/}
                                {/*<td className="px-4 py-2 border">{drug.depositMethodQesitm}</td>*/}
                                {/*<td className="px-4 py-2 border">{drug.openDe}</td>*/}
                                {/*<td className="px-4 py-2 border">{drug.updateDe}</td>*/}
                                <td className="px-4 py-2 border">
                                    <img src={drug.itemImage}
                                         alt="item"
                                         className="w-16 h-16 object-cover" />
                                </td>
                                {/*<td className="px-4 py-2 border">{drug.bizrno}</td>*/}
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>

                {/* 페이지네이션 */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    <button
                        className="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-40"
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                    >
                        이전
                    </button>

                    <span className="px-3 py-1">
                        {page} / {totalPage}
                    </span>

                    <button
                        className="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-40"
                        disabled={page === totalPage}
                        onClick={() => setPage(page + 1)}
                    >
                        다음
                    </button>
                </div>
            </div>
        </section>
    );
}
