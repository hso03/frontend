import React from "react";

export default function Section() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking- leading-none md:text-5xl xl:text-6xl dark:text-white">
                        안녕하세요!
                        <div className="my-5">함께하고싶은 개발자</div>
                        <div className="my-5">"오성현" 입니다!</div>
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From
                        checkout to global sales tax compliance, companies around the world use Flowbite to simplify
                        their payment stack.</p>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="/images/osh.JPG" alt="오성현d~"/>
                </div>
            </div>
        </section>
    );
}