import React from "react";

export default function Section() {
    return (
        <section className="bg-white dark:bg-gray-900">
            {/* 사진 및 내 소개 */}
            <div
                className="flex flex-col max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid lg:py-16 lg:grid-cols-12">
                <div className="lg:mt-0 lg:col-span-5 lg:flex">
                    <img className="mx-auto" src="/images/osh.JPG" alt="오성현d~"/>
                </div>
                <div className="place-self-center lg:col-span-7">
                    <h1 className="text-center lg:text-left mx-auto max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
                        <div className="my-5">안녕하세요!</div>
                        <div className="my-5">함께하고싶은 개발자</div>
                        <div className="my-5">"오성현" 입니다!</div>
                    </h1>
                    <p className="text-center lg:text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From
                        checkout to global sales tax compliance, companies around the world use Flowbite to simplify
                        their payment stack.
                    </p>
                </div>
            </div>

            {/* Education */}
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Experience
                    </h2>
                </div>

                <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                    <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p className="w-52 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                2014.03 ~ 2020.02
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <p>인제대학교 정보통신공학과</p>
                            </h3>
                        </div>

                        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p className="w-52 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                2020.07 ~ 2022.07
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <p>성동약품 - 병원 의약품(전문,일반, 의료기기) 영업 및 사무 업무</p>
                            </h3>
                        </div>

                        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p className="w-52 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                2022.09 ~ 2022.08
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <p>태성사 - 인테리어 가구 생산 및 가공</p>
                            </h3>
                        </div>

                        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p className="w-52 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                2024.09 ~ 2025.06
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <p>[NHN아카데미] 인공지능 기반 IoT 웹서비스 개발자 양성과정</p>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Certifications */}
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                        Certifications
                    </h2>
                </div>

                <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                    <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                2025.06
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <p>SQL개발자 (SQLD 자격)</p>
                            </h3>
                            <p className="ml-auto font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                한국데이터베이스진흥센터
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                2025.06
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <p>정보처리기사 필기 합격</p>
                            </h3>
                            <p className="ml-auto font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                한국산업인력공단
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                            <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                2013.12
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                <p>자동차 운전면허 1종 보통</p>
                            </h3>
                            <p className="ml-auto font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                경찰청
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            {/* My Skills! */}
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-6 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        My Skills
                    </h2>
                </div>

                {/* FrontEnd */}
                <h2 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">FrontEnd</h2>
                <div
                    className="grid grid-cols-2 gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 border-2 p-2">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-2 w-36 h-36"
                             src="/images/javascript.png" alt="javascript"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>JavaScript</p>
                        </h3>
                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-2 w-50 h-36"
                             src="/images/html_css.png" alt="html/css"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>HTML/CSS</p>
                        </h3>
                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-2 w-50 h-36"
                             src="/images/reactjs.png" alt="React"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>React</p>
                        </h3>
                    </div>
                </div>

                {/* BackEnd */}
                <h2 className="pt-10 mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">BackEnd</h2>
                <div
                    className="grid grid-cols-2 gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-2 p-2">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-2 w-36 h-36"
                             src="/images/spring_boot.png" alt="Spring Boot"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>SpringBoot</p>
                        </h3>
                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-2 w-50 h-36"
                             src="/images/spring_cloud.png" alt="Spring Cloud"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>Spring Cloud</p>
                        </h3>
                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-2 w-50 h-36"
                             src="/images/rest_api.png" alt="REST API"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>REST API</p>
                        </h3>
                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-2 w-50 h-36"
                             src="/images/Mysql.png" alt="MySQL"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>MySQL</p>
                        </h3>
                    </div>
                </div>

                {/* Version Control */}
                <h2 className="pt-10 mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Version Control</h2>
                <div
                    className="grid grid-cols-2 gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 border-2 p-2">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-2 w-36 h-36"
                             src="/images/git.png" alt="Git"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>Git</p>
                        </h3>
                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <img className="mx-auto mb-2 w-50 h-36"
                             src="/images/github.png" alt="GitHub"/>
                        <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>GitHub</p>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
}