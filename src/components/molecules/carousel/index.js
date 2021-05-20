import classNames from 'classnames';
import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Image } from '../../atoms';
import './Carousel.scss';
import carouselMetadata from './metadata.json';

const Carousel = ({ bannersInfo }) => {
  const [currentSlide, setCurrentSlide] = useState(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      setCurrentSlide(bannersInfo[0].order);
    }
    return () => {
      isCancelled = true;
    };
  }, [bannersInfo]);

  const handleSlide = (currentSlideOrder) => {
    setCurrentSlide(currentSlideOrder);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 15) {
      // do your stuff here for left swipe
      handleSlide(currentSlide === bannersInfo.length ? 1 : currentSlide + 1);
    }

    if (touchStart - touchEnd < -15) {
      // do your stuff here for right swipe
      handleSlide(currentSlide === 1 ? bannersInfo.length : currentSlide - 1);
    }
  };
  return (
    <section className="carousel">
      <div className="carousel__track__container">
        {bannersInfo.map((banner) => (
          <div
            onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
            onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
            onTouchEnd={() => handleTouchEnd()}
            key={banner.id}
            className={classNames('carousel__slide', {
              'carousel__slide--active': currentSlide === banner.order,
            })}
          >
            {currentSlide === banner.order && (
              <Image
                className="carousel__image"
                src={banner.bannerImageUrl}
                alt={banner.bannerImageAlt}
              />
            )}
          </div>
        ))}
      </div>
      <Button
        className="carousel__button carousel__button--left"
        onClick={() => {
          handleSlide(
            currentSlide === 1 ? bannersInfo.length : currentSlide - 1,
          );
        }}
        aria-label="previous banner"
      >
        <FormattedMessage id={carouselMetadata?.buttons?.previous?.id} />
      </Button>
      <Button
        className="carousel__button carousel__button--right"
        onClick={() => {
          handleSlide(
            currentSlide === bannersInfo.length ? 1 : currentSlide + 1,
          );
        }}
        aria-label="next banner"
      >
        <FormattedMessage id={carouselMetadata?.buttons?.next?.id} />
      </Button>
      <div className="carousel__nav">
        {bannersInfo.map((banner) => (
          <Button
            key={banner.id}
            className={classNames('carousel__indicator', {
              'carousel__indicator--current-slide':
                currentSlide === banner.order,
            })}
            onClick={() => handleSlide(banner.order)}
            aria-label={`carousel banner ${banner.bannerImageAlt}`}
          />
        ))}
      </div>
    </section>
  );
};

Carousel.propTypes = {
  bannersInfo: PropTypes.array,
};
Carousel.defaultProps = {
  bannersInfo: [],
};

export default Carousel;
