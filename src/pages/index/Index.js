/**
    * @description      : 
    * @author           : Olaolumide
    * @group            : 
    * @created          : 01/03/2023 - 20:53:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 01/03/2023
    * - Author          : Olaolumide
    * - Modification    : 
**/
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Nav from '../../components/nav/Nav';
import LeftImage from '../../images/left-image.png';
import { useHook } from '../../providers/Hook';
import style from "./index.module.css";

const Index = () => {

    const api = useHook();
    const [courses, setCourses] = useState([]);
    const [categories, setCategories] = useState([])

    const getCourses = () => {
        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${api.api}/featured-course-list/`,
            headers: {
                'Authorization': 'Token f3b715a18390d3097123869f63b14f1cdd8e4df0'
            }
        };
        axios(config)
            .then(function (response) {
                if (JSON.stringify(response.data.status === "200")) {
                    setCourses(response.data)
                    console.log(response.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const getCategories = () => {
        var config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${api.api}/category/`,
            headers: {
                'Authorization': 'Token f3b715a18390d3097123869f63b14f1cdd8e4df0'
            }
        };
        axios(config)
            .then(function (response) {
                if (JSON.stringify(response.data.status === "200")) {
                    setCategories(response.data)
                    console.log(response.data)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        return () => {
            getCourses();
            getCategories();
        };
    }, [])

    return (
        <>
            <Nav />

            {/* First section starts */}
            <div className={`${style.btmBorder} row hidOver`}>
                <div className='col-md-6 hidOver'>
                    <img src={LeftImage} alt="Left icon" />
                </div>
                <div className={`col-md-6 hidOver`}>
                    <div className={`${style.rightBox} p-2`}>
                        <h2 className={`${style.rightHeader}`}>
                            Accelerate your quest, learn anywhere, anytime
                        </h2>
                        <p className={`${style.rightText}`}>
                            Acquire new knowledge and skills, train for certification diplomas and degrees from world-class instituitions at your own pace and space.
                        </p>
                        <div className='d-flex'>
                            <button className='eBtn'>
                                Log In
                            </button>
                            <button className='eBtn bg-elearn'>
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* First section ends */}

            {/* Featured Courses starts */}
            <section className='mt-3'>
                <div className='container'>
                    <div className={`${style.noBorder} card`}>
                        <div className={`${style.noBorder} card-header d-flex justify-content-between`}>
                            <h6 className={`${style.header}`}>
                                Featured Courses
                            </h6>
                            <button className='eBtn bg-elearn'>
                                See all courses
                                <i className="fa fa-angle-right ml-30" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className='row'>
                            {(courses.length === 0) ? (null) : (
                                <>
                                    {courses.map((course) => (
                                        <>
                                            <div key={course.id} className='col-md-3'>
                                                <div className={`${style.card} card text-left`}>
                                                    <img className="card-img-top" src={course.card_image} alt="" height={150} />
                                                    <div className="card-body" style={{ height: '110px' }}>
                                                        <h4 className={`${style.cardTitle} card-title`}>
                                                            {course.code}
                                                        </h4>
                                                        <h4 className={`${style.cardTitle} card-title`}>
                                                            {course.name}
                                                        </h4>
                                                    </div>
                                                    <div className={` ${style.cFtr} card-footer d-flex`}>
                                                        <button className={`${style.fBtn}  ${style.grey1R} ${style.fOne} `}>
                                                            See Details
                                                        </button>
                                                        <button className={`${style.fBtn}  ${style.grey1R} ${style.fTwo}`}>
                                                            Wishlist
                                                        </button>
                                                        <button className={`${style.fBtn}  ${style.fThree}`}>
                                                            Buy
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Course ends */}

            {/* Categories starts */}
            <section className='mt-3'>
                <div className='container'>
                    <div className={`${style.noBorder} card`}>
                        <div className={`${style.noBorder} card-header d-flex`}>
                            <h6 className={`${style.header}`}>
                                Categories
                            </h6>
                        </div>
                        {(categories.length === 0) ? (null) : (
                            <>
                                <div className='container d-flex alignCenter'>
                                    <button className='go-left'>
                                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                                    </button>
                                    <Swiper
                                        modules={[Navigation, A11y, Autoplay]}
                                        spaceBetween={10}
                                        slidesPerView={0}
                                        slidesPerGroupAuto={true}
                                        // navigation={true}
                                        loop={true}
                                        parallax={true}
                                        autoplay={{
                                            delay: 5000,
                                            pauseOnMouseEnter: true,
                                            disableOnInteraction: false
                                        }}
                                        navigation={{
                                            prevEl: ".go-left",
                                            nextEl: ".go-right",
                                        }}
                                        breakpoints={{
                                            // when window width is >= 320px
                                            320: {
                                                slidesPerView: 1,
                                                slidesPerGroup: 1,
                                            },
                                            640: {
                                                slidesPerView: 2,
                                                initialSlide: 2,
                                                slidesPerGroup: 2,
                                            },
                                            768: {
                                                slidesPerView: 2,
                                                initialSlide: 2,
                                                slidesPerGroup: 2,
                                            },
                                            1024: {
                                                slidesPerView: 3,
                                                initialSlide: 3,
                                                slidesPerGroup: 3,
                                            },
                                        }}
                                        style={{ width: '90%', margin: '10px' }}
                                    >
                                        <div className="swiper-slide bg-dark" style={{ height: '300px'}}>
                                            {categories.map((category) => (
                                                <SwiperSlide key={category.id}  style={{ height: '300px'}}>
                                                    <div className="swiper-inner" style={{ height: '300px'}}>
                                                        <div className="card text-left cat">
                                                            <div className="card-body" style={{ padding: '20px'}}>
                                                                <h4 className="catTitle">
                                                                    {category.category}
                                                                </h4>
                                                                <p className="catText">
                                                                    {category.subcategory.map((sub) => (
                                                                        <>
                                                                            { sub.split(", ")[1] }, &nbsp;
                                                                        </>
                                                                    ))}
                                                                </p>
                                                            </div>
                                                            <div className='card-footer catFoot'>
                                                                <button className='eBtnT'>
                                                                    Category
                                                                </button>
                                                                <button className='eBtnT'>
                                                                    Details
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </div>
                                    </Swiper>
                                    <button className='go-right'>
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </button>

                                </div>
                            </>
                        )}
                        <div className={`${style.noBorder} card-header d-flex justify-content-end`}>
                            <button className='eBtn bg-elearn'>
                                See all courses
                                <i className="fa fa-angle-right ml-30" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Categories ends */}

            <div className='bottomMargin'></div>
        </>
    )
}

export default Index
