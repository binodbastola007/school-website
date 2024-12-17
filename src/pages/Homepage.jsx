import React, { useEffect, useState } from "react";
import ReadmoreButton from "../Components/ReadmoreButton";
import CarouselHome from "../Components/CarousalHome";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const Homepage = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        // async function getData() {
        //     try {
        //         const response = await fetch("http://localhost:5000/api/teachers");
        //         const json = await response.json();
        //         setTeachers(json);
        //     } catch (error) {
        //         console.error(error.message);
        //     }
        // }
        // getData();
        setTeachers([{ image: '/profile.png', name: 'Kishor parajuli' },
            { image: '/profile.png', name: 'Shiva bastakoti' },
            { image: '/profile.png', name: 'Rajan chaudhary' },
            { image: '/profile.png', name: 'Sandesh dhungana' },
            { image: '/profile.png', name: 'Barsha rijal' },
            { image: '/profile.png', name: 'Kalyan shivakoti' },
            { image: '/profile.png', name: 'Bhuwan sanjyal' },

        ])
    }, []);

    return (
        <div className="homepage-container">
            {/* Hero Section */}
            <section>
                <CarouselHome />
            </section>

            {/* School Analytics */}
            <section className="school-analytics">
                <div className="analytics-card">
                    <CountUp start={0} end={23} duration={3} />
                    <span> Professional Teachers</span>
                </div>
                <div className="analytics-card">Updated Courses</div>
                <div className="analytics-card">
                    <CountUp start={0} end={500} duration={3} />
                    <span> Registered Students</span>
                </div>
            </section>



            {/* Latest Posts */}
            <section className="posts-container">
                <div className="posts">
                    <h2 className="section-title">Latest Posts</h2>
                    {[1, 2, 3, 4].map((post) => (
                        <div key={post} className="post">
                            <img src={`/post${post}.jpg`} alt={`Post ${post}`} className="post-img" />
                            <p className="post-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <ReadmoreButton />
                        </div>
                    ))}
                </div>

                {/* Side Information */}
                <aside className="posts-sidediv">
                    <div className="why-us">
                        <h2>Why Us?</h2>
                        <p>
                            We provide world-class education with professional teachers, advanced courses, and excellent facilities for all-round development.
                        </p>
                    </div>
                    <div className="intro-div">
                        <h2>Introduction</h2>
                        <p>
                            Welcome to Shangrila International School. Our mission is to nurture future leaders with knowledge, integrity, and creativity.
                        </p>
                    </div>

                    {/* Principal's Message */}
                    <div className="principal-message">
                        <div className="message-header">
                            <img src="/profile.png" alt="Principal" className="message-image" />
                            <h2>Message from the Principal</h2>
                        </div>
                        <p>
                            As the Principal of Shangrila International School, it is my privilege to lead an institution committed to excellence in education. We foster an environment where every student is valued, challenged, and inspired to reach their fullest potential.
                        </p>
                    </div>

                    {/* Vice Principal's Message */}
                    <div className="vice-principal-message">
                        <div className="message-header">
                            <img src="/profile.png" className="message-image" />
                            <h2>Message from the Vice Principal</h2>
                        </div>
                        <p>
                            At Shangrila, we believe in holistic development. As Vice Principal, I am dedicated to nurturing an environment where students not only excel academically but also grow as responsible individuals prepared for a dynamic world.
                        </p>
                    </div>
                </aside>
            </section>

            {/* Vision and Mission
            <section className="vision-mission-section">
                <div className="vision">
                    <h2>Our Vision</h2>
                    <img src="/vision.jpg" alt="Vision" className="animated-image" />
                    <p>
                        Our vision is to create a learning environment where students excel academically and develop essential life skills.
                    </p>
                </div>
                <div className="mission">
                    <h2>Our Mission</h2>
                    <img src="/mission.jpg" alt="Mission" className="animated-image" />
                    <p>
                        Our mission is to provide quality education and inspire students to become responsible citizens and leaders.
                    </p>
                </div>
            </section> */}


            {/* Teacher Testimonials */}
            <section className="testimonial-section">
                <h2 className="section-title">What Our Teachers Say</h2>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    effect="fade"

                >
                    {teachers.map((teacher, index) => (
                        <SwiperSlide key={index} className="testimonial-card">
                            <div className="testimonial-content">
                                <img
                                    src={teacher.image || "/default-avatar.jpg"}
                                    alt={teacher.name}
                                    className="testimonial-image"
                                />
                                <h3>{teacher.name}</h3>
                                <p className="testimonial-text">{teacher.testimonial}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};

export default Homepage;
