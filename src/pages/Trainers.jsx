import Header from '../components/Header';
import HeaderImg5 from '../assets/header_bg_5.jpg';
import { trainers } from '../data';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import Trainer from '../components/Trainer';

const Trainers = () => {
  return (
    <>
      <Header
        title="Our Trainers"
        image={HeaderImg5}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id est neque error dolores iste fugiat iusto atque quia quisquam sed."
      />

      <section className="trainers">
        <div className="container trainers__container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <AiFillInstagram />, link: socials[0] },
                  { icon: <BsTwitter />, link: socials[1] },
                  { icon: <FaFacebookSquare />, link: socials[2] },
                  { icon: <BsLinkedin />, link: socials[3] }
                ]}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
