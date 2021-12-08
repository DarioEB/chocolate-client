import React ,{useContext} from 'react';
import roomContext from '../../context/room/roomContext';
import { RoomContainer, TitleContent } from '../layout/UI';
import ch from '../../images/ch.png';
// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
// Link
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// Import swiper core and required modules
import SwiperCore, {
    Autoplay,
    EffectFade,
    Pagination,
    Navigation
} from 'swiper/core';

// Install swiper modules
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);
const SlideOthersRooms = () => {

    const RoomContext = useContext(roomContext);
    const {rooms, room } = RoomContext;


    console.log(rooms);

    return (
        <section className="section">
            <div className="container">
                <TitleContent>
                    <h2>Habitaciones que te podrían gustar</h2>
                </TitleContent>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        "delay": 3800,
                        "disableOnInteracion": false
                    }}
                    breakpoints={{
                        "768": {
                            "slidesPerView": 4,
                            "spaceBetween": 20
                        }
                    }}
                >
                    {rooms.map( r => (
                        r.category._id === room.category._id ?
                        (<SwiperSlide
                            // className="swiper"
                                key={r._id}
                            >
                                <div className="content-room">
                                    <RoomContainer
                                        className="room-swip"
                                    >
                                        <Link
                                            to={`/sucursales/${r.branch.route}/${r.route}`}
                                        >
                                            <div className="room-image">
                                                <img
                                                    className="_image filter"
                                                    src={`${process.env.REACT_APP_BACKEND_URL}/api/rooms/get-image/image/${r.images[0]}`}
                                                    alt={`Imagen ${r.name}`}
                                                />
                                                <div className="category">
                                                    <p>{r.category.name}</p>
                                                </div>
                                                <div className="ch">
                                                    <img
                                                        src={ch}
                                                        alt={`Logo`}
                                                    />
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="room-description">
                                            <div className="room-name">
                                                <p className="_name">
                                                    {r.name}
                                                </p>
                                            </div>
                                        </div>
                                    </RoomContainer>
                                </div>
                            </SwiperSlide> )
                        : null
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default SlideOthersRooms;