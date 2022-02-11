import Head from "next/head";
import Image from "next/image";
import Footer from "../../../components/Footer/Footer";
import Layout from "../../../components/Layout/Layout";
import Logo from "../../../public/images/Logo.png";
import Link from "next/link";
import { useState } from "react";

export default function Statistic() {
    const [active, setActive] = useState(2);

    const filters = [
        'Bài viết',
        'Thư viện',
        'Thống kê'
    ]
    

    return(
        <Layout>
            <Head>
                <title>DAK - Profile</title>
                <link rel="stylesheet" href="css/style.css"></link>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <section className="profile">
                <div className="profile__left">
                    <div className="profile__info">
                        <div className="profile__avatar">
                            <Image src={Logo} alt="Avatar"/>
                        </div>
                        <h2 className="profile__name">
                            Nguyễn Thiên Phúc
                            <i className="fas fa-check"></i>
                            <i className="fas fa-edit"></i>
                        </h2>
                        <p className="profile__des">Phúc ngu thứ 2 không ai thứ nhất<i className="fas fa-edit"></i></p>
                        <button className="profile__btn">Đăng xuất</button>
                    </div>
                    <div className="profile__statistic-list">
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">Vote</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">NFT</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">Bài viết</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">Đã theo dõi</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                        <div className="profile__statistic-item">
                            <p className="profile__statistic-title">Đang theo dõi</p>
                            <p className="profile__statistic-point">100</p>
                        </div>
                    </div>
                </div>
                <div className="profile__right">
                    <div className="profile__nav-list">
                        {filters.map((filter, index) => (
                            <div className={`${"profile__nav-item"} ${(active === index) ? 'active' : ''}`}  onClick={(e) => {setActive(index); e.preventDefault}} key={index}>
                                <Link href={index === 0 ? "/profile" : (index === 1 ? "/profile/library" : "/profile/statistic") }>
                                    <a>{filter}</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="profile__statistic-content">
                        <h2 className="profile__statistic-heading">Hoạt động trong 24 giờ</h2>
                        <div className="profile__statistic-action-list">
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                            <ActionItem/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Layout>
    )
}

export function ActionItem() {
    return (
        <div className="profile__statistic-action-item">
            <p className="profile__statistic-action-title">Tổng số điểm nhận được</p>
            <p className="profile__statistic-action-quantity">50</p>
            <p className="profile__statistic-action-point">+100 Điểm</p>
        </div>
    )
}