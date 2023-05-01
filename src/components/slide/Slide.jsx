import React from 'react';
import "./Slide.scss";
import { motion } from "framer-motion";
import {cards} from "../../card"
import { useState ,useRef,useEffect} from 'react';
import { ArrowLeft } from '@mui/icons-material';
import { ArrowRight } from "@mui/icons-material";
import Slider from "infinite-react-carousel";

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};
export default Slide;
