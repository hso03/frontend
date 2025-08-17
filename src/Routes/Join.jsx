import React, {useState} from "react";
import axios from "axios";

export default function Join() {

    // 회원가입 정보
    const [form, setForm] = useState({
        email: "",
        password: "",
        username: "",
        phoneNumber: "",
    });

    // 회원가입 정보 입력
    const handleInputChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        })
    };

    // 비밀번호 확인용 state
    const [confirmPassword, setConfirmPassword] = useState("");

    // 비밀번호 확인 입력
    const handleConfirmPasswordChange = event => {
        setConfirmPassword(event.target.value);
    };

    // 회원가입 로직
    const handleSubmit = async event => {

        event.preventDefault() //  폼 제출시 새로고침 방지

        if(form.password !== confirmPassword){
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try{

            const response = await axios.post("http://api.tennismeet.live/api/v1/join", form);

            console.log(response);

            alert("회원가입 성공");

        } catch(error) {
            console.error(error);
            alert("알 수 없는 이유로 회원가입에 실패 하였습니다. 다시 시도해보세요");
        }
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    회원가입
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            정보 입력해주세요
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={ handleSubmit } action="/login">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    이메일
                                </label>
                                <input type="email" name="email" id="email" value={form.email} onChange={handleInputChange}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">비밀번호</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" value={form.password} onChange={handleInputChange}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""/>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    비밀번호 확인
                                    </label>
                                <input type="password" name="confirmPassword" id="confirmPassword"  value={confirmPassword} onChange={handleConfirmPasswordChange}
                                       placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""/>
                            </div>
                            <div>
                                <label htmlFor="username"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    이름
                                </label>
                                <input type="text" name="username" id="username" value={form.username} onChange={handleInputChange}
                                       placeholder="홍길동"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""/>
                            </div>
                            <div>
                                <label htmlFor="phoneNumber"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    연락처
                                </label>
                                <input type="text" name="phoneNumber" id="phoneNumber" value={form.phoneNumber} onChange={handleInputChange}
                                       placeholder="010-1234-5678"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""/>
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                회원가입하기
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                이미 아이디가 있으신가요?
                                <a href="/" className="ml-1 font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    로그인 페이지로 가기
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}